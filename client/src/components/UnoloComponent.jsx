import React from 'react';
import {
  MdLocationPin,
  MdCheckCircle,
  MdGroup,
  MdArrowRight,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    icon: MdLocationPin,
    color: 'text-blue-500',
    title: 'Location Tracking',
    description: 'Check the real-time location of your field employees.',
    link: '#',
  },
  {
    icon: MdCheckCircle,
    color: 'text-green-500',
    title: 'Attendance',
    description: 'Attendance marking with location & track working hours.',
    link: '#',
  },
  {
    icon: MdGroup,
    color: 'text-purple-500',
    title: 'Client Visits',
    description: 'Get Geo-verified client visits, photos & forms.',
    link: '#',
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
  }),
};

const UnoloComponent = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Automate your field operations in just 10 minutes.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            GPS tracking, location-based attendance, geo-verified visits, and powerful dashboards — all in one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center flex flex-col items-center"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-5 ${feature.color}`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center px-2">
                  {feature.description}
                </p>
                <Link
                  to="/map"
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Learn More <MdArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default UnoloComponent;
