import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Extract the path without country code for comparison
  const getPathWithoutCountry = (path) => {
    const parts = path.split('/');
    if (parts[1]?.length === 2 && !['products', 'about', 'contact', 'terms', 'privacy', 'refund'].includes(parts[1])) {
      return '/' + parts.slice(2).join('/');
    }
    return path;
  };

  useEffect(() => {
    // Track the real path (without country code) to avoid unnecessary scrolling when only country changes
    const realPath = getPathWithoutCountry(pathname);
    
    // Store this for comparison on next navigation
    const prevRealPath = sessionStorage.getItem('prevRealPath');
    sessionStorage.setItem('prevRealPath', realPath);
    
    // Only scroll if the actual content path changed (not just the country code)
    if (prevRealPath !== realPath) {
      // Scroll to top with a slight delay to ensure all elements are properly rendered
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'instant' // Use 'instant' instead of 'smooth' for immediate scrolling
        });
        
        // Force a second scroll after a small delay to handle any delayed rendering
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'instant'
          });
        }, 50);
      }, 0);
      
      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop; 