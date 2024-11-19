import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './FT.css';
import './FW.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Logo from './Images/Logo6.jpg'

const Negotiation = ({ isAuthenticated, handleLogout }) => {
  const [proposals,setProposal]=useState([])
  const auth = localStorage.getItem('authToken');
  const decodeToken=jwtDecode(auth)
  // console.log("Decoded Token",decodeToken)
  const id=decodeToken.user_id;
  console.log(id)
  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/proposals/', 
      { headers: { Authorization: `Bearer ${auth}` }})
      .then(response => {
        const proposals=response.data.data
        const filtered_data = proposals.filter(proposal=>{
          const budget_project = parseFloat(proposal.project.budget);
          const bid_amount_freelancer = parseFloat(proposal.bid_amount);
          // console.log(bid_amount_freelancer,budget_project)
          return bid_amount_freelancer>budget_project
        })
        setProposal(filtered_data);  // Store the data in the state
        console.log(filtered_data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
    },[]);
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      },
      input: {
        padding: '10px',
        margin: '10px 0',
        width: '300px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
      },
      button: {
        padding: '10px 20px',
        margin: '20px 0',
        backgroundColor: '#025440',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
      },
      title: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#025440',
      }
    };
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={Logo} alt="Skill Spring Freelance Logo" style={{borderRadius:'20px',marginTop:'-10px', float:'left', width: '50px', height: '50px', marginRight: '10px' }} />
        Skill Spring Freelance</Link></div>
        <ul className="nav-links">
          <li><Link to="/find-talent">Proposals</Link></li>
          <li><Link to="/negotiation">Negotiation</Link></li>
          <li><Link to="/why-upwork">About Us</Link></li>
          <li><Link to="/enterprise">Contact Us</Link></li>
          {!isAuthenticated ? (
             <>
               <li><button className="login-button"><Link to="/login">Log In</Link></button></li>
               <li><button className="signup-button"><Link to="/Signup">Sign Up</Link></button></li>
             </>
           ) : (
              <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
           )}
        </ul>
      </nav>
          <section className="featured-projects">
          <h2>Negotiation With Freelancer</h2>
          <div className="projects-list">
          {proposals.length > 0 ? (   
              proposals
              .filter(proposal => proposal.project.client.id === id)
              .map(proposal => (
                <article className="project" key={proposal.id}>
                  <h3>{proposal.project.title}</h3>
                  <p><strong>Freelancer's Name:-</strong> {proposal.freelancer.username}</p>
                  <p><strong>Freelancer's Require Amount:- </strong> ${proposal.bid_amount}</p>
                  <p><strong>Description from freelancer :- </strong>{proposal.description}</p>
                  <p><strong>Project's Budget:</strong> ${proposal.project.budget}</p>
                  <p><strong>Project's Description:</strong> {proposal.project.description}</p>
                  <p><strong>Clint Name :</strong> {proposal.project.client.username}</p>
                  {/* <p><strong>Approval Status :</strong> {proposal.approval ? "Approved" : "Pending"}</p> */}
                  
                </article>
              ))
            ) : (
              <p>No projects available at the moment.</p>
            )}
          </div>
        </section>


      {/* Footer */}
      <footer className="footer" id="why-upwork">
        <div className="footer-content">
          <ul className="footer-links">
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Help Center</a></li>
          </ul>
          <div className="social-media">
            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
            <a href="/">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Negotiation;