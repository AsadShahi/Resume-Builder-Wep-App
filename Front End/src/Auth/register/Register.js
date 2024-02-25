import React, { useState } from "react";
import "./register.css";
import { Modal, Button, Form } from "react-bootstrap";
import useAuthContext from "../context/AuthContext";




export default function Register(props) {
  const [passwordError, setPasswordError] = useState("");

  const { registers } = useAuthContext();

  const { registerError } = useAuthContext();



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
      password_confirmation: register.password_confirmation,
    };

    registers(data); // it is passed data to atuh context

    // if (register.password !== register.password_confirmation) {
    //   setPasswordError("The password confirmation does not match ha");
    //   return;
    // }
  };

  return (
    <>
      <Modal className="mt-5" show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendRegisterForm} className="register-form">
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-2">UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={register.name}
                onChange={handelForm}
                autoFocus
              />
              {registerError.name && (
                <div>
                  <span className="text-danger">{registerError.name[0]}</span>
                </div>
              )}

              <Form.Label className="mt-2">Email Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email..."
                name="email"
                value={register.email}
                onChange={handelForm}
              />
              {registerError.email && (
                <div>
                  <span className="text-danger">{registerError.email[0]}</span>
                </div>
              )}
              <Form.Label className="mt-2">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={register.password}
                onChange={handelForm}
              />
              {registerError.password && (
                <div>
                  <span className="text-danger">
                    {registerError.password[0]}
                  </span>
                </div>
              )}

              <Form.Label className="mt-2">Confirm Password</Form.Label>

              <Form.Control
                type="password"
                placeholder="Enter Your password again"
                name="password_confirmation"
                value={register.password_confirmation}
                onChange={handelForm}
              />

              {registerError.password && (
                <div>
                  <span className="text-danger">
                    {registerError.password[0]}
                  </span>
                </div>
              )}
            </Form.Group>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={props.onHide}>
                Cancel
              </Button> */}
              <Button style={{width:'100%'}} type="submit" variant="primary">
                Register
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
