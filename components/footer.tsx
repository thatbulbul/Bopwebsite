'use client';

import Image from 'next/image';
import { Facebook, Instagram, Linkedin, X, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/* ---------------- DATA ---------------- */

const locations = [
  {
    name: 'Greater Noida',
    slug: 'bop-greater-noida',
    image: '/Location-Logo/Gr.png',
    mapLink: 'https://www.google.com/maps?q=MSX+Tower+2+Greater+Noida',
    embed: 'https://www.google.com/maps?q=MSX+Tower+2+Greater+Noida&output=embed',
    address:
      'MSX Tower 2, 8th Floor, Alpha-1 Commercial Belt, Greater Noida – 201308',
    rera: 'UPRERAAGT10206',
  },
  {
    name: 'Noida Sector 63',
    slug: 'bop-noida-63',
    image: '/Location-Logo/Noida.png',
    mapLink: 'https://maps.app.goo.gl/ZK4m8nrrYrHgYcsk6',
    embed: 'https://www.google.com/maps?q=noida+sector+63+a+bop&output=embed',
    address:
      'Noida Sector 63-A-199, Second Floor, Sector 63, Noida – 201305',
    rera: 'UPRERAAGT10206',
  },
  {
    name: 'Noida Sector 136',
    slug: 'bop-noida-136',
    image: '/Location-Logo/Noida.png',
    mapLink: 'https://maps.app.goo.gl/MSXoRDv2n1L9gTs6A',
    embed:
      'https://www.google.com/maps?q=Noida+136+A+Riana+Aurum+Sector+136+Noida&output=embed',
    address:
      'A-111, 3rd Floor, Riana Aurum, Sector 136, Noida – 201304',
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

/* ---------------- COMPONENT ---------------- */

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  /* Reveal animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    footerRef.current && observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden text-white py-20 min-h-[520px]
      transition-all duration-1000
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6a0d6a] to-[#4a0a4a]" />
      <div className="absolute inset-0 footer-texture" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6
                      grid grid-cols-1 lg:grid-cols-4 gap-14">

        {/* Brand */}
        <div className="text-left">
          <Image
            src="/Bop-Logo.png"
            alt="bop.in"
            width={150}
            height={45}
            className="mb-5"
          />
          <p className="text-base text-white/80 leading-relaxed mb-6">
            Since 2007, BOP has grown into one of India’s leading real estate
            consultants through smart vision and consistent results.
          </p>
          <div className="flex gap-4">
            <Facebook size={18} />
            <X size={18} />
            <Linkedin size={18} />
            <Instagram size={18} />
          </div>
        </div>

        {/* Products */}
        <div className="text-left">
          <h4 className="text-xl font-semibold mb-6 relative">
            Products
            <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-pink-500" />
          </h4>
          <ul className="space-y-4 text-base">
            {productLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 hover:text-pink-400 transition hover:translate-x-1"
                >
                  <span className="text-pink-400">»</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h4 className="text-xl font-semibold mb-6 relative">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-pink-500" />
          </h4>
          <ul className="space-y-4 text-base">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 hover:text-pink-400 transition hover:translate-x-1"
                >
                  <span className="text-pink-400">»</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div className="text-left">
          <h4 className="text-xl font-semibold mb-6 relative">
            Locations
            <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-pink-500" />
          </h4>

          <ul className="space-y-6">
            {locations.map((loc, idx) => (
              <li key={loc.slug} className="relative group">

                {/* Mobile toggle */}
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="flex justify-between w-full lg:hidden font-medium"
                >
                  {loc.name}
                  <ChevronDown
                    className={`transition ${open === idx ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Logo */}
                <a
                  href={loc.mapLink}
                  target="_blank"
                  className="hidden lg:inline-block mb-2"
                >
                  <img src={loc.image} alt={loc.name} className="h-6" />
                </a>

                {/* Address */}
                <div
                  className={`text-base text-white/85 leading-relaxed ${
                    open === idx ? 'block' : 'hidden'
                  } lg:block`}
                >
                  <p>{loc.address}</p>
                  <p className="text-white/60">(RERA: {loc.rera})</p>
                </div>

                {/* Hover map */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-6
                                opacity-0 group-hover:opacity-100
                                hidden lg:block transition z-50">
                  <div className="w-72 h-44 rounded-xl overflow-hidden shadow-2xl bg-black">
                    <iframe
                      src={loc.embed}
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>

              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
