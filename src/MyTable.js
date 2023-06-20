import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/owner/all'); // Replace with your API endpoint
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.ownerID}>
            <td>{item.ownerID}</td>
            <td>{item.ownerName}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
