'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Vikram Gupta',
      role: 'Happy Client',
      text: 'BOP.in helped me find my dream home in Noida. The entire process was smooth and transparent.',
      rating: 5
    },
    {
      id: 2,
      name: 'Anjali Sharma',
      role: 'Property Investor',
      text: 'Excellent investment opportunity. The team provided valuable insights and support throughout.',
      rating: 5
    },
    {
      id: 3,
      name: 'Rohit Patel',
      role: 'Commercial Client',
      text: 'Best commercial property options in Delhi NCR. Highly recommended for business setup.',
      rating: 5
    },
    {
      id: 4,
      name: 'Priya Desai',
      role: 'First-time Buyer',
      text: 'The team made the home buying process very easy and stress-free. Great service!',
      rating: 5
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">Hear from our 200,000+ happy clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">{`"${testimonial.text}"`}</p>
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-orange-600 text-sm font-semibold">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
