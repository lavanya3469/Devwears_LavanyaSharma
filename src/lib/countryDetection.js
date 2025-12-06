/**
 * Country detection utility
 * Uses free IP geolocation APIs to detect user's country
 */

// Function to detect if user is using a VPN (simplified approach)
const isLikelyVPN = async () => {
  try {
    // Check for TOR exit nodes or common VPN providers
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    // Simple VPN detection based on hosting providers often used by VPNs
    // This is a simplified approach - production would need more robust detection
    const vpnHosts = ['amazon', 'digital ocean', 'linode', 'ovh', 'cloudflare'];
    if (data.org && vpnHosts.some(host => data.org.toLowerCase().includes(host))) {
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error detecting VPN:', error);
    return false; // Default to false on errors
  }
};

// Function to get user's country code
export const getUserCountry = async () => {
  try {
    // First check if the user is likely on a VPN
    const vpnDetected = await isLikelyVPN();
    if (vpnDetected) {
      return null; // Return null for VPN users
    }
    
    // Using ipapi.co for IP geolocation (free tier with rate limits)
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    if (data.error) {
      console.error('IP API error:', data.reason);
      return null;
    }
    
    // Return the country code in lowercase
    return data.country_code?.toLowerCase() || null;
  } catch (error) {
    console.error('Error fetching country information:', error);
    return null;
  }
}; 