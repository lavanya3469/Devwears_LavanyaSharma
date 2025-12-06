
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-8"
            >
              🔥 New Collection Available
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Premium
              <span className="block text-blue-600">Fashion</span>
              <span className="block text-3xl lg:text-4xl font-normal text-gray-600 mt-4">
                For Every Style
              </span>
            </h1>
            
            <p className="text-xl mb-10 text-gray-600 leading-relaxed max-w-2xl">
              Discover our exclusive collection of premium clothing that defines your unique style. 
              From casual wear to luxury fashion, we bring you quality and comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Shop Collection
                </motion.button>
              </Link>
              
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop"
                alt="Fashion Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Premium Brands</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
