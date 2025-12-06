// Global event listener to force scroll to top when links are clicked
// This provides an additional layer of reliability for scroll-to-top behavior

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
  // Find all internal links (links to the same domain)
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener('click', () => {
      // Set a timeout to scroll to top after the navigation occurs
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'instant'
        });
      }, 0);
    });
  });
});

export default {}; 