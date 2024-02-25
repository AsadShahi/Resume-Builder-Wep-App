import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Alert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';
import "./addAdmin.css";
import axios from "axios";

import useAuthContext from "../../../Auth/context/AuthContext";

import { ErrorRounded } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";


export default function AddAdmin() {
  const { csrf } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handelForm = (e) => {
    e.persist();
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const sendRegisterForm = async (event) => {
    event.preventDefault();
    const data = {
      name: register.name,
      email: register.email,
      password: register.password,
    };

    try {
      await csrf();
      axios
        .post("http://localhost:8000/api/admin/store-admin", data)
        .then(function (response) {
          if (response.status === 200) setSuccessMessage(response.data.message);
          console.log(response.data.message);
        })
        .catch(function (error) {
          if (error.response.status === 422) {
            setError(error.response.data.message);
            setTimeout(() => {
              setError("");
            }, 5000);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container Add-admin mt-5">
      {/* <span>{{successMessage}}</span> */}
   


   <div className="add-amdin-forms">
    <h2>Add a New Admin</h2>
   {successMessage && (
        <Alert severity="success" style={{width:'100%'}}>
          <AlertTitle>Success</AlertTitle>
          {successMessage}— <strong>check it out!</strong>
        </Alert>
      )}
      
      <Form onSubmit={sendRegisterForm}>
        <Form.Group
          className="mb-5 admin-form"
          controlId="exampleForm.ControlInput1"
        >
          <Row md={2} sm={1} lg={2} className="admin-form-row">
            <Col style={{ width: "100%" }}>
              <Form.Label className="mt-2">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={register.name}
                onChange={handelForm}
                autoFocus
              />
              {/* {error.name} */}
              <span className="text-danger">{error.name}</span>
              <br></br>
              <Form.Label className="mt-2">Email Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email..."
                name="email"
                value={register.email}
                onChange={handelForm}
              />
              <span className="text-danger">{error.email}</span>
            </Col>

            <Col style={{ width: "100%" }}>
              <Form.Label className="mt-2">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={register.password}
                onChange={handelForm}
              />
              <span className="text-danger">{error.password}</span>
            </Col>
          </Row>
        </Form.Group>

      
        <Button style={{width:'90%'}} type="submit" variant="primary">
          Submit
        </Button>
      </Form>
   </div>

     


    </div>
  );
}
