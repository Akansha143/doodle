import React, { useEffect } from "react";

const PrivacyPolicy = () => {
      // Scroll to top when this page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto p-6 md:p-12 text-gray-800 leading-relaxed shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold mb-8 text-[#63559A] text-center tracking-wide">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8 text-center">
          Effective Date: October 4, 2024
        </p>

        <p className="mb-6">
          Welcome to <strong>KOLCO COMMERCE PRIVATE LIMITED</strong> ("GoGetWell AI", "Go Get Well", "we," "our," or "us"). 
          As an AI-powered platform dedicated to transforming the medical tourism industry, we are committed to protecting your privacy and personal information. 
          This Privacy Policy explains our practices regarding the collection, use, and disclosure of personal information when you use our website, applications, and services (collectively, "Services").
        </p>

        {/* Section 1 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">1. Personal Information We Collect</h2>

          <h3 className="text-xl font-medium mb-2">Information You Provide:</h3>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li><strong>Account Information:</strong> Name, contact info, account credentials, payment details, transaction history.</li>
            <li><strong>Medical Information:</strong> Health-related data for treatment recommendations and hospital matching.</li>
            <li><strong>User Content:</strong> Personal data provided via input, uploads, feedback.</li>
            <li><strong>Communication Information:</strong> Your communications with us.</li>
            <li><strong>Facilitator Information:</strong> Business and operational data from healthcare facilitators.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Information We Collect Automatically:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Log Data:</strong> Device IP, browser type, interaction details.</li>
            <li><strong>Usage Data:</strong> Features used, content viewed.</li>
            <li><strong>Device Information:</strong> Device name, OS, browser details.</li>
            <li><strong>Cookies:</strong> Enhance your experience; manageable via your browser settings.</li>
            <li><strong>Analytics:</strong> Tools for user interaction analysis and service improvements.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">2. How We Use Personal Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide AI-powered medical tourism services like treatment recommendations and hospital matching.</li>
            <li>Create and manage AI-powered websites for healthcare facilitators.</li>
            <li>Enhance our Services and research medical tourism trends.</li>
            <li>Communicate updates, opportunities, and service improvements.</li>
            <li>Develop new medical tourism solutions and features.</li>
            <li>Prevent fraud and secure our IT systems.</li>
            <li>Comply with legal healthcare and tourism obligations.</li>
            <li><strong>Aggregated Data:</strong> Used for analysis and improvements, without identifying individuals.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">3. Disclosure of Personal Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Healthcare Providers:</strong> For treatment and hospital bookings.</li>
            <li><strong>Vendors/Service Providers:</strong> To support operations.</li>
            <li><strong>Business Transfers:</strong> In mergers or acquisitions.</li>
            <li><strong>Legal Requirements:</strong> To comply with laws and ensure safety.</li>
            <li><strong>Affiliates:</strong> Shared for consistent service delivery.</li>
            <li><strong>Healthcare Facilitators:</strong> Information shared with facilitators you interact with.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">4. Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>Access, correct, or delete your personal data.</li>
            <li>Transfer your personal data elsewhere.</li>
            <li>Restrict or object to how your data is processed.</li>
            <li>Withdraw consent at any time.</li>
            <li>File a complaint with a data protection authority.</li>
          </ul>
          <p>
            To exercise your rights, contact us at 
            <a href="mailto:hello@gogetwell.ai" className="text-[#63559A] underline ml-1">hello@gogetwell.ai</a>.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">5. Security</h2>
          <p>
            We implement robust security measures to protect your information, especially sensitive medical data.
            However, no online transmission can be 100% secure.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Significant changes will be communicated by updating the effective date above.
          </p>
        </section>

        {/* Section 7 */}
        <section className="p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">7. Contact Us</h2>
          <p>
            Questions about this Privacy Policy or our services?
            Email us at 
            <a href="mailto:hello@gogetwell.ai" className="text-[#63559A] underline ml-1">hello@gogetwell.ai</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
