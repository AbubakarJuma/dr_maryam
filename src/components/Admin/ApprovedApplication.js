import Header from "../Header";
import Footer from "../Footer";
import Navigation from "../Navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApprovedApplication  = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/application/all"); // Replace with your API endpoint
        //setData(response.data);

        const filteredData = response.data.filter(item => item.appStatus === 'Active');
        setData(filteredData)
      } catch (error) {
        console.log("Error fetching data:", error);
        toast.error("Connection Error ", {
          className: "toast-error",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      }
    };

    const handleDelete  = (appID) => {

        if(window.confirm('Are you sure you want to delete? ')){
          axios.delete(`http://localhost:8080/application/delete${appID}`)
          .then(() =>{
            setData(data.filter(item => item.appID !== appID ));
    
            toast.success("Deleted successfull",{
              className: "toast-success",
              position:toast.POSITION.TOP_RIGHT,
              autoClose: 5000,
    
            });
    
          })
          .catch(error => console.error(error));
        }
    
      }
    return(
        <><Header /><Navigation /><div className="main">
            <div className="content">
            <div className="usedFor">
        <h2><i className="fa fa-check-square-o"></i> Approved list</h2>

        </div>

        <div className="usedFors"></div>
          <div className="tables">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>CustomerPhone</th>
                  <th>Application Name</th>
                  <th> Date</th>
                  <th> Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item,index) => (
                  <tr key={item.appID}>
                    <td>{index + 1}</td>
                    <td>{item.owner.ownerName}</td>
                    <td>{item.owner.phonenumber}</td>
                    <td>{item.appName}</td>
                    <td>{item.appDate}</td>
                    <td>{item.appStatus}</td>
                    <td>
                      <button className="button view">
                        <i className="fa fa-eye"></i>
                      </button>
                      <button className="button edit">
                        <i className="fa fa-edit"></i>
                      </button>
                      <button className="button approve">
                        <i className="fa fa-check-square-o"></i>
                      </button>
                      <button className="button delete" onClick={() => handleDelete(item.appID)}>
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

            </div>
        </div><Footer /></>
    );

}

export default ApprovedApplication;