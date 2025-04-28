import React, { useEffect } from "react";

const PricingPolicy = () => {
    // Scroll to top when this page is loaded
          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto p-6 md:p-12 text-gray-800 leading-relaxed shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold mb-8 text-[#63559A] text-center tracking-wide">
          Pricing Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8 text-center">
          Thank you for choosing <strong>gogetwell.ai</strong>. Please read our Pricing Policy carefully as it outlines the pricing structure, payment terms, and refund conditions for accessing and using our services.
        </p>

        {/* Section 1 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">1. Service Pricing</h2>
          <p className="mb-4">
            gogetwell.ai offers a variety of innovative tools and services designed for the medical tourism industry. Pricing may vary based on the type of service, features included, and level of access.
          </p>

          <h3 className="text-xl font-medium mb-2">1.1 Subscription Plans:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Basic Plan:</strong> Limited access to essential features, primarily aimed at new medical tourism service providers.
            </li>
            <li>
              <strong>Premium Plan:</strong> Full access to all platform features, ideal for established medical service providers.
            </li>
            <li>
              <strong>Enterprise Plan:</strong> Custom plans tailored for larger medical tourism operators, offering full platform access with customization and dedicated support.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">2. Payment Terms</h2>

          <h3 className="text-xl font-medium mb-2">2.1 Billing Information:</h3>
          <p className="mb-4">
            You must provide complete and accurate billing information, including a valid payment method, to process services from gogetwell.ai.
          </p>

          <h3 className="text-xl font-medium mb-2">2.2 Subscription Payments:</h3>
          <p className="mb-4">
            All subscription fees are recurring based (monthly or annually) and will automatically renew unless cancelled prior to renewal.
          </p>

          <h3 className="text-xl font-medium mb-2">2.3 Service Credits:</h3>
          <p>
            Credits must be purchased in advance. All service credits are subject to gogetwell.ai's Service Credit Terms.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">3. Price Changes</h2>

          <h3 className="text-xl font-medium mb-2">3.1 Notification of Price Changes:</h3>
          <p className="mb-4">
            We reserve the right to change prices from time to time. We will provide at least 30 days notice before any price changes take effect.
          </p>

          <h3 className="text-xl font-medium mb-2">3.2 Custom Pricing Adjustments:</h3>
          <p>
            Custom pricing adjustments may be evaluated and agreed upon between gogetwell.ai and the customer.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">4. Refund Policy</h2>
          <p>
            All payments are non-refundable except where required by law in cases of service unavailability.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10 p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">5. Service Discontinuation</h2>
          <p>
            gogetwell.ai may discontinue services at any time with reasonable notice. If a service you paid for is discontinued, you will be refunded for the unused portion.
          </p>
        </section>

        {/* Section 6 */}
        <section className="p-6 bg-white shadow-sm rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#63559A]">6. Contact Us</h2>
          <p>
            For questions or concerns about this Pricing Policy or our services, please contact us at 
            <a href="mailto:hello@gogetwell.ai" className="text-[#63559A] underline ml-1">hello@gogetwell.ai</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PricingPolicy;
