import Header from "../Header";
import Navigation from "./Navigation";
import Footer from "../Footer";


const Dashboard = () =>{
    return(
        <><Header /><Navigation /><div className="main">
            <div className="content">
                <div className="usedFor">
                    <h2>
                        <i className="fa fa-dashboard"></i> Main Dashboard
                    </h2>
                </div>
                <div class="column">
        <div class="profile">
            <h2>Customer Profile </h2>
            <p><strong>Name:</strong> Abubakar Juma</p>
            <p><strong>Email:</strong> abubakajuma2468@gmail.com</p>
            <p><strong>Phone:</strong> 0672727063</p>
            <p><strong>Address:</strong> 123 Main St, City, State, Zip</p>
        </div>
    </div>
    <div class="column">
        <div class="profile">
            <h2>Account Profile </h2>
            <p><strong></strong></p>
            <p><strong>Created Date:</strong> jane.smith@example.com</p>
            <p><strong>Account Status:</strong> 987-654-3210</p>
            <p><strong>Account No:</strong> 456 Elm St, City, State, Zip</p>
        </div>
    </div>
    <div class="clearfix"></div>

            </div>
        </div><Footer /></>
    );
}

export default Dashboard; 
