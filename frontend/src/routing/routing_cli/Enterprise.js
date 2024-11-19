import React from 'react';
import { Link } from 'react-router-dom';
import './Enterprise.css';
import Logo from './Images/Logo6.jpg'
import Im21 from './Images/Im21.jpg'
import Loc from './Images/Lg1.jpeg'
import ema from './Images/email.svg'
import ph from './Images/ph.jpg'
import insta from './Images/insta.jpg'
import facebook from './Images/facebook.png'
import linkedin from './Images/linkedin.png'
import X from './Images/X-logo.png'

const Enterprise = ({ isAuthenticated, handleLogout }) => {
  
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


      {/* Main Content */}
      <main className="main-content">
        {/* <section className="intro">
          <h1>Enterprise Solutions</h1>
          <div>
            <img src={Im21} alt="contact us"/>
          </div>
          <div>
            
          <p>
            At Skill Spring Freelance, we provide comprehensive solutions tailored for enterprises to streamline 
            their project management and talent acquisition processes. Discover how our platform can help your 
            organization achieve its goals more efficiently.
          </p>
          </div>
        </section> */}

        <section className="card-section">
        <div className="card">
          <img src={Im21} alt="Freelancer Benefits" className="card-image"/>
          <div className="card-description">
            <h2>Contact Us</h2>
            <p>
             <img src={Loc} style={{marginTop:'5px',marginRight:'5px',height:'20px',width:'20px'}} alt='Not'/> 
            <strong>  B-21,Somnath Complex, Gift City, Gandhinagar <br/></strong>
             <img src={ema} style={{marginTop:'5px',marginRight:'5px',height:'20px',width:'20px'}} alt='Not'/> 
            <strong> skillspringfreelancepvtltd@gmail.com<br/></strong>
             <img src={ph} style={{marginTop:'5px',marginRight:'5px', height:'20px',width:'20px'}} alt='Not'/> 
            <strong>9586421320 <br/></strong>
            </p>
            <Link to="https://www.instagram.com/"><img src={insta} style={{marginTop:'5px',marginRight:'5px', height:'40px',width:'50x'}} alt='Not'/></Link>
            <Link to="https://www.facebook.com/"><img src={facebook} style={{marginTop:'5px',marginRight:'5px', height:'40px',width:'40px'}} alt='Not'/></Link>
            <Link to="https://www.linkedin.com/in/varun-chavda-614369270/?trk=opento_sprofile_goalscard"><img src={linkedin} style={{marginTop:'5px',marginRight:'5px', height:'40px',width:'40px'}} alt='Not'/></Link>
            <Link to="https://x.com/?lang=en-in"><img src={X} style={{marginTop:'5px',marginRight:'5px', height:'40px',width:'40px'}} alt='Not'/></Link>
          </div>
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
};

export default Enterprise;
