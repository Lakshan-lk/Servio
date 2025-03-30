import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { WrenchScrewdriverIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

const JobList = () => {
  const location = useLocation();
  const initialJobs = [
    {
      id: "J1234",
      vehicle: "Toyota Camry",
      customer: "Chanuka Herath",
      service: "Brake Repair",
      status: "In Progress",
    },
    {
      id: "J1235",
      vehicle: "Ford Focus",
      customer: "Suneth Herath",
      service: "Oil Change",
      status: "Pending",
    },
    {
      id: "J1236",
      vehicle: "Honda Civic",
      customer: "Lakshan Ekanayaka",
      service: "Tire Rotation",
      status: "In Progress",
    },
  ];

  // Use navigation state if available, otherwise use initial data
  const [jobs, setJobs] = useState(location.state?.jobs || initialJobs);

  // Update jobs if new data comes from navigation
  useEffect(() => {
    if (location.state?.jobs) {
      setJobs(location.state.jobs);
    }
  }, [location.state]);

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      <header className="flex justify-between items-center bg-gray-900 p-4 shadow-lg sticky top-0 z-10 mb-8">
        <div className="flex items-center">
          <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
          <h1 className="text-2xl font-bold text-white font-[Poppins]">
            Job List
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/pending-jobs"
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
          >
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            Pending Jobs
          </Link>
          <Link
            to="/job-add"
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
          >
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            New Job
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
          >
            <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center font-[Poppins]">
            <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
            All Jobs
          </h2>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left font-[Open Sans] text-gray-300">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">
                    <input type="checkbox" className="mr-2 text-red-500 focus:ring-red-500" />
                  </th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">Job ID</th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">Vehicle</th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">Customer</th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">Service</th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">Status</th>
                  <th className="p-4 text-sm text-gray-300 font-[Poppins] font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
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
                    <td className="p-4 text-sm text-gray-300 font-medium">{job.id}</td>
                    <td className="p-4 text-sm text-gray-300 font-medium">{job.vehicle}</td>
                    <td className="p-4 text-sm text-gray-300 font-medium">{job.customer}</td>
                    <td className="p-4 text-sm text-gray-300 font-medium">{job.service}</td>
                    <td className="p-4 text-sm text-gray-300 font-medium">
                      <span className="flex items-center">
                        <span
                          className={`w-3 h-3 rounded-full mr-2 ${
                            job.status === "In Progress" ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></span>
                        {job.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <Link
                        to={`/view-details/${job.id}`}
                        className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
                      >
                        <DocumentTextIcon className="h-5 w-5 mr-2" />
                        View Details
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {jobs.map((job, index) => (
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
                          job.status === "In Progress" ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></span>
                      <span className="font-medium">{job.status}</span>
                    </span>
                  </p>
                </div>
                <Link
                  to={`/view-details/${job.id}`}
                  className="flex items-center mt-3 bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
                >
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobList;