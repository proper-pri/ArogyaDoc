import React, { useState } from 'react';
import { login } from '../services/Service';

import Cookies from 'js-cookie';
import { loginUser } from '../redux/auth/authThunk';
import { useDispatch, useSelector } from "react-redux";
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const dipatch=useDispatch();//hook



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const body = {
        username: username,
        password: password
    };

    try {
        
        const res =  dipatch(loginUser(body));
  

        if (res && res.token) {
            // Save the token in a cookie
            Cookies.set('authToken', res.token, { expires: 7 }); // Expires in 7 days

            // Handle successful login
            console.log('Token saved in cookie:', res.token);
        } else {
            console.log('Login failed or no token received');
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};



  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
