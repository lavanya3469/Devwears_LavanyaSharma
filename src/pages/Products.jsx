import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ShoppingBag, Grid3X3, List, Heart, Star, X, ChevronDown, ChevronUp, Sliders } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  
  // Check for category selection from home page
  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
      setSelectedCategory(savedCategory);
      localStorage.removeItem('selectedCategory');
    }
  }, []);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tshirts', name: 'T-Shirts' },
    { id: 'hoodies', name: 'Hoodies & Sweatshirts' },
    { id: 'jackets', name: 'Jackets' },
    { id: 'pants', name: 'Pants & Jeans' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    // T-Shirts
    {
      id: 1,
      name: "Code Syntax Cotton T-Shirt",
      price: "$29.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop",
      category: "tshirts",
      badge: "Bestseller",
      rating: 4.8,
      colors: ["Black", "White", "Navy"],
      sizes: ["S", "M", "L", "XL"],
      description: "Show off your passion for coding with our premium cotton t-shirt featuring clean code syntax print."
    },
    {
      id: 2,
      name: "JavaScript Developer Tee",
      price: "$32.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop",
      category: "tshirts",
      badge: "Popular",
      rating: 4.7,
      colors: ["Black", "Gray", "Yellow"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "JavaScript enthusiasts will love this comfortable cotton blend tee with minimalist JS logo design."
    },
    {
      id: 3,
      name: "Binary Code T-Shirt",
      price: "$27.99",
      originalPrice: "$34.99",
      image: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=500&h=600&fit=crop",
      category: "tshirts",
      badge: "New",
      rating: 4.5,
      colors: ["White", "Black"],
      sizes: ["S", "M", "L", "XL"],
      description: "Classic fit tee with binary code pattern that only true programmers will understand."
    },
    
    // Hoodies & Sweatshirts
    {
      id: 4,
      name: "Code Debugger Hoodie",
      price: "$59.99",
      originalPrice: "$79.99",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
      category: "hoodies",
      badge: "Hot",
      rating: 4.9,
      colors: ["Black", "Gray", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Stay warm while debugging with this premium cotton-blend hoodie featuring embroidered debug symbols."
    },
    {
      id: 5,
      name: "Full-Stack Developer Sweatshirt",
      price: "$54.99",
      originalPrice: "$69.99",
      image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&h=600&fit=crop",
      category: "hoodies",
      badge: "Sale",
      rating: 4.7,
      colors: ["Gray", "Black", "Blue"],
      sizes: ["S", "M", "L", "XL"],
      description: "Cozy crewneck sweatshirt with a subtle full-stack development diagram print on the back."
    },
    {
      id: 6,
      name: "Python Coder Zip Hoodie",
      price: "$64.99",
      originalPrice: "$84.99",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&h=600&fit=crop",
      category: "hoodies",
      badge: "Limited",
      rating: 4.8,
      colors: ["Blue", "Black", "Green"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Premium zip-up hoodie with Python code snippets and elegant snake logo embroidery."
    },
    
    // Jackets
    {
      id: 7,
      name: "Developer Denim Jacket",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=600&fit=crop",
      category: "jackets",
      badge: "Trending",
      rating: 4.9,
      colors: ["Blue", "Black"],
      sizes: ["S", "M", "L", "XL"],
      description: "Classic denim jacket with developer-themed patches and custom embroidery on the back."
    },
    {
      id: 8,
      name: "Tech Conference Bomber Jacket",
      price: "$99.99",
      originalPrice: "$129.99",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
      category: "jackets",
      badge: "Premium",
      rating: 4.7,
      colors: ["Black", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Stylish bomber jacket perfect for tech conferences with hidden inner pockets for all your gadgets."
    },
    {
      id: 9,
      name: "Code Commit Windbreaker",
      price: "$74.99",
      originalPrice: "$89.99",
      image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=500&h=600&fit=crop",
      category: "jackets",
      badge: "New Arrival",
      rating: 4.6,
      colors: ["Gray", "Black", "Red"],
      sizes: ["S", "M", "L", "XL"],
      description: "Lightweight, water-resistant windbreaker with minimalist git commit history design on the back."
    },
    
    // Pants & Jeans
    {
      id: 10,
      name: "Developer Comfort Jeans",
      price: "$69.99",
      originalPrice: "$89.99",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop",
      category: "pants",
      badge: "Bestseller",
      rating: 4.8,
      colors: ["Blue", "Black", "Gray"],
      sizes: ["30", "32", "34", "36", "38"],
      description: "Comfortable stretch denim designed for long coding sessions with reinforced seams and extra pockets."
    },
    {
      id: 11,
      name: "Coder Cargo Pants",
      price: "$59.99",
      originalPrice: "$74.99",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop",
      category: "pants",
      badge: "Popular",
      rating: 4.6,
      colors: ["Khaki", "Black", "Olive"],
      sizes: ["30", "32", "34", "36"],
      description: "Multiple pocket cargo pants perfect for carrying all your tech gadgets with comfort stretch fabric."
    },
    {
      id: 12,
      name: "Relaxed Fit Coding Sweatpants",
      price: "$49.99",
      originalPrice: "$64.99",
      image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&h=600&fit=crop",
      category: "pants",
      badge: "Comfortable",
      rating: 4.9,
      colors: ["Gray", "Black", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Ultra-soft sweatpants with tapered legs and deep pockets, perfect for remote work comfort."
    },
    
    // Accessories
    {
      id: 13,
      name: "Programmer's Cap",
      price: "$24.99",
      originalPrice: "$29.99",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop",
      category: "accessories",
      badge: "Essential",
      rating: 4.7,
      colors: ["Black", "Navy", "Gray"],
      sizes: ["One Size"],
      description: "Stylish embroidered cap with subtle code symbols that only fellow developers will recognize."
    },
     
    {
      id: 15,
      name: "Developer's Laptop Bag",
      price: "$79.99",
      originalPrice: "$99.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop",
      category: "accessories",
      badge: "Practical",
      rating: 4.9,
      colors: ["Black", "Gray"],
      sizes: ["One Size"],
      description: "Spacious, padded laptop bag with multiple compartments for all your tech gadgets and accessories."
    },
    {
      id: 16,
      name: "Code Pattern Scarf",
      price: "$34.99",
      originalPrice: "$44.99",
      image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&h=600&fit=crop",
      category: "accessories",
      badge: "Winter",
      rating: 4.6,
      colors: ["Navy/White", "Gray/Black"],
      sizes: ["One Size"],
      description: "Soft knitted scarf with subtle code pattern design, perfect for keeping warm during winter coding sessions."
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const sortProducts = (products) => {
    switch(sortBy) {
      case 'price-low':
        return [...products].sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
      case 'price-high':
        return [...products].sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
      case 'name':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'rating':
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const sortedAndFilteredProducts = sortProducts(filteredProducts);

  return (
    <div className="min-h-screen pt-12 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">DevWears Collection</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium developer-focused clothing that combines style, comfort, and your passion for coding
          </p>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                      {selectedCategory === category.id && (
                        <span className="float-right">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="px-2">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              
              {/* Ratings */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Ratings</h4>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      id={`rating-${rating}`}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor={`rating-${rating}`} className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-600">& Up</span>
                    </label>
                  </div>
                ))}
              </div>

              {/* Reset Filters */}
              <button 
                className="w-full py-2 text-blue-600 text-sm font-medium hover:text-blue-800"
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange([0, 200]);
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Product Content */}
          <div className="lg:w-3/4">
            {/* Mobile Filter Toggle & Sort */}
            <div className="lg:hidden flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-gray-600 bg-white py-2 px-4 rounded-lg shadow-sm"
              >
                <Sliders className="w-5 h-5 mr-2" />
                <span>Filters</span>
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white py-2 px-4 rounded-lg shadow-sm text-gray-600 border-0"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="lg:hidden bg-white p-6 rounded-xl shadow-sm mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                
                {/* Mobile Category Tabs */}
                <div className="overflow-x-auto -mx-6 px-6 pb-4 mb-2">
                  <div className="flex space-x-2 min-w-max">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Price Range */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                  <div className="px-2">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
                
                {/* Apply Filters Button */}
                <button 
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setShowFilters(false)}
                >
                  Apply Filters
                </button>
              </div>
            )}

            {/* Desktop Sort & View Options */}
            <div className="hidden lg:flex items-center justify-between bg-white p-4 rounded-xl shadow-sm mb-8">
              <div className="flex items-center">
                <span className="text-gray-600 mr-3">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 py-2 px-4 rounded-lg text-gray-600 border-0"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Products Count */}
            <p className="text-gray-600 mb-6">
              Showing <span className="font-medium">{sortedAndFilteredProducts.length}</span> products
            </p>

            {/* Products Grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedAndFilteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                      {/* Product Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                            product.badge === 'Bestseller' || product.badge === 'Hot' ? 'bg-red-500' :
                            product.badge === 'New' || product.badge === 'New Arrival' ? 'bg-green-500' :
                            product.badge === 'Popular' ? 'bg-blue-500' :
                            product.badge === 'Limited' || product.badge === 'Limited Edition' ? 'bg-purple-500' :
                            product.badge === 'Premium' ? 'bg-yellow-500' :
                            product.badge === 'Sale' ? 'bg-pink-500' :
                            'bg-gray-500'
                          }`}>
                            {product.badge}
                          </span>
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex justify-center space-x-2">
                            <button className="bg-white rounded-full p-2 text-gray-800 hover:text-blue-600 transition-colors">
                              <Heart className="w-5 h-5" />
                            </button>
                            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                              Contact Us
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product Details */}
                      <div className="p-5">
                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                        
                        {/* Colors */}
                        <div className="flex items-center mb-3">
                          {product.colors.map((color, idx) => (
                            <div 
                              key={idx} 
                              className="w-4 h-4 rounded-full border border-gray-300 mr-1"
                              style={{ 
                                backgroundColor: typeof color === 'string' && color.startsWith('#') 
                                  ? color 
                                  : color === 'Black' ? '#000' 
                                  : color === 'White' ? '#fff'
                                  : color === 'Gray' ? '#888'
                                  : color === 'Navy' ? '#003366'
                                  : color === 'Blue' ? '#0066cc'
                                  : color === 'Red' ? '#cc0000'
                                  : color === 'Green' ? '#006600'
                                  : color === 'Yellow' ? '#ffcc00'
                                  : color === 'Olive' ? '#556b2f'
                                  : color === 'Khaki' ? '#f0e68c'
                                  : '#ddd'
                              }}
                            />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">{product.colors.length} colors</span>
                        </div>
                        
                        {/* Price */}
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-blue-600 mr-2">{product.price}</span>
                            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                          </div>
                          <Link to="/contact">
                            <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                              <ShoppingBag className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // List View
              <div className="space-y-6">
                {sortedAndFilteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Product Image */}
                      <div className="relative md:w-1/3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                            product.badge === 'Bestseller' || product.badge === 'Hot' ? 'bg-red-500' :
                            product.badge === 'New' || product.badge === 'New Arrival' ? 'bg-green-500' :
                            product.badge === 'Popular' ? 'bg-blue-500' :
                            product.badge === 'Limited' || product.badge === 'Limited Edition' ? 'bg-purple-500' :
                            product.badge === 'Premium' ? 'bg-yellow-500' :
                            product.badge === 'Sale' ? 'bg-pink-500' :
                            'bg-gray-500'
                          }`}>
                            {product.badge}
                          </span>
                        </div>
                      </div>
                      
                      {/* Product Details */}
                      <div className="p-6 md:w-2/3 flex flex-col justify-between">
                        <div>
                          {/* Rating */}
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          
                          {/* Colors and Sizes */}
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div>
                              <span className="text-sm font-medium text-gray-700 block mb-1">Colors:</span>
                              <div className="flex items-center">
                                {product.colors.map((color, idx) => (
                                  <div 
                                    key={idx} 
                                    className="w-5 h-5 rounded-full border border-gray-300 mr-1"
                                    style={{ 
                                      backgroundColor: typeof color === 'string' && color.startsWith('#') 
                                        ? color 
                                        : color === 'Black' ? '#000' 
                                        : color === 'White' ? '#fff'
                                        : color === 'Gray' ? '#888'
                                        : color === 'Navy' ? '#003366'
                                        : color === 'Blue' ? '#0066cc'
                                        : color === 'Red' ? '#cc0000'
                                        : color === 'Green' ? '#006600'
                                        : color === 'Yellow' ? '#ffcc00'
                                        : color === 'Olive' ? '#556b2f'
                                        : color === 'Khaki' ? '#f0e68c'
                                        : '#ddd'
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <span className="text-sm font-medium text-gray-700 block mb-1">Sizes:</span>
                              <div className="flex flex-wrap gap-1">
                                {product.sizes.map((size) => (
                                  <span key={size} className="text-sm px-2 py-1 bg-gray-100 rounded">
                                    {size}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div>
                            <span className="text-2xl font-bold text-blue-600 mr-2">{product.price}</span>
                            <span className="text-gray-500 line-through">{product.originalPrice}</span>
                          </div>
                          
                          <div className="flex space-x-2">
                            <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                              <Heart className="w-5 h-5" />
                            </button>
                            <Link to="/contact">
                              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Contact Us
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Empty State */}
            {sortedAndFilteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-blue-50 inline-flex rounded-full p-6 mb-4">
                  <ShoppingBag className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or browse our categories</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 200]);
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
