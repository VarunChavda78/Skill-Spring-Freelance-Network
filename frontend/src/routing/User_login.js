import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
// import HomeF from './routing_free/Home';
// import HomeC from './routing_cli/Home';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://127.0.0.1:8000/api/login/', {
        username: username,
        password: password
      })
      .then(response => {
        console.log('Login successful', response.data);
        if (response.data.data === 'Login success') {
          // Save token and update authentication state
          const token = response.data.token.access;
          localStorage.setItem('authToken', token);
          console.log(localStorage.length);

          const decodedToken = jwtDecode(token);
          // console.log(decodedToken.is_freelancer);

          if (decodedToken.is_client) {
            console.log("This is the Client page, redirecting...");
            navigate('/');
          } else if (decodedToken.is_freelancer) {
            console.log("This is the Freelancer page, redirecting...");
            navigate('/');
          } else {
            console.log("User is neither a freelancer nor a client");
          }
          
          onLoginSuccess();
        }
      })
      .catch(error => {
        // if (error.response) {
        //   console.error('Response error:', error.response.data);
        // } else if (error.request) {
        //   console.error('Request error:', error.request);
        // } else {
        //   console.error('Error', error.message);
        // }
        alert("Username or password is invalid !")
        navigate('/')
      });
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
    },
    input: {
      padding: '10px',
      margin: '10px 0',
      width: '300px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      margin: '20px 0',
      backgroundColor: '#025440',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    title: {
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#025440',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        style={styles.input}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>Login</button>
      <h5>Create new account <Link to="/signup">Sign up</Link></h5>
    </div>
  );
};

export default Login;
