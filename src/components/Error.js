import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // Optional: for custom styling

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>The page you are looking for does not exist or there was an error.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;
