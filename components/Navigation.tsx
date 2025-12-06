'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f5f4f7] shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-end gap-3">
              <Image
                src="/logo.png"
                alt="Negosyo Advocates Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div className="flex flex-col pb-0.5">
                <span className="text-sm font-bold text-[#214372] uppercase tracking-wide">Negosyo Advocates</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition">
              Home
            </Link>
            <Link href="/koop" className="text-gray-700 hover:text-emerald-600 font-medium transition">
              Koop
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-emerald-600 font-medium transition">
              About
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-emerald-600 font-medium transition">
              Contact
            </Link>
            <Link 
              href="/koop" 
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition font-medium"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#f5f4f7] border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/koop" 
              className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Koop
            </Link>
            <Link 
              href="/#about" 
              className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/#contact" 
              className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/koop" 
              className="block px-3 py-2 bg-emerald-600 text-white rounded-md text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
