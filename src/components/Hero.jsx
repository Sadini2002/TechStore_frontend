import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Upgrade Your Tech</h1>
        <p className="text-xl mb-6">Find the latest gadgets and accessories at unbeatable prices!</p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
