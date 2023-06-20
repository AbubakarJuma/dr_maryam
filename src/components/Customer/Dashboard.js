import Header from "../Header";
import Navigation from "./Navigation";
import Footer from "../Footer";


const Dashboard = () =>{
    return(
        <><Header /><Navigation /><div className="main">
            <div className="content">
                <div className="usedFor">
                    <h2>
                        <i className="fa fa-dashboard"></i> -->Main Dashboard
                    </h2>
                </div>

            </div>
        </div><Footer /></>
    );
}

export default Dashboard; 
