import React from "react";
// import Sidebar from '../Sidebar'
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  Paper,
  TableBody,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import axios from "axios";

import { Link } from "react-router-dom";


import useAuthContext from "../../../Auth/context/AuthContext";

export default function Admin() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [handleError,setHandleError]=useState({})
  const {csrf}=useAuthContext();

  useEffect(() => {
    axios.get("http://localhost:8000/api/admin/adminlists").then((res) => {
      
      setUser(res.data);
      // console.log(res.data);
    });
  }, []);

  if (loading) {
  }
  // 
  var response=''
  const handleDeleteUser= async(id)=>{ 
    try {
        await csrf();
        const confirm=window.confirm('Are your sure?')
        if(confirm){
            const response = await axios.delete(
                "http://localhost:8000/api/admin/admin/delete/" + id
              ).then(response=>{
                  // navigate('/paneladmins');
                  window.location.reload();
                  
              })
        }
       
        // Process the successful response here
        console.log("User deleted successfully:", response.data);
      } catch (error) {
        if (error.response && error.response.status === 419) {
          // Handle the 419 error here
          console.log("Unknown status error (419) occurred.");
          // Add your custom logic or error handling specific to the 419 status code
        } else {
          // Handle other errors
          console.log("An error occurred:", error.message);
        }
      }
    }
  // 
  var userDetails = "";
  userDetails = user.map((item, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.lastname}</TableCell>
        <TableCell>{item.email}</TableCell>
        {/* <TableCell>
          <Link to={`/admin/admins/${item.id}`}>Edit</Link>
        </TableCell> */}
        <TableCell>
          <Button onClick={()=>handleDeleteUser(item.id)} variant="contained">
            Delete
          </Button>
        </TableCell>
      </TableRow>
    );
  });
  // const uesStyle=makeStyles({
  //         root:{
  //             "& .MuiTableCell-head":{
  //                 color:'white',
  //                 backgroundColor:'Blue'
  //             }
  //         }
  // })

  return (
    <section>
      <section className="container" style={{ marginTop: "70px" }}>
        <Typography variant="h4">Admins</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="sampl">
            <TableHead>
              <TableRow className="">
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
              <TableCell>LastName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>{userDetails}</TableBody>
          </Table>
        </TableContainer>
      </section>
    </section>
  );
}
