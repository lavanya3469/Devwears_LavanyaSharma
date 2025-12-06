import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const TrendingSection = () => {
  const trendingItems = [
    {
      id: 1,
      name: "Git Merge Conflict Hoodie",
      category: "Hoodies",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Trending",
      rating: 4.9
    },
    {
      id: 2,
      name: "HTTP Status Code T-Shirt",
      category: "T-Shirts",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Best Seller",
      rating: 4.8
    },
    {
      id: 3,
      name: "Code Review Bomber Jacket",
      category: "Jackets",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Limited Edition",
      rating: 4.7
    },
    {
      id: 4,
      name: "Syntax Error Sweatshirt",
      category: "Sweatshirts",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "New Arrival",
      rating: 4.6
    }
  ];

  // Fix for category links
  const navigateToCategory = (category) => {
    // We'll pass the category in the URL state to be read by the Products component
    localStorage.setItem('selectedCategory', category);
    window.scrollTo({top: 0, behavior: 'instant'});
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Developer Favorites</h2>
            <p className="text-gray-600 text-lg">Top picks from programmers worldwide</p>
          </div>
          <Link 
            to="/products" 
            onClick={() => window.scrollTo({top: 0, behavior: 'instant'})}
            className="mt-4 md:mt-0 flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All Collections
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                {item.badge && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-800 flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-1">{item.rating}</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-blue-600 font-bold">${item.price.toFixed(2)}</p>
                  <Link to="/products" onClick={() => window.scrollTo({top: 0, behavior: 'instant'})}>
                    <button 
                      className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-800 p-2 rounded-full transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* T-Shirts Category */}
          <div className="relative rounded-xl overflow-hidden group shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="T-Shirts Category" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">T-Shirts</h3>
              <p className="text-gray-200 mb-4">Show off your coding passion with our premium t-shirts</p>
              <Link to="/products" onClick={() => navigateToCategory('tshirts')}>
                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors">
                  Shop T-Shirts
                </button>
              </Link>
            </div>
          </div>
          
          {/* Hoodies Category */}
          <div className="relative rounded-xl overflow-hidden group shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Hoodies Category" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Hoodies</h3>
              <p className="text-gray-200 mb-4">Stay cozy while debugging with our comfortable hoodies</p>
              <Link to="/products" onClick={() => navigateToCategory('hoodies')}>
                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors">
                  Shop Hoodies
                </button>
              </Link>
            </div>
          </div>
          
          {/* Accessories Category */}
          <div className="relative rounded-xl overflow-hidden group shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Accessories Category" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Accessories</h3>
              <p className="text-gray-200 mb-4">Complete your developer look with our tech-inspired accessories</p>
              <Link to="/products" onClick={() => navigateToCategory('accessories')}>
                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors">
                  Shop Accessories
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection; 