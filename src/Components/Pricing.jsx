// src/pages/Pricing.jsx
import React from "react";

export default function Pricing() {
  return (
    <section className="p-10 bg-gradient-to-r from-purple-700 to-indigo-600 text-white">
      <h2 className="text-4xl font-bold mb-6">Our Pricing Plans</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white text-purple-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-all">
          <h3 className="text-3xl font-semibold">Basic</h3>
          <p className="text-xl mt-2">Ideal for small startups</p>
          <h4 className="text-2xl font-bold mt-4">$19/month</h4>
        </div>
        <div className="bg-white text-purple-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-all">
          <h3 className="text-3xl font-semibold">Premium</h3>
          <p className="text-xl mt-2">For businesses that need more features</p>
          <h4 className="text-2xl font-bold mt-4">$49/month</h4>
        </div>
        <div className="bg-white text-purple-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-all">
          <h3 className="text-3xl font-semibold">Enterprise</h3>
          <p className="text-xl mt-2">Customized for large organizations</p>
          <h4 className="text-2xl font-bold mt-4">$99/month</h4>
        </div>
      </div>
    </section>
  );
}
