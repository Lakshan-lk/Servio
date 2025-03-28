import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import JobList from "./pages/JobList";
import VehiclePartsRequest from "./pages/VehiclePartsRequest";
import React from "react";
import "./index.css";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/parts-request" element={<VehiclePartsRequest />} />
        
        
        
      </Routes>
    </Router>
  );
}
                      
export default App;