'use client';

import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our team is ready to help you find your perfect property. Contact us today!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-300">info@bop.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold mb-1">Office Locations</h3>
                  <p className="text-gray-300">Noida, Greater Noida, Gurgaon, Delhi NCR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-md">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:border-orange-500 resize-none"
                />
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
