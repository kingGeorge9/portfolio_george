export const getImageUrl = (imagePath) => {
  // Handle both asset imports and public images
  if (imagePath.startsWith('./assets/')) {
    // For imported assets from the assets directory
    try {
      const path = imagePath.replace('./assets/', '');
      return new URL(`../assets/${path}`, import.meta.url).href;
    } catch (error) {
      console.error('Error loading asset:', error);
      return '';
    }
  } else {
    // For public images
    const path = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `${import.meta.env.BASE_URL}${path}`;
  }
};
