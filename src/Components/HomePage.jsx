import React from "react";
import { Link } from "react-router-dom"; // <-- Add this

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-[#9B7DCD] min-h-screen flex items-center">
      {/* Blurred Background Blob */}
      <div className="absolute w-[600px] h-[600px] bg-[#63559A] opacity-20 rounded-full blur-3xl top-[-100px] right-[-150px]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-20 relative z-10">
        {/* Left Text */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            AI Front Office <br />
            <span className="text-[#63559A]">for Healthcare Agents</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Build your AI Store in <span className="text-[#63559A] font-semibold">2 minutes</span> and grow faster with next-gen marketing tools.
          </p>

          <div className="flex gap-6 mt-8">
            {/* Use Link instead of button directly */}
            <Link
              to="/get-started" // <-- This should match your route path
              className="bg-[#63559A] hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              Get Started
            </Link>

            <button className="border border-[#63559A] text-[#63559A] hover:bg-[#eff6ff] px-8 py-3 rounded-full text-lg transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-gray-900">2100+</p>
              <p className="text-gray-600">Qualified Doctors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-gray-900">1000+</p>
              <p className="text-gray-600">Hospitals</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-gray-900">800+</p>
              <p className="text-gray-600">Treatment Plans</p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 flex justify-center">
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-[#63559A] text-center">
              Empower Your Healthcare <br /> Business with AI 🚀
            </h2>
            <p className="text-gray-600 mt-4 text-center">
              Start your journey today with MakeWell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
