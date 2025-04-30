import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-600 text-white py-4">
      <ul className="flex justify-center gap-8">
        <li>
          <Link to="/" className="underline hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/AboutUs" className="underline hover:text-blue-400">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/ContactUs" className="underline hover:text-blue-400">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
