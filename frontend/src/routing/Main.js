import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'
import Home from './Home';
import FindTalent from './FindTalent';
import FindWork from './FindWork';
import WhyUpwork from './WhyUpwork';
import Enterprise from './Enterprise';
import Login from './User_login';
import Signup from './Signup';

import HomeF from './routing_free/Home';
import FindWorkF from './routing_free/FindWork';
import WhyUpworkF from './routing_free/WhyUpwork';
import EnterpriseF from './routing_free/Enterprise';
import ProposalF from './routing_free/Proposal';
import WebDevelopementF from './routing_free/Web_developement';
import AIMLF from './routing_free/AIML';
import CloudComputingF from './routing_free/Cloud_computing';
import GameDevelopmentF from './routing_free/Game_development';
import EthicalHackingF from './routing_free/Ethical_hacking';
import DataScienceF from './routing_free/Data_science';
import ApprovalF from './routing_free/Approval'

import HomeC from './routing_cli/Home';
import FindTalentC from './routing_cli/FindTalent';
import WhyUpworkC from './routing_cli/WhyUpwork';
import EnterpriseC from './routing_cli/Enterprise';
import NegotiationC from './routing_cli/Negotiation';
import CreateProjectC from './routing_cli/CreateProject';
const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    
    const token = localStorage.getItem('authToken');
    if(token){
      try{
        const decodedToken=jwtDecode(token);
        // console.log(token)
        setIsAuthenticated(true);
        if(decodedToken.is_freelancer){
          setUserType('freelancer');
        }else if(decodedToken.is_client){
          setUserType('client')
        }
      }
      catch(error){
        console.error("Invalid Token",error)
        // setIsAuthenticated(false)
        // setUserType(null)
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUserType(null);
  };
    
  console.log(userType)
  return (
    <div className="main-route">
      <Router>
        <Routes>
          {userType === 'freelancer' && (
            <>
            <Route path="/" element={<HomeF isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/find-work" element={<FindWorkF isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/approval" element={<ApprovalF isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/why-upwork" element={<WhyUpworkF isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/enterprise" element={<EnterpriseF isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/proposal/:id" element={<ProposalF onProposalSuccess={() => setIsAuthenticated(true)}/>} />
              <Route path="/Web_development" element={<WebDevelopementF isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>} />
              <Route path="/AIML" element={<AIMLF isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/Cloud_computing" element={<CloudComputingF isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/Game_development" element={<GameDevelopmentF isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/Ethical_hacking" element={<EthicalHackingF isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>} />
              <Route path="/Data_science" element={<DataScienceF isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />

          </>
          )}
          {userType === 'client' && (
            <>
            <Route path="/" element={<HomeC isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/find-talent" element={<FindTalentC isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/why-upwork" element={<WhyUpworkC isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/enterprise" element={<EnterpriseC isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/negotiation" element={<NegotiationC isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/createproject" element={<CreateProjectC onCreateProject={() => setIsAuthenticated(true)} />} />
          </>
          )}
          {!userType && (
            <>
            <Route path="/" element={<Home isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/find-talent" element={<FindTalent isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/find-work" element={<FindWork isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/why-upwork" element={<WhyUpwork isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              <Route path="/enterprise" element={<Enterprise isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
              {/* <Route path="/negotiation" element={<Negotiation isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} /> */}
            </>
          )}
          <Route path="/login" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
          <Route path="/signup" element={<Signup onSignupSuccess={() => setIsAuthenticated(true)} />} />
        
          
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
