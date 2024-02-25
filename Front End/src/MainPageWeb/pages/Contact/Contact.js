import React, { useState,useContext } from "react";
import "./contact.css";
import Textarea from "@mui/joy/Textarea";
import { Container, FormControl, FilledInput, FormLabel } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/joy/Stack";
import { Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import { width } from "@mui/system";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
// import Stack from "@mui/material/Stack";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import TranslationContext from "../../components/Locales/TranslationContext";
import { TranslationProvider } from "../../components/Locales/TranslationContext";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
//younus
import axios from "axios";
// import "../../pages/resumeBuilder/createAPP/ResumeStyle.css";
// import '../../pages/resumeBuilder/creatingResumePages/'

import { useNavigate } from "react-router-dom";
import GoogleMap from "./GoogleMap";

export default function Contact() {
  const { translate, changeLanguage,language } = useContext(TranslationContext);
  
  const [contact, setContact] = useState({
    fullname: "",
    email: "",

    subject: "",
  });

  const [inputError, setInputError] = useState({});
  

  //for validation restricted keyword in messege
  const [MessegeContainsRestrictedKeyword,setMessageContainsRestrictKeteord]=useState(false)

  const navigate = useNavigate();
  const handleContactForm = (e) => {
    e.persist();
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const SubmitContactForm = (e) => {
    e.preventDefault();

    // Validate message
    const restrictedKeywords = ["scam", "stupid",'شما یک شیاد و کلاهبر دار هستین','stealer',''];
    const containsRestrictedKeyword= restrictedKeywords.some(
      (keyword) => contact.subject.toLowerCase().includes(keyword)
    );
    setMessageContainsRestrictKeteord(containsRestrictedKeyword)

    

    // alert('Everything is ok')
    const Data = {
      fullname: contact.fullname,
      email: contact.email,

      subject: contact.subject,
    };
    console.log(Data);

  
    axios
      .post("http://localhost:8000/api/admin/contact-create", Data)
      .then((res) => {
        console.log(res.data.message);
        setTimeout(() => {
          alert("Submited ");
          navigate("/");
        }, 1000);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputError(error.response.data.Errors);
            // setLoading(false)
            setTimeout(() => {
               setInputError({})
               setMessageContainsRestrictKeteord(false)
            }, 5000);
          }
          if (error.response.status === 500) {
          }
        }
      });
  };

  return (
    <>

        <Navbar />
        <div className="contact mt-5 mb-5" dir={language=='fa'?'rtl':'ltr'}>
          <Container className="contact-container">
            <h2 className="contact-title">{translate('contact')}</h2>
            <h5>
              {translate('contactDesc')}
            </h5>

            <form
              className="contact-form mb-5"
              action=""
              onSubmit={SubmitContactForm}
            >
              <Row md={2} lg={2} sm={1}>
                <Col>
                  <div className="first-column">
                    <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                      <FormLabel> {translate('Name')}</FormLabel>
                      <FilledInput
                        name="fullname"
                        placeholder={translate('FullNameForInput')}
                        value={contact.fullname}
                        onChange={handleContactForm}
                      />
                      <span className="text-danger">{inputError.fullname}</span>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                      <FormLabel s="+ Language a.s">{translate('Email')}</FormLabel>
                      <FilledInput
                        name="email"
                        placeholder={translate('Email')}
                        onChange={handleContactForm}
                        value={contact.email}
                      />
                      <span className="text-danger">{inputError.email}</span>
                    </FormControl>

                    {/* <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                      <FormLabel s="+ Language a.s">Phone Number</FormLabel>
                      <FilledInput
                      type="number"
                       
                        placeholder="Number.."
                        name='phone'
                        onChange={handleContactForm}
                        value={contact.phone}
                      />
                          <span className='text-danger'>{inputError.phone}</span>
                    </FormControl> */}
                  </div>
                </Col>

                <Col style={{ paddingRight: "30px" }}>
                  <Stack spacing={3}>
                    <div className="contact-text-area">
                      <FormLabel>{translate('Messege')}</FormLabel>
                      <Textarea
                        name="subject"
                        onChange={handleContactForm}
                        value={contact.message}
                        minRows={6}
                        placeholder={translate('TypeHere')}
                        variant="soft"
                        sx={{
                          borderBottom: "2px solid",
                          borderColor: "neutral.outlinedBorder",
                          borderRadius: 0,
                          "&:hover": {
                            borderColor: "neutral.outlinedHoverBorder",
                          },
                          "&::before": {
                            border:
                              "1px solid var(--Textarea-focusedHighlight)",
                            transform: "scaleX(0)",
                            left: 0,
                            right: "10px",
                            bottom: "-2px",
                            top: "unset",
                            transition:
                              "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                            borderRadius: 0,
                          },
                          "&:focus-within::before": {
                            transform: "scaleX(1)",
                          },
                        }}
                      />
                      {/* {MessegeContainsRestrictedKeyword && (
                        <span className="text-danger">Please Don't use from restricted keywords</span>
                      )}
                      {!MessegeContainsRestrictedKeyword && (
                        
                        <span className="text-danger">{inputError.subject}</span>
                      )} */}

                <span className="text-danger">{inputError.subject}</span>
                    </div>
                  </Stack>

                  {/* <FormControl className="mb-5">
                <FormLabel>Messege</FormLabel>
                <Textarea placeholder="Type your messages..." minRows={8} minColumns={6} style={{width:'100%'}}/>
            </FormControl> */}
                </Col>
              </Row>

           

              <Stack direction="row" spacing={2} className="mb-5">
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </Stack>
            </form>
            <Row>
              <Col>
                <h4 className="contact-title">{translate('Address')}</h4>
                <p>
                  {" "}
                  <LocationOnOutlinedIcon />
                  {translate('addressPath')}
                </p>
                <p>
                  <PhoneInTalkOutlinedIcon /> {translate('CallCenter')}
                  
                </p>
              </Col>
            </Row>

            <Row>
              <Col>



              {/* this is for google map */}
              <GoogleMap/>
                
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
    
    </>
  );
}
