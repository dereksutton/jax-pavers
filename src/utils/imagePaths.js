// Utility to get correct image paths for GitHub Pages deployment
const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In production (GitHub Pages), add the base path
  if (import.meta.env.PROD) {
    return `/jax-pavers/${cleanPath}`;
  }
  
  // In development, use the path as-is (with leading slash)
  return `/${cleanPath}`;
};

export default getImagePath;