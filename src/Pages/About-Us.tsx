import React from "react";
import Navbar from "../components/Navbar";
import { Card } from "../components/Card";
import { CardList } from "../components/Cardlist";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold">Welcome to the AboutUs</h1>
      <div className="flex justify-center items-center gap-14 ">
        <CardList />
      </div>
    </div>
  );
}

export default AboutUs;

