import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to your server-side registration endpoint
    axios
      .post('http://localhost:8080/api/register', { username, password })
      .then((response) => {
        // Registration successful, handle the response
        const token = response.data.token;
        console.log('Registration successful. Token:', token);
        // Handle success UI or redirect to a different page
      })
      .catch((error) => {
        // Registration failed, handle the error (e.g., display an error message)
        console.error('Registration failed:', error);
        // Handle error UI or show an error message
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;



      
      