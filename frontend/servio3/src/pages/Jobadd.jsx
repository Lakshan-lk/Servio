import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  ArrowLeftIcon,
  PlusIcon,
} from "@heroicons/react/24/solid"; // Modern Heroicons matching JobList.jsx

const JobAdd = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    vehicle: "",
    customer: "",
    service: "",
    status: "Pending",
    image: "",
  });

  // Animation variants matching JobList.jsx
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to an API
    console.log("New Job:", formData);
    navigate("/job-list"); // Redirect to JobList after submission
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-900 p-4 shadow-lg sticky top-0 z-10 mb-8">
        <div className="flex items-center">
          <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
          <h1 className="text-2xl font-bold text-white font-[Poppins]">
            Add New Job
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/job-list"
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Job List
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center font-[Poppins]">
            <PlusIcon className="h-6 w-6 text-red-500 mr-2" />
            Create New Job
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 font-[Open Sans]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vehicle */}
              <div>
                <label className="block text-sm text-gray-300 font-medium mb-2">
                  Vehicle
                </label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  placeholder="e.g., Toyota Camry"
                />
              </div>

              {/* Customer */}
              <div>
                <label className="block text-sm text-gray-300 font-medium mb-2">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customer"
                  value={formData.customer}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  placeholder="e.g., John Doe"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm text-gray-300 font-medium mb-2">
                  Service
                </label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  placeholder="e.g., Brake Repair"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm text-gray-300 font-medium mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-300 font-medium mb-2">
                  Vehicle Image URL (Optional)
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  placeholder="e.g., https://example.com/image.jpg"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <Link
                to="/job-list"
                className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-700 transition-all duration-300 no-underline font-[Open Sans]"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 font-[Open Sans]"
              >
                <DocumentTextIcon className="h-5 w-5 mr-2" />
                Add Job
              </button>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default JobAdd;