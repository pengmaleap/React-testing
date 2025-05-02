import React from 'react'
import Navbar from '../components/Navbar';
import { Card } from '../components/Card';


function AboutUs() {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold">Welcome to the AboutUs</h1>
      <div className='flex justify-center items-center gap-14 '>
        <Card className="bg-blue-300"></Card>
        <Card className="bg-yellow-300"></Card>
      </div>
    </div>
  );
}

export default AboutUs