// src/components/Dashboard.js
import React from 'react';
import { FaUsers, FaRegChartBar, FaCog, FaTachometerAlt } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 space-y-6 p-6 hidden lg:block">
        <h2 className="text-2xl font-bold text-center">Employee Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-3 text-lg hover:bg-gray-700 p-2 rounded">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-lg hover:bg-gray-700 p-2 rounded">
              <FaUsers />
              <span>Employees</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-lg hover:bg-gray-700 p-2 rounded">
              <FaRegChartBar />
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-lg hover:bg-gray-700 p-2 rounded">
              <AiOutlineUserAdd />
              <span>Add Employee</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-lg hover:bg-gray-700 p-2 rounded">
              <FaCog />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
          <button className="lg:hidden p-2 text-gray-600" onClick={() => alert("Mobile menu toggle")}>
            <FaCog />
          </button>
        </header>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Employees</h3>
            <p className="text-4xl text-blue-500 mt-2">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Active Employees</h3>
            <p className="text-4xl text-green-500 mt-2">9</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">New Employees</h3>
            <p className="text-4xl text-yellow-500 mt-2">5

            </p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Employee Growth</h3>
          <div className="mt-4 bg-gray-200 h-64 rounded-lg">
            {/* Add a chart component here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
