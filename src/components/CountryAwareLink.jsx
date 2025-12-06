import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * CountryAwareLink Component
 * 
 * This component wraps the React Router Link to maintain country code in navigation
 * It automatically adds the country code to the destination path if present in the current URL
 */
const CountryAwareLink = ({ to, children, ...props }) => {
  const location = useLocation();
  
  // Extract country code from current path if present
  const pathParts = location.pathname.split('/');
  const possibleCountryCode = pathParts[1]?.length === 2 && 
    !['products', 'about', 'contact', 'terms', 'privacy', 'refund'].includes(pathParts[1])
    ? pathParts[1] 
    : null;
  
  // If we have a country code in the URL, prepend it to the destination
  const countryAwarePath = possibleCountryCode 
    ? to === '/' 
      ? `/${possibleCountryCode}` 
      : `/${possibleCountryCode}${to}`
    : to;
    
  return (
    <Link to={countryAwarePath} {...props}>
      {children}
    </Link>
  );
};

export default CountryAwareLink; 