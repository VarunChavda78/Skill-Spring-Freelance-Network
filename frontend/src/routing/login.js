import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    axios.post('http://localhost:8000/api/login/', {
      username: username,
      password: password
    })
    .then(response => {
      console.log('Login successful', response.data);
      const store=response.data
      console.log(store.token.access)
      // Save token, redirect, etc.
    })
    .catch(error => {
      console.error('There was an error logging in!', error);
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
