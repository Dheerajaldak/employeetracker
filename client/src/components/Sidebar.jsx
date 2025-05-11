// src/components/Sidebar.js
import React from 'react';
import { FaUsers, FaRegChartBar, FaCog, FaTachometerAlt } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-gray-800 text-white w-64 space-y-6 p-6 transition-transform lg:transform-none transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed inset-0 z-30 lg:block`}
    >
      {/* Mobile toggle button */}
      <button
        className="lg:hidden absolute top-4 right-4 text-white"
        onClick={toggleSidebar}
      >
        <FaCog />
      </button>
      
      <h2 className="text-2xl font-bold text-center mb-8">Employee Dashboard</h2>

      {/* Sidebar Links */}
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg hover:bg-gray-700 p-2 rounded"
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg hover:bg-gray-700 p-2 rounded"
          >
            <FaUsers />
            <span>Employees</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg hover:bg-gray-700 p-2 rounded"
          >
            <FaRegChartBar />
            <span>Reports</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg hover:bg-gray-700 p-2 rounded"
          >
            <AiOutlineUserAdd />
            <span>Add Employee</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg hover:bg-gray-700 p-2 rounded"
          >
            <FaCog />
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
