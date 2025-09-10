'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/tinyeqn_crop.png" 
            alt="Tiny EQN Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation and CTA Button */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
            Who We Are
          </Link>
          <Link href="/solutions" className="text-gray-700 hover:text-gray-900 transition-colors">
            Solutions
          </Link>
          <Link href="/newsletters" className="text-gray-700 hover:text-gray-900 transition-colors">
            Newsletters
          </Link>
          <Link 
            href="/contact" 
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link 
              href="/solutions" 
              className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="/newsletters" 
              className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletters
            </Link>
            <Link 
              href="/contact" 
              className="block bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-medium text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
