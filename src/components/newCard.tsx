import React from "react";

const NewCard = ({ userId, id, title, body }) => {
  return (
    <div className="bg-white hover:bg-pink-200 rounded-2xl shadow-md p-6 max-w-xl mx-auto my-4">
      <p className="text-sm text-gray-500 mb-2">
        User ID: {userId} | Post ID: {id}
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{body}</p>
    </div>
  );
};

export default NewCard;
