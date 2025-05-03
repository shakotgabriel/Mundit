import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Herosection = () => {
  return (
    <section className=" container h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Full screen Background Image */}
      <Image
        src="/images/hero7.jpg"
        alt="Full background"
        fill
        className="object-cover absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="absolute z-10 p-8 md:p-12 bg-white/30 backdrop-blur-lg rounded-lg shadow-2xl max-w-2xl text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4 leading-tight">
          Your Trusted Partner in Property Consultancy
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          An independent professional firm specializing in Property Consultancy Services including Property Valuation, Building Design, Cost Estimation, and Real Estate Management.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center font-black">
          <Link 
            href="/services" 
            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-center"
          >
            Our Services
          </Link>
          <Link 
            href="/contacts" 
            className="px-6 py-3 border border-teal-500 text-teal-700 rounded-lg hover:bg-teal-50 text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
