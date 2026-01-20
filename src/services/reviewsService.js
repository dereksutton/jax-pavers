// Google Reviews Service
// Fetches reviews from our backend proxy (which calls Google Places API)

import API_BASE_URL from '../config/api';

/**
 * Fetch Google reviews from the backend proxy
 * @returns {Promise<{reviews: Array, rating: number, totalReviews: number}>}
 */
export async function fetchGoogleReviews() {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews`);

    if (!response.ok) {
      throw new Error(`Failed to fetch reviews: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    throw error;
  }
}

/**
 * Transform Google Places API review data to our component format
 * @param {Object} googleReview - Raw review from Google Places API
 * @param {number} index - Index for generating unique ID
 * @returns {Object} - Transformed review object
 */
export function transformGoogleReview(googleReview, index) {
  // Google Places API (New) returns reviews in this format:
  // {
  //   name: "places/PLACE_ID/reviews/REVIEW_ID",
  //   relativePublishTimeDescription: "2 months ago",
  //   rating: 5,
  //   text: { text: "Review text...", languageCode: "en" },
  //   originalText: { text: "...", languageCode: "en" },
  //   authorAttribution: {
  //     displayName: "John D.",
  //     uri: "https://...",
  //     photoUri: "https://..."
  //   },
  //   publishTime: "2024-01-15T..."
  // }

  const authorName = googleReview.authorAttribution?.displayName || 'Anonymous';
  const reviewText = googleReview.text?.text || googleReview.originalText?.text || '';

  return {
    id: `google-${index}`,
    name: authorName,
    location: 'Google Review',
    rating: googleReview.rating || 5,
    // Use first ~50 chars as headline, rest as body
    headline: extractHeadline(reviewText),
    body: reviewText,
    avatar: googleReview.authorAttribution?.photoUri || null,
    media: null, // Google reviews don't include project photos
    date: googleReview.publishTime || null,
    relativeTime: googleReview.relativePublishTimeDescription || null,
    isGoogleReview: true,
  };
}

/**
 * Extract a headline from review text
 * @param {string} text - Full review text
 * @returns {string} - Short headline
 */
function extractHeadline(text) {
  if (!text) return 'Great experience!';

  // If text is short, use it all as headline
  if (text.length <= 60) return text;

  // Try to find a natural break point (period, exclamation, question mark)
  const firstSentenceMatch = text.match(/^[^.!?]+[.!?]/);
  if (firstSentenceMatch && firstSentenceMatch[0].length <= 80) {
    return firstSentenceMatch[0].trim();
  }

  // Otherwise truncate at word boundary
  const truncated = text.substring(0, 57);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 30 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

/**
 * Get color gradient for avatar based on index
 * @param {number} index - Review index
 * @returns {string} - Tailwind gradient classes
 */
export function getAvatarGradient(index) {
  const gradients = [
    'from-[#0A86C4] to-sky-400',
    'from-emerald-400 to-teal-500',
    'from-purple-400 to-pink-500',
    'from-orange-400 to-red-500',
    'from-blue-400 to-indigo-500',
    'from-amber-400 to-yellow-500',
  ];
  return gradients[index % gradients.length];
}

export default {
  fetchGoogleReviews,
  transformGoogleReview,
  getAvatarGradient,
};
