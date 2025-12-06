import React from 'react';
import { Star, Heart, Eye, ShoppingCart } from 'lucide-react';
import CountryAwareLink from '../CountryAwareLink';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "React Developer T-Shirt",
      price: "$34.99",
      originalPrice: "$44.99",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 182,
      badge: "Best Seller",
      colors: ['#000000', '#3182CE', '#FFFFFF', '#4C1D95']
    },
    {
      id: 2,
      name: "Code Pattern Hoodie",
      price: "$64.99",
      originalPrice: "$79.99",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "New Arrival",
      colors: ['#1F2937', '#4B5563', '#6B7280']
    },
    {
      id: 3,
      name: "Developer Denim Jacket",
      price: "$89.99",
      originalPrice: "$114.99",
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 96,
      badge: "Limited Edition",
      colors: ['#1E40AF', '#374151', '#000000']
    },
    {
      id: 4,
      name: "Git Commit History Tee",
      price: "$32.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 143,
      badge: "Popular",
      colors: ['#FFFFFF', '#000000', '#6B7280', '#EF4444']
    },
    {
      id: 5,
      name: "Programmer's Comfort Jeans",
      price: "$74.99",
      originalPrice: "$89.99",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 112,
      badge: "Comfortable",
      colors: ['#1E3A8A', '#111827']
    },
    {
      id: 6,
      name: "Binary Code Sweater",
      price: "$59.99",
      originalPrice: "$74.99",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 89,
      badge: "Trending",
      colors: ['#4B5563', '#000000', '#FFFFFF', '#10B981']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Developer Wardrobe</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Express your passion for coding with our premium developer-focused apparel
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    product.badge === 'Best Seller' ? 'bg-red-500' :
                    product.badge === 'New Arrival' ? 'bg-green-500' :
                    product.badge === 'Popular' ? 'bg-blue-500' :
                    product.badge === 'Limited Edition' ? 'bg-purple-500' :
                    product.badge === 'Comfortable' ? 'bg-yellow-500' :
                    'bg-pink-500'
                  }`}>
                    {product.badge}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    <button
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-green-500 hover:text-white transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating & Reviews */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.floor(product.rating)
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
                
                {/* Colors */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-gray-600">Colors:</span>
                  <div className="flex space-x-2">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
                    Save {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                  </span>
                </div>
                
                {/* Add to Cart Button */}
                <CountryAwareLink to="/products" onClick={() => window.scrollTo({top: 0, behavior: 'instant'})}>
                  <button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>View Details</span>
                  </button>
                </CountryAwareLink>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-16">
          <CountryAwareLink to="/products" onClick={() => window.scrollTo({top: 0, behavior: 'instant'})}>
            <button
              className="bg-gray-800 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 transition-colors shadow-lg"
            >
              Explore Full Collection
            </button>
          </CountryAwareLink>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
