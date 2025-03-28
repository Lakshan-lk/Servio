import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations
import {
  WrenchScrewdriverIcon,
  CalendarIcon,
  UserGroupIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  UsersIcon,
  TrophyIcon,
  HeartIcon,
} from "@heroicons/react/24/solid"; // Use Heroicons to match GuestHome
import Header from "../components/Header"; // Import Header component
import Footer from "../components/Footer"; // Import Footer component

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = {
    tasksToday: 4,
    completed: 1,
    pending: 3,
    urgent: 1,
    assignedJobs: 5,
    completedJobs: 2,
    pendingRequests: 3,
  };

  const recentJobs = [
    {
      vehicle: "Toyota Camry",
      service: "Brake Repair",
      priority: "High",
      due: "2025-03-20 15:00",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    },
    {
      vehicle: "Ford Focus",
      service: "Oil Change",
      priority: "Medium",
      due: "2025-03-20 17:00",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    },
    {
      vehicle: "Honda Civic",
      service: "Tire Rotation",
      priority: "Low",
      due: "2025-03-21 10:00",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  // Stats for the hero section
  const heroStats = [
    
  ];

  // Logout handler
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <Header isLoggedIn={true} onLogout={handleLogout} />

      {/* Full-Screen Hero Section */}
      <section className="relative h-[700px] bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('./images/abbg.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Side: Heading and Subheading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="flex justify-center lg:justify-start mb-4">
              <div className="w-24 h-1 bg-red-500 rounded-full animate-fade-in"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 animate-slide-up font-[Poppins] tracking-tight drop-shadow-lg">
              Welcome Back, Technician!
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto lg:mx-0 animate-slide-up animate-delay-200 font-[Open Sans] leading-relaxed">
              Manage your tasks efficiently and keep vehicles running smoothly.
            </p>
          </motion.div>

          {/* Right Side: Stats */}
          <div className="hidden lg:flex flex-col space-y-4 justify-center">
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-lg p-3"
              >
                <stat.icon className="h-6 w-6 text-red-500" />
                <div>
                  <p className="text-lg font-bold font-[Poppins]">{stat.value}</p>
                  <p className="text-sm font-[Open Sans] text-gray-300">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="h-10 w-10 text-white opacity-70 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </section>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Stats and Quick Actions */}
          <div className="space-y-8">
            {/* Today’s Tasks Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={0}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl animate-scale-up"
            >
              <h2 className="text-xl font-bold font-[Poppins] mb-4 flex items-center">
                <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
                Today’s Tasks
              </h2>
              <div className="space-y-2 font-[Open Sans] text-gray-300">
                <p>Tasks Today: <span className="font-semibold">{stats.tasksToday}</span></p>
                <p className="text-green-400">Completed: <span className="font-semibold">{stats.completed}</span></p>
                <p className="text-yellow-400">Pending: <span className="font-semibold">{stats.pending}</span></p>
                <p className="text-red-400">Urgent: <span className="font-semibold">{stats.urgent}</span></p>
              </div>
            </motion.div>

            {/* Overview Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={1}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl animate-scale-up"
            >
              <h2 className="text-xl font-bold font-[Poppins] mb-4 flex items-center">
                <DocumentTextIcon className="h-6 w-6 text-red-500 mr-2" />
                Overview
              </h2>
              <div className="space-y-2 font-[Open Sans] text-gray-300">
                <p>Assigned Jobs: <span className="font-semibold">{stats.assignedJobs}</span></p>
                <p className="text-green-400">Completed Jobs: <span className="font-semibold">{stats.completedJobs}</span></p>
                <p className="text-yellow-400">Pending Requests: <span className="font-semibold">{stats.pendingRequests}</span></p>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={2}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl animate-scale-up"
            >
              <h2 className="text-xl font-bold font-[Poppins] mb-4 flex items-center">
                <CalendarIcon className="h-6 w-6 text-red-500 mr-2" />
                Quick Actions
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/job-list"
                  className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
                >
                  <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
                  Job List
                </Link>
                <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 font-[Open Sans]">
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Update Status
                </button>
                <Link
                  to="/parts-request"
                  className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
                >
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  Vehicle Parts Request
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Recent Jobs List */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h2 className="text-xl font-bold font-[Poppins] mb-4 flex items-center">
                <UserGroupIcon className="h-6 w-6 text-red-500 mr-2" />
                Recent Jobs
              </h2>
              <div className="relative">
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {recentJobs.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                    >
                      <img
                        src={job.image}
                        alt={job.service}
                        className="w-24 h-16 object-cover rounded-lg mr-4"
                      />
                      <div className="flex-1 font-[Open Sans] text-gray-300">
                        <p className="text-base font-semibold">
                          {job.vehicle} - {job.service}
                        </p>
                        <p>
                          Priority:{" "}
                          <span
                            className={
                              job.priority === "High"
                                ? "text-red-400"
                                : job.priority === "Medium"
                                ? "text-yellow-400"
                                : "text-green-400"
                            }
                          >
                            {job.priority}
                          </span>
                        </p>
                        <p>Due: {job.due}</p>
                      </div>
                      <Link
                        to={`/job-details/${index}`}
                        className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
                      >
                        <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
                        View Details
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;