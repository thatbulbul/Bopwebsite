'use client';

import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const images = [
    '/hero-1.jpg',
    '/hero-2.jpg', 
    '/hero-3.jpg',
    '/hero-4.jpg'
  ];
  
  useEffect(() => {
    // Preload images
    const imagePromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });
    
    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
        console.log('All hero images loaded successfully');
      })
      .catch((error) => {
        console.error('Error loading hero images:', error);
        setImagesLoaded(true); // Still show the component
      });
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const next = (prev + 1) % images.length;
        console.log(`Switching to image ${next}: ${images[next]}`);
        return next;
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative pt-32 pb-20 text-white overflow-hidden min-h-screen">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="w-full">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Luxury Properties in Delhi NCR
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Premium residential and commercial properties in Noida, Greater Noida, Gurgaon & across Delhi NCR
            </p>
            <div className="flex gap-4 flex-wrap mb-12">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition shadow-lg">
                Explore Properties
                <ChevronRight size={20} />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg">
                Contact Us
              </button>
            </div>
            <div className="flex gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-4xl font-bold text-white drop-shadow-lg">20+</div>
                <p className="text-white/80 font-medium">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white drop-shadow-lg">200K+</div>
                <p className="text-white/80 font-medium">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white drop-shadow-lg">3500+</div>
                <p className="text-white/80 font-medium">Realty Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
