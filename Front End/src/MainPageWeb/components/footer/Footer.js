import React, { useState } from "react";
import FooterBackground from "./FooterBackround";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import FilledInput from "@mui/material/FilledInput";

import MailIcon from "@mui/icons-material/Mail";
import Input from "@mui/joy/Input";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import "./footer.css";
import TranslationContext from "../Locales/TranslationContext";
import { useContext } from "react";
import axios from "axios";

//for news letter
import Stack from "@mui/material/Stack";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Footer() {
  const [useremail, setUserEmail] = useState({
    newsletterEmail: "",
  });
  const { translate, language } = useContext(TranslationContext);
  const HandleUserEmail = (e) => {
    e.persist();
    setUserEmail({ ...useremail, [e.target.name]: e.target.value });
  };
  const SubmitEmailUser = (event) => {
    event.preventDefault();
    const Data = {
      newsletterEmail: useremail.newsletterEmail,
    };
    axios
      .post("http://localhost:8000/api/admin/newsletter-create", Data)
      .then((response) => {
        console.log(response.data);
        setUserEmail({ newsletterEmail: "" });
        handleClick(); //for showing email messege alert
      });
    setTimeout(() => {
      useremail.newsletterEmail.target.value = "";
    }, 3000);
  };


  const handleNewsEmail = () => {
    setTimeout(() => {
      useremail.newsletterEmail.target.value = "";
    }, 3000);

    
  };

  //for news letter
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <footer className="footer " dir={language == "fa" ? "rtl" : "ltr"}>
        <Container className=" footer-detail mt-5  " fluid>
          <Row md={4} lg={4} sm={2}>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
              }}
            >
              <h1>{translate("Links")}</h1> <hr />
              <Link component="button">{translate("home")}</Link>
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("ResumeTemplets")}
              </Link>
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("CvTempletes")}
              </Link>
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("CoverLetters")}
              </Link>
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("Resume")}
              </Link>
            </Col>

            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
              }}
            >
              <h1>{translate("Learn")}</h1> <hr></hr>
              <h1 />
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("ClearBlog")}
              </Link>
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("Howtowritearesume")}
              </Link>
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("Howtowritecv")}
              </Link>
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("ResumeExamples")}
              </Link>
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("CoverletterExamples")}
              </Link>
            </Col>

            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
              }}
            >
              <h1>{translate("Other")}</h1>
              <hr />
              <Link
                component="button"
                variant="light"
                style={{ color: "#ffff" }}
              >
                {translate("Pricing")}
              </Link>
              <Link component="button" to={"/about"} style={{ color: "#ffff" }}>
                {translate("AboutUs")}
              </Link>
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("EbookHowtogetajobin2023")}
              </Link>
              <Link component="button" style={{ color: "#ffff" }}>
                {translate("MediaKit")}
              </Link>

              <Link
                component="button"
                to={"/contact"}
                style={{ color: "#ffff" }}
              >
                {translate("contact")}
              </Link>
              <Link to={"/faqs"} component="button" style={{ color: "#ffff" }}>
                {translate("HelpCenter")}
              </Link>
            </Col>
            <Col>
              <div className="mt-5 news-letter">
                <FormLabel
                  className="news-title mb-2"
                  style={{ color: "#ffff" }}
                >
                  {translate("Newslettersignup")}
                </FormLabel>



                {/* User Email Submition  */}
                <Stack spacing={2} sx={{ width: "100%" }}>

                <form onSubmit={SubmitEmailUser}>
                  <Input
                    name="newsletterEmail"
                    onChange={HandleUserEmail}
                    value={useremail.newsletterEmail}
                    startDecorator={<MailIcon />}
                    placeholder={translate("TypeEmail")}
                    style={{ width: "100%" }}
                    endDecorator={
                      <button
                        type="submit"
                        onClick={handleNewsEmail}
                        className="btn-email"
                      >
                        {translate("send")}
                      </button>
                    }
                  />
                </form>
                  <Snackbar
                    open={open}
                    autoHideDuration={5000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Email successfully send !
                    </Alert>
                  </Snackbar>
                
                </Stack>


               
              </div>

              <div
                className="socials mt-5"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  fontSize: "30px",
                }}
              >
                <BsFacebook className="social social-fa" />
                <BsInstagram className="social socail-insta" />
                <BsTelegram className="social social-tel" />
                <AiFillYoutube className="social social-you" />
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#ffff",
              }}
            >
              {" "}
              {translate("copyRightFooter")}
            </p>
          </Row>
        </Container>
      </footer>
    </>
  );
}
