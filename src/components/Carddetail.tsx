import React from 'react'
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

export const Carddetail = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold">Welcome to the ContactUs: {id}</h1>
    </div>
  );
}
