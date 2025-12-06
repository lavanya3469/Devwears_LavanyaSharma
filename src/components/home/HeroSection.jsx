import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import CountryAwareLink from '../CountryAwareLink';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <span className="text-sm font-medium">🔥 New Collection Available</span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-bold mb-8 leading-tight">
              Fashion
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Revolution
              </span>
              <span className="block text-3xl lg:text-5xl font-normal text-blue-100 mt-4">
                Starts Here
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 text-blue-100 leading-relaxed max-w-2xl">
              Discover premium clothing that defines your style. From casual wear to luxury fashion, 
              we bring you the latest trends with unmatched quality and comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <CountryAwareLink to="/products">
                <button
                  className="bg-white text-blue-600 px-6 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3 hover:bg-blue-50 transition-colors shadow-xl hover:scale-105"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </CountryAwareLink>
              
              <button
                className="border-2 border-white text-white px-6 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3 hover:bg-white hover:text-blue-600 transition-colors hover:scale-105"
              >
                <Play className="w-6 h-6" />
                <span>Watch Story</span>
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-white rounded-full border-2 border-blue-300 flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">{i}</span>
                    </div>
                  ))}
                </div>
                <span className="text-blue-100">50K+ Customers</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <span className="text-blue-100">4.9/5 Rating</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full h-[600px] lg:h-[700px] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop"
                  alt="Fashion Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div
                className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Premium Quality</h4>
                    <p className="text-sm text-gray-600">Guaranteed Excellence</p>
                  </div>
                </div>
              </div>
              
              <div
                className="absolute -top-6 -right-6 bg-white text-gray-800 p-6 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">30%</div>
                  <div className="text-sm text-gray-600">OFF</div>
                  <div className="text-xs text-gray-500">First Order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
