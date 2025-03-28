// src/pages/Profile.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCar, FaUser, FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("personal");

  // Sample data (replace with backend data later)
  const technicianData = {
    name: "Chanuka Herath",
    technicianId: "T001",
    email: "chanux32@gmail.com",
    phone: "076 45678905",
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('./images/profile2.jpg')",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-4 shadow-lg sticky top-0 z-10 mb-8">
        <div className="flex items-center">
          <FaUser className="text-3xl text-indigo-500 mr-3" />
          <h1 className="text-2xl font-bold text-gray-800 font-poppins">
            Technician Profile
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
          <button className="flex items-center bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 font-inter font-medium">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 max-w-7xl mx-auto bg-white p-8  rounded-xl shadow-lg backdrop-blur-sm bg-opacity-90 mb-8">
        {/* Tabs */}
        <div className="flex border-b-2 border-gray-200 mb-6">
          <button
            className={`flex-1 py-3 text-base font-bold font-poppins transition-all duration-300 ${
              activeTab === "personal"
                ? "text-blue-600 bg-gray-50 border-b-2 border-blue-600"
                : "text-gray-600 bg-white hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal Info
          </button>
          <button
            className={`flex-1 py-3 text-base font-bold font-poppins transition-all duration-300 ${
              activeTab === "availability"
                ? "text-blue-600 bg-gray-50 border-b-2 border-blue-600"
                : "text-gray-600 bg-white hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("availability")}
          >
            Availability
          </button>
          <button
            className={`flex-1 py-3 text-base font-bold font-poppins transition-all duration-300 ${
              activeTab === "security"
                ? "text-blue-600 bg-gray-50 border-b-2 border-blue-600"
                : "text-gray-600 bg-white hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
        </div>

        {/* Tab Content */}
        <motion.section
          key={activeTab}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Personal Info */}
          {activeTab === "personal" && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mb-6 font-inter">
                <label className="text-sm text-gray-600 font-medium">
                  Name:
                </label>
                <input
                  type="text"
                  defaultValue={technicianData.name}
                  className="p-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-600 font-medium">
                  Technician ID:
                </label>
                <input
                  type="text"
                  defaultValue={technicianData.technicianId}
                  disabled
                  className="p-2 border border-gray-300 rounded-lg text-sm text-gray-600 bg-gray-100"
                />
                <label className="text-sm text-gray-600 font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  defaultValue={technicianData.email}
                  className="p-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-600 font-medium">
                  Phone:
                </label>
                <input
                  type="tel"
                  defaultValue={technicianData.phone}
                  className="p-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* Availability */}
          {activeTab === "availability" && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                Set Availability
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 font-inter">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <div key={day} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-800 font-bold font-poppins mb-2">
                      {day}
                    </p>
                    <label className="block text-sm text-gray-600">
                      <input type="checkbox" className="mr-2 accent-blue-500" />{" "}
                      8:00 AM
                    </label>
                    <label className="block text-sm text-gray-600">
                      <input type="checkbox" className="mr-2 accent-blue-500" />{" "}
                      6:00 PM
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === "security" && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                Security Settings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 font-inter">
                <label className="text-sm text-gray-600 font-medium">
                  Current Password:
                </label>
                <input
                  type="password"
                  className="p-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-600 font-medium">
                  New Password:
                </label>
                <input
                  type="password"
                  className="p-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-600 font-medium">
                  Confirm New Password:
                </label>
                <input
                  type="password"
                  className="p-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* Save/Reset Buttons */}
          <div className="text-right mt-6">
            <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg mr-2 hover:from-green-600 hover:to-green-800 transition-all duration-300 font-inter font-medium">
              Save Changes
            </button>
            <button className="bg-red-500 text-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition-all duration-300 font-inter font-medium">
              Reset
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Profile;