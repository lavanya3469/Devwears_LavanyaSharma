import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The Dev-Tees from DevWears are now a staple in my wardrobe. The fabric quality is amazing and the designs are unique without being too loud. Perfect for team meetings and casual Fridays!",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "I love my JavaScript hoodie! It's super comfortable for those long design sessions, and I've gotten so many compliments from fellow designers and developers.",
      rating: 5
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "Full-Stack Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The quality of DevWears clothing is excellent. I've ordered several shirts and a couple hoodies, and they've all held up perfectly even after many washes. The fit is true to size too.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear from some of our satisfied customers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 