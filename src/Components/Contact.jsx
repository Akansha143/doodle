import React, { useState } from "react";
import { motion } from "framer-motion"; // For animation effects
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa"; // For icons

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section id="Contact" className="bg-gradient-to-r from-[#4A3C77] via-[#63559A] to-[#9B7DCD] py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Section - Contact Information */}
        <div className="space-y-8">
                  <motion.h2
                            className="text-4xl md:text-5xl font-extrabold mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                          >
                            Contact <span className="text-[#4A3C77]">Us</span>
                          </motion.h2>
          <motion.h2
            className="text-4xl font-bold text-[#F1F1F1] leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Let's get in Touch!
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Have questions about GoGetWell.AI? Our team is ready to assist you. Reach out for quick and friendly support!
          </motion.p>

          {/* Contact Info with icons */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center space-x-4 text-lg">
              <FaPhoneAlt className="text-[#F1F1F1] text-2xl" />
              <span>+91 9811396858</span>
            </div>
            <div className="flex items-center space-x-4 text-lg">
              <FaEnvelope className="text-[#F1F1F1] text-2xl" />
              <span>hello@gogetwell.ai</span>
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            className="space-y-4 mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {/* Heading for social media section */}
            <motion.p
              className="text-3xl font-semibold text-[#F1F1F1] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              Connect with us on <span className="text-[#4A3C77]">Social Media</span>
            </motion.p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-8 mt-6">
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl md:text-5xl text-[#F1F1F1] hover:text-[#4A3C77] transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              {/* Twitter Icon */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl md:text-5xl text-[#F1F1F1] hover:text-[#4A3C77] transform hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>

            {/* Subtle tagline or CTA */}
            <motion.p
              className="text-lg text-[#F1F1F1] mt-4 opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              Join our community and stay updated on all things GoGetWell.AI!
            </motion.p>
          </motion.div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
          <motion.h3
            className="text-3xl font-semibold text-center mb-6 text-[#4A3C77]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Send Us a Message
          </motion.h3>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block text-lg font-semibold mb-2 text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#4A3C77] transition-all duration-300"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#4A3C77] transition-all duration-300"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2 text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#4A3C77] transition-all duration-300"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#4A3C77] text-white font-semibold rounded-md hover:bg-[#63559A] transition-all duration-300"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
