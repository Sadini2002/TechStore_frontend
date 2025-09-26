import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transform transition duration-300 hover:shadow-2xl">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-5 flex flex-col justify-between h-40">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mt-2 font-medium">${product.price}</p>
        </div>
        <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
