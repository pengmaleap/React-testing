import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./darkmodebutton";

const Navbar = () => {
  return (
    <nav className="bg-pink-600 text-white py-4 flex justify-between p-10">
      <img src="logo" alt="logo" />
        <ul className="flex justify-center gap-8">
          <li>
            <Link to="/" className="hover:underline hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="hover:underline hover:text-blue-400">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/ContactUs"
              className="hover:underline hover:text-blue-400"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
