'use client';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, X, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const locations = [
  {
    name: 'Greater-Noida',
    slug: 'bop-noida',
    image: '/Location-Logo/Gr.png',
    mapLink: 'https://www.google.com/maps?q=MSX+Tower+2+Greater+Noida',
    embed:
      'https://www.google.com/maps?q=MSX+Tower+2+Greater+Noida&output=embed',
    address:
      'MSX Tower 2, 8th Floor, Alpha-1 Commercial Belt, Greater Noida – 201308',
    rera: 'UPRERAAGT10206',
  },
  {
    name: 'Noida',
    slug: 'bop-noida',
    image: '/Location-Logo/Noida.png',
    mapLink: 'https://maps.app.goo.gl/K7gfxVa9yoVojEai7',
    embed:
      'https://www.google.com/maps?q=JMD+Megapolis+Sohna+Road+Gurgaon&output=embed',
    address:
      'Noida Sector 63-A-199, Second Floor, Sector 63, Noida – 201305',
    rera: 'UPRERAAGT10206',
  },
  {
    name: 'Noida',
    slug: 'bop-noida1',
    image: '/Location-Logo/Noida.png',
    mapLink: 'https://maps.app.goo.gl/MSXoRDv2n1L9gTs6A',
    embed:
      'https://www.google.com/maps?q=JMD+Megapolis+Sohna+Road+Gurgaon&output=embed',
    address:
      'Unit Noida Sector 136 – A-111, 3rd Floor, Riana Aurum, Sector 136, Noida, Uttar Pradesh – 201304',
    rera: 'UPRERAAGT10206',
  },
  {
    name: 'Delhi',
    slug: 'bop-delhi',
    image: '/Location-Logo/Delhi.png',
    mapLink: 'https://www.google.com/maps?q=Asaf+Ali+Road+Daryaganj+Delhi',
    embed:
      'https://www.google.com/maps?q=Asaf+Ali+Road+Daryaganj+Delhi&output=embed',
    address:
      '378, 3rd Floor, Asaf Ali Road, Daryaganj, New Delhi – 110002',
    rera: 'DLRERA2025A0085',
  },
  {
    name: 'Gurugram',
    slug: 'bop-gurugram',
    image: '/Location-Logo/Gurugram.png',
    mapLink: 'https://www.google.com/maps?q=JMD+Megapolis+Sohna+Road+Gurgaon',
    embed:
      'https://www.google.com/maps?q=JMD+Megapolis+Sohna+Road+Gurgaon&output=embed',
    address:
      'Unit 513–516, 5th Floor, JMD Megapolis, Sohna Road, Gurugram',
    rera: 'HRERA-PKL-3393-2025',
  },
   
   {
    name: 'Haridwar',
    slug: 'bop-haridwar',
    image: '/Location-Logo/Haridwar.png',
    mapLink: 'https://maps.app.goo.gl/y2adVRDaLxEAo5X16',
    address:
      'Haridwar Mayapur – W5V3+2J3, Near Tulsi Chowk, Mayapur, Haridwar, Uttarakhand – 24940 (RERA: UKREA07250000482)',
    rera: 'UKREA07250000482',
  },
   {
    name: 'Maharastra',
    slug: 'bop-maharastra',
    image: '/Location-Logo/Maharashtra.png',
    mapLink: 'https://maps.app.goo.gl/y2adVRDaLxEAo5X16',
    address:
      'Taluka Haveli, District Pune, Maharashtra- 411014',
    rera: 'A041262502998',
  },
];

const productLinks = [
  { label: 'Residential', href: '/residential' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Farm Land', href: '/farm-land' },
  { label: 'HRDA Projects', href: '/hrda-projects' },
];

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Awards', href: '/awards' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Our Gallery', href: '/gallery' },
  { label: 'Media', href: '/media' },
  { label: 'Careers', href: '/careers' },
  { label: 'Become a Channel Partner', href: '/channel-partner' },
];


export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  /* Reveal animation on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    footerRef.current && observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  /* 🌍 SEO Schema */
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'BOP Real Estate',
    url: 'https://bop.in',
    areaServed: locations.map((l) => l.name),
    address: locations.map((l) => ({
      '@type': 'PostalAddress',
      streetAddress: l.address,
      addressCountry: 'IN',
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <footer
        ref={footerRef}
        className={`bg-gradient-to-br from-[#6a0d6a] to-[#4a0a4a] text-white py-20 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
           <Image
           src="/Bop-Logo.png"
           alt="bop.in"
           width={140}
           height={40}
           className="mb-4 object-contain"
           />
            <p className="text-base text-white/80 leading-relaxed mb-6">
              Since 2007, BOP has been a trusted real estate consultancy delivering
              premium residential & commercial assets across India.
            </p>

            <div className="flex gap-4">
              <Facebook size={18} />
              <X size={18} />
              <Linkedin size={18} />
              <Instagram size={18} />
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-xl mb-6 relative inline-block">
           Products
            <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-pink-500"></span>
            </h4>
           <ul className="space-y-4 text-base text-white/90">
          {productLinks.map((item) => (
         <li key={item.label}>
         <a
        href={item.href}
        className="flex gap-3 items-center transition hover:text-pink-400 hover:translate-x-1"
        >
        <span className="text-pink-400">»</span>
        {item.label}
         </a>
        </li>
        ))}
        </ul>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
         <ul className="space-y-4 text-base text-white/90">
         {quickLinks.map((item) => (
         <li key={item.label}>
         <a
        href={item.href}
        className="flex gap-3 items-center transition hover:text-pink-400 hover:translate-x-1"
         >
        <span className="text-pink-400">»</span>
        {item.label}
       </a>
       </li>
       ))}
      </ul>

          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Locations</h4>

            <ul className="space-y-5">
              {locations.map((loc, idx) => (
                <li key={loc.slug} className="relative group">

                  {/* Mobile accordion header */}
                  <button
                    onClick={() => setOpen(open === idx ? null : idx)}
                    className="flex items-center justify-between w-full lg:hidden"
                  >
                    <span className="font-medium">{loc.name}</span>
                    <ChevronDown
                      className={`transition ${
                        open === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Desktop logo */}
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    className="hidden lg:inline-block"
                  >
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="h-6 mb-2 hover:drop-shadow-[0_0_6px_rgba(255,105,180,0.5)]"
                    />
                  </a>

                  {/* Address */}
                  <div
                    className={`text-base text-white/90 leading-relaxed ${
                      open === idx ? 'block' : 'hidden'
                    } lg:block`}
                  >
                    <p>{loc.address}</p>
                    <p className="text-white/60">(RERA: {loc.rera})</p>
                  </div>

                  {/* Mini Map Preview */}
                  <div className="absolute left-full top-0 ml-4 w-64 h-40 hidden lg:group-hover:block z-50 shadow-xl rounded overflow-hidden">
                    <iframe
                      src={loc.embed}
                      loading="lazy"
                      className="w-full h-full border-0"
                    />
                  </div>

                </li>
              ))}
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
}
