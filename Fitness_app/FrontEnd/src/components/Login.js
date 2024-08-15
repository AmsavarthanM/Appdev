import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios, { HttpStatusCode } from 'axios';
import userContext from '../Context';
const Login = () => {

    const[user1,setUser1]=useContext(userContext);
    
    const [user, setUser] = useState({
        password: '',
        email: ''
    });
   let navigate=useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
   
    const handleSubmit = async(event) => {
        event.preventDefault();
        
        try {
          const response = await axios.get(`http://localhost:8080/get/${user.email}/${user.password}`);
        if(response.status === HttpStatusCode.Ok){
            navigate("/home")
            console.log(response.data);
            setUser1(response.data);
            console.log(user1);

        //   alert("Success");
      } 
  } 
  catch (error) {
    console.log(user);
      alert('There was an error Logging!', error);
  }

    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        label="Email"
                        name="email"
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        label="Password"
                        name="password"
                       
                        onChange={handleChange} 
                        required
                        />
                </div>
                <Button variant='contained'
                     type='submit'>
                        Sign in
                     </Button>
                <br></br>
                <br>
                </br>

                <a><Link style={{textDecoration:'none'}} to="/register">Don't have an account ? Sign Up</Link></a>
            </form>
        </div>
      
    );
};

export default Login;