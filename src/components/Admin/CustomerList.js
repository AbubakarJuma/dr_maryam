import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from 'react-responsive-modal';
import UpdateUser from "./UpdateUser";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const CustomerList = ({ setOpen }) => {

  const handleOpenModal =  () => {
    setOpen(true);
  };

  const [data, setData] = useState([]);

  //const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/owner/all'); // Replace with your API endpoint
      //const filteredData = response.data.filter(item => item.nationality ==='Zanzibar');
      //setData(filteredData);
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  //handler t0 delete data

  const handlerDelete = (itemId)  =>{
    if(window.confirm('Are you sure you want to delete?')){
      axios.delete(`http://localhost:8080/owner/delete/${itemId}`)
      .then(() =>{
        setData(data.filter(item => item.ownerID !== itemId));
        //alert('Deleted successfull');
        toast.success("Deleted successfull", {
          className: "toast-success",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      })

      .catch(error => console.error(error));
    }
  }

    return(
      <><Header></Header>
      <ToastContainer />
      <Navigation></Navigation>
      
      <div className="main">
        <div className="content">

        <div className="usedFor">
        <h2><i className="fa fa-list"></i> Customer list</h2>

        </div>

        <div className="usedFors">
            <a href="/addcustomer"><button type="button" className="addcustomer"><i className="fa fa-plus"> </i> New Customer</button></a>

        </div>
          <div className="tables">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Names</th>
                  <th>Nationality</th>
                  <th>Place</th>
                  <th>Phonenumber</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.ownerID}>
                    <td>{index + 1}</td>
                    <td>{item.username}</td>
                    <td>{item.ownerName}</td>
                    <td>{item.nationality}</td>
                    <td>{item.location}</td>
                    <td>{item.phonenumber}</td>
                    <td>
                      <button className="button view"><i className="fa fa-eye"></i></button>
                      <a href={`/updateuser/${item.ownerID}`}> <button  className="button edit"><i className="fa fa-edit"></i> </button></a>
                      <button className="button delete" onClick={() => handlerDelete(item.ownerID)}><i className="fa fa-trash"></i></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div><Footer></Footer></>
    );
}

export default CustomerList;