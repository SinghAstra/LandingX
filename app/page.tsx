import Navbar from "@/components/navigation/navbar";
import NewNavbar from "@/components/navigation/new-navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center">
        <NewNavbar />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">There</h1>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">How </h1>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">Are</h1>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">You ?</h1>
      </div>
    </div>
  );
};

export default HomePage;
