import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

const Reg = () => {
    let navigate=useNavigate();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/post', user);
            console.log('Registration successful', response.data);
            navigate("/")
        } catch (error) {
            console.error('There was an error registering!', error);
           
        }
    };

    return (
        <div className="registration-container">
            <form onSubmit={handleSubmit} className="registration-form">
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        label="Username"
                        value={user.username} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={user.password} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-group">
                     <Button onClick={handleSubmit} variant='contained'
                     type='submit'>
                        Sign Up
                     </Button>
                </div>
                <a><Link style={{textDecoration:'none'}} to="/">Already have an account? Sign in</Link></a>
            </form>
        </div>
    );
};

export default Reg;