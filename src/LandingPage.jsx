// LandingPage.js
import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="text-center"
  >
    <h1 className="text-4xl font-bold text-black-700 mb-4">yoder</h1>
    <p className="text-xl text-gray-600">pursuing creation</p>
  </motion.div>
);

export default LandingPage;