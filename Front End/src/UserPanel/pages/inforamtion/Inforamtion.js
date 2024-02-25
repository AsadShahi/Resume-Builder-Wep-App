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
import useAuthContext from '../../../Auth/context/AuthContext'


export default function Inforamtion() {
  const { user } = useAuthContext();

  const user_ID = localStorage.getItem('user_ID');
  const user_name = localStorage.getItem('user_name');
  const user_email = localStorage.getItem('email');



  

  return (
    <section>
      <section className="container" style={{ marginTop: "70px" }}>
        <Typography variant="h4">Inforamtion</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="sampl">
            <TableHead>
              <TableRow className="">
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Eamil</TableCell>

                <TableCell>Pasword</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow className="">
                <TableCell>{user_ID}</TableCell>
                <TableCell>{user_name}</TableCell>
                <TableCell>{user_email}</TableCell>
                <TableCell>***********</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </section>
  );
}
