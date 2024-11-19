import React, { useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';

const Proposal = ({onProposalSuccess}) => {
  const [bid_amount, setBid_amount] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const auth = localStorage.getItem('authToken');
  console.log(auth)

  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://127.0.0.1:8000/api/proposals/',
      {project:id,
      bid_amount: bid_amount,
      description: description},{ headers: { Authorization: `Bearer ${auth}` }
    })
    .then(response => {
      console.log('Project Applied Successfully', response.data);
      onProposalSuccess()
      alert("Your Proposal has been applied !")
      navigate('/Web_development')
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
      <h2 style={styles.title}>Apply</h2>
      Bid Amount :- <input
        type="text"
        value={bid_amount}
        onChange={(e) => setBid_amount(e.target.value)}
        placeholder="Enter Bid Amount"
        style={styles.input}
      />
      Description :-
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Description"
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>Apply</button>
    </div>
  );
};
export default Proposal;
