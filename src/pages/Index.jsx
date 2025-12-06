import React from 'react';
import { ArrowRight, Star, Truck, Shield, Headphones, Award, Users, Globe } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryShowcase from '../components/home/CategoryShowcase';
import TrendingSection from '../components/home/TrendingSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';
import CountryAwareLink from '../components/CountryAwareLink';

const Index = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Worldwide Shipping",
      description: "Free shipping on orders over $50 worldwide"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment with SSL encryption"
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock customer support via chat & phone"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Hand-picked premium materials and craftsmanship"
    },
    {
      icon: Users,
      title: "50,000+ Happy Customers",
      description: "Join thousands of satisfied customers worldwide"
    },
    {
      icon: Globe,
      title: "Global Brand",
      description: "Trusted fashion brand in 40+ countries"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "1000+", label: "Products" },
    { number: "40+", label: "Countries" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen opacity-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose DevWears?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of style, quality, and service that sets us apart from the rest
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Trending Section */}
      <TrendingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Upgrade Your Style?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join thousands of fashion-forward individuals who trust DevWears for their wardrobe essentials
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CountryAwareLink to="/products" onClick={() => window.scrollTo({top: 0, behavior: 'instant'})}>
                <button
                  className="bg-white text-blue-600 px-6 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3 hover:bg-blue-50 transition-colors shadow-xl"
                >
                  <span>Shop Collection</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </CountryAwareLink>
              <CountryAwareLink to="/contact" onClick={() => window.scrollTo({top: 0, behavior: 'instant'})}>
                <button
                  className="border-2 border-white text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get in Touch
                </button>
              </CountryAwareLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
