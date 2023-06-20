import React, { useState } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';


const  SecurityChange = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Submitted:', { name, email });
      // Reset form fields
      setName('');
      setEmail('');
    };
  
    return (
        <><Header /><Navigation /><div class="main">
            <div class="content">

                <div className="usedFor">
                    <h2>
                        <i className="fa fa-lock"></i> Security Change
                    </h2>
                </div>

                <div className="usedFor">
                    <h4 style={{color:"blue", marginTop:"15px"}}>
                        Please insert valid informations for your account.
                    </h4>
                </div>

                <form>
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">
                                <i className="fa fa-user-circle-o"></i> Username
                            </span>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                required />
                        </div>
                        <div class="input-box">
                            <span class="details">
                                <i className="fa fa-phone"></i> Phonenumber
                            </span>
                            <input
                                type="text"
                                name="phonenumber"
                                placeholder="Enter your phonenumber"
                                required />
                        </div>

                        <div class="input-box">
                            <span class="details">
                                <i className="fa fa-unlock"></i> Old Password
                            </span>
                            <input
                                type="text"
                                name="password"
                                placeholder="Enter your old password"
                                required />
                        </div>
                        <div class="input-box">
                            <span class="details">
                                <i className="fa fa-lock"></i> New Password
                            </span>
                            <input
                                type="text"
                                name="password"
                                placeholder="Enter your password"
                                required />
                        </div>

                        <button type="submit" className="save">
                            Save Record
                        </button>
                        <button type="submit" className="back">
                            Back
                        </button>
                    </div></form>

            </div>
        </div>
        <Footer />
        </>
    );
  }
  
  export default SecurityChange;