// src/pages/VehiclePartsRequest.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Changed icons to match Dashboard.jsx (using @heroicons/react instead of react-icons)
import { WrenchScrewdriverIcon, CalendarIcon } from "@heroicons/react/24/solid"; // Updated to Heroicons to match Dashboard.jsx

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
      image: "./images/brake.jpg",
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

  // Animation variants for rows and sections (kept the same as original)
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
    // Updated background to match Dashboard.jsx (removed background image, used solid bg-gray-900)
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-900 p-4 shadow-lg sticky top-0 z-10 mb-8">
        <div className="flex items-center">
          {/* Updated icon color to red-500 to match Dashboard.jsx */}
          <WrenchScrewdriverIcon className=" h-6 w-6 text-red-500 mr-2" />
          {/* Updated text color to white and font to Poppins to match Dashboard.jsx */}
          <h1 className="text-2xl font-bold text-white font-[Poppins]">
            Vehicle Parts Request
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          {/* Updated button styles to match Dashboard.jsx (red-600, rounded-full, Open Sans font) */}
          <Link
            to="/dashboard"
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
          >
            {/* Updated icon to WrenchScrewdriverIcon to match Dashboard.jsx */}
            <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content */}
      {/* Updated padding to match Dashboard.jsx (py-12 px-4 sm:px-6 lg:px-8) */}
      <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Request Form */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          // Updated section styles to use glassmorphism effect (bg-white/10, backdrop-blur-md) to match Dashboard.jsx
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl mb-8"
        >
          {/* Updated heading styles (white text, Poppins font, red icon) to match Dashboard.jsx */}
          <h2 className="text-xl font-bold text-white mb-4 flex items-center font-[Poppins]">
            <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
            Request Vehicle Parts
          </h2>
          {/* Updated form styles to match Dashboard.jsx (Open Sans font, gray-300 text) */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 font-[Open Sans] text-gray-300">
            <div>
              <label className="block text-sm font-medium mb-2">
                Part Name
              </label>
              {/* Updated input styles to match Dashboard.jsx (dark background, white text) */}
              <input
                type="text"
                name="partName"
                value={formData.partName}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                placeholder="e.g., Brake Pads"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Quantity
              </label>
              {/* Updated input styles to match Dashboard.jsx (dark background, white text) */}
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                placeholder="e.g., 4"
                min="1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Urgency
              </label>
              {/* Updated select styles to match Dashboard.jsx (dark background, white text) */}
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Notes (Optional)
              </label>
              {/* Updated textarea styles to match Dashboard.jsx (dark background, white text) */}
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                rows="4"
                placeholder="Additional details about the request..."
              />
            </div>
            <div className="md:col-span-2 text-right">
              {/* Updated button styles to match Dashboard.jsx (red-600, rounded-full, Open Sans font) */}
              <button
                type="submit"
                className="flex items-center bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-all duration-300 font-[Open Sans]"
              >
                {/* Updated icon to WrenchScrewdriverIcon to match Dashboard.jsx */}
                <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
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
          // Updated section styles to use glassmorphism effect (bg-white/10, backdrop-blur-md) to match Dashboard.jsx
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
        >
          {/* Updated heading styles (white text, Poppins font, red icon) to match Dashboard.jsx */}
          <h2 className="text-xl font-bold text-white mb-4 flex items-center font-[Poppins]">
            <CalendarIcon className="h-6 w-6 text-red-500 mr-2" />
            Previous Parts Requests
          </h2>
          {/* Table for Larger Screens */}
          <div className="hidden md:block overflow-x-auto">
            {/* Updated table styles to match Dashboard.jsx (Open Sans font, gray-300 text) */}
            <table className="w-full text-left font-[Open Sans] text-gray-300">
              <thead>
                {/* Updated header row background to match Dashboard.jsx (bg-white/5) */}
                <tr className="bg-white/5">
                  {/* Updated text color and font to match Dashboard.jsx */}
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Request ID
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Part
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Quantity
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Urgency
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Status
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
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
                    // Updated border color to match Dashboard.jsx
                    className="border-b border-white/10"
                  >
                    <td className="p-4 text-sm font-medium">
                      {request.id}
                    </td>
                    <td className="p-4 text-sm font-medium flex items-center">
                      <img
                        src={request.image}
                        alt={request.partName}
                        className="w-12 h-8 object-cover rounded-lg mr-3"
                      />
                      {request.partName}
                    </td>
                    <td className="p-4 text-sm font-medium">
                      {request.quantity}
                    </td>
                    <td className="p-4 text-sm font-medium">
                      {/* Updated urgency colors to match Dashboard.jsx */}
                      <span
                        className={
                          request.urgency === "High"
                            ? "text-red-400"
                            : request.urgency === "Medium"
                            ? "text-yellow-400"
                            : "text-green-400"
                        }
                      >
                        {request.urgency}
                      </span>
                    </td>
                    <td className="p-4 text-sm font-medium">
                      {/* Updated status colors to match Dashboard.jsx */}
                      <span
                        className={
                          request.status === "Pending"
                            ? "text-yellow-400"
                            : request.status === "Approved"
                            ? "text-green-400"
                            : "text-green-400"
                        }
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm font-medium">
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
                // Updated card background to match Dashboard.jsx (bg-white/5)
                className="bg-white/5 p-4 rounded-lg"
              >
                <div className="flex items-center mb-3">
                  <img
                    src={request.image}
                    alt={request.partName}
                    className="w-16 h-12 object-cover rounded-lg mr-3"
                  />
                  <div>
                    {/* Updated text color and font to match Dashboard.jsx */}
                    <p className="text-base font-semibold text-white font-[Poppins]">
                      {request.partName}
                    </p>
                    <p className="text-sm text-gray-300 font-[Open Sans]">
                      Request ID: {request.id}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 font-[Open Sans] text-gray-300">
                  <p className="text-sm">
                    Quantity: <span className="font-medium">{request.quantity}</span>
                  </p>
                  <p className="text-sm">
                    Urgency:{" "}
                    {/* Updated urgency colors to match Dashboard.jsx */}
                    <span
                      className={
                        request.urgency === "High"
                          ? "text-red-400"
                          : request.urgency === "Medium"
                          ? "text-yellow-400"
                          : "text-green-400"
                      }
                    >
                      {request.urgency}
                    </span>
                  </p>
                  <p className="text-sm">
                    Status:{" "}
                    {/* Updated status colors to match Dashboard.jsx */}
                    <span
                      className={
                        request.status === "Pending"
                          ? "text-yellow-400"
                          : request.status === "Approved"
                          ? "text-green-400"
                          : "text-green-400"
                      }
                    >
                      {request.status}
                    </span>
                  </p>
                  <p className="text-sm">
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