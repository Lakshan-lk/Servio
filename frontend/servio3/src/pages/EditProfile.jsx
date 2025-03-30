import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ArrowLeftIcon,
  PencilIcon,
} from "@heroicons/react/24/solid"; // Matching Profile.jsx icons

const EditProfile = () => {
  const navigate = useNavigate();

  // Initial technician data (this could come from props or an API in a real app)
  const [formData, setFormData] = useState({
    name: "Chanuka Herath",
    technicianId: "T001",
    email: "chanux32@gmail.com",
    phone: "076 45678905",
  });

  // Animation variants matching Profile.jsx
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    console.log("Updated Profile:", formData);
    navigate("/profile"); // Redirect back to Profile page after saving
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-800 p-4 shadow-lg sticky top-0 z-10 mb-8">
        <div className="flex items-center">
          <UserGroupIcon className="h-8 w-8 text-red-500 mr-3" />
          <h1 className="text-2xl font-bold font-[Poppins] text-white">
            Edit Technician Profile
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/profile"
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Profile
          </Link>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl"
        >
          <h2 className="text-xl font-bold font-[Poppins] mb-6 text-white flex items-center">
            <PencilIcon className="h-6 w-6 text-red-500 mr-2" />
            Update Personal Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 font-[Open Sans] text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
              {/* Name */}
              <label className="text-sm font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                placeholder="Enter your name"
              />

              {/* Technician ID (Disabled) */}
              <label className="text-sm font-medium">Technician ID:</label>
              <input
                type="text"
                name="technicianId"
                value={formData.technicianId}
                disabled
                className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-400"
              />

              {/* Email */}
              <label className="text-sm font-medium">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                placeholder="Enter your email"
              />

              {/* Phone */}
              <label className="text-sm font-medium">Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <Link
                to="/profile"
                className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-700 transition-all duration-300 no-underline font-[Open Sans]"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 font-[Open Sans]"
              >
                <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
                Save Changes
              </button>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default EditProfile;