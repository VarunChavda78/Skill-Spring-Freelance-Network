import React from 'react';
import { Link } from 'react-router-dom';
import './FW.css';
import Logo from './Images/Logo6.jpg'
const FindWork = ({ isAuthenticated, handleLogout }) => {
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
          <li><Link to="/find-talent">Find Talent</Link></li>
          <li><Link to="/find-work">Find Work</Link></li>
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
          <h1>Find Your Next Freelance Project</h1>
          <p>
            Discover exciting freelance opportunities that match your skills and interests. 
            Whether you're looking to work on short-term projects or long-term contracts, 
            Skill Spring Freelance has something for everyone.
          </p>
          {/* <button className="cta-button">Browse Opportunities</button> */}
        </section>

        <section className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="projects-list">
            <article className="project">
              <h3>Mobile App for Personal Finance Management</h3>
              <p><strong>Description:</strong>  Create a mobile application using Flutter or React Native that helps users track their expenses, set budgets, and monitor savings goals. The app should include features such as expense categorization, financial insights, and real-time notifications. Integration with banking APIs for secure data retrieval is required.</p>
              <Link to="/signup" className="project-link"><button className='view-button'>View Details</button></Link>
            </article>
            <article className="project">
              <h3>Custom CRM System Development</h3>
              <p><strong>Description:</strong> Build a custom Customer Relationship Management (CRM) system tailored for small businesses. The project will involve developing a web application using Django and React, featuring contact management, sales tracking, reporting tools, and email integration. The system should also allow for user roles and permissions.</p>
              <Link to="/signup" className="project-link"><button className='view-button'>View Details</button></Link>
            </article>
            <article className="project">
              <h3>Portfolio Website Creation for Creatives</h3>
              <p><strong>Description:</strong> Design and develop a personal portfolio website for a creative professional (e.g., designer, photographer, artist). The site should showcase their work, include an "About Me" section, and feature a contact form. SEO optimization and responsive design are essential for enhancing visibility and user experience.</p>
              <Link to="/signup" className="project-link"><button className='view-button'>View Details</button></Link>
            </article>
            <article className="project">
              <h3>Social Media Dashboard Application</h3>
              <p><strong>Description:</strong> Create a web-based social media dashboard that aggregates data from various platforms (e.g., Twitter, Facebook, Instagram). The application should provide insights into user engagement metrics, scheduling posts, and analyzing performance trends. Use React for the frontend and a RESTful API for data integration.</p>
              <Link to="/signup" className="project-link"><button className='view-button'>View Details</button></Link>
            </article>
            {/* Add more project listings as needed */}
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

export default FindWork;
