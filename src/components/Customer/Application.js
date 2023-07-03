import Footer from "../Footer";
import Header from "../Header"
import Navigation from "./Navigation";

import style from '../Styles/application.module.css'


const Application = () => {
    return ( 
        
        <><Header /><Navigation /><div className="main">
            <div className="content">
                <div className="usedFor">
                    <h2>
                        <i className="fa fa-pencil"></i> Application Form
                    </h2>
                </div>

                <form >
            <div class="user-details">
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-user"></i> Full Name
                </span>
                <input
                  type="text"
                  name="ownerName"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-user-circle-o"></i> Username
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-flag"></i> Nationality
                </span>
                <input
                  type="text"
                  name="nationality"
                  placeholder="Enter your Nationality"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-map-marker"></i> Current Address
                </span>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-phone"></i> Phonenumber
                </span>
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Enter your phonenumber"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  <i className="fa fa-lock"></i> Password
                </span>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="save">
                Save Record
              </button>
              <button type="submit" className="back">
                Back
              </button>
            </div>
          </form>

            </div>
        </div><Footer /></>
        
     );
}
 
export default Application;