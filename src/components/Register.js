import React from "react";
import './loginstyle.css';

const Register =  () =>{
    return(
        <div className="login-form-containers">
        <h2>Registration Form</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
          </div>

          <div className="form-group">
            <label htmlFor="username">ZanzibarID</label>
            <input type="text" id="zanzibarID" />
          </div>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input type="text" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Register</button>
          <p>
          Already have an account? <b> <a href='/'>Click here</a></b>
        </p>
        </form>
      </div>
         
    );
}

export default Register;