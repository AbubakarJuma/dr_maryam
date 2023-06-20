import React from "react";

const Navigation = () =>{
    return(
        <div className="navigation">
        <h3>Main Navigation</h3>
        <p><a href="/user-dash"><i className="fa fa-dashboard"> </i> Dashboard</a></p>
        <p><a href="/apply"><i className="fa fa-user-plus"> </i> Application</a></p>
        <p><a href="/my-app-list"><i className="fa fa-database"> </i> Application list</a></p>
        <p><a href="/cancel"><i className="fa fa-info-circle"> </i> Application Status</a></p>
        <p><a href="/changes"><i className="fa fa-gears"> </i> Security Change</a></p>
        <p><a href=""><i className="fa fa-sign-out"> </i> Logout</a></p>
    </div>
    );
}

export default Navigation;