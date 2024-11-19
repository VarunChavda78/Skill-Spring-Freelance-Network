// import React, { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './FT.css';
import Logo from './Images/Logo6.jpg'

// Sample data for freelancer profiles with image URLs
const Department = [
  { name: 'Web_development',description: 'Expert in modern web technologies including React, Node.js, and more.', image: 'https://via.placeholder.com/150/FFB6C1/000000?text=Alice+Johnson' },
  { name: 'Game_Development',description: 'Creative designer with experience in Adobe Creative Suite and Figma.', image: 'https://via.placeholder.com/150/87CEEB/000000?text=Bob+Smith' },
  { name: 'AIML',description: 'Skilled writer specializing in SEO-optimized content and blog posts.', image: 'https://via.placeholder.com/150/98FB98/000000?text=Charlie+Brown' },
  { name: 'Cloud_Computing', description: 'Proficient in Google Ads, Facebook Ads, and other digital marketing strategies.', image: 'https://via.placeholder.com/150/FFD700/000000?text=Dana+White' },
  { name: 'Ethical_Hacking', description: 'Experienced in designing user-friendly interfaces and creating engaging user experiences.', image: 'https://via.placeholder.com/150/FF6347/000000?text=Eva+Green' },
  { name: 'Data_Science', description: 'Backend developer with expertise in Python, Java, and cloud services.', image: 'https://via.placeholder.com/150/40E0D0/000000?text=Frank+Harris' },
];

const FindTalent = ({ isAuthenticated, handleLogout }) => {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={Logo} alt="Skill Spring Freelance Logo" style={{borderRadius:'20px',marginTop:'-10px', float:'left', width: '50px', height: '50px', marginRight: '10px' }} />
        Skill Spring Freelance</Link></div>
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

      {/* Content Section */}
      <section className="content">
      <h1 style={{
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      margin: '20px 0'
    }}>Find Project</h1>


        {/* Freelancer Profiles Section */}
        <div className="freelancer-profiles">
          {Department.map((department, index) => (
            <div className="profile-card" key={index}>
              {/* <img src={freelancer.image} alt={freelancer.name} className="profile-image" /> */}
              <div className="profile-info">
                <h2>{department.name}</h2>
                <h3>{department.title}</h3>
                <p>{department.description}</p>

                <Link to={`/${department.name}/`}><button className="apply-button">Find</button></Link>
              </div>
            </div>
          ))}
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

export default FindTalent;
