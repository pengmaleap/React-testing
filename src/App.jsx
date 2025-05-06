// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import AboutUs from "./Pages/About-Us";
import ContactUs from "./Pages/Contact-Us";
import { Carddetail } from "./components/Carddetail";

function App() { 
  return (
    <div className="w-screen h-screen dark:bg-gray-900">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus/:id" element={<Carddetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

