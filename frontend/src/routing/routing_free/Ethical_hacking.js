import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import './FW.css';
import axios from 'axios';
import Logo from './Images/Logo6.jpg'

const Ethical_hacking = ({ isAuthenticated, handleLogout }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const auth = localStorage.getItem('authToken');
    axios.get('http://127.0.0.1:8000/api/projects/', 
      { headers: { Authorization: `Bearer ${auth}` }})
      .then(response => {
        setProjects(response.data.data);  // Store the data in the state
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={Logo} alt="Skill Spring Freelance Logo" style={{borderRadius:'20px',marginTop:'-10px', float:'left', width: '50px', height: '50px', marginRight: '10px' }} />
            Skill Spring Freelance
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/find-work">Find Work</Link></li>
          <li><Link to="/approval">Approval</Link></li>
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

      {/* Main Content */}
      <main className="main-content">
        <section className="intro">
          <h1>Find Your Next Ethical hacking Project</h1>
          <p>
          The ethical hacking project focuses on identifying and addressing security vulnerabilities in systems and networks. It involves simulating cyber-attacks to evaluate defenses, ensuring compliance with security policies, and enhancing overall cybersecurity. By utilizing tools like penetration testing and vulnerability assessments, the project aims to protect sensitive data, mitigate risks, and promote a safer digital environment for organizations and users.
          </p>
          {/* <button className="cta-button">Browse Opportunities</button> */}
        </section>

        {/* Featured Projects */}
        <section className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="projects-list">
            {projects.length > 0 ? (
              projects
              .filter(project => project.department === 'Ethical_hacking')
              .map((project) => (
                <article key={project.id} className="project">
                  <h4>{project.id}</h4>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {/* <Link to={`/project-details/${project.id}`} className="project-link">View Details</Link> */}
                  {/* <Link to={`/proposal/${project.id}`} className="project-link">Apply</Link> */}
                  {/* <button className="apply-button"><Link to={`/proposal/${project.id}`} className="project-link">Apply</Link></button> */}
                    <Link to={`/proposal/${project.id}`}><button className="apply-button">Apply</button></Link>

                  {/* <button className="apply-button" onClick={() => handleClick(project.id)}>Apply</button> */}
                  {/* <button className="apply-button" >Apply</button> */}
                </article>
              ))
            ) : (
              <p>No projects available at the moment.</p>
            )}
          </div>
        </section>
      </main>

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
}

export default Ethical_hacking;