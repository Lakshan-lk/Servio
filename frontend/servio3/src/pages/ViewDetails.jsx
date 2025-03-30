import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  CalendarIcon,
  UserIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample job data (consistent with UpdateStatus)
  const jobs = [
    {
      id: "J1234",
      vehicle: "Toyota Camry",
      customer: "Chanuka Herath",
      service: "Brake Repair",
      status: "In Progress",
      date: "2025-03-20",
      priority: "High",
      notes: "Customer reported squeaking brakes. Replaced brake pads and rotors. Test drive completed.",
    },
    {
      id: "J1235",
      vehicle: "Ford Focus",
      customer: "Suneth Herath",
      service: "Oil Change",
      status: "Pending",
      date: "2025-03-19",
      priority: "Medium",
      notes: "Scheduled for standard oil change. Awaiting customer approval for additional fluid checks.",
    },
    {
      id: "J1236",
      vehicle: "Honda Civic",
      customer: "Lakshan Ekanayaka",
      service: "Tire Rotation",
      status: "In Progress",
      date: "2025-03-18",
      priority: "Low",
      notes: "Tires rotated as per schedule. Noticed slight wear on front left tire, recommended replacement.",
    },
  ];

  // Find the job by ID
  const job = jobs.find((job) => job.id === id) || {};

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-900 p-4 shadow-lg sticky top-0 z-10 mb-8">
        <div className="flex items-center">
          <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
          <h1 className="text-2xl font-bold text-white font-[Poppins]">
            View Details
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/dashboard"
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
          >
            <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
              <h2 className="text-xl font-bold font-[Poppins] text-white">
                Job Details - {job.id}
              </h2>
            </div>
            <Link
              to="/job-list"
              className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Job List
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-2xl font-bold font-[Poppins] text-white">
                    {job.vehicle}
                  </h3>
                  <p className="text-sm font-[Open Sans] text-gray-300">
                    Job ID: {job.id}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <UserIcon className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm font-[Open Sans] text-gray-300">Customer</p>
                    <p className="text-base font-medium font-[Open Sans] text-white">
                      {job.customer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm font-[Open Sans] text-gray-300">Service</p>
                    <p className="text-base font-medium font-[Open Sans] text-white">
                      {job.service}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm font-[Open Sans] text-gray-300">Date</p>
                    <p className="text-base font-medium font-[Open Sans] text-white">
                      {job.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <DocumentTextIcon className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm font-[Open Sans] text-gray-300">Status</p>
                    <p
                      className={`text-base font-medium font-[Open Sans] ${
                        job.status === "Completed"
                          ? "text-green-400"
                          : job.status === "Pending"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {job.status}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm font-[Open Sans] text-gray-300">Priority</p>
                    <p
                      className={`text-base font-medium font-[Open Sans] ${
                        job.priority === "High"
                          ? "text-red-400"
                          : job.priority === "Medium"
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >
                      {job.priority}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-lg font-bold font-[Poppins] text-white mb-2">
                  Notes
                </h4>
                <p className="text-sm font-[Open Sans] text-gray-300">
                  {job.notes || "No notes available."}
                </p>
              </div>

              <div className="flex flex-col space-y-3">
                <Link
                  to={`/update-status/${job.id}`} // This link is already correct
                  className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition-all duration-300 no-underline font-[Open Sans]"
                >
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Update Status
                </Link>
                <button
                  onClick={() => alert("Contacting customer...")}
                  className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-600 transition-all duration-300 font-[Open Sans]"
                >
                  <PhoneIcon className="h-5 w-5 mr-2 text-red-500" />
                  Contact Customer
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-800 p-4 mt-auto">
        <div className="text-center text-gray-300 font-[Open Sans]">
          © {new Date().getFullYear()} Auto Service Management
        </div>
      </footer>
    </div>
  );
};

export default ViewDetails;