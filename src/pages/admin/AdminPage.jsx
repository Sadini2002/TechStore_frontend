import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaStar,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const AdminPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-40
          w-64 h-screen bg-gray-900 text-white
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-blue-400">
            TechStore
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Admin Panel
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">

          <Link
            to="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTachometerAlt />
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition"
            onClick={() => setSidebarOpen(false)}
          >
            <FaBox />
            Products
          </Link>

          <Link
            to="/admin/users"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition"
            onClick={() => setSidebarOpen(false)}
          >
            <FaUsers />
            Users
          </Link>

          <Link
            to="/admin/orders"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition"
            onClick={() => setSidebarOpen(false)}
          >
            <FaShoppingCart />
            Orders
          </Link>

          <Link
            to="/admin/reviews"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition"
            onClick={() => setSidebarOpen(false)}
          >
            <FaStar />
            Reviews
          </Link>

        </nav>

        {/* Logout */}
        <div className="absolute bottom-5 left-0 w-full px-4">
          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 transition text-left"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 pt-20 lg:pt-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h2>

            <p className="text-gray-500 mt-1">
              Welcome back, Admin 👋
            </p>
          </div>

          <div className="bg-white px-5 py-3 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">
              Current Role
            </p>

            <p className="font-semibold text-blue-600">
              Administrator
            </p>
          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          {/* Products */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-gray-500 text-sm">
                  Total Products
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-2">
                  120
                </h3>
              </div>

              <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
                <FaBox size={22} />
              </div>

            </div>
          </div>

          {/* Users */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-gray-500 text-sm">
                  Total Users
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-2">
                  350
                </h3>
              </div>

              <div className="bg-green-100 text-green-600 p-4 rounded-full">
                <FaUsers size={22} />
              </div>

            </div>
          </div>

          {/* Orders */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-gray-500 text-sm">
                  Total Orders
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-2">
                  89
                </h3>
              </div>

              <div className="bg-orange-100 text-orange-600 p-4 rounded-full">
                <FaShoppingCart size={22} />
              </div>

            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-gray-500 text-sm">
                  Total Reviews
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-2">
                  245
                </h3>
              </div>

              <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full">
                <FaStar size={22} />
              </div>

            </div>
          </div>

        </div>

        {/* Management Cards */}
        <h3 className="text-2xl font-bold text-gray-800 mb-5">
          Management
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Products */}
          <Link
            to="/admin/products"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <FaBox size={24} />
            </div>

            <h4 className="text-xl font-semibold text-gray-800">
              Products
            </h4>

            <p className="text-gray-500 text-sm mt-2">
              Add, edit and delete TechStore products.
            </p>

            <span className="inline-block mt-4 text-blue-600 font-medium">
              Manage Products →
            </span>
          </Link>

          {/* Users */}
          <Link
            to="/admin/users"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            <div className="bg-green-100 text-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <FaUsers size={24} />
            </div>

            <h4 className="text-xl font-semibold text-gray-800">
              Users
            </h4>

            <p className="text-gray-500 text-sm mt-2">
              View and manage registered users.
            </p>

            <span className="inline-block mt-4 text-green-600 font-medium">
              Manage Users →
            </span>
          </Link>

          {/* Orders */}
          <Link
            to="/admin/orders"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            <div className="bg-orange-100 text-orange-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <FaShoppingCart size={24} />
            </div>

            <h4 className="text-xl font-semibold text-gray-800">
              Orders
            </h4>

            <p className="text-gray-500 text-sm mt-2">
              View and manage customer orders.
            </p>

            <span className="inline-block mt-4 text-orange-600 font-medium">
              Manage Orders →
            </span>
          </Link>

          {/* Reviews */}
          <Link
            to="/admin/reviews"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            <div className="bg-yellow-100 text-yellow-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <FaStar size={24} />
            </div>

            <h4 className="text-xl font-semibold text-gray-800">
              Reviews
            </h4>

            <p className="text-gray-500 text-sm mt-2">
              Check and manage product reviews.
            </p>

            <span className="inline-block mt-4 text-yellow-600 font-medium">
              Manage Reviews →
            </span>
          </Link>

        </div>

        {/* Recent Orders */}
        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h3 className="text-xl font-bold text-gray-800">
              Recent Orders
            </h3>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Order ID
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Product
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Price
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    #ORD001
                  </td>

                  <td className="px-6 py-4">
                    Nipunika
                  </td>

                  <td className="px-6 py-4">
                    Gaming Mouse
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    Rs. 5,500
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    #ORD002
                  </td>

                  <td className="px-6 py-4">
                    Kasun
                  </td>

                  <td className="px-6 py-4">
                    Mechanical Keyboard
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    Rs. 12,000
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    #ORD003
                  </td>

                  <td className="px-6 py-4">
                    Amaya
                  </td>

                  <td className="px-6 py-4">
                    USB-C Hub
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    Rs. 4,500
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      Processing
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  );
};

export default AdminPage;