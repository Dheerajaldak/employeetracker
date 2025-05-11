import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">SalesPro</h2>
          <p className="text-sm text-gray-400">
            Empowering field sales teams with smart tracking and insights. Built
            for scale, designed for simplicity.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/map" className="hover:text-white transition">Dashboard</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-indigo-600 text-white p-3 rounded-full"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Divider and Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} SalesPro. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
