// Utility to get correct image paths for deployment
const getImagePath = (imagePath) => {
  // Ensure the path starts with a slash
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

  // Return the path directly - works for both development and Render deployment
  // No prefix needed since we're deploying at root domain on Render
  return normalizedPath;
};

export default getImagePath;