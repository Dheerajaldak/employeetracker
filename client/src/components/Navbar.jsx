import React, { useState } from 'react';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 rounded-b-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            SalesTrack
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Home Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('home')}
                className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition"
              >
                Home <FaCaretDown className="ml-1 text-sm" />
              </button>
              {activeDropdown === 'home' && (
                <div className="absolute top-full mt-2 bg-white shadow-md rounded-md w-48 z-40">
                  <Link to="/home-option-1" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Home Option 1</Link>
                  <Link to="/home-option-2" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Home Option 2</Link>
                </div>
              )}
            </div>
            

            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition">About</Link>
            <Link to="/features" className="text-gray-700 hover:text-indigo-600 font-medium transition">Features</Link>
            
            <Link to="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition">Pricing</Link>

            {/* Etc Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('etc')}
                className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition"
              >
                Other<FaCaretDown className="ml-1 text-sm" />
              </button>
              {activeDropdown === 'etc' && (
                <div className="absolute top-full mt-2 bg-white shadow-md rounded-md w-48 z-40">
                  <Link to="/content" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Content</Link>
                  <Link to="/chatbot" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Chat Bot</Link>
                  <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Contact</Link>
                </div>
              )}
            </div>

            {/* Buttons */}
            <Link to="/" className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition">Sign In</Link>
            <Link to="/register" className="px-4 py-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-100 rounded-md transition">Sign Up</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <button
              onClick={() => toggleDropdown('home')}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center justify-between"
            >
              Home <FaCaretDown />
            </button>
            {activeDropdown === 'home' && (
              <div className="ml-4 space-y-1">
                <Link to="/home-option-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home Option 1</Link>
                <Link to="/home-option-2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home Option 2</Link>
              </div>
            )}

            <Link to="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Features</Link>
            <Link to="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pricing</Link>

            <button
              onClick={() => toggleDropdown('etc')}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center justify-between"
            >
              Etc <FaCaretDown />
            </button>
            {activeDropdown === 'etc' && (
              <div className="ml-4 space-y-1">
                <Link to="/etc-option-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Etc Option 1</Link>
                <Link to="/etc-option-2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Etc Option 2</Link>
                <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
              </div>
            )}

            <div className="pt-4 border-t border-gray-200">
              <Link to="/login" className="block w-full px-4 py-2 text-white bg-indigo-600 text-center rounded-md hover:bg-indigo-700 transition">Sign In</Link>
              <Link to="/register" className="block w-full mt-2 px-4 py-2 text-indigo-600 border border-indigo-600 text-center rounded-md hover:bg-indigo-100 transition">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
