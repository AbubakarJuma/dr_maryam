import React, { useState } from 'react';
import Header from '../Header';
import Navigation from './Navigation';
import Footer from '../Footer';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: '',
    zanzibarID: '',
    nationality: '',
    address: '',
    password: '',
    username: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Perform form submission logic here
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderFormFields = () => {
    switch (currentStep) {
      case 1:
        return (
            <><div class="user-details">
                <div class="input-box">
                    <span class="details">
                        <i className="fa fa-user"></i> Full Name
                    </span>
                    <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required />
                </div>
                <div class="input-box">
                    <span class="details">
                        <i className="fa fa-id-card-o"></i> Zanzibar ID
                    </span>
                    <input
                        type="text"
                        name="zanzibarID"
                        value={formData.zanzibarID}
                        onChange={handleChange}
                        placeholder="Enter your Zanzibar ID"
                        required />
                </div>

                <div class="input-box">
                    <span class="details">
                        <i className="fa fa-calendar"></i> Date of Birth
                    </span>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        placeholder="Enter your DOB"
                        required />
                </div>

                <div class="input-box">
                    <span class="details">
                        <i className="fa fa-flag"></i> Nationality
                    </span>
                    <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        placeholder="Enter your nationality"
                        required />
                </div>
                <div class="input-box">
                    <span class="details">
                        <i className="fa fa-map-marker"></i> Current Address
                    </span>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your  Current Address"
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
            </div></>
        );
      case 2:
        return (
          <div class="user-details">
          <div class="input-box">
              <span class="details">
                  <i className="fa fa-legal"></i> Application Name
              </span>
              <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="Enter your Application Name"
                  required />
          </div>
          <div class="input-box">
              <span class="details">
                  <i className="fa fa-calendar"></i> Application Date
              </span>
              <input
                  type="date"
                  name="zanzibarID"
                  value={formData.zanzibarID}
                  onChange={handleChange}
                  placeholder="Enter your Application Date"
                  required />
          </div>

          <div class="input-box">
              <span class="details">
                  <i className="fa fa-building"></i> Building Type
              </span>
              <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Enter your Building Type"
                  required />
          </div>

          <div class="input-box">
              <span class="details">
                  <i className="fa fa-location-arrow"></i> Building City
              </span>
              <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="Enter your Building City"
                  required />
          </div>
          <div class="input-box">
              <span class="details">
                  <i className="fa fa-compass"></i> Building Region
              </span>
              <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required />
          </div>

          <div class="input-box">
              <span class="details">
                  <i className="fa fa-map-marker"></i> Building Street
              </span>
              <input
                  type="text"
                  name="phonenumber"
                  placeholder="Enter your Building Street"
                  required />
          </div>
      </div>
        );
      default:
        return null;
    }
  };

  return (
    <><Header /><Navigation />
    <div className="main">
    <div className="content">
                <div className="usedFor">
                    <h2>
                        <i className="fa fa-pencil"></i> Application Form
                    </h2>
                </div>
          <form onSubmit={handleSubmit}>
              {renderFormFields()}
              <br />
              {currentStep > 1 && (
                  <button type="button" className='previous' onClick={prevStep}>
                      Previous
                  </button>
              )}
              {currentStep < 2 ? (
                  <button type="button"  className="next" onClick={nextStep}>
                      Next Step
                  </button>
              ) : (
                  <button type="submit" className='subm'>Submit</button>
              )}
          </form>
      </div>
      </div>
      <Footer /></>
  );
}

export default MultiStepForm;
