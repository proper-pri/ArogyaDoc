import React, { useState } from 'react';
import { getPatientData} from '../services/Service';



import { loginUser } from '../redux/auth/authThunk';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "../pages design/LoginPage.css";
const LoginPage = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const dispatch=useDispatch();//hook
const navigate  = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const body = {
        username: username,
        password: password
    };

    try { 
        
          dispatch(loginUser(body,navigate));
        
          
  

       
    } catch (error) {
        console.error('Error during login:', error);
    }
};



  return (

    

<div className="container" >
  <div className="top" />
  <div className="bottom" />
  <div className="center">
    <h2>Log In</h2>
    <input
                    type="text"
                    className="form-control"
                    placeholder='Username'
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
    <input
                    type="password"
                    placeholder='Password'

                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />   
                  <button onClick={handleSubmit}>Submit</button> <h2>&nbsp;</h2>
  </div>
</div>











  
  );
};

export default LoginPage;
