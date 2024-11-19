import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { jwtDecode } from 'jwt-decode';
import Im4 from './Images/Im16.jpg'
import Im24 from './Images/Im24.jpg'
import axios from 'axios';
import Logo from './Images/Logo6.jpg'

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

      {/* Hero Section */}
      <section className="zero">
        <div className="hero-content">
          <h1>Hello, {username}</h1>
          <p>Welcome to Skill Spring Freelance! Showcase your expertise, connect with clients, and find exciting projects that match your skills. Empower your freelance career with seamless opportunities on our platform.</p>
          {/* <p>With Skill Spring Freelance, you have the freedom to work on projects you love, set your own hours, and grow your career on your terms. Our tools are designed to make freelancing easier, from time tracking and project management to secure payments via escrow. We ensure you have everything you need to focus on your work while we handle the rest.</p> */}
          <Link to="/find-work"><button className="cta-button">Get Started</button></Link>
        </div>
        <div>
          <img style={{ marginTop: 40 + 'px' }} className='home-img' src={Im4} alt="Freelancing Hub" />
        </div>
      </section>





      <section className="card-section">
        <div className="card">
          <img src={Im24} alt="Freelancer Benefits" className="card-image"/>
          <div className="card-description">
            <h2>Why Choose Us?</h2>
            <p>
              At Skill Spring Freelance, we connect you with top-tier talent from around the world. Whether you're looking for project-based work or long-term opportunities, our platform offers you unparalleled access to highly skilled freelancers in a wide range of industries.
              Start Our Journy!
            </p>
            <Link to="/find-work"><button className="cta-button">Find Work</button></Link>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What our users say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"Skill Spring Freelance is an innovative platform connecting talented freelancers with clients, offering seamless project management, secure transactions, and a user-friendly interface for businesses to find top-quality freelance professionals"</p>
            <h3>- John Doe</h3>
          </div>
          <div className="testimonial-item">
            <p>"Skill Spring Freelance is a dynamic platform designed to empower freelancers and clients alike, offering exceptional services, seamless collaboration, and opportunities to connect, grow, and succeed in the freelance industry"</p>
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
