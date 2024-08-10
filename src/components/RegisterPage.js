
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import './RegisterPage.css';

// const RegisterPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [dob, setDob] = useState('');
//   const [gender, setGender] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!name || !email || !password || !confirmPassword || !dob || !gender) {
//       setError('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Handle registration logic here (e.g., send data to backend)
//     // For now, just simulate successful registration
//     setError('');
//     console.log('Registration successful:', { name, email, dob, gender });
//     navigate('/login'); // Redirect to login page after registration
//   };

//   return (
//     <div className="register-container">
//       <div className="background-image"></div>
//       <motion.div
//         className="register-content"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.h1
//           className="register-title"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Create an Account
//         </motion.h1>
//         <motion.p
//           className="register-subtitle"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           Join us and start discovering events!
//         </motion.p>
//         <form onSubmit={handleRegister} className="register-form">
//           <motion.input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="register-input"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 1.5 }}
//           />
//           <motion.input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="register-input"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 1.8 }}
//           />
//           <motion.input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="register-input"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 2.1 }}
//           />
//           <motion.input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="register-input"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 2.4 }}
//           />
//           <motion.input
//             type="date"
//             placeholder="Date of Birth"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             className="register-input"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 2.7 }}
//           />
//           <motion.select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             className="register-input"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 3 }}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </motion.select>
//           {error && <div className="error-message">{error}</div>} {/* Display error message */}
//           <motion.button
//             type="submit"
//             className="register-button"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             transition={{ type: 'spring', stiffness: 400, damping: 10 }}
//           >
//             Register
//           </motion.button>
//         </form>
//         <motion.div
//           className="login-link"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 3.5 }}
//         >
//           Already have an account? <a href="/login">Login here</a>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password || !confirmPassword || !dob || !gender) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Data to be sent to the backend
    const formData = {
      name,
      email,
      password,
      dob,
      gender,
    };

    try {
      const response = await axios.post('http://localhost:8080/reg', formData);
      console.log('User registered:', response.data);
      alert('Registration successful');
      navigate('/login'); // Redirect to login page after registration
    } catch (error) {
      console.error('There was an error registering the user!', error);
      setError('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <div className="background-image"></div>
      <motion.div
        className="register-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="register-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Create an Account
        </motion.h1>
        <motion.p
          className="register-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Join us and start discovering events!
        </motion.p>
        <form onSubmit={handleRegister} className="register-form">
          <motion.input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="register-input"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <motion.input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          />
          <motion.input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="register-input"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          />
          <motion.input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="register-input"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.7 }}
          />
          <motion.select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="register-input"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </motion.select>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          <motion.button
            type="submit"
            className="register-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Register
          </motion.button>
        </form>
        <motion.div
          className="login-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          Already have an account? <a href="/login">Login here</a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
