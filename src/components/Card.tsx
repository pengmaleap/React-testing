import React from "react";
import { Link, useParams } from "react-router-dom";

export const Card = ({ className = "" }) => {
  const { id } = useParams();

  return (
    <div
      className={`border rounded-2xl shadow-lg p-4 max-w-sm bg-white group ${className}`}
    >
      <Link to={`/aboutus/card1/${id}`}>
        <div className="group-hover:w-[300px] group-hover:text-pink-800">
          <img
            src={`https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=80${id}`}
            alt="Beautiful Tree"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold">Tree Guide</h2>
          <h3 className="text-lg text-gray-600 group-hover:text-pink-800">
            Learn about different trees
          </h3>
          <button className="border rounded-sm w-40 bg-white">
            Learn More
          </button>
        </div>
      </Link>
    </div>
  );
};

