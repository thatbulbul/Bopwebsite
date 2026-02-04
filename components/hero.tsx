'use client';

import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/hero-1.jpg',
    '/hero-2.jpg',
    '/hero-3.jpg',
    '/hero-4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-white pt-32 pb-20">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Luxury Properties in Delhi NCR
          </h1>

          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Premium residential and commercial properties in Noida, Greater Noida, Gurgaon & across Delhi NCR
          </p>

          <div className="flex gap-4 flex-wrap mb-12">
            <button className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
              Explore Properties
              <ChevronRight size={20} />
            </button>

            <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg">
              Contact Us
            </button>
          </div>

          <div className="flex gap-8 flex-wrap">
            <div>
              <div className="text-4xl font-bold">20+</div>
              <p className="text-white/80">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl font-bold">200K+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold">3500+</div>
              <p className="text-white/80">Realty Experts</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
