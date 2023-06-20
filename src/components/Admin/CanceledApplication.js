import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";

const CanceledApplication = () =>{
    return(
        <><Header /><Navigation /><div className="main">
            <div className="content">
                <div className="usedFor">
                    <h2><i className="fa fa-ban"></i> Canceled list</h2>

                </div>
            </div>
        </div><Footer /></>
    );
}

export default CanceledApplication;