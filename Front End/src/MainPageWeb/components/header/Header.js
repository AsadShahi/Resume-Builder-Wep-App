import React, { useContext, useState } from "react";
import "./header.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import HeaderSlider from "./HeaderSlider";



import Login from '../../../Auth/Login/Login';
import useAuthContext from "../../../Auth/context/AuthContext";


import TranslationContext from "../Locales/TranslationContext";


export default function Header() {
  const { translate, language } = useContext(TranslationContext);
  const [showLogin, setShowLogin] = useState(false);
  const {user}=useAuthContext();
  const showLoginPage = () => {
    setShowLogin(true);
  };

  return (
    <div>
      <Container className="mt-5" dir={language === "fa" ? "rtl" : "ltr"}>
        <Row md={2} sm={1} lg={2} className="mt-5 headerStyle">
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 className="header-title mt-5">
              {" "}
              {translate("Buildresumeforfree")}
            </h1>
            <br></br>
            <h3 className="mb-5">{translate("createResumeDisc")}</h3>

            <div>{user?(
              <Link to={'/createresume'}> <Button variant="contained" >
              {translate("createResume")}
            </Button></Link>
            ):(
              
              <Button variant="contained" onClick={showLoginPage}>
                {translate("createResume")}
              </Button>
            )}
            </div>
          </Col>

          {/* second column */}
          <Col className="mt-5">
            <HeaderSlider className="mt-5" />
          </Col>
        </Row>
      </Container>
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
    </div>
  );
}