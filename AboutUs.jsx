import React from 'react';

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center mb-12">About Us</h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.s2KR0R3Jven6mVBn1i4udgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="About Us"
            className="rounded shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            We are a passionate team dedicated to providing the best products and customer service.  
            Our mission is to deliver high-quality items at affordable prices and ensure a smooth shopping experience.
          </p>

          <h2 className="text-3xl font-semibold">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be a leader in the online shopping space by offering an intuitive platform, a wide range of products,  
            and world-class customer support, creating value for every customer.
          </p>
        </div>
      </div>
    </div>
  );
}