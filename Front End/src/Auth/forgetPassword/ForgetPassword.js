import React, { useState } from "react";
import "./forgetPassword.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useTheme } from "@emotion/react";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [errors, setError] = useState([]);
  const [status, setStatus] = useState(null);
  const {csrf} = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await csrf();
    setError([]);
    setStatus(null);
    try{
      const response = await axios.post('/forgot-password',[email])
      setStatus(response.status)
    }catch(e){

      if(e.response.status===422){
        setError(e.response.data.errors)
      }
    }
  };
 console.log(errors)
  return (
    <div className="container admin-login">
      <div className="admin-login-back mt-5">
        <div className="admin-login-header mb-5">
          <h2>Forget Your Password</h2>
          {status && <div  className="bg-green w-100">{{status}}</div>}
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
            <Form.Label className="mt-2">Email Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Email..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />

                  <span className="text-danger">{errors.email}</span>

            {/* <span className="text-danger">{errMessage.email}</span> */}
            <br></br>

            <br></br>
          </Form.Group>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Send
            </Button>
          </Modal.Footer>
        </Form>
      </div>
    </div>
  );
}
