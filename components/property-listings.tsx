'use client';

import { MapPin, Bed, Bath, Maximize2, Heart } from 'lucide-react';

export default function PropertyListings() {
  const properties = [
    {
      id: 1,
      name: 'Godrej Majesty',
      location: 'Sector 89, Noida',
      price: '₹45 Lac - ₹85 Lac',
      beds: 2,
      baths: 2,
      area: '850 - 1450 sq.ft',
      type: 'Residential'
    },
    {
      id: 2,
      name: 'Aspire Leisure Park',
      location: 'Sector 70, Noida',
      price: '₹55 Lac - ₹95 Lac',
      beds: 3,
      baths: 3,
      area: '1200 - 1800 sq.ft',
      type: 'Residential'
    },
    {
      id: 3,
      name: 'Eternia Residences',
      location: 'Greater Noida',
      price: '₹35 Lac - ₹75 Lac',
      beds: 2,
      baths: 2,
      area: '750 - 1350 sq.ft',
      type: 'Residential'
    },
    {
      id: 4,
      name: 'Bhutani City Centre',
      location: 'Sector 84, Noida',
      price: '₹80 Lac - ₹2 Cr',
      beds: 4,
      baths: 4,
      area: '2000 - 3500 sq.ft',
      type: 'Commercial'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600">Discover our latest premium property listings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-48 flex items-center justify-center relative">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">{property.name}</div>
                </div>
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100">
                  <Heart size={20} className="text-orange-600" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin size={16} className="text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-semibold">{property.location}</span>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-orange-600 mb-2">{property.price}</div>
                  <div className="flex gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <Bed size={16} />
                      <span>{property.beds} BHK</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} />
                      <span>{property.baths} Bath</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Maximize2 size={16} />
                  <span className="text-sm">{property.area}</span>
                </div>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
