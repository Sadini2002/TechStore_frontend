import React from "react";

export default function Content() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About TechStore</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Welcome to <span className="font-semibold text-blue-600">TechStore</span> – 
          your one-stop destination for the latest and greatest in technology. 
          From high-performance laptops to stylish smartphones and everyday tech 
          accessories, we’re here to bring innovation closer to you at affordable prices.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">💻 Wide Range</h3>
          <p className="text-gray-600">Choose from the latest laptops, smartphones, cameras, and accessories.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">💲 Affordable Prices</h3>
          <p className="text-gray-600">Get premium quality tech without breaking the bank.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">⚡ Fast Delivery</h3>
          <p className="text-gray-600">Quick and reliable delivery right to your doorstep.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">📞 24/7 Support</h3>
          <p className="text-gray-600">Our team is here to help you anytime, anywhere.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Stay Ahead with TechStore
        </h3>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and be the first to know about exclusive 
          deals and the latest arrivals.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}
