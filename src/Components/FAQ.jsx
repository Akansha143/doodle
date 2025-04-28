import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animation effects
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // For the dropdown arrows

const faqData = [
  { question: "What is gogetwell.ai?", answer: "gogetwell.ai is an AI-driven platform transforming the medical tourism industry. We help healthcare facilitators streamline their processes and attract more patients." },
  { question: "What is the AI Front Office for Healthcare Agents?", answer: "The AI Front Office provides healthcare agents with smart tools to manage patient inquiries, optimize processes, and improve efficiency." },
  { question: "How does the AI Agent assist me in my healthcare business?", answer: "Our AI Agent automates administrative tasks, optimizes patient lead management, and provides smart suggestions to improve engagement and satisfaction." },
  { question: "Can I customize the website for my healthcare services?", answer: "Yes, the platform offers customization options to tailor the website to your services and branding." },
  { question: "How does this platform support independent healthcare facilitators?", answer: "The platform empowers independent facilitators with AI tools to compete effectively in the healthcare tourism space." },
  { question: "How does the platform help me manage patient leads?", answer: "The platform uses AI to categorize, track, and optimize patient leads for better management and follow-up." },
  { question: "Is it easy to integrate with hospitals?", answer: "Yes, the platform integrates seamlessly with hospital systems for smooth collaboration." },
  { question: "Is the platform secure and compliant with healthcare regulations?", answer: "Yes, it complies with healthcare regulations and ensures data privacy and security." },
  { question: "How quickly can I get started?", answer: "You can get started in a few days, and our team will guide you through the onboarding process." },
  { question: "What customer support is available?", answer: "We provide 24/7 support via live chat, email, and phone." },
  { question: "How does the platform help me attract more patients?", answer: "AI tools and smart marketing features help you reach more patients and improve your outreach efforts." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ section
  };

  return (
    <section id="FAQ" className="bg-gradient-to-r from-[#63559A] to-[#9B7DCD] py-12 px-4 md:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* FAQ Heading with animation */}
        <motion.h2
                  className="text-4xl md:text-5xl font-extrabold mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Frequently Asked <span className="text-[#4A3C77]">Questions</span>
                </motion.h2>


        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#4A3C77] rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-white text-xl" />
                ) : (
                  <FaChevronDown className="text-white text-xl" />
                )}
              </div>

              {openIndex === index && (
                <motion.p
                  className="text-sm md:text-base text-gray-300 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
