import reviews from "../data/reviews.json";

export function getAllReviews() {
  return reviews;
}

export function getFeaturedReviews() {
  return reviews.filter((review) => review.featured);
}
