import express from 'express';

const router = express.Router();

// Cache for storing reviews (simple in-memory cache)
let reviewsCache = {
  data: null,
  timestamp: null,
  ttl: 60 * 60 * 1000, // 1 hour cache TTL
};

/**
 * Fetch reviews from Google Places API (New)
 * @returns {Promise<Object>} Reviews data
 */
async function fetchGooglePlacesReviews() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    throw new Error('Google Places API configuration missing');
  }

  // Using Places API (New) - the modern version
  // https://developers.google.com/maps/documentation/places/web-service/place-details
  const url = `https://places.googleapis.com/v1/places/${placeId}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      // Request specific fields to minimize costs and get what we need
      'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Google Places API error:', errorData);
    throw new Error(`Google Places API error: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

/**
 * GET /api/reviews
 * Fetch Google reviews for the business
 */
router.get('/', async (req, res) => {
  try {
    // Check cache first
    const now = Date.now();
    if (
      reviewsCache.data &&
      reviewsCache.timestamp &&
      now - reviewsCache.timestamp < reviewsCache.ttl
    ) {
      return res.json({
        success: true,
        cached: true,
        ...reviewsCache.data,
      });
    }

    // Fetch fresh data from Google
    const placesData = await fetchGooglePlacesReviews();

    // Transform the response
    const responseData = {
      businessName: placesData.displayName?.text || 'Jax Outdoor Spaces',
      rating: placesData.rating || 5,
      totalReviews: placesData.userRatingCount || 0,
      reviews: (placesData.reviews || []).map((review, index) => ({
        id: `google-${index}`,
        authorName: review.authorAttribution?.displayName || 'Anonymous',
        authorPhotoUrl: review.authorAttribution?.photoUri || null,
        rating: review.rating || 5,
        text: review.text?.text || review.originalText?.text || '',
        relativeTime: review.relativePublishTimeDescription || '',
        publishTime: review.publishTime || null,
        // Google profile link if available
        authorUri: review.authorAttribution?.uri || null,
      })),
    };

    // Update cache
    reviewsCache = {
      data: responseData,
      timestamp: now,
      ttl: reviewsCache.ttl,
    };

    res.json({
      success: true,
      cached: false,
      ...responseData,
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);

    // If we have cached data, return it even if expired (graceful degradation)
    if (reviewsCache.data) {
      return res.json({
        success: true,
        cached: true,
        stale: true,
        ...reviewsCache.data,
      });
    }

    res.status(500).json({
      success: false,
      message: 'Unable to fetch reviews at this time',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

/**
 * GET /api/reviews/refresh
 * Force refresh the reviews cache (for admin use)
 */
router.get('/refresh', async (req, res) => {
  try {
    // Clear cache
    reviewsCache = {
      data: null,
      timestamp: null,
      ttl: reviewsCache.ttl,
    };

    // Fetch fresh data
    const placesData = await fetchGooglePlacesReviews();

    const responseData = {
      businessName: placesData.displayName?.text || 'Jax Outdoor Spaces',
      rating: placesData.rating || 5,
      totalReviews: placesData.userRatingCount || 0,
      reviews: (placesData.reviews || []).map((review, index) => ({
        id: `google-${index}`,
        authorName: review.authorAttribution?.displayName || 'Anonymous',
        authorPhotoUrl: review.authorAttribution?.photoUri || null,
        rating: review.rating || 5,
        text: review.text?.text || review.originalText?.text || '',
        relativeTime: review.relativePublishTimeDescription || '',
        publishTime: review.publishTime || null,
        authorUri: review.authorAttribution?.uri || null,
      })),
    };

    // Update cache
    reviewsCache = {
      data: responseData,
      timestamp: Date.now(),
      ttl: reviewsCache.ttl,
    };

    res.json({
      success: true,
      message: 'Reviews cache refreshed successfully',
      ...responseData,
    });
  } catch (error) {
    console.error('Error refreshing reviews:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to refresh reviews',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

export default router;
