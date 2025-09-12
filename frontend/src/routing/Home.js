import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Im21 from './Images/Im21.jpg';
import Im4 from './Im6.png';
import Logo from './Images/Logo6.jpg';
import Slide1 from './Images/Im23.jpg';  // Replace with your image
import Slide2 from './Images/Im24.jpg';  // Replace with your image
import Slide3 from './Images/Im25.jpg';  // Replace with your image
import Freelancer1 from './Images/Im7.jpg';  // Replace with your image
import Freelancer2 from './Images/Im8.jpg';  // Replace with your image
import Freelancer3 from './Images/Im9.jpg';  // Replace with your image
import { useNavigate } from 'react-router-dom';

const freelancers = [
  {
    name: 'John Doe',
    skill: 'Web Developer',
    rating: 4.9,
    profilePic: Freelancer1,
  },
  {
    name: 'Jane Smith',
    skill: 'Graphic Designer',
    rating: 4.8,
    profilePic: Freelancer2,
  },
  {
    name: 'Mike Johnson',
    skill: 'Content Writer',
    rating: 4.7,
    profilePic: Freelancer3,
  },
];
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1200px',
  },
  header: {
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#0073e6',
    color: '#fff',
  },
  title: {
    fontSize: '3em',
    margin: '0',
  },
  tagline: {
    fontSize: '1.2em',
    marginTop: '10px',
  },
  carouselSection: {
    textAlign: 'center',
    margin: '40px 0',
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    overflowX: 'scroll',
  },
  carouselImage: {
    width: '300px',
    height: '200px',
    borderRadius: '10px',
  },
  freelancerSection: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  sectionTitle: {
    fontSize: '2.2em',
    marginBottom: '30px',
  },
  freelancerCards: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    width: '30%',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  profilePic: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  hireButton: {
    backgroundColor: '#014339',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f1f1f1',
  },
};
const Home = ({ isAuthenticated, handleLogout }) => {
  const navigate=useNavigate()
  useEffect(() => {
    if (isAuthenticated) {
      // Force page reload after login success
      window.location.reload();
    }
  }, [isAuthenticated]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: Slide1, caption: 'Explore Freelancing Opportunities with FreelanceFusion', buttonText: 'Learn More', buttonLink: '/signup' },
    { src: Slide2, caption: 'Connect with Top Freelancers Worldwide', buttonText: 'Sign Up Now', buttonLink: '/signup' },
    { src: Slide3, caption: 'Find Work That Matters to You', buttonText: 'Start Your Journey', buttonLink: '/signup' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
  const handleclick=(()=>{
    navigate('/find-talent')
  })

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className='logo'>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={Logo} alt="Skill Spring Freelance Logo" style={{borderRadius:'20px',marginTop:'-10px', float:'left', width: '50px', height: '50px', marginRight: '10px' }} />
          Skill Spring Freelance
          </Link>
        </div>
        <ul className="nav-links">
          {/* <li><button><Link to="/find-talent">Find Talent</Link></button></li> */}
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

      {/* Hero Section */}
      <section className='zero'>
        <div className='hero-content'>
          <h1>Welcome To <br/> Freelancing Hub <br/> & <br/> Find Your Dream Job..</h1>
          <h1>Hello Pankaj Sir</h1>
          <p>
          Welcome to Skill Spring Freelance, the ultimate platform for clients and freelancers. Connect, collaborate, and create with ease. Find top talent or your next project in a thriving freelance marketplace.
          </p>
          <Link to="/signup"><button className="cta-button">Get Started</button></Link>
        </div>
        <div>
          <img style={{ marginTop: 40 + 'px' }} src={Im4} alt="Freelancing Hub" />
        </div>
      </section>

      <section className="card-section">
        <div className="card">
          <img src={Im21} alt="Freelancer Benefits" className="card-image"/>
          <div className="card-description">
            <h2>Why Choose Us?</h2>
            <p>
              At Skill Spring Freelance, we connect you with top-tier talent from around the world. Whether you're looking for project-based work or long-term opportunities, our platform offers you unparalleled access to highly skilled freelancers in a wide range of industries.
            </p>
            <Link to="/find-talent"><button className="cta-button">Find Talent</button></Link>
          </div>
        </div>
      </section>

      

      <section style={styles.freelancerSection}>
        <h2 style={styles.sectionTitle}>Meet Our Top Freelancers</h2>
        <div style={styles.freelancerCards}>
          {freelancers.map((freelancer, index) => (
            <div key={index} style={styles.card}>
              <img
                src={freelancer.profilePic}
                alt={`${freelancer.name}'s profile`}
                style={styles.profilePic}
              />
              <h3>{freelancer.name}</h3>
              <p>{freelancer.skill}</p>
              <p>Rating: {freelancer.rating} / 5.0</p>
              <button style={styles.hireButton} onClick={handleclick}>View More </button>
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

export default Home;