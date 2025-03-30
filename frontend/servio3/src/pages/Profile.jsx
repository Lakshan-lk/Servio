// src/pages/Profile.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  PencilIcon,
  CalendarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid"; // Matching Dashboard icons

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const technicianData = {
    name: "Chanuka Herath",
    technicianId: "T001",
    email: "chanux32@gmail.com",
    phone: "076 45678905",
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-800 p-4 shadow-lg sticky top-0 z-10 mb-8">
        <div className="flex items-center">
          <UserGroupIcon className="h-8 w-8 text-red-500 mr-3" />
          <h1 className="text-2xl font-bold font-[Poppins] text-white">
            Technician Profile
          </h1>
        </div>
        <div className="flex items-center space-x-3">
        <Link
            to="/editprofile"
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
          >
            <PencilIcon className="h-5 w-5 mr-2" />
            Edit Profile
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
          >
            <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 font-[Open Sans]">
            <CalendarIcon className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
          {/* Tabs */}
          <div className="flex border-b-2 border-gray-700 mb-6">
            <button
              className={`flex-1 py-3 text-base font-bold font-[Poppins] transition-all duration-300 ${
                activeTab === "personal"
                  ? "text-red-500 bg-white/10 border-b-2 border-red-500"
                  : "text-gray-300 hover:bg-white/5"
              }`}
              onClick={() => setActiveTab("personal")}
            >
              Personal Info
            </button>
            <button
              className={`flex-1 py-3 text-base font-bold font-[Poppins] transition-all duration-300 ${
                activeTab === "availability"
                  ? "text-red-500 bg-white/10 border-b-2 border-red-500"
                  : "text-gray-300 hover:bg-white/5"
              }`}
              onClick={() => setActiveTab("availability")}
            >
              Availability
            </button>
            <button
              className={`flex-1 py-3 text-base font-bold font-[Poppins] transition-all duration-300 ${
                activeTab === "security"
                  ? "text-red-500 bg-white/10 border-b-2 border-red-500"
                  : "text-gray-300 hover:bg-white/5"
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
                <h2 className="text-xl font-bold font-[Poppins] mb-4 text-white flex items-center">
                  <UserGroupIcon className="h-6 w-6 text-red-500 mr-2" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mb-6 font-[Open Sans] text-gray-300">
                  <label className="text-sm font-medium">Name:</label>
                  <input
                    type="text"
                    defaultValue={technicianData.name}
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <label className="text-sm font-medium">Technician ID:</label>
                  <input
                    type="text"
                    defaultValue={technicianData.technicianId}
                    disabled
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-400"
                  />
                  <label className="text-sm font-medium">Email:</label>
                  <input
                    type="email"
                    defaultValue={technicianData.email}
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <label className="text-sm font-medium">Phone:</label>
                  <input
                    type="tel"
                    defaultValue={technicianData.phone}
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            )}

            {/* Availability */}
            {activeTab === "availability" && (
              <div>
                <h2 className="text-xl font-bold font-[Poppins] mb-4 text-white flex items-center">
                  <CalendarIcon className="h-6 w-6 text-red-500 mr-2" />
                  Set Availability
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 font-[Open Sans] text-gray-300">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <div key={day} className="bg-white/5 p-4 rounded-lg">
                      <p className="text-sm font-bold font-[Poppins] mb-2 text-white">
                        {day}
                      </p>
                      <label className="block text-sm">
                        <input type="checkbox" className="mr-2 accent-red-500" />{" "}
                        8:00 AM
                      </label>
                      <label className="block text-sm">
                        <input type="checkbox" className="mr-2 accent-red-500" />{" "}
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
                <h2 className="text-xl font-bold font-[Poppins] mb-4 text-white flex items-center">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
                  Security Settings
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 font-[Open Sans] text-gray-300">
                  <label className="text-sm font-medium">Current Password:</label>
                  <input
                    type="password"
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <label className="text-sm font-medium">New Password:</label>
                  <input
                    type="password"
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <label className="text-sm font-medium">
                    Confirm New Password:
                  </label>
                  <input
                    type="password"
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            )}

            {/* Save/Reset Buttons */}
            <div className="text-right mt-6">
              <button className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 font-[Open Sans] mr-2">
                Save Changes
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 font-[Open Sans]">
                Reset
              </button>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Profile;