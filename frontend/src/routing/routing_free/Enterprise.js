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

        {/* <section className="enterprise-benefits">
          <h2>Benefits for Enterprises</h2>
          <div className="benefit">
            <h3>Access to a Global Talent Pool</h3>
            <p>
              Connect with top professionals across various fields and industries, ensuring you find the right 
              talent for your project needs.
            </p>
          </div>
          <div className="benefit">
            <h3>Customizable Solutions</h3>
            <p>
              Tailor your talent acquisition strategy with flexible options that fit your specific requirements 
              and project scopes.
            </p>
          </div>
          <div className="benefit">
            <h3>Streamlined Project Management</h3>
            <p>
              Utilize our platform's robust tools to manage projects, track progress, and communicate effectively 
              with freelancers.
            </p>
          </div>
          <div className="benefit">
            <h3>Dedicated Support</h3>
            <p>
              Receive personalized support from our dedicated team to help you navigate the platform and maximize 
              your success.
            </p>
          </div>
        </section> */}
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
