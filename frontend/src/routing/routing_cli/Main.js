import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FindTalent from './FindTalent';
import WhyUpwork from './WhyUpwork';
import Enterprise from './Enterprise';
import Login from './User_login';
import Signup from './Signup';
import Negotiation from './Negotiation';
import CreateProject from './CreateProject';

const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <div className="main-route">
      <Router>
        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/find-talent" element={<FindTalent isAuthenticated={isAuthenticated} handleLogout={handleLogout}  />} />
          <Route path="/why-upwork" element={<WhyUpwork isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/enterprise" element={<Enterprise isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/login" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
          <Route path="/Signup" element={<Signup onSignupSuccess={() => setIsAuthenticated(true)} />} />
          <Route path="/negotiation" element={<Negotiation isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/createproject" element={<CreateProject onCreateProject={() => setIsAuthenticated(true)} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
