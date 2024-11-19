import React from 'react';
import { Link } from 'react-router-dom';
import './FT.css';
import Im1 from './Images/Im10.jpg';
import Im2 from './Images/Im2.jpg';
import Im3 from './Images/Im11.jpg';
import Im4 from './Images/Im4.jpg';
import Im5 from './Images/Im5.jpg';
import Im6 from './Images/Im6.jpg';
import Im7 from './Images/Im7.jpg';
import Im8 from './Images/Im8.jpg';
import Im9 from './Images/Im9.jpg';
import Im10 from './Images/Im13.jpg';
import Logo from './Images/Logo6.jpg'

// Sample data for freelancer profiles with image URLs
const freelancers = [
  { name: 'Alice Johnson', title: 'Web Developer', description: 'Expert in modern web technologies including React, Node.js, and more.', image: Im1 },
  { name: 'Bob Smith', title: 'Graphic Designer', description: 'Creative designer with experience in Adobe Creative Suite and Figma.', image: Im2 },
  { name: 'Charlie Brown', title: 'Content Writer', description: 'Skilled writer specializing in SEO-optimized content and blog posts.', image: Im3 },
  { name: 'Dana White', title: 'Digital Marketer', description: 'Proficient in Google Ads, Facebook Ads, and other digital marketing strategies.', image: Im4 },
  { name: 'Eva Green', title: 'UX/UI Designer', description: 'Experienced in designing user-friendly interfaces and creating engaging user experiences.', image: Im5 },
  { name: 'Frank Harris', title: 'Software Engineer', description: 'Backend developer with expertise in Python, Java, and cloud services.', image: Im6 },
  { name: 'Grace Lee', title: 'Social Media Manager', description: 'Expert in managing social media accounts and creating engaging content.', image: Im7 },
  { name: 'Henry Davis', title: 'Video Editor', description: 'Professional video editor with experience in Premiere Pro and After Effects.', image: Im8 },
  { name: 'Ivy Moore', title: 'Virtual Assistant', description: 'Organized and efficient virtual assistant skilled in administrative tasks and support.', image: Im9 },
  { name: 'Jack Wilson', title: 'Mobile App Developer', description: 'Specializes in developing native and cross-platform mobile applications.', image: Im10 }
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

      {/* Content Section */}
      <section className="content">
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'center',
          margin: '20px 0'
        }}>Find Talent</h1>

        {/* Freelancer Profiles Section */}
        <div className="freelancer-profiles">
          {freelancers.map((freelancer, index) => (
            <div className="profile-car" key={index}>
              <img src={freelancer.image} alt={freelancer.name} className="profile-im" />
              <div className="profile-info">
                <h2>{freelancer.name}</h2>
                <h3>{freelancer.title}</h3>
                <p>{freelancer.description}</p>
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
