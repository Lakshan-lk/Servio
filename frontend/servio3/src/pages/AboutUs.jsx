// src/pages/AboutUs.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  UsersIcon,
  StarIcon,
  HeartIcon,
  ArrowRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: UsersIcon, value: "600+", label: "Expert Mechanics" },
    { icon: WrenchScrewdriverIcon, value: "250+", label: "Modern Equipment" },
    { icon: HeartIcon, value: "455+", label: "Happy Clients" },
  ];

  const services = [
    { title: "Fitness Checking Facility", description: "Take advantage of our spacious gym equipped with a wide range of gym machines so you can achieve the maximum benefits from" },
    { title: "Expert Engine & Balancing", description: "Take advantage of our spacious gym equipped with a wide range of gym machines so you can achieve the maximum benefits from" },
    { title: "Car Wash Facility", description: "Take advantage of our spacious gym equipped with a wide range of gym machines so you can achieve the maximum benefits from" },
    { title: "Modern Technology", description: "Take advantage of our spacious gym equipped with a wide range of gym machines so you can achieve the maximum benefits from" },
  ];

  const team = [
    { name: "David Brandon", role: "Chief Mechanic", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60" },
    { name: "Sarah Mitchell", role: "", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60" },
    { name: "Michael Carter", role: "", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60" },
    { name: "Emily Davis", role: "", image: "https://images.unsplash.com/photo-1517841903200-7b8d4b9b3c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60" },
  ];

  const testimonials = [
    {
      quote: "Great service! A good workshop with modern equipment and amazing car mechanics. The have done car detailing of my Ferrari. They have done great job, Thank you & highly recommended",
      author: "Helen Jordan",
      location: "Chicago",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
      rating: 5,
    },
  ];

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <Header isLoggedIn={false} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/profile2.jpg')", // Adjusted path for public folder
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold font-[Poppins] tracking-tight drop-shadow-lg animate-slide-up">
            About Company
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold font-[Raleway] mt-4 animate-slide-up animate-delay-200">
            About Us
          </h2>
        </div>
      </section>

      {/* Main Content (Replaced About Description) */}
      <main className="flex-1 max-w-6xl mx-auto p-5">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-white text-center mb-10 font-[Poppins]"
        >
          
        </motion.h2>

        {/* Section 1: Drive Efficiency */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="flex flex-col md:flex-row items-center mb-10 bg-white/10 backdrop-blur-md p-6 rounded-xl"
        >
          <div className="flex-1 pr-0 md:pr-5 mb-5 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-3 font-[Poppins]">
              Drive Efficiency with Precision
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-[Open Sans]">
              At Vehicle Service & Repair Management System, we understand the
              challenges of running a busy repair shop. Our platform is designed
              to help technicians manage their tasks efficiently, from scheduling
              repairs to tracking parts and updating job statuses, ensuring every
              vehicle is back on the road in no time.
            </p>
          </div>
          <img
            src="/images/working.jpg" // Adjusted path for public folder
            alt="Technician Working"
            className="flex-1 w-full md:w-[400px] h-[300px] object-cover rounded-lg"
          />
        </motion.section>

        {/* Section 2: Automotive Excellence */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md p-6 rounded-xl"
        >
          <img
            src="/images/repair.jpg" // Adjusted path for public folder
            alt="Repair Shop"
            className="flex-1 w-full md:w-[400px] h-[300px] object-cover rounded-lg mr-0 md:mr-5 mb-5 md:mb-0"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 font-[Poppins]">
              A Journey Towards Automotive Excellence
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-[Open Sans]">
              Our system is built by a team of automotive enthusiasts and tech
              experts who are passionate about making a difference in the
              industry. We provide a seamless experience for technicians, shop
              managers, and customers, ensuring every repair job is handled with
              precision and care.
            </p>
          </div>
        </motion.section>
      </main>

      {/* Vision and Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-cover bg-center bg-no-repeat py-12 text-white text-center"
        style={{
          backgroundImage: "url('/images/dashboard-bg.jpg')", // Adjusted path for public folder
          backgroundColor: "rgba(29, 27, 27, 0.8)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="flex-1 p-5"
          >
            <img
              src="/images/panel1.jpg" // Adjusted path for public folder
              alt="Vision"
              className="mx-auto mb-3 w-32 h-32 object-cover rounded-full"
            />
            <h2 className="text-2xl font-bold mb-3 font-[Poppins]">Vision</h2>
            <p className="text-sm leading-relaxed font-[Open Sans] max-w-md mx-auto text-gray-300">
              To be the best in the country, Innovative, Progressive organization
              and to build island's most desirable brands by pioneering new
              technologies backed with customer satisfaction.
            </p>
          </motion.div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="flex-1 p-5"
          >
            <img
              src="/images/panel2.jpg" // Adjusted path for public folder
              alt="Mission"
              className="mx-auto mb-3 w-32 h-32 object-cover rounded-full"
            />
            <h2 className="text-2xl font-bold mb-3 font-[Poppins]">Mission</h2>
            <p className="text-sm leading-relaxed font-[Open Sans] max-w-md mx-auto text-gray-300">
              Driven by the principles of honesty and dedication, we strive to
              offer Sri Lankans affordable 'peoples' vehicles', while providing
              services that exceed their expectations.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="bg-red-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-4xl font-bold font-[Poppins]">{stat.value}</h3>
                <p className="text-lg font-[Open Sans] text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Section (Matching the Image) */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-center mb-12 animate-slide-up">
          Why Choose <span className="text-red-500">DucatiBox</span>
        </h2>
        <div className="relative flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
            alt="Car"
            className="w-full max-w-lg"
          />
          <div className="absolute inset-0 grid grid-cols-2 gap-8 p-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col p-4 text-white ${
                  index === 0 ? "self-start justify-self-start" :
                  index === 1 ? "self-start justify-self-end" :
                  index === 2 ? "self-end justify-self-start" :
                  "self-end justify-self-end"
                }`}
              >
                <h4 className="text-lg font-bold font-[Poppins] mb-2">{service.title}</h4>
                <p className="text-sm font-[Open Sans] text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Team Section (Matching the Image) */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side: Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-red-500 mr-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
                Meet Our Expert Car Mechanics
              </h2>
            </div>
            <p className="text-sm font-[Open Sans] text-gray-300 leading-relaxed">
              When you bring your vehicle to DucatiBox Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands to ensure that you experience.
            </p>
          </motion.div>

          {/* Right Side: Team Members */}
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-center">
                  <h4 className="text-sm font-bold font-[Poppins]">{member.name}</h4>
                  {member.role && (
                    <p className="text-xs font-[Open Sans] text-red-500">{member.role}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section (Matching the Image) */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-12 h-1 bg-red-500 mr-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
                What Our Clients Say About <span className="text-red-500">DucatiBox</span>...
              </h2>
            </div>
          </motion.div>

          {/* Right Side: Testimonial */}
          <div className="lg:w-2/3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-red-500" />
                      ))}
                    </div>
                    <p className="text-sm font-[Open Sans] text-gray-300">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-lg font-[Open Sans] text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm font-[Poppins] text-white">{testimonial.author}</p>
              </motion.div>
            ))}
            <button className="mt-6 text-red-500 font-[Raleway] hover:underline flex items-center">
              See All Reviews <ArrowRightIcon className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;