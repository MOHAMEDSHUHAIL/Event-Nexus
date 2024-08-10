import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState(''); // State to handle error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    if (loginData.email === 'admin@gmail.com' && loginData.password === '12345') {
      // Static validation for admin
      localStorage.setItem('user', JSON.stringify({ email: loginData.email, role: 'admin' }));
      navigate('/admin');
    } else {
      try {
        const response = await axios.post('http://localhost:8080/login', loginData);
        console.log('User logged in:', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/Loading', { state: { role: response.data.role } });
      } catch (error) {
        console.error('There was an error logging in!', error);
        setError('Login failed');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <motion.div
        className="login-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="login-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome Back
        </motion.h1>
        <motion.p
          className="login-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Please log in to your account
        </motion.p>
        <form onSubmit={handleSubmit} className="login-form">
          <motion.input
            type="email"
            name="email"
            placeholder="Email Address"
            value={loginData.email}
            onChange={handleChange}
            className="login-input"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <motion.input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            className="login-input"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          />
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          <motion.button
            type="submit"
            className="login-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Login
          </motion.button>
        </form>
        <motion.div
          className="register-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Don't have an account? <a href="/register">Register here</a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
