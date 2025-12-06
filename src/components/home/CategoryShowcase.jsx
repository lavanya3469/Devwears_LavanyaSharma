import React from 'react';
import { Link } from 'react-router-dom';

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      name: "Men's Collection",
      description: "Stylish and comfortable clothing for modern men",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      itemCount: "200+ Items",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      name: "Women's Fashion",
      description: "Elegant and trendy outfits for every occasion",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=800&fit=crop",
      itemCount: "300+ Items",
      color: "from-pink-600 to-pink-800"
    },
    {
      id: 3,
      name: "Accessories",
      description: "Complete your look with premium accessories",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop",
      itemCount: "150+ Items",
      color: "from-purple-600 to-purple-800"
    },
    {
      id: 4,
      name: "Footwear",
      description: "Step out in style with our shoe collection",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop",
      itemCount: "100+ Items",
      color: "from-green-600 to-green-800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Shop by Category</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of premium fashion items curated for every style and occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <Link to="/products">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  {/* Background Image */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-sm opacity-90 mb-3">{category.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            {category.itemCount}
                          </span>
                          <div className="text-sm font-semibold flex items-center transform transition-transform duration-300 group-hover:translate-x-1">
                            Shop Now →
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Special Offers Banner */}
        <div className="mt-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Limited Time Offer!</h3>
          <p className="text-xl mb-6">Get up to 50% off on selected categories. Don't miss out!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <button
                className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors hover:scale-105 transform"
              >
                Shop Sale Items
              </button>
            </Link>
            <button
              className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-colors hover:scale-105 transform"
            >
              View All Offers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
