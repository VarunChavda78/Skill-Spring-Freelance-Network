import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Web_developement from "../routing_free/Web_developement";

const CreateProject = ({ onCreateProject }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [budget, setBudget] = useState('');
    const [department, setDepartment] = useState('');
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const auth = localStorage.getItem('authToken');

    const handleSignup = (e) => {
        e.preventDefault(); // Corrected spelling
        axios.post('http://127.0.0.1:8000/api/projects/',{
            title: title,
            description: description,
            budget: budget,
            department: department,
        }, { headers: { Authorization: `Bearer ${auth}` }} )
        .then(response => {
            console.log("Project Created Successfully!",response.data);
            // setError('');
            onCreateProject();
            alert("Project Created Successfully !")
            navigate('/');
        })
        .catch(error => {
            console.log("Project Not Added! ",error);
        });
    };

    const styles = {
        container: {
            maxWidth: '500px',
            margin: '0 auto',
            marginTop: '100px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f0f2f5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        label: {
            marginBottom: '8px',
            fontWeight: 'bold'
        },
        input: {
            padding: '10px',
            margin: '10px 0',
            width: '100%',
            maxWidth: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
        },
        checkbox: {
            marginRight: '8px'
        },
        submitButton :{
            padding: '10px 20px',
            margin: '20px 0',
            backgroundColor: '#025440',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
        },
        errorMessage: {
            color: 'red',
            marginTop: '10px'
        },
        successMessage: {
            color: 'green',
            marginTop: '10px'
        },
        title: {
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#025440'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Create Project</h2>
            <form style={styles.form} onSubmit={handleSignup}>
                <label style={styles.label}>
                    Title :
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Description :
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Budget:
                    <input
                        type="text"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    {/* Department: */}
                    Web Development <input type="radio" name="x" value={"Web_development"} onChange={(e) => setDepartment(e.target.value)}  />
                    AIML <input type="radio" name="x" value={"AIML"} onChange={(e) => setDepartment(e.target.value)}  />
                    <br/>
                    Cloud Computing <input type="radio" name="x"  value={"Cloud_computing"} onChange={(e) => setDepartment(e.target.value)}  />
                    Data Science <input type="radio" name="x"  value={"Data_science"} onChange={(e) => setDepartment(e.target.value)} />
                    <br/>
                    Ethical Hacking <input type="radio" name="x"  value={"Ethical_hacking"} onChange={(e) => setDepartment(e.target.value)}  />
                    Game Development <input type="radio" name="x"  value={"Game_development"} onChange={(e) => setDepartment(e.target.value)}  />
                        
                </label>
                <input
                    type="submit"
                    value="createproject"
                    style={styles.submitButton}
                />
            </form>
            {/* {error && <p style={styles.errorMessage}>{error}</p>} */}
            {/* {success && <p style={styles.successMessage}>{success}</p>} */}
        </div>
    );
};

export default CreateProject;
