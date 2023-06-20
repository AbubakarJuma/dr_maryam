import Footer from "../Footer";
import Header from "../Header"
import Navigation from "./Navigation";


const Application = () => {
    return ( 
        
        <><Header /><Navigation /><div className="main">
            <div className="content">
                <div className="usedFor">
                    <h2>
                        <i className="fa fa-pencil"></i> Application Form
                    </h2>
                </div>

            </div>
        </div><Footer /></>
        
     );
}
 
export default Application;