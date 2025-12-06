import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CallButton from './components/CallButton';
import Index from './pages/Index';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import { getUserCountry } from './lib/countryDetection';

// CountryRedirector component to handle country detection within the router context
const CountryRedirector = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Detect country and update URL when component mounts
  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Skip detection if URL already has a country code
        const pathParts = location.pathname.split('/');
        const hasCountryCode = pathParts[1]?.length === 2 && !['products', 'about', 'contact', 'terms', 'privacy', 'refund'].includes(pathParts[1]);
        
        if (!hasCountryCode) {
          const countryCode = await getUserCountry();
          
          if (countryCode) {
            // If country detected and not using VPN, update URL with country code
            const currentPath = location.pathname;
            const newPath = currentPath === '/' ? `/${countryCode}` : `/${countryCode}${currentPath}`;
            navigate(newPath, { replace: true });
          }
        }
      } catch (error) {
        console.error('Error in country detection:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    detectCountry();
  }, [location, navigate]);
  
  if (isLoading) {
    return <div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>;
  }
  
  return null;
};

// Routes component
const AppRoutes = () => {
  const location = useLocation();
  
  // Extract country code from URL path if present
  const pathParts = location.pathname.split('/');
  const possibleCountryCode = pathParts[1]?.length === 2 && !['products', 'about', 'contact', 'terms', 'privacy', 'refund'].includes(pathParts[1]) 
    ? pathParts[1] 
    : null;
  
  // Handle redirects from 404s
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== location.pathname) {
      window.history.replaceState(null, '', redirectPath);
      sessionStorage.removeItem('redirectPath');
    }
  }, [location]);
  
  return (
    <Routes location={location} key={location.pathname}>
      {/* Routes with country code prefix */}
      {possibleCountryCode && (
        <>
          <Route path={`/${possibleCountryCode}`} element={<Index />} />
          <Route path={`/${possibleCountryCode}/products`} element={<Products />} />
          <Route path={`/${possibleCountryCode}/about`} element={<About />} />
          <Route path={`/${possibleCountryCode}/contact`} element={<Contact />} />
          <Route path={`/${possibleCountryCode}/terms`} element={<Terms />} />
          <Route path={`/${possibleCountryCode}/privacy`} element={<Privacy />} />
          <Route path={`/${possibleCountryCode}/refund`} element={<Refund />} />
        </>
      )}
      
      {/* Standard routes without country code prefix */}
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/refund" element={<Refund />} />
      
      {/* Catch-all route for 404s */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <CountryRedirector />
      <div className="min-h-screen bg-white">
        <Navbar />
        <AppRoutes />
        <Footer />
        <CallButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
