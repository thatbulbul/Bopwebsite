'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Jasveer Singh',
      role: 'Happy Client',
      text: 'Aspire Leisure Park and Aspire Centurian Park are truly exceptional developments. The location is impressive with Gaur Chowk just 5 minutes away, and pricing remains highly attractive for investors. The thoughtful loading, NBCC association, and Supreme Court monitoring together provide unmatched transparency, reliability, and long-term confidence.',
      rating: 5
    },
    {
      id: 2,
      name: 'Aarti Sharma',
      role: 'Property Investor',
      text: 'BOP’s Channel Partner Meet at Eternia was excellent. Every partner seemed happy with the plans, incentives, and the vision shared. The best part of these projects is the involvement of NBCC and Supreme Court, ensuring complete peace of mind. With the right price, strong backing, these projects will be extremely fruitful for investors.',
      rating: 5
    },
    {
      id: 3,
      name: 'Shami Ahmed Khan',
      role: 'Commercial Client',
      text: 'Bhutani Grand Central is a highly promising project offering strong location advantages and excellent appreciation potential. With increasing population and future demand, it stands out as a golden opportunity for high returns. The hotel-managed model, 21-day yearly stay, and 50:50 revenue share create a unique investment.',
      rating: 5
    },
    {
      id: 4,
      name: 'Yogesh Tiwari',
      role: 'First-time Buyer',
      text: 'The Channel Partner Meet organized by BOP was exceptionally well managed, reflecting professionalism. I was genuinely impressed with the exclusive projects showcased, featuring remarkable designs, competitive pricing, and the trusted involvement of NBCC and Supreme Court. These factors together make them outstanding choices.',
      rating: 5
    },
    {
      id: 5,
      name: 'Neelam Singh',
      role: 'Real Estate Enthusiast',
      text: ' Bhutani Grand Central Hotel Suites offer a standout investment opportunity with a unique, worry-free ownership. Since the hotel manages all maintenance and operations, investors enjoy complete convenience and peace . Combined with its prime location and future growth potential, it becomes a secure and highly rewarding real estate choice.',
      rating: 5
    }
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
