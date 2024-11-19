import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import FindWork from './FindWork';
import WhyUpwork from './WhyUpwork';
import Enterprise from './Enterprise';
import Login from './User_login';
import Signup from './Signup';
import Proposal from './Proposal';
import Web_developement from './Web_developement';
import AIML from './AIML';
import Cloud_computing from './Cloud_computing'
import Game_development from './Game_development'
import Ethical_hacking from './Ethical_hacking'
import Data_science from './Data_science'
import Approval from './Approval';
import { useNavigate } from 'react-router-dom';


const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    // navigate('/')
  };

  return (
    <div className="main-route">
      <Router>
        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/find-work" element={<FindWork isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/approval" element={<Approval isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/why-upwork" element={<WhyUpwork isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/enterprise" element={<Enterprise isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/login" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
          <Route path="/Signup" element={<Signup onSignupSuccess={() => setIsAuthenticated(true)} />} />
          <Route path="/proposal/:id" element={<Proposal onProposalSuccess={() => setIsAuthenticated(true)}/>} />
          <Route path="/Web_development" element={<Web_developement isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>} />
          <Route path="/AIML" element={<AIML isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/Cloud_computing" element={<Cloud_computing isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/Game_development" element={<Game_development isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/Ethical_hacking" element={<Ethical_hacking isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>} />
          <Route path="/Data_science" element={<Data_science isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>} />
        
        </Routes>
      </Router>
    </div>
  );
};

export default Main;