import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ViewApplication = () => {

    const [data , setData] = useState({appID: ''});

    const {appID} = useParams();

    useEffect(() => {
        fetchData();
    },[]);


    const fetchData = async () => {
        try{
            const response = await axios.get("http://localhost:8080/application/byId"+appID);
            console.log(response.data);
            setData(response.data);
        }catch(error){
            console.log("error in this ",error);
        }
    }
    return ( 

        <><Header /><Navigation /><div className="main">
            <div className="content">

                <div className="usedFor">
                    <h2><i className="fa fa-bank"></i> View Customer Application Details</h2>
                </div>


                <div className="usedFor">
                    
                    



                    
                </div>


            </div>
        </div><Footer /></>
     );
}
 
export default ViewApplication;