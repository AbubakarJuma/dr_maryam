import React, { useState } from "react";
import './loginstyle.css';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role:'customer'
  });

  const { username, email, password, confirmPassword,role } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      //alert("Passwords do not match");
      toast.error("Password does not match ", {
        className: "toast-error",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      return;
    }

    // Make an API request to insert the data into the database
    axios.post('http://localhost:8080/login/add', formData)
      .then(response => {
        // Handle successful registration
        console.log(response.data);
        toast.success("Registered successfull", {
          className: "toast-success",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      })
      .catch(error => {
        // Handle error
        toast.error("Username already taken ", {
          className: "toast-error",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
        console.error(error);
      });
  };

  return (
    <div className="login-form-containers">
    <ToastContainer />
      <h2>Registration Form</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
        <p>
          Already have an account? <b><a href="/">Click here</a></b>
        </p>
      </form>
    </div>
  );
}

export default Register;







// import React from "react";
// import './loginstyle.css';

// const Register =  () =>{

  
//     return(
//         <div className="login-form-containers">
//         <h2>Registration Form</h2>
//         <form className="login-form">
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input type="text" id="username" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="username">Email:</label>
//             <input type="text" id="email" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Confirm Password:</label>
//             <input type="password" id="password" />
//           </div>
//           <button type="submit">Register</button>
//           <p>
//           Already have an account? <b> <a href='/'>Click here</a></b>
//         </p>
//         </form>
//       </div>
         
//     );
// }

// export default Register;