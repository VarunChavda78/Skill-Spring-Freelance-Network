import React from 'react';
import { Link } from 'react-router-dom';
import './WU.css';
import Logo from './Images/Logo6.jpg'

const WhyUpwork = ({ isAuthenticated, handleLogout }) => {
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

      {/* About Us Content */}
      <section className="about-us">
        <div className="overlay"></div> {/* Overlay for low opacity effect */}
        <div className="about-us-content">
          <h1>About Skill Spring Freelance</h1>
          <p>
            Welcome to Skill Spring Freelance, your one-stop solution for connecting businesses with top freelancers from
            around the world. Our mission is to provide a seamless platform where skilled professionals can offer their
            expertise and businesses can find the talent they need to grow.
          </p>
          <p>
            Whether you're a freelancer looking to showcase your skills, or a business in need of talent, Skill Spring
            Freelance is here to bridge the gap. With an easy-to-use interface, secure payments, and a wide array of
            industries covered, we aim to empower professionals and businesses alike.
          </p>
        </div>
      </section>

      {/* Our Features Cards */}
      <section className="features-section">
        <h2>Why Choose Skill Spring Freelance?</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Wide Talent Pool</h3>
            <p>
              Our platform features professionals from various industries including web development, design, content
              writing, marketing, and more. Find the right talent for your project with ease.
            </p>
          </div>

          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>
              We ensure that freelancers are paid securely through our platform. Employers can rest assured that their
              payments are processed efficiently and securely.
            </p>
          </div>

          <div className="feature-card">
            <h3>Flexible Work Environment</h3>
            <p>
              Work remotely, set your hours, and find clients from across the globe. Skill Spring Freelance offers a
              flexible platform that works for freelancers and businesses alike.
            </p>
          </div>

          <div className="feature-card">
            <h3>Verified Freelancers</h3>
            <p>
              We take pride in verifying the skills and expertise of our freelancers, ensuring that businesses hire
              professionals who are qualified and trustworthy.
            </p>
          </div>
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

export default WhyUpwork;
