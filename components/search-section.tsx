'use client'

import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'

export default function SearchSection() {
  const [selectedLocation, setSelectedLocation] = useState('Noida')
  const [selectedCategory, setSelectedCategory] = useState('2bhk')

  const locations = [
    'Ghaziabad',
    'GOA',
    'Greater noida',
    'Greater Noida west',
    'Gurugaon',
    'Haridwar',
    'Lucknow',
    'Maharashtra',
    'Noida',
    'Panipat',
    'Panvel',
    'Pune',
    'Rajasthan',
    'Roorkee',
    'Vrindavan',
  ]

  const categories = [
    '1 bhk',
    '2 bhk',
    '2.5 bhk',
    '3 bhk',
    '3.5 bhk',
    '4 bhk',
    '5 bhk',
    'Commercial',
    'Residential',
    'Luxury',
    'Penthouse',
    'Ultra Luxury',
    'villa',
  ]

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Keyword Search */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Keyword
              </label>
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Location Dropdown */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Location
              </label>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 appearance-none bg-white"
                >
                  <option>Select Location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
                  size={20}
                />
              </div>
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 appearance-none bg-white"
                >
                  <option>Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
                  size={20}
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold flex items-center justify-center gap-2">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>

          {/* More Filters */}
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-700">More Filters</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-sm font-semibold">
                Apply Filters
              </button>
              <button className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md text-sm font-semibold">
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Property Type Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-2">Residential</h3>
            <p className="text-orange-600 font-semibold">50+ Property</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-2">Commercial</h3>
            <p className="text-orange-600 font-semibold">11+ Property</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-2">Featured Properties</h3>
            <p className="text-orange-600 font-semibold">5+ Property</p>
          </div>
        </div>
      </div>
    </section>
  )
}
