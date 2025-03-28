// src/pages/VehiclePartsRequest.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCar, FaWrench, FaTools } from "react-icons/fa";

const VehiclePartsRequest = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    partName: "",
    quantity: "",
    urgency: "Low",
    notes: "",
  });

  // State for parts requests (sample data with images, replace with backend data later)
  const [requests, setRequests] = useState([
    {
      id: "PR001",
      partName: "Brake Pads",
      quantity: 4,
      urgency: "High",
      status: "Pending",
      date: "2025-03-20",
      image:"./images/brake.jpg",
    },
    {
      id: "PR002",
      partName: "Oil Filter",
      quantity: 1,
      urgency: "Medium",
      status: "Approved",
      date: "2025-03-19",
      image: "./images/oil.jpg",
    },
    {
      id: "PR003",
      partName: "Tire Set",
      quantity: 4,
      urgency: "Low",
      status: "Delivered",
      date: "2025-03-18",
      image: "./images/tire.jpg",
    },
  ]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: `PR${(requests.length + 1).toString().padStart(3, "0")}`,
      partName: formData.partName,
      quantity: formData.quantity,
      urgency: formData.urgency,
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
      image: "https://via.placeholder.com/300x200?text=New+Part", // Placeholder image for new requests
    };
    setRequests((prev) => [newRequest, ...prev]);
    setFormData({ partName: "", quantity: "", urgency: "Low", notes: "" });
  };

  // Animation variants for rows and sections
  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('./images/carparts.jpg')",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-4 shadow-lg sticky top-0 z-10 mb-8">
        <div className="flex items-center">
          <FaTools className="text-3xl text-indigo-500 mr-3" />
          <h1 className="text-2xl font-bold text-gray-800 font-poppins">
            Vehicle Parts Request
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/dashboard"
            className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 no-underline font-inter font-medium"
          >
            <FaCar className="mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6">
        {/* Request Form */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-90 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-poppins">
            <FaWrench className="mr-2 text-indigo-500" />
            Request Vehicle Parts
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-2">
                Part Name
              </label>
              <input
                type="text"
                name="partName"
                value={formData.partName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="e.g., Brake Pads"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="e.g., 4"
                min="1"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 font-medium mb-2">
                Urgency
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-600 font-medium mb-2">
                Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                rows="4"
                placeholder="Additional details about the request..."
              />
            </div>
            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="flex items-center bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 font-inter font-medium"
              >
                <FaTools className="mr-2" />
                Submit Request
              </button>
            </div>
          </form>
        </motion.section>

        {/* Previous Requests */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-90"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-poppins">
            <FaTools className="mr-2 text-indigo-500" />
            Previous Parts Requests
          </h2>
          {/* Table for Larger Screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left font-inter">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-sm text-gray-600 font-poppins font-semibold">
                    Request ID
                  </th>
                  <th className="p-4 text-sm text-gray-600 font-poppins font-semibold">
                    Part
                  </th>
                  <th className="p-4 text-sm text-gray-600 font-poppins font-semibold">
                    Quantity
                  </th>
                  <th className="p-4 text-sm text-gray-600 font-poppins font-semibold">
                    Urgency
                  </th>
                  <th className="p-4 text-sm text-gray-600 font-poppins font-semibold">
                    Status
                  </th>
                  <th className="p-4 text-sm text-gray-600 font-poppins font-semibold">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <motion.tr
                    key={request.id}
                    custom={index}
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="border-b"
                  >
                    <td className="p-4 text-sm text-gray-800 font-medium">
                      {request.id}
                    </td>
                    <td className="p-4 text-sm text-gray-800 font-medium flex items-center">
                      <img
                        src={request.image}
                        alt={request.partName}
                        className="w-12 h-8 object-cover rounded-lg mr-3"
                      />
                      {request.partName}
                    </td>
                    <td className="p-4 text-sm text-gray-800 font-medium">
                      {request.quantity}
                    </td>
                    <td className="p-4 text-sm font-medium">
                      <span
                        className={
                          request.urgency === "High"
                            ? "text-red-500"
                            : request.urgency === "Medium"
                            ? "text-orange-500"
                            : "text-green-500"
                        }
                      >
                        {request.urgency}
                      </span>
                    </td>
                    <td className="p-4 text-sm font-medium">
                      <span
                        className={
                          request.status === "Pending"
                            ? "text-yellow-500"
                            : request.status === "Approved"
                            ? "text-blue-500"
                            : "text-green-500"
                        }
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-800 font-medium">
                      {request.date}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card Layout for Mobile Screens */}
          <div className="md:hidden space-y-4">
            {requests.map((request, index) => (
              <motion.div
                key={request.id}
                custom={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-3">
                  <img
                    src={request.image}
                    alt={request.partName}
                    className="w-16 h-12 object-cover rounded-lg mr-3"
                  />
                  <div>
                    <p className="text-base font-semibold text-gray-800 font-poppins">
                      {request.partName}
                    </p>
                    <p className="text-sm text-gray-600 font-inter">
                      Request ID: {request.id}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 font-inter">
                  <p className="text-sm text-gray-600">
                    Quantity: <span className="font-medium">{request.quantity}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Urgency:{" "}
                    <span
                      className={
                        request.urgency === "High"
                          ? "text-red-500"
                          : request.urgency === "Medium"
                          ? "text-orange-500"
                          : "text-green-500"
                      }
                    >
                      {request.urgency}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Status:{" "}
                    <span
                      className={
                        request.status === "Pending"
                          ? "text-yellow-500"
                          : request.status === "Approved"
                          ? "text-blue-500"
                          : "text-green-500"
                      }
                    >
                      {request.status}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Date: <span className="font-medium">{request.date}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default VehiclePartsRequest;