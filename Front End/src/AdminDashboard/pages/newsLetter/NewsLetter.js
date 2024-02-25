import React from "react";

import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
export default function NewsLetter() {
  const [news, Setnews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/newsletter-index")
      .then((response) => {
        Setnews(response.data.list);
        console.log(response.data.list)
      });
  }, []);
  const DeleteFunciton = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure want to delete this id");
    if (confirm) {
      axios
        .delete("http://localhost:8000/api/admin/newsletter-delete/" + id)
        .then((response) => {
          setTimeout(() => {
            window.location.reload(true);
          }, 1000);
        });
    }
  };
  var newsDetails = "";
  newsDetails = news.map((index, i) => (
    <TableRow key={i}>
      <TableCell>{index.id}</TableCell>
      <TableCell>{index.emailuser}</TableCell>
      <TableCell>
        <Button onClick={() => DeleteFunciton(index.id)}>Delete </Button>
      </TableCell>
    </TableRow>
  ));
  return (
    <section>
      <div className="container" style={{ marginTop: "80px" }}>
        <Card>
          <h2>News Letter</h2>
          <CardContent>
            <Table>
              <TableRow>
                <TableHead>
                  <TableCell>ID</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Delete</TableCell>
                </TableHead>
                <TableBody>{newsDetails}</TableBody>
              </TableRow>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
