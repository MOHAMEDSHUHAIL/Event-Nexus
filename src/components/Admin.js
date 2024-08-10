import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const AdminPage = () => {
  const [callbackRequests, setCallbackRequests] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [calculations, setCalculations] = useState([]);
  const [activeSection, setActiveSection] = useState('callbackRequests');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const registrationResponse = await axios.get('http://localhost:8080/get');
        setRegistrations(registrationResponse.data);
      } catch (error) {
        console.error('There was an error fetching the registrations!', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'callbackRequests':
        return (
          <section className="admin-section">
            <h2>Callback Requests</h2>
            <ul>
              {callbackRequests.length > 0 ? (
                callbackRequests.map((request, index) => (
                  <li key={index}>Phone: {request.phoneNumber}</li>
                ))
              ) : (
                <li>No callback requests</li>
              )}
            </ul>
          </section>
        );
      case 'registrations':
        return (
          <section className="admin-section">
            <h2>Registrations</h2>
            <ul>
              {registrations.length > 0 ? (
                registrations.map((registration, index) => (
                  <li key={index}>
                    Username: {registration.username}, Email: {registration.email}, Password: {registration.password}
                  </li>
                ))
              ) : (
                <li>No registrations available</li>
              )}
            </ul>
          </section>
        );
      case 'calculations':
        return (
          <section className="admin-section">
            <h2>Calculations</h2>
            <ul>
              {calculations.length > 0 ? (
                calculations.map((calc, index) => (
                  <li key={index}>
                    Year: {calc.year}, Age: {calc.age}, Income: {calc.income}, Insurance Cover: {calc.insuranceCover}
                  </li>
                ))
              ) : (
                <li>No calculations available</li>
              )}
            </ul>
          </section>
        );
      default:
        return <section className="admin-section"><h2>Select a section</h2></section>;
    }
  };

  return (
    <div className="admin-page-container">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>

      <div className="admin-content">
        <aside className="sidebar">
          <ul>
            <li
              className={activeSection === 'callbackRequests' ? 'active' : ''}
              onClick={() => setActiveSection('callbackRequests')}
            >
              Callback Requests
            </li>
            <li
              className={activeSection === 'registrations' ? 'active' : ''}
              onClick={() => setActiveSection('registrations')}
            >
              Registrations
            </li>
            <li
              className={activeSection === 'calculations' ? 'active' : ''}
              onClick={() => setActiveSection('calculations')}
            >
              Calculations
            </li>
          </ul>
        </aside>

        <main className="main-content">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
