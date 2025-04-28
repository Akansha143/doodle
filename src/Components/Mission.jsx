import React from "react";
import { motion } from "framer-motion"; // For animation effects
import missionGif from "../assets/mission.gif"; // Import the GIF
import { FaRobot, FaChartLine } from "react-icons/fa"; // Import icons for AI and Growth Focus

const OurMission = () => {
  return (
    <section className="bg-gradient-to-tl from-[#4A3C77] via-[#63559A] to-[#9B7DCD] py-16 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading with animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-[#4A3C77]">Mission</span>
        </motion.h2>

        {/* Mission Description with GIF */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center mb-12 space-y-6 md:space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-lg md:text-xl px-6 md:px-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators' operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys. We strive to become the leading platform for healthcare tourism management and digital transformation.
          </motion.p>

          <motion.div
            className="flex justify-center mt-6 md:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img
              src={missionGif}
              alt="Our Mission"
              className="w-[1200px] h-[300px] rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* AI-Powered Solutions and Growth Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mb-8">

          {/* AI-Powered Solutions */}
          <motion.div
            className="flex flex-col items-center bg-[#4A3C77] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <FaRobot className="text-4xl text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">AI-Powered Solutions</h3>
            <p className="text-lg md:text-xl text-gray-300 text-center">
              Optimizing operations with advanced technology to streamline processes and improve efficiency.
            </p>
          </motion.div>

          {/* Growth Focus */}
          <motion.div
            className="flex flex-col items-center bg-[#4A3C77] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <FaChartLine className="text-4xl text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Growth Focus</h3>
            <p className="text-lg md:text-xl text-gray-300 text-center">
              Maximizing revenue opportunities through smart strategies and data-driven insights.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurMission;
