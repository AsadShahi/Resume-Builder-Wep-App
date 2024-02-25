import React from "react";
import { useState } from "react";
import "./navbar.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";


import Login from '../../../Auth/Login/Login';
import useAuthContext from "../../../Auth/context/AuthContext";


import { Button } from "@mui/material";

import Register from '../../../Auth/register/Register';

import TranslationContext from "../Locales/TranslationContext";
import { useContext } from "react";
// import UserpanelPage from "../../UserPanel/pages/AdminPage/UserpanelPage";

import { Link } from "react-router-dom";

export default function () {
  const { user, logout } = useAuthContext();

  // const [language, setLanguage] = useState("en"); // Default language is English
  const { translate, changeLanguage, language } =
    useContext(TranslationContext);

  const [showModal, setShowModal] = useState(false);
  const [showMod, setShowMod] = useState(false);

  const handleShowModalRegister = () => {
    setShowModal(true);
  };

  const handleSowLoginModal = () => {
    setShowMod(true);
  };

  return (
    <div >
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        dir={language === "fa" ? "rtl" : "ltr"}
      >
        <Container style={{ display: "flex", justifyContent: "flex-end" } }dir={language == "fa" ? "rtl" : "ltr"}>


          <Navbar.Brand href="/" className="titleName">
            Resume Builder ❤️{" "}
          </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />


         


          <Navbar.Collapse id="responsive-navbar-nav"  >
            
            <Nav className="me-auto" >
              
              <Nav.Link eventKey={2} href="/" dir={language == "fa" ? "rtl" : "ltr"}>
                {translate("home")}
              </Nav.Link>
              <NavDropdown
                title={translate("resume")}
                id="collasible-nav-dropdown"
                
              >
                <NavDropdown.Item href="/createResume">
                  {user ? (
                    <Link to={"/createResume"}>
                      {translate("resumeBuilder")}
                    </Link>
                  ) : (
                    <Link onClick={handleSowLoginModal}>
                      {translate("resumeBuilder")}
                    </Link>
                  )}
                </NavDropdown.Item>

                <NavDropdown.Item href="#resumesample">
                  {translate("ResumeSmaple")}
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/HowToWriteResume">
                  {translate("howToBuildResume")}
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={translate("CoverLetter")}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/CreateCoverLatter">
                  {translate("coverLetterBuilder")}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  {translate("coverLetterSmaple")}
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  {translate("howToBuildCoverLetter")}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
            <div
              style={{ marginRight: "70px" }}
              dir={language == "fa" ? "rtl" : "ltr"}
            >
              <div className="btns">
                {user ? (
                  <Link
                    to={"/userpanelPage/inforamtion"}
                    style={{ marginLeft: "15px" }}
                    variant="contained"
                    size="small"
                    color="primary"
                    //when click the login and register btn is hidden
                  >
                    <Button variant="contained">
                      🧛{translate("UserPanel")}
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Button
                      style={{ marginLeft: "15px" }}
                      variant="contained"
                      size="small"
                      onClick={handleSowLoginModal}
                    >
                      {translate("signIn")}
                    </Button>

                    <Button
                      style={{ marginLeft: "15px" }}
                      variant="contained"
                      size="small"
                      onClick={handleShowModalRegister}
                    >
                      {translate("signUp")}
                    </Button>
                  </>
                )}
              </div>

              <Login show={showMod} onHide={() => setShowMod(false)} />
              <Register show={showModal} onHide={() => setShowModal(false)} />
            </div>
          </Nav>
          
            <Nav >
              <Nav.Link onClick={() => changeLanguage("fa")}>FA</Nav.Link>
              <Nav.Link eventKey={2} onClick={() => changeLanguage("en")}>
                EN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>


            




        </Container>
      </Navbar>
    </div>
  );
}
