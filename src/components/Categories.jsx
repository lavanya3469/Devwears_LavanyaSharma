
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Men's Collection",
      description: "Stylish and comfortable clothing for modern men",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      itemCount: "200+ Items"
    },
    {
      id: 2,
      name: "Women's Fashion",
      description: "Elegant and trendy outfits for every occasion",
      image: "https://images.unsplash.com/photo-1494790108755-2616c768e5ff?w=600&h=800&fit=crop",
      itemCount: "300+ Items"
    },
    {
      id: 3,
      name: "Accessories",
      description: "Complete your look with premium accessories",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop",
      itemCount: "150+ Items"
    },
    {
      id: 4,
      name: "Footwear",
      description: "Step out in style with our shoe collection",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop",
      itemCount: "100+ Items"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Shop by Category</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of premium fashion items
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Link to="/products">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 mb-3">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {category.itemCount}
                        </span>
                        <span className="text-sm font-semibold">
                          Shop Now →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
