import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Select, MenuItem, Box } from '@mui/material';

const Orders = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://lazy-ruby-shawl.cyclic.app/orders')
      .then((response) => {
        
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleStatusChange = (event, id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, status: event.target.value };
      }
      return item;
    });
    setData(updatedData);
  
    // Send an API request to update the status
    axios
      .patch(`https://lazy-ruby-shawl.cyclic.app/orders/${id}`, {status: event.target.value})
      .then((response) => {
        console.log('Status updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating status:', error);
      });
  
    // Update the JSON file

  };
  

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#FDDF96';
      case 'Processing':
        return '#FFB74D';
      case 'Completed':
        return '#81C784';
      case 'Rejected':
        return '#E57373';
      default:
        return '#FDDF96';
    }
  };

  return (
    <Box backgroundColor={'#f1f5fd'} >
      <Box  maxWidth={{xs:'95%',md:'85%'}}  margin={'auto'} pb={'6rem'}>

      <TableContainer style={{ margin: '0px',padding:'0px' }}>
      <Table size="small"  sx={{ borderCollapse: 'separate', borderSpacing: '0',width: 650,margin:'auto'  }}>
        <TableHead>
          <TableRow bgcolor={'#ff914d'} >
            <TableCell >ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Location</TableCell>
           
            <TableCell>Mobile</TableCell>
            <TableCell>Service Requested</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}  style={{ backgroundColor: getStatusColor(row.status) }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.mobile}</TableCell>
              <TableCell>{row.serviceRequired}</TableCell>
              <TableCell>
                <select
                value={ row.status}
                defaultValue="Pending"
                 
                  onChange={(event) => handleStatusChange(event, row.id)}
                  width={'50px'} style={{background:'transparent',padding:'10px 20px',cursor:'pointer',lineHeight:'4'}}
                 
                >
                  <option style={{background:'transparent',padding:'10px 20px',cursor:'pointer',lineHeight:'4'} }value="Pending" >Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    

      </Box>
     
    </Box>
  )
}

export default Orders