import React from "react";
import { Link, useParams } from "react-router-dom";

export const Card = ({ id, title, description, image, className = "" }) => {
  return (
    <div className={`border rounded-2xl shadow-lg p-4 max-w-sm bg-white group ${className}`}>
      <Link to={`/aboutus/card/${id}`}>
        <div className="group-hover:w-[300px] group-hover:text-pink-800">
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold">{title}</h2>
          <h3 className="text-lg text-gray-600 group-hover:text-pink-800">
            {description}
          </h3>
          <button className="border rounded-sm w-40 bg-white">
            Learn More
          </button>
        </div>
      </Link>
    </div>
  );
};

