import React from 'react';
import { motion } from 'framer-motion';
import './Logo.scss';

const Logo = () => {
  return (
    <motion.div 
      className="logo"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>
        A<span>S</span>
      </h1>
    </motion.div>
  );
};

export default Logo; 