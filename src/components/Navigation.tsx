import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-900">
            Mundit Investment Ltd
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/profile" 
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Profile
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-900 transition-colors">
                Services
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-48">
                <Link 
                  href="/services/project-planning" 
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                >
                  Project Planning
                </Link>
                <Link 
                  href="/services/cost-planning" 
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                >
                  Cost Planning
                </Link>
                <Link 
                  href="/services/dispute-resolution" 
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                >
                  Dispute Resolution
                </Link>
                <Link 
                  href="/services/market-research" 
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                >
                  Market Research
                </Link>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 