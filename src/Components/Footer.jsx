import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-white py-4 px-6 flex items-center justify-between text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <span>© 2025 gogetwell.ai</span>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/privacy-policy" className="hover:text-blue-600 transition">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="hover:text-blue-600 transition">
          Terms of Service
        </Link>
        <Link to="/pricing-policy" className="hover:text-blue-600 transition">
          Pricing Policy
        </Link>
        <Link to="/editorial-policy" className="hover:text-blue-600 transition">
          Editorial Policy
        </Link>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
        >
          <FaLinkedin size={18} />
        </a>
      </div>
    </footer>
  );
}
