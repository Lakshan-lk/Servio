import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";

import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

import JobList from "./pages/JobList";
import Jobadd from "./pages/Jobadd";
import PendingJob from "./pages/PendingJob";
import ViewDetails from "./pages/ViewDetails";

//import ViewDetails from "./pages/ViewDetails";

import UpdateStatus from "./pages/UpdateStatus";

import VehiclePartsRequest from "./pages/VehiclePartsRequest";
import React from "react";
import "./index.css";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        
        <Route path="/job-list" element={<JobList />} />
        <Route path="/job-add" element={<Jobadd />} />
        <Route path="/pending-jobs" element={<PendingJob />} />
        <Route path="/view-details/:id" element={<ViewDetails />} />

        <Route path="/update-status/:id" element={<UpdateStatus />} />

        <Route path="/parts-request" element={<VehiclePartsRequest />} />
        
        
        
      </Routes>
    </Router>
  );
}
                      
export default App;