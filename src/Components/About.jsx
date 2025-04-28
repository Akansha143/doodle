import React from "react";
import { motion } from "framer-motion"; // For animation effects
import aboutUsGif from "../assets/about_us.gif"; // Import the GIF

const AboutUs = () => {
  return (
    <section id="About" className="bg-gradient-to-r from-[#4A3C77] via-[#63559A] to-[#9B7DCD] py-16 px-4 md:px-12 text-white">
      <div  className="max-w-7xl mx-auto text-center">
        

        {/* Heading with animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-[#4A3C77]">Us</span>
        </motion.h2>

        {/* Description Text */}
        <motion.p
          className="text-lg md:text-xl mb-6 px-6 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-8 px-6 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.
        </motion.p>

        {/* Modern Solutions Section with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-center items-center">
          <motion.div
            className="h-[200px] bg-[#4A3C77] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Modern Solutions</h3>
            <p className="text-lg md:text-xl text-gray-300">
              Leveraging AI technology to enhance healthcare, optimize processes, and improve patient care across the globe.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <img
              src={aboutUsGif}
              alt="About Us"
              className="w-[300px] h-[300px] rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Patient-Centric Section with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-center items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img
              src={aboutUsGif} // You can replace this with a different image if needed
              alt="Patient-Centric"
              className="w-[300px] h-[300px] rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            className="h-[200px] bg-[#4A3C77] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Patient-Centric</h3>
            <p className="text-lg md:text-xl text-gray-300">
              Personalized healthcare experiences for every patient, ensuring the best outcomes and satisfaction with innovative technologies.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="mt-6">
          <motion.h3
            className="text-3xl font-semibold text-[#4A3C77] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Ready to Innovate Healthcare with AI?
          </motion.h3>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.2 }}
          >
            Let's work together to create a more efficient, accessible, and patient-centric healthcare system. Contact us today!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
