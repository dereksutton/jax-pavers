// Utility to get correct image paths for both development and GitHub Pages deployment
const getImagePath = (imagePath) => {
  // Ensure the path starts with a slash
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

  // In production (GitHub Pages), add the base path
  if (import.meta.env.PROD) {
    return `/jax-pavers${normalizedPath}`;
  }

  // In development, return the normalized path directly
  return normalizedPath;
};

export default getImagePath;