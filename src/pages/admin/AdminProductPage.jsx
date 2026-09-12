import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  // Get all products
  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `${backendURL}/api/techpart`
      );

      setProducts(response.data);
    } catch (error) {
      console.error("Error getting products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Page Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Products
          </h1>

          <p className="text-gray-500 mt-1">
            View all products in the store
          </p>
        </div>

        <div className="bg-blue-600 text-white px-5 py-3 rounded-lg">
          Total Products: {products.length}
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading products...
          </div>
        ) : products.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No products found.
          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">
                    Image
                  </th>

                  <th className="px-6 py-4 text-left">
                    Product Name
                  </th>

                  <th className="px-6 py-4 text-center">
                    Quantity
                  </th>

                  <th className="px-6 py-4 text-center">
                    Stock
                  </th>

                  <th className="px-6 py-4 text-right">
                    Price
                  </th>

                  <th className="px-6 py-4 text-right">
                    Label Price
                  </th>
                </tr>
              </thead>

              <tbody>

                {products.map((product) => (
                  <tr
                    key={product._id}
                    className="border-b hover:bg-gray-50"
                  >

                    {/* Image */}
                    <td className="px-6 py-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                    </td>

                    {/* Name */}
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-800">
                        {product.name}
                      </p>
                    </td>

                    {/* Quantity */}
                    <td className="px-6 py-4 text-center">
                      {product.quantity}
                    </td>

                    {/* Stock */}
                    <td className="px-6 py-4 text-center">

                      {product.stock > 0 ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          In Stock
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                          Out of Stock
                        </span>
                      )}

                    </td>

                    {/* Price */}
                    <td className="px-6 py-4 text-right font-semibold">
                      Rs. {product.price}
                    </td>

                    {/* Label Price */}
                    <td className="px-6 py-4 text-right text-gray-500 line-through">
                      Rs. {product.labelprice}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}