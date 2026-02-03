'use client';

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">bop-logo</h3>
            <p className="mb-4">
              India's trusted realty experts with 20+ years of excellence and 200,000+ happy clients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-600 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Projects</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Properties</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Blog</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-600 transition">Residential</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Commercial</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Land</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Luxury Villas</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Penthouses</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Locations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-600 transition">Noida</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Greater Noida</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Gurgaon</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Delhi</a></li>
              <li><a href="#" className="hover:text-orange-600 transition">Faridabad</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-semibold text-white">Contact Information</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@bop.in</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Office Hours</p>
              <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p>Sunday: 11:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2024 bop-logo. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-orange-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-600 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-orange-600 transition">Cookie Policy</a>
            <a href="#" className="hover:text-orange-600 transition">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
