import React from "react";
import { FaLaptopMedical, FaUserMd, FaComments, FaFileMedicalAlt, FaUserPlus, FaDatabase, FaLanguage, FaCreditCard, FaChartLine } from "react-icons/fa";

const solutions = [
  { title: "Custom AI-Powered Website", desc: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.", icon: <FaLaptopMedical size={30} />, image: "https://plus.unsplash.com/premium_photo-1731494430662-2c669cf16458?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Enhanced Patient Conversion", desc: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.", icon: <FaUserMd size={30} />, image: "https://plus.unsplash.com/premium_photo-1663089904615-8db92a5922dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Real-Time Query Handling", desc: "Instant response system for patient inquiries with AI-powered chat support.", icon: <FaComments size={30} />, image: "https://plus.unsplash.com/premium_photo-1682310085646-3c26b1d4dee7?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Medical Report Analysis", desc: "Advanced AI analysis of medical reports for quick and accurate patient assessments.", icon: <FaFileMedicalAlt size={30} />, image: "https://media.istockphoto.com/id/872676342/photo/medical-technology-concept-electronic-medical-record.jpg?s=2048x2048&w=is&k=20&c=wnOpZOYXNmc5cW5peDnlQ1x5ZBY5IiR2GuXNMAsXLxc=" },
  { title: "Improved Lead Generation", desc: "Data-driven lead generation strategies to attract and engage potential patients.", icon: <FaUserPlus size={30} />, image: "https://images.unsplash.com/photo-1667830867718-da7f5a45d20d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Comprehensive Healthcare Database", desc: "Extensive medical information database for accurate patient guidance and support.", icon: <FaDatabase size={30} />, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Multilingual Support", desc: "Breaking language barriers with comprehensive multilingual communication tools.", icon: <FaLanguage size={30} />, image: "https://media.istockphoto.com/id/2142763651/photo/doctors-visit-at-home.jpg?s=2048x2048&w=is&k=20&c=LTTPtbtIMCXvqlzOPJuos7UFXUSBdvqiG0Gcue_Ygm0=" },
  { title: "Seamless Payment Handling", desc: "Secure and efficient payment processing for medical services globally.", icon: <FaCreditCard size={30} />, image: "https://plus.unsplash.com/premium_photo-1675276939507-97d222bb488d?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Marketing And SEO Support", desc: "Optimized digital presence with advanced SEO and marketing strategies.", icon: <FaChartLine size={30} />, image: "https://plus.unsplash.com/premium_photo-1728666382376-d69421608b82?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const Solutions = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16">
          Our <span className="text-[#63559A]">Comprehensive Solutions</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[#63559A] text-white p-4 rounded-full shadow-lg">
                  {solution.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{solution.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{solution.desc}</p>
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-48 object-cover rounded-lg shadow-md transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
