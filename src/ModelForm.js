import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ModelForm = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    username: '',
    nationality: '',
    location: '',
    phonenumber: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/owner/add', formData)
      .then(response => {
        console.log(response.data); // Success message
        // Reset the form if needed
      })
      .catch(error => {
        console.error(error);
        // Handle error scenarios
      });
  };

  return (
    <><ToastContainer />
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="ownerName"
        value={formData.ownerName}
        onChange={handleChange}
        placeholder="Owner Name" />
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username" />
      <input
        type="text"
        name="nationality"
        value={formData.nationality}
        onChange={handleChange}
        placeholder="Nationality" />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location" />
      <input
        type="text"
        name="phonenumber"
        value={formData.phonenumber}
        onChange={handleChange}
        placeholder="Phone Number" />
      <button type="submit">Submit</button>
    </form></>
  );
};

export default ModelForm;
