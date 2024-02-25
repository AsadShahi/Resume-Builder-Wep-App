import React, { useState } from "react";
import "./loginAdminPanel.css";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../Auth/context/AuthContext";

export default function LoginAdminPanel() {
  const { adminLogin } = useAuthContext();

  const { csrf } = useAuthContext();
  const [emessage, setEmessage] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [unathorized,setUnathorized] =useState('');


  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await csrf();
      const response = await axios
        .post("http://localhost:8000/api/admin/login-system", {
          email,
          password,
        })
        .then(function (response) {
          if (response.status === 200) {
     
            navigate("/adminpanel");
            const adminToken = response.data.token;
            localStorage.setItem("adminToken", adminToken);
            adminLogin(adminToken); //passed token in authcontext

            //save the name of authenticated anem in local storage
            const adminName=response.data.admin.name;
            localStorage.setItem('adminName',adminName);
          }
        })

        .catch(function (error) {
          if (error.response.status === 422) {
            setEmessage(error.response.data.message);
            setTimeout(() => {
              setEmessage({});
            }, 5000);
          }

          if (error.response.status === 401) {
            setUnathorized(error.response.data.message);
            setTimeout(() => {
              setEmessage({});
            }, 5000);
          }

          if (error.response.status === 404) {
            setUnathorized(error.response.data.message);
            setTimeout(() => {
              setEmessage({});
            }, 5000);
          }
      
        });
      if (response.data.success) {
        // setTimeout
        // setTimeout(() => {

        // }, 1000);
        // navigate("/paneladmins");
      } else {
        setError(response.data.message);

  
      }
    } catch (error) {}
  };
  return (
    <div className="container-fluid admin-panel-login">
      <div className="admin-login-bg mt-5">
        <div className="admin-login-header mb-5">
          <h2 >Login to admin panel</h2>
        </div>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
            <Form.Label className="mt-2">Email Address</Form.Label>
            <Form.Control
            className="admin-panel-login-input"
              type="text"
              placeholder="Enter Email..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <span className="text-danger">{emessage.email}</span>
            <br></br>

            <Form.Label className="mt-2">Password</Form.Label>
            <Form.Control
             className="admin-panel-login-input"
             outline={0}
              type="password"
              placeholder="Enter Password..."
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <span className="text text-danger">{emessage.password}</span>
            {/* <span className="text-danger">{errMessage.password}</span> */}
            {/* <span className="text-danger">{loginError}</span> */}
            <br></br>
            <span className="text-danger">{unathorized}</span> <br/>
          <Link>Forgate Password?</Link>
          </Form.Group>
          <Modal.Footer>
            <Button style={{width:'100%'}}type="submit" variant="primary">
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </div>
    </div>
  );
}
