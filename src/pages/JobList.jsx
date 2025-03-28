// src/pages/JobList.jsx
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  UserIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

// Header Component
const Header = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/services" },
    { text: "Pages", path: "/pages" },
    { text: "Blog", path: "/blog" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="bg-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center text-sm font-[Open Sans] text-gray-300">
          <div className="flex flex-wrap items-center space-x-4">
            <span>ducatibox.repair@gmail.com</span>
            <span>8:00am - 10:00pm</span>
            <span>1710 119th Ave SE Unit A, Renton, WA 98059-5055</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5 text-red-500" />
            <span className="text-red-500">+459 78578 9155</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1
            className="text-3xl font-bold font-[Poppins] cursor-pointer"
            onClick={() => navigate("/")}
          >
            DucatiBox
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.text}
                to={link.path}
                className={`text-lg font-[Raleway] hover:text-red-500 transition-colors duration-300 animate-fade-in ${
                  location.pathname === link.path ? "text-red-500 font-semibold" : "text-gray-300"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Conditional Buttons */}
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full font-[Raleway] text-lg hover:bg-red-700 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${navLinks.length * 100}ms` }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full font-[Raleway] text-lg hover:bg-red-700 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${navLinks.length * 100}ms` }}
            >
              Login
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? (
                <XMarkIcon className="h-8 w-8 text-white" />
              ) : (
                <Bars3Icon className="h-8 w-8 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-4 py-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.text}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-lg font-[Raleway] hover:text-red-500 transition-colors duration-300 animate-fade-in ${
                location.pathname === link.path ? "text-red-500 font-semibold" : "text-gray-300"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.text}
            </Link>
          ))}
          {isLoggedIn ? (
            <button
              onClick={() => {
                onLogout();
                setIsOpen(false);
              }}
              className="block w-full text-left py-2 text-lg font-[Raleway] bg-red-600 text-white px-4 rounded-full mt-2 hover:bg-red-700 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${navLinks.length * 100}ms` }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
              className="block w-full text-left py-2 text-lg font-[Raleway] bg-red-600 text-white px-4 rounded-full mt-2 hover:bg-red-700 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${navLinks.length * 100}ms` }}
            >
              Login
            </button>
          )}
        </nav>
      )}
    </header>
  );
};

// Footer Component
const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = [
    { text: "About DucatiBox", path: "/about-us" },
    { text: "Membership Details", path: "/membership" },
    { text: "Opening Hours", path: "/hours" },
    { text: "Extra Services", path: "/services" },
  ];

  const servicesLinks = [
    { text: "Glass Replacement", path: "/services/glass-replacement" },
    { text: "Ceramic Coating", path: "/services/ceramic-coating" },
    { text: "Car Repairing", path: "/services/car-repairing" },
    { text: "Alignment Fixing", path: "/services/alignment-fixing" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold font-[Poppins] mb-4">DucatiBox</h3>
          <p className="text-sm font-[Open Sans] text-gray-300">
            Call Us Anytime: <span className="text-red-500">+123 45677345</span>
          </p>
          <p className="text-sm font-[Open Sans] text-gray-300">
            1710 119th Ave SE Unit A, Renton, WA 98059-5055
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-xl font-bold font-[Poppins] mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm font-[Open Sans] text-gray-300">
            {servicesLinks.map((link, index) => (
              <li key={link.text}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.path);
                  }}
                  className="hover:text-red-500 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold font-[Poppins] mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm font-[Open Sans] text-gray-300">
            {footerLinks.map((link, index) => (
              <li key={link.text}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.path);
                  }}
                  className="hover:text-red-500 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold font-[Poppins] mb-4">Newsletter</h3>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded-lg font-[Open Sans] focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-full font-[Raleway] hover:bg-red-700 transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm font-[Open Sans] text-gray-300">
        © {new Date().getFullYear()} WPTHEMEBOOSTER. All rights reserved.
      </div>
    </footer>
  );
};

// Main JobList Component
const JobList = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      id: "J1234",
      vehicle: "Toyota Camry",
      customer: "Chanuka Herath",
      service: "Brake Repair",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "J1235",
      vehicle: "Ford Focus",
      customer: "Suneth Herath",
      service: "Oil Change",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: "J1236",
      vehicle: "Honda Civic",
      customer: "Lakshan Ekanayaka",
      service: "Tire Rotation",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
    },
  ];

  // Animation variants for rows
  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
    hover: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  // Logout handler
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans pt-20">
      {/* Header */}
      <Header isLoggedIn={true} onLogout={handleLogout} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
          <h2 className="text-2xl font-bold font-[Poppins] mb-6 flex items-center">
            <WrenchScrewdriverIcon className="h-8 w-8 text-red-500 mr-3" />
            All Jobs
          </h2>

          {/* Table for Larger Screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left font-[Open Sans] text-gray-300">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 text-sm font-[Poppins] font-semibold">
                    <input type="checkbox" className="mr-2 text-red-500 focus:ring-red-500" />
                  </th>
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Job ID</th>
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Vehicle</th>
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Customer</th>
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Service</th>
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Status</th>
                  <th className="p-4 text-sm font-[Poppins] font-semibold">Actions</th>
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
                    <td className="p-4 text-sm">{job.id}</td>
                    <td className="p-4 text-sm flex items-center">
                      <img
                        src={job.image}
                        alt={job.vehicle}
                        className="w-12 h-8 object-cover rounded-lg mr-3"
                      />
                      {job.vehicle}
                    </td>
                    <td className="p-4 text-sm">{job.customer}</td>
                    <td className="p-4 text-sm">{job.service}</td>
                    <td className="p-4 text-sm">
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
                        to={`/job-details/${job.id}`}
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

          {/* Card Layout for Mobile Screens */}
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
                  <img
                    src={job.image}
                    alt={job.vehicle}
                    className="w-16 h-12 object-cover rounded-lg mr-3"
                  />
                  <div>
                    <p className="text-base font-semibold font-[Poppins]">{job.vehicle}</p>
                    <p className="text-sm text-gray-300">Job ID: {job.id}</p>
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
                  to={`/job-details/${job.id}`}
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JobList;