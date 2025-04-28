import React from "react";
import { motion } from "framer-motion"; // For animation effects
import challengesGif from "../assets/challenges.gif"; // Import the GIF for challenges

const ChallengesInMedicalTourism = () => {
  return (
    <section className="bg-gradient-to-r from-[#4A3C77] via-[#63559A] to-[#9B7DCD] py-16 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading with animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Challenges in <span className="text-[#4A3C77]">Medical Tourism</span>
        </motion.h2>

        {/* Description Text */}
        <motion.p
          className="text-lg md:text-xl mb-6 px-6 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Medical tourism, especially in India, faces challenges like disorganization, inefficiency, and outdated methods of operation. These problems lead to delayed bookings, poor patient support, and missed revenue opportunities.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-8 px-6 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Our platform addresses these issues by streamlining operations and providing seamless communication between patients and facilitators, ensuring a smooth, efficient healthcare journey.
        </motion.p>

        {/* Challenges Cards Section with Icons and GIF */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-center items-center">
          <motion.div
            className="h-[200px] bg-[#4A3C77] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Efficient Operations</h3>
            <p className="text-lg md:text-xl text-gray-300">
              Streamlined booking and management processes for healthcare facilitators and hospitals, reducing inefficiencies.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <img
              src={challengesGif}
              alt="Challenges in Medical Tourism"
              className="w-[300px] h-[300px] rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Enhanced Support Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-center items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img
              src={challengesGif} // You can replace this with a different image if needed
              alt="Enhanced Support"
              className="w-[300px] h-[300px] rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            className="h-[200px] bg-[#4A3C77] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Enhanced Support</h3>
            <p className="text-lg md:text-xl text-gray-300">
              Providing improved patient communication and support throughout their medical tourism journey, ensuring a stress-free experience.
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
            Ready to Optimize Your Medical Tourism Operations?
          </motion.h3>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.2 }}
          >
            Let's transform the way medical tourism works by providing more efficient operations and better patient care. Get in touch with us today!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ChallengesInMedicalTourism;
