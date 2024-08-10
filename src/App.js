import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import LoadingPage from './components/LoadingPage';
import EventDetailPage from './components/EventDetailPage';
import Footer from './components/Footer';
import AdminPage from './components/Admin';
import CreateEventPage from './components/CreateEventPage';
import ProfilePage from './components/ProfilePage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='/create-event' element={<CreateEventPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
