import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for routing

const GetStarted = () => {
   // Scroll to top when this page is loaded
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const closeModal = () => {
    setIsVisible(false);
    navigate("/"); // Redirect to the homepage when the modal is closed
  };

  if (!isVisible) {
    return null; // If the modal is closed, render nothing
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#63559A] to-[#9B7DCD] bg-opacity-50 absolute inset-0 z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
        {/* Cross Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold mb-4">Join Wait List to Get Started</h1>
          <p className="text-lg mb-6">Choose your role to continue:</p>

          <div className="space-y-4">
            <Link
              to="/signup"
              state={{ role: "HCF" }}
              className="block w-full py-2 bg-[#63559A] text-white rounded-full hover:bg-[#4A3C77] transition"
            >
              Continue as HCF
            </Link>

            <Link
              to="/signup"
              state={{ role: "Hospital" }}
              className="block w-full py-2 bg-[#63559A] text-white rounded-full hover:bg-[#4A3C77] transition"
            >
              Continue as Hospital
            </Link>

            <button
              onClick={closeModal}
              className="block w-full py-2 border border-[#63559A] text-[#63559A] rounded-full hover:bg-[#eff6ff] transition"
            >
              Join Wait List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
