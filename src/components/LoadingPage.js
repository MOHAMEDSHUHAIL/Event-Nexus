import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LoadingPage.css'; // Ensure the path is correct

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // 3-second loading time

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="bouncing-ball"></div>
      <p>Loading...</p>
    </motion.div>
  );
};

export default LoadingPage;
