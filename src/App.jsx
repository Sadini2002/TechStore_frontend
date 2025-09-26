import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const products = [
  { name: "Gaming Laptop", price: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXY6M0veE8wDKoaE40ps3TgOAQq4l9NRp2Q&s" },
  { name: "Smartphone Pro", price: 950, image: "https://celltronics.lk/wp-content/uploads/2024/09/iPhone-16-Pro-Max-2.png" },
  { name: "Wireless Headphones", price: 200, image: "https://www.simplytek.lk/cdn/shop/files/Anker-Soundcore-H30i-Simplytek-lk_2.jpg?v=1705919578" },
  { name: "DSLR Camera", price: 750, image: "https://media.istockphoto.com/id/96826250/photo/digital-camera-with-clipping-path.jpg?s=612x612&w=0&k=20&c=ceAF827zi_UfczajJAWkXowWxdu5tfisZHRoCiSq94w=" },
  { name: "Smartwatch", price: 180, image: "https://cdn.mos.cms.futurecdn.net/ZNnRCJZvhesfATb9CDTN3Z.jpg" },
  { name: "Mechanical Keyboard", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BwyXa0oylE2nGx3asuYpGcnC55jfbnvgqg&s" },
  { name: "VR Headset", price: 400, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqLhNzXkzRfyLaUJiIVB2A5JDSXeBa4f3Zg&s" },
  { name: "Bluetooth Speaker", price: 90, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s" },
];

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <section className="container mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </section>
      <Footer />
    </div>
  );
}
