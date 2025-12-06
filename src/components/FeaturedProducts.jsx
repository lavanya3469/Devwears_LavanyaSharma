
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      price: "$29.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Premium Denim Jacket",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=600&fit=crop",
      badge: "Sale"
    },
    {
      id: 3,
      name: "Elegant Summer Dress",
      price: "$59.99",
      originalPrice: "$79.99",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop",
      badge: "New"
    },
    {
      id: 4,
      name: "Casual Sneakers",
      price: "$79.99",
      originalPrice: "$99.99",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop",
      badge: "Popular"
    },
    {
      id: 5,
      name: "Luxury Watch",
      price: "$199.99",
      originalPrice: "$249.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop",
      badge: "Premium"
    },
    {
      id: 6,
      name: "Stylish Backpack",
      price: "$49.99",
      originalPrice: "$69.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop",
      badge: "Sale"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Link to="/contact">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                      <span className="text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
