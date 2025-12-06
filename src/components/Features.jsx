
import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50 worldwide'
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: '100% secure payment with SSL encryption'
    },
    {
      icon: '🎧',
      title: '24/7 Support',
      description: 'Round-the-clock customer support'
    },
    {
      icon: '⭐',
      title: 'Premium Quality',
      description: 'Hand-picked premium materials'
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
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose DevWears?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of style, quality, and service
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
