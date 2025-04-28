import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email Submitted for ", location.state.role, ":", email);
  };

  const closeModal = () => {
    setIsVisible(false);
    navigate("/"); // Redirect to homepage when cross is clicked
  };

  if (!isVisible) {
    return null; // If the modal is closed, render nothing
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#63559A] to-[#9B7DCD] text-white relative">
      <div className="bg-white text-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md relative">
        {/* Cross Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold mb-4">Sign Up as {location.state.role}</h1>
          <p className="text-lg mb-6">Enter your email to get started.</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#63559A]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#63559A] hover:bg-[#4A3C77] text-white font-semibold py-2 rounded-lg transition-all duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500">or continue with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            <FcGoogle className="mr-2 text-2xl" />
            Continue with Google
          </button>

          <p className="text-sm text-gray-500 mt-4">
            By continuing, you agree to our
            <Link to="/terms-of-service" className="text-[#63559A] hover:underline"> Terms of Service</Link> and
            <Link to="/privacy-policy" className="text-[#63559A] hover:underline"> Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
