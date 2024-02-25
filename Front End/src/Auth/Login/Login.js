import React, { useState } from "react";
import "./login.css";
import { Modal, Button, Form } from "react-bootstrap";
import useAuthContext from "../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import { Link, useNavigate } from "react-router-dom";
export default function Login(props) {
  const navigate = useNavigate();

  const { login } = useAuthContext(); //it  is for pass data to context

  const [loading, setLoading] = useState(false);

  const { loginError, user } = useAuthContext();

  const [logins, setLogin] = useState({
    email: "",
    password: "",
  });
  const handelForm = (event) => {
    setLogin({ ...logins, [event.target.name]: event.target.value });
  };

  const sendLoginForm = async (event) => {
    event.preventDefault();

    const data = {
      email: logins.email,
      password: logins.password,
    };

    login(data); // it is passed value to auth context
    setLoading(true);

    setTimeout(() => {
    setLoading(false)  
    }, 7000);
  };

  
  // console.log(loginError.errors.email[0])

  return (
    <>
      <Modal className="mt-5" show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendLoginForm}>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-2">Email Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email..."
                name="email"
                value={logins.email}
                onChange={handelForm}
                autoFocus
              />

              {loginError.email && (
                <div>
                  <span className="text-danger">{loginError.email[0]}</span>
                </div>
              )}

              <br></br>
              <Form.Label className="mt-2">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={logins.password}
                onChange={handelForm}
                autoFocus
              />

              {loginError.password && (
                <div>
                  <span className="text-danger">{loginError.password[0]}</span>
                </div>
              )}

              {/* <span className="text-danger">{loginError}</span> */}
              <br></br>
              <Link to={"/forgetpassword"}>Forget Password</Link>
            </Form.Group>

            <Modal.Footer>
              {/* <Button variant="secondary" onClick={props.onHide}>
                Cancel
              </Button> */}

              {loading ? (
                <Button
                  style={{ width: "100%",fontSize:'10px' }}
                 
                >
                  <CircularProgress color="success" />
                </Button>
              ) : (
                <Button
                  style={{ width: "100%" }}
                  className="login-submit"
                  type="submit"
                >
                  Login
                </Button>
              )}
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
