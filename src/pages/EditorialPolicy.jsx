import React, { useEffect } from "react";


const EditorialPolicy = () => {
    // Scroll to top when this page is loaded
          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto p-6 md:p-12 text-gray-800 leading-relaxed shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold mb-8 text-[#63559A] text-center tracking-wide">
          Editorial Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8 text-center">
          GoGetWell.ai is committed to delivering authoritative healthcare and medical travel information that empowers global users to make informed healthcare decisions.
        </p>

        {/* Section 1 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">Editorial Excellence</h2>
          <p className="mb-4">
            Our platform serves as a bridge between patients and healthcare providers across 15+ countries, having assisted many patients worldwide.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">Content Standards</h2>
          
          <h3 className="text-xl font-medium mb-2">Quality Assurance:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Content development follows a structured framework with rigorous verification.</li>
            <li>Writing maintains clarity, accessibility, and originality.</li>
            <li>All material undergoes expert medical review.</li>
            <li>Information is supported by verified statistics and credible references.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">Content Categories</h2>

          <h3 className="text-xl font-medium mb-2">Healthcare Provider Profiles:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Comprehensive doctor credentials and experience.</li>
            <li>Hospital facilities and specializations.</li>
            <li>Updated visiting hours and fee structures.</li>
            <li>Location and accessibility details.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Medical Information:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Detailed procedure guides.</li>
            <li>Treatment cost analysis.</li>
            <li>Hospital stay information.</li>
            <li>Success rate statistics.</li>
            <li>Patient testimonials.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Educational Resources:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>In-depth medical articles.</li>
            <li>Procedure-specific blogs.</li>
            <li>Multimedia content.</li>
            <li>Social media awareness campaigns.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">Content Development</h2>

          <h3 className="text-xl font-medium mb-2">Writing Standards:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Expert writers with healthcare knowledge.</li>
            <li>Medical professional review process.</li>
            <li>Clear structure with visual elements.</li>
            <li>Internal linking for enhanced navigation.</li>
            <li>Regular updates for accuracy.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Focus Areas:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Neurosurgery.</li>
            <li>Cardiac procedures.</li>
            <li>Orthopedic treatments.</li>
            <li>Other specialized medical services.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">Cost Information</h2>
          <p className="mb-4">
            Treatment costs provided are indicative and may vary based on:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Country and city.</li>
            <li>Hospital selection.</li>
            <li>Doctor's expertise.</li>
            <li>Pre and post-treatment care requirements.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">Legal Considerations</h2>

          <h3 className="text-xl font-medium mb-2">Disclaimer:</h3>
          <p className="mb-4">
            The platform provides informational content only, not medical advice. Users should consult healthcare professionals for medical decisions.
          </p>

          <h3 className="text-xl font-medium mb-2">Updates and Corrections:</h3>
          <p>
            Contact <a href="mailto:hello@gogetwell.ai" className="text-[#63559A] underline ml-1">hello@gogetwell.ai</a> for:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Content updates.</li>
            <li>Information corrections.</li>
            <li>General feedback.</li>
            <li>Editorial suggestions.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default EditorialPolicy;
