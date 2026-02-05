'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navigationItems = [
    { label: 'Home', href: '/' },
    {
      label: 'About Us',
      href: '/about',
      submenu: [
        { label: 'About', href: '/about' },
        { label: 'Our Gallery', href: '#' },
        { label: 'Our Awards', href: '#' },
        { label: 'Media', href: '#' },
        { label: 'Articles', href: '#' },
        { label: 'News Letter', href: '#' },
      ],
    },
    {
      label: 'Residential',
      href: '#',
      submenu: [
        { label: 'Godrej Majesty', href: '#' },
        { label: 'Aspire Leisure Park', href: '#' },
        { label: 'Aspire Centurian Park', href: '#' },
        { label: 'Eternia Residences', href: '#' },
        { label: 'Timez By Danube', href: '#' },
      ],
    },
    {
      label: 'Commercial',
      href: '#',
      submenu: [
        { label: 'Bhutani City Centre', href: '#' },
        { label: 'Migsun Rohini Central', href: '#' },
        { label: 'Ekana Bussiness Park', href: '#' },
        { label: 'H.R.D.A', href: '#' },
        { label: 'Omaxe Dwarka', href: '#' },
        { label: 'Gaur World Smartstreet', href: '#' },
      ],
    },
    { label: 'Blogs', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+91-9654444333</span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-orange-500">
              CRM
            </Link>
            <Link href="#" className="hover:text-orange-500">
              United Network
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Image src="/bop-Logo.png" alt="BOP Logo" width={120} height={40} />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 hover:text-orange-600 transition-colors font-medium">
                  {item.label}
                  {item.submenu && <ChevronDown size={16} />}
                </button>

                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 first:rounded-t-md last:rounded-b-md"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4 pb-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                  className="w-full text-left flex items-center justify-between py-2 hover:text-orange-600 font-medium"
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {item.submenu && openDropdown === item.label && (
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block py-1 text-sm hover:text-orange-600"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
