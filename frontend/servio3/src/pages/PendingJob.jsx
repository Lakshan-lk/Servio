import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  ArrowLeftIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid"; // Modern Heroicons matching JobList.jsx

const PendingJob = () => {
  // Filter jobs to show only those with "Pending" status
  const pendingJobs = [
    {
      id: "J1235",
      vehicle: "Ford Focus",
      customer: "Suneth Herath",
      service: "Oil Change",
      status: "Pending",
    },
    // Add more pending jobs as needed (in a real app, this would come from an API)
  ];

  // Animation variants matching JobList.jsx
  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  // Placeholder functions for Accept and Decline actions
  const handleAccept = (jobId) => {
    console.log(`Accepted job with ID: ${jobId}`);
    // In a real app, this would update the job status to "In Progress" via an API call
  };

  const handleDecline = (jobId) => {
    console.log(`Declined job with ID: ${jobId}`);
    // In a real app, this would update the job status or delete the job via an API call
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-900 p-4 shadow-lg sticky top-0 z-10 mb-8">
        <div className="flex items-center">
          <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
          <h1 className="text-2xl font-bold text-white font-[Poppins]">
            Pending Jobs
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
      <main className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center font-[Poppins]">
            <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
            Pending Job Requests
          </h2>

          {/* Table for Larger Screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left font-[Open Sans] text-gray-300">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    <input type="checkbox" className="mr-2 text-red-500 focus:ring-red-500" />
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Job ID
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Vehicle
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Customer
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Service
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Status
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {pendingJobs.length > 0 ? (
                  pendingJobs.map((job, index) => (
                    <motion.tr
                      key={job.id}
                      custom={index}
                      variants={rowVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className="border-b border-white/10"
                    >
                      <td className="p-4">
                        <input type="checkbox" className="mr-2 text-red-500 focus:ring-red-500" />
                      </td>
                      <td className="p-4 text-sm text-gray-300 font-medium">
                        {job.id}
                      </td>
                      <td className="p-4 text-sm text-gray-300 font-medium flex items-center">
                        {job.vehicle}
                      </td>
                      <td className="p-4 text-sm text-gray-300 font-medium">
                        {job.customer}
                      </td>
                      <td className="p-4 text-sm text-gray-300 font-medium">
                        {job.service}
                      </td>
                      <td className="p-4 text-sm text-gray-300 font-medium">
                        <span className="flex items-center">
                          <span
                            className={`w-3 h-3 rounded-full mr-2 ${
                              job.status === "Pending" ? "bg-red-500" : "bg-green-500"
                            }`}
                          ></span>
                          {job.status}
                        </span>
                      </td>
                      <td className="p-4 flex space-x-2">
                        <button
                          onClick={() => handleAccept(job.id)}
                          className="flex items-center bg-green-600 text-white px-3 py-1 rounded-full font-medium hover:bg-green-700 transition-all duration-300 no-underline font-[Open Sans]"
                        >
                          <CheckIcon className="h-5 w-5 mr-1" />
                          Accept
                        </button>
                        <button
                          onClick={() => handleDecline(job.id)}
                          className="flex items-center bg-red-600 text-white px-3 py-1 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
                        >
                          <XMarkIcon className="h-5 w-5 mr-1" />
                          Decline
                        </button>
                        <Link
                          to={`/job-details/${job.id}`}
                          className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 no-underline font-[Open Sans]"
                        >
                          <DocumentTextIcon className="h-5 w-5 mr-1" />
                          View Details
                        </Link>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="p-4 text-center text-gray-400">
                      No pending jobs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Card Layout for Mobile Screens */}
          <div className="md:hidden space-y-4">
            {pendingJobs.length > 0 ? (
              pendingJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="bg-white/5 p-4 rounded-lg"
                >
                  <div className="flex items-center mb-3">
                    <input type="checkbox" className="mr-3 text-red-500 focus:ring-red-500" />
                    <img
                      src={job.image}
                      alt={job.vehicle}
                      className="w-16 h-12 object-cover rounded-lg mr-3"
                    />
                    <div>
                      <p className="text-base font-semibold text-white font-[Poppins]">
                        {job.vehicle}
                      </p>
                      <p className="text-sm text-gray-300 font-[Open Sans]">
                        Job ID: {job.id}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 font-[Open Sans] text-gray-300">
                    <p className="text-sm">
                      Customer: <span className="font-medium">{job.customer}</span>
                    </p>
                    <p className="text-sm">
                      Service: <span className="font-medium">{job.service}</span>
                    </p>
                    <p className="text-sm">
                      Status:{" "}
                      <span className="flex items-center">
                        <span
                          className={`w-3 h-3 rounded-full mr-2 ${
                            job.status === "Pending" ? "bg-red-500" : "bg-green-500"
                          }`}
                        ></span>
                        <span className="font-medium">{job.status}</span>
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={() => handleAccept(job.id)}
                      className="flex items-center bg-green-600 text-white px-3 py-1 rounded-full font-medium hover:bg-green-700 transition-all duration-300 no-underline font-[Open Sans]"
                    >
                      <CheckIcon className="h-5 w-5 mr-1" />
                      Accept
                    </button>
                    <button
                      onClick={() => handleDecline(job.id)}
                      className="flex items-center bg-red-600 text-white px-3 py-1 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
                    >
                      <XMarkIcon className="h-5 w-5 mr-1" />
                      Decline
                    </button>
                    <Link
                      to={`/job-details/${job.id}`}
                      className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 no-underline font-[Open Sans]"
                    >
                      <DocumentTextIcon className="h-5 w-5 mr-1" />
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-400">
                No pending jobs found.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PendingJob;