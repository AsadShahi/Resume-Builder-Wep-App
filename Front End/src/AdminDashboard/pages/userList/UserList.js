import React from "react";
import './userList.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation, useNavigate } from "react-router-dom";
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

export default function UserList() {

  const [deletUser, setDeleteUser] = useState([]);
  const navigate = useNavigate();


  //for test list

  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [paginatedUsers, setpaginatedUsers] = useState([]);

  let pageSize=3;
  let pageNumbers;


  
  const { csrf } = useAuthContext();
  useEffect(() => {
    axios.get("http://localhost:8000/api/admin/user-list").then((res) => {
      // setUser(res.data.users);
      setUser(res.data.users)
      console.log(res.data.users)
      
      let endIndex=pageSize*currentPage
      let startIndex=endIndex-pageSize
      let allShownUsers=res.data.users.slice(startIndex,endIndex)
        setpaginatedUsers(allShownUsers)



    });
  }, []);

  var userDetails = "";
  var response = "";
  const handleDeleteUser = async (id) => {
    setDeleteUser(id);

    try {
      await csrf();
      const confirm = window.confirm("Are your sure");
      if (confirm) {
        const response = await axios
          .delete("http://localhost:8000/api/admin/user-delete/" + id)
          .then((response) => {
            // navigate('/paneladmins');
            window.location.reload();
          });
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
  };





//for test list
 //for solving late loading page use from useeffect hook
 useEffect(()=>{
  let endIndex=pageSize*currentPage
  let startIndex=endIndex-pageSize
  let allShownUsers=user.slice(startIndex,endIndex)
    setpaginatedUsers(allShownUsers)


},[currentPage])


const changePaginate=(newPage=>{
  setCurrentPage(newPage)

})

const pageCount=Math.ceil(user.length/pageSize);
pageNumbers=Array.from(Array(pageCount).keys())
console.log(pageNumbers)
console.log(pageCount)






  userDetails = paginatedUsers.map((item, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        {/* <TableCell>
                    <Link to={`/admin/user-edit/${item.id}`}>Edit</Link>
                </TableCell> */}
        <TableCell>
          <Button onClick={() => handleDeleteUser(item.id)} style={{color:"red"}} variant="outlined" startIcon={<DeleteIcon />}>
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
        <Typography variant="h4">User List</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="sampl">
            <TableHead>
              <TableRow className="">
                <TableCell>ID</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                {/* <TableCell>Edit</TableCell> */}
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>{userDetails}</TableBody>

{/* ///for test */}

<nav className="d-flex justify-content-center">
        <ul className="pagination pagination-lg">
         {pageNumbers.map(pageNumber=>(

          <li style={{cursor:'pointer'}}
           className={pageNumber+1===currentPage? "page-item active":'page-item'} aria-current="page"
          onClick={()=>changePaginate(pageNumber+1)}
          >
            <span className="page-link">{pageNumber+1}</span>
          </li>

         ))}
         
        
        </ul>
      </nav>




          </Table>
        </TableContainer>
      </section>
    </section>
  );
}
