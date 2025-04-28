import React from "react";
import { FcGoogle } from "react-icons/fc"; // For Google Icon
import { motion } from "framer-motion";

const Login = () => {
  const closeModal = () => {
    window.history.back(); // To close the modal and go back to the previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#63559A] to-[#9B7DCD] bg-opacity-50 absolute inset-0 z-50">
      <motion.div 
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Cross Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        {/* Logo */}
        <h1 className="text-3xl font-bold text-center text-[#63559A] mb-2">
          GoGetWell<span className="text-[#4A3C77]">AI</span>
        </h1>

        {/* Welcome Text */}
        <p className="text-center text-gray-600 mb-6">
          Store Login!<br />
          Please enter your credentials to sign in!
        </p>

        {/* Login Form */}
        <form className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#63559A]"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#63559A] hover:bg-[#4A3C77] text-white font-semibold py-2 rounded-lg transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">or continue with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Sign In */}
        <button
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
        >
          <FcGoogle className="mr-2 text-2xl" />
          Continue with Google
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
