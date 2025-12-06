
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Features from '../components/Features';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest updates on new arrivals and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full text-gray-800 flex-1"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
