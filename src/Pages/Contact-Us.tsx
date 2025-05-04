import React from 'react'
import Navbar from '../components/Navbar';
import Form from '../components/form';

function ContactUs() {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold">Welcome to the ContactUs</h1>
      <Form/>
    </div>
  );
}

export default ContactUs