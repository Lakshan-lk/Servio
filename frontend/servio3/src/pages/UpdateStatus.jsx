import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  CalendarIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";

const UpdateStatus = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobId: id || "",
    status: "In Progress",
    notes: "",
  });

  const [jobs, setJobs] = useState([
    {
      id: "J1234",
      vehicle: "Toyota Camry",
      service: "Brake Repair",
      status: "In Progress",
      date: "2025-03-20",
    },
    {
      id: "J1235",
      vehicle: "Ford Focus",
      service: "Oil Change",
      status: "Pending",
      date: "2025-03-19",
    },
    {
      id: "J1236",
      vehicle: "Honda Civic",
      service: "Tire Rotation",
      status: "Completed",
      date: "2025-03-18",
    },
  ]);

  useEffect(() => {
    if (id) {
      const job = jobs.find((job) => job.id === id);
      if (job) {
        setFormData({
          jobId: job.id,
          status: job.status,
          notes: "",
        });
      }
    }
  }, [id, jobs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedJobs = jobs.map((job) =>
      job.id === formData.jobId ? { ...job, status: formData.status } : job
    );
    setJobs(updatedJobs);
    setFormData({ jobId: "", status: "In Progress", notes: "" });
    // Pass updated jobs back to JobList via navigation state
    navigate("/job-list", { state: { jobs: updatedJobs } });
  };

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
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">
      <header className="flex justify-between items-center bg-gray-900 p-4 shadow-lg sticky top-0 z-10 mb-8">
        <div className="flex items-center">
          <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
          <h1 className="text-2xl font-bold text-white font-[Poppins]">
            Update Job Status
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

      <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl mb-8"
        >
          <h2 className="text-xl font-bold font-[Poppins] mb-4 flex items-center">
            <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
            Update Job Status
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 font-[Open Sans] text-gray-300">
            <div>
              <label className="block text-sm font-medium mb-2">Job ID</label>
              <select
                name="jobId"
                value={formData.jobId}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                required
              >
                <option value="">Select Job ID</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.id} - {job.vehicle}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              >
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                rows="4"
                placeholder="Additional details about the status update..."
              />
            </div>
            <div className="md:col-span-2 flex justify-between items-center">
              <button
                type="submit"
                className="flex items-center bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-all duration-300 font-[Open Sans]"
              >
                <DocumentTextIcon className="h-5 w-5 mr-2" />
                Update Status
              </button>
            </div>
          </form>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
        >
          <h2 className="text-xl font-bold font-[Poppins] mb-4 flex items-center">
            <CalendarIcon className="h-6 w-6 text-red-500 mr-2" />
            Current Jobs
          </h2>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left font-[Open Sans] text-gray-300">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Job ID</th>
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Vehicle</th>
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Service</th>
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Status</th>
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Date</th>
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
                    <td className="p-4 text-sm font-medium">{job.id}</td>
                    <td className="p-4 text-sm font-medium">{job.vehicle}</td>
                    <td className="p-4 text-sm font-medium">{job.service}</td>
                    <td className="p-4 text-sm font-medium">
                      <span
                        className={
                          job.status === "Completed"
                            ? "text-green-400"
                            : job.status === "Pending"
                            ? "text-yellow-400"
                            : "text-red-400"
                        }
                      >
                        {job.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm font-medium">{job.date}</td>
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
                <div className="space-y-2 font-[Open Sans] text-gray-300">
                  <p className="text-base font-semibold text-white font-[Poppins]">
                    {job.vehicle}
                  </p>
                  <p className="text-sm">Job ID: <span className="font-medium">{job.id}</span></p>
                  <p className="text-sm">Service: <span className="font-medium">{job.service}</span></p>
                  <p className="text-sm">
                    Status:{" "}
                    <span
                      className={
                        job.status === "Completed"
                          ? "text-green-400"
                          : job.status === "Pending"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }
                    >
                      {job.status}
                    </span>
                  </p>
                  <p className="text-sm">Date: <span className="font-medium">{job.date}</span></p>
                </div>
              </motion.div>
            ))}
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

export default UpdateStatus;