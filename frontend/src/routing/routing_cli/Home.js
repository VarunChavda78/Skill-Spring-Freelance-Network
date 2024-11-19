import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Im4 from './Images/Im2.jpg'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Logo from './Images/Logo6.jpg'
import Im1 from './Images/Im22.jpg'
const Home = ({ isAuthenticated, handleLogout }) => {

  const [username,setUsername]=useState("")
  const auth=localStorage.getItem('authToken')
  const decodedToken=jwtDecode(auth)
  console.log(decodedToken.user_id)
  const id=decodedToken.user_id
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/getuser/${id}`)
    .then(response=>{
      console.log(response.data.data[0].username)
      const un=response.data.data[0].username
      setUsername(un)
    })
    .catch(error=>{
      console.error("Get user error",error)
    })
  })

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

      {/* Hero Section */}
      <section className="zero">
        <div className="hero-content">
          <h1>Hello, {username}</h1>
          <p>Welcome to Skill Spring Freelance! Discover top talent, manage project proposals, and hire skilled freelancers for your business needs. Streamline your workflow and achieve success with our trusted platform.</p>
          <Link to="/createproject"><button className="cta-button">Create Peoject</button></Link>
        </div>
        <div>
        <img style={{ marginTop: 40 + 'px' }} className='home-im' src={Im4} alt="Freelancing Hub" />
        </div>
      </section>




      <section className="card-section">
        <div className="card">
          <img src={Im1} alt="Freelancer Benefits" className="card-image"/>
          <div className="card-description">
            <h2>Why Choose Us?</h2>
            <p>
              At Skill Spring Freelance, we connect you with top-tier talent from around the world. Whether you're looking for project-based work or long-term opportunities, our platform offers you unparalleled access to highly skilled freelancers in a wide range of industries.
            </p>
            <Link to="/find-talent"><button className="cta-button">Find Talent</button></Link>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What our users say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"Skill Spring Freelance has revolutionized how I work."</p>
            <h3>- John Doe</h3>
          </div>
          <div className="testimonial-item">
            <p>"Finding talent is easier than ever."</p>
            <h3>- Jane Smith</h3>
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

export default Home;
