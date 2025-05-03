import React from 'react';
import Image from 'next/image';

const Profile = () => {
  const services = [
    {
      title: "Property Valuation",
      description: "Comprehensive valuation services for insurance, sale, rent, and more"
    },
    {
      title: "Project Management",
      description: "End-to-end project planning and execution services"
    },
    {
      title: "Cost Planning",
      description: "Detailed cost estimation and management services"
    },
    {
      title: "Market Research",
      description: "In-depth property and real estate market analysis"
    }
  ];

  return (
    <div className="min-h-screen container bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Company Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Mundit Investment Ltd
                </h2>
                <div className="space-y-2 text-center">
                  <p className="text-gray-600">
                    <span className="font-semibold">Email:</span> munditinvestment@gmail.com
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Phone:</span>    +211 916 222 166 | +211 921061723
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span> 6th Floor UAP Equatoria Tower
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;