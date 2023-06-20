import Footer from "../Footer";
import Header from "../Header";
import Navigation from "./Navigation";

const AppList = () => {
    return ( 

        <><Header /><Navigation /><div className="main">
            <div className="content">
                <div className="usedFor">
                    <h2>
                        <i className="fa fa-list"></i> Application List
                    </h2>
                </div>

            </div>
        </div><Footer /></>
     );
}
 
export default AppList;