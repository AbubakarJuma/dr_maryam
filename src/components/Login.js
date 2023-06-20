import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './loginstyle.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Login = () =>{
    return(
        <div className="login-form-container">
        <h2>Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
          <p>
          Does not have an account?<b><a href='/register'> Register here</a></b> 
        </p>
        
        </form>
      </div>

    );
}

export default Login;