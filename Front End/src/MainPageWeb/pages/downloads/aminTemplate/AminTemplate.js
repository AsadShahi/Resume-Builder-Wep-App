import React, { useState, useEffect, useRef } from "react";


import axios from '../../../../Auth/api/axios';
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import Download from "../downloadResumesModal/Download";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
import HtmlDocx from "html-docx-js/dist/html-docx";

//for icons
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import { MdOutlineContactMail } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import "./aminTemplate.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import Navbar from "../../../components/navbar/Navbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AminTemplate() {
  const [languages, setLanguages] = useState([]);
  const [personalInfos, setPersonalInfos] = useState([]);

  const [experience, setExperience] = useState([]);

  const [education, setEducation] = useState([]);
  const [interest, setInterest] = useState([]);
  const [skills, setSkills] = useState([]);
 const [socialLinks,setSocialLinks]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/social-links-list").then((res) => {
      setSocialLinks(res.data.list);
    });
  }, []);



  useEffect(() => {
    axios.get("http://localhost:8000/personal-list").then((res) => {
      setPersonalInfos(res.data.list);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/skills-list").then((response) => {
      setSkills(response.data.list);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/language-list").then((response) => {
      setLanguages(response.data.list);
    });
  }, []);
  // // End function
  useEffect(() => {
    axios.get("http://localhost:8000/education-list").then((res) => {
      setEducation(res.data.list);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/experience-list").then((res) => {
      setExperience(res.data.list);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/interest-list")
      .then((response) => {
        setInterest(response.data.interest);
      })
      .catch((error) => {
    
      });
  }, []);

  const pdfRef = useRef();
  const docsref = useRef();
















const image=personalInfos.image_url;
console.log(image)


  const ResumePDF = async () => {
    const input = pdfRef.current;
    const canvas = await html2canvas(input, {
      scale: 3.5, // Increase scale for higher quality (adjust as needed)
      useCORS: true, // Enable CORS if your content is from a different origin
    });

    const imgData = canvas.toDataURL("image/jpeg", 1); // Adjust JPEG quality (0.8 = 80%)
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, imgHeight, "", "FAST"); // Use 'FAST' for faster rendering

    pdf.save("resume.pdf");
  };

  // this is origginal

  //for opening show modal downloading
  const [ishowModal, setShowModal] = useState(false);
  //show madal function
  const showModalHandler = () => {
    setShowModal(true);
  };

  //for onhide modal
  const onHideModal = () => {
    setShowModal(false);

  };

  //generate doc
  const convertToDocx = () => {
    const docContent = document.querySelectorAll(".main-first-page").innerHTML;
    const convertedDoc = HtmlDocx.asBlob(docContent);
    saveAs(convertedDoc, "resume.docx");
  };

  return (
    <>
      <div className="container amin-temp-parent mt-5 bg-light ">
        <div className="amin-template">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} ref={pdfRef}>
              {/* right temp */}

              <Grid xs={6} md={4}>
                <Item style={{ height: "100%" }}>
                  <div className="amin-left h-100 ">
                    {personalInfos.length > 0 &&
                      personalInfos.map((pers, i) => (
                        <div key={i}>
                          <div className="amin-temp-img">
                            <Stack direction="row">
                     <img  alt="Remy Sharp"
                                className="amin-avatar" src="/images/profile.jpg"/>

                              {/* <img
                                alt="Remy Sharp"
                                className="amin-avatar"
                               src={pers.image_url}
                              /> */}
                            </Stack>
                          </div>

                          <div className="amin-contact mb-3">
                            <h2 className="amin-title-section mb-3">
                              <MdOutlineContactMail className="amin-left-icons" />
                              Contact
                            </h2>

                            <h6>
                              <LocationOnOutlinedIcon /> {pers.country},{pers.city}
                            </h6>
                            <h6>
                              <EmailOutlinedIcon /> {pers.email}
                            </h6>
                            <h6>
                              <PhoneInTalkOutlinedIcon /> {pers.phone}
                            </h6>
                            <h6>
                              < PublicOutlinedIcon/> Resume-builder.af
                            </h6>
                          </div>
                        </div>
                      ))}

                    {/* for skills */}
                    <div className="skills mb-3">
                      <h2 className="amin-title-section mt-3">
                        <GiSkills className="amin-left-icons" /> Skills
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <h3>Skill</h3>
                        <h3>Level</h3>
                      </div>

                      {skills.length > 0 &&
                        skills.map((skill, i) => (
                          <div className="skill-lever-order" key={i}>
                            <p>{skill.skills}</p>
                            <p>{skill.skills_level}</p>
                          </div>
                        ))}
                    </div>
                   

                    {/* for Languages */}
                    <div className="skills mb-3">
                      <h2 className="amin-title-section mt-3">
                        <FaLanguage className="amin-left-icons" /> Languages
                      </h2>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <h3>Language</h3>
                        <h3>Level</h3>
                      </div>

                      {languages.length > 0 &&
                        languages.map((lang, id) => (
                          <div className="skill-lever-order" key={id}>
                            <p>{lang.language}</p>
                            <p>{lang.level}</p>
                          </div>
                        ))}
                    </div>

                    {/* for Intrests */}
                    <div className="intrests-amin mb-3">
                      <h2 className="amin-title-section mt-3">
                        <RiPinterestLine className="amin-left-icons" />
                        Interests
                      </h2>
                      {interest.length > 0 &&
                        interest.map((interest, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <p>{interest.title}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </Item>
              </Grid>

              {/* left temp */}
              <Grid xs={6} md={7}>
                <Item className="amin-right-temp">
                  {personalInfos.length > 0 &&
                    personalInfos.map((pers, i) => (
                      <div div key={i}>
                        <div className="profile-amin" >
                          <h1>
                            {pers.firstname} {pers.lastname}
                          </h1>
                          <h3>{pers.jobtitle}</h3>
                        </div>

                        <div className="amin-about-me mb-5">
                          <h2 className="amin-title-section mb-3">
                            <MdOutlineRoundaboutRight className="amin-title-icon" />
                            About Me
                          </h2>
                          <p>{pers.aboutme}</p>
                        </div>
                      </div>
                    ))}

                  <div className="amin-template-experience">
                    <h2
                      className="amin-title-section"
                      style={{ display: "flex", borderBottom: "1px solid" }}
                    >
                      <MdOutlineWorkHistory className="amin-title-icon" />
                      Experience
                    </h2>
                    
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {experience.length > 0 &&
                        experience.map((exp, i) => (
                          <div key={i}>
                            <div className="d-flex" >
                              <div
                                className="mr-5 d-flex align-items-center"
                                style={{ marginRight: "20px", width: "30%" }}
                              >
                                <p>{exp.start_date}-</p>
                                <p>{exp.end_date}</p>
                              </div>

                              <div className="amin-template-experience">
                                <h4>{exp.title}</h4>
                                <p>{exp.information}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Education Section */}

                  <div className="amin-template-experience">
                    <h2 className="amin-title-section">
                      <IoSchoolOutline className="amin-title-icon" />
                      Education
                    </h2>
                    {education.length > 0 &&
                      education.map((edu, i) => (
                        <div  key={i}>
                          <div
                          
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <div
                              className="mr-5 "
                              style={{ marginRight: "30px", width: "30%" }}
                            >
                              <p>{edu.school}</p>
                            </div>

                            <div className="amin-template-experience">
                              <h4>{edu.field}</h4>
                              <p>{edu.info}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Follow Me */}
                  <div
                    className="amin-temp-follow-Me  "
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      flexDirection: "column",
                    }}
                  >
                    <h2 className="amin-title-section">
                      <IoLinkSharp className="amin-title-icon" />
                      Follow me
                    </h2>
                    {socialLinks.length>0&&socialLinks.map((socail,index)=>(


                    <div className="amin-socials" key={index}>
                      <p>
                        <strong>{socail.label}</strong>:{socail.link}
                      </p>

                    </div>


                    ))}
                  </div>
                </Item>
              </Grid>
            </Grid>
            <div className="mt-5 mb-5 amin-btn-downloads">
              <Button
                onClick={() => showModalHandler()}
                variant="contained"
                color="primary"
              >
                Download Resume
              </Button>
            </div>
            {ishowModal && (
              <Download
                onHide={onHideModal}
                downloadResumPDF={ResumePDF}
                downloadDoc={convertToDocx}
              />
            )}
          </Box>
        </div>
      </div>
    </>
  );
}
