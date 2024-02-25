import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./AsadCvTemplete.css";
// import axios from "axios";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import Download from "../downloadResumesModal/Download";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
import HtmlDocx from "html-docx-js/dist/html-docx";
import axios from '../../../../Auth/api/axios';


export default function AsadCvTemplete(props) {
  const [language, setAllLanguage] = useState([]);

  const [experience_values, setExperience] = useState([]);
  // const [education, setAllEducationValue] = useState('')

  const [education, setEducation] = useState([]);
  const [interest, setInterest] = useState([]);
  const [skills, setSkills] = useState([]);
  const [langCounter, setLangCounter] = useState([1]);
  const { imgurl, setImgUrl } = useState("");

  const [personal, setPersonal] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8000/personal-list").then((res) => {
  //     setPersonal(res.data.list);
  //     // header{'allow-access-control:true'}
  //   });
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/personal-list", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      })
      .then((res) => {
        setPersonal(res.data.list);
      });
  }, []);





  useEffect(() => {
    axios.get("http://localhost:8000/skills-list").then((response) => {
      setSkills(response.data.list);
     
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/language-list").then((response) => {

   setAllLanguage(response.data.list)
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
      console.log(res.data.list)
    });
  }, []);


  useEffect(() => {
    axios
      .get("http://localhost:8000/interest-list")
      .then((response) => {
        setInterest(response.data.interest);
        console.log(response.data.interest);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  const pdfRef = useRef();

  const docsref = useRef();




  // Rest of your code...




  const ResumePDF = async () => {
    const input = pdfRef.current;
    const canvas = await html2canvas(input, {
      scale: 3, // Increase scale for higher quality (adjust as needed)
      useCORS: true, // Enable CORS if your content is from a different origin
      
      allowTaint: false,
      // allowTaint: true,
  
    });
    
     
    const imgData = canvas.toDataURL('image/jpeg', 1); // Adjust JPEG quality (0.8 = 80%)
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
  
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, imgHeight, '', 'FAST'); // Use 'FAST' for faster rendering
  
    setTimeout(() => {
      pdf.save("resume.pdf");
    }, 1000);
  
  };

 



  //for opening show modal downloading
  const [ishowModal, setShowModal] = useState(false);
  //show madal function
  const showModalHandler = () => {
    setShowModal(true);
  };

  //for onhide modal
  const onHideModal = () => {
    setShowModal(false);
    console.log("click it by Escpe btn");
  };

  //generate doc
  const convertToDocx = () => {
    const docContent = document.querySelectorAll(".main-first-page").innerHTML;
    const convertedDoc = HtmlDocx.asBlob(docContent);
    saveAs(convertedDoc, "resume.docx");
  };

  // console.log("intrest:" + interest);
  // console.log("ed:"+education)
  return (
    <div className="container resume-templete">
      <div className=" mt-5 main-temp" ref={pdfRef}>
        <div className="Profile">
          <Row md={2} lg={2} sm={1}>
            <Col>
              <div className="portfolio">
                {personal.length > 0 &&
                  personal.map((pers, i) => (
                    <div className="profile-All" key={i}>
                      <div className="profile-rights">
                        <div className="profile-header profile-imging">
                          <img

                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "50%",
                            }}

                            className="prof-img-first"

                          //  src="public/images/profile.jpg"
                            

                            // src={pers.image_url}
                            src={`http://localhost:8000/storage/${encodeURIComponent(pers.image)}`}
                            // src={`http://localhost:8000/storage/${pers.image}`}

                            alt="Profile Image"
                          /> 

                          <h2 className="jobTitle asadCvTitle">Profile</h2>
                          <h2>{pers.jobtitle}</h2>
                        </div>
                        <div className="right-profile">
                          <h2 className="ProfileName">
                            {pers.firstname} {pers.lastname}
                          </h2>

                          <ul
                            className="profile-infos"
                            style={{ fontSize: "15px" }}
                          >
                            <li>
                              Address: {pers.country}, {pers.city}
                            </li>
                            <li>Email: {pers.email}</li>
                            <li>Phone: {pers.phone}</li>
                            <li>Web: meligsm.com</li>
                            <li>DOB:</li>
                            <li>Linkedin: asadshahi-248833421a</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Col>

            <Col>
              <div className="profileDetails">
                <h3>About Me</h3>
                {personal.length > 0 &&
                  personal.map((pers, i) => (
                    <p key={i} style={{ fontSize: "15px" }}>
                      {pers.aboutme}
                    </p>
                  ))}
              </div>
            </Col>
          </Row>
        </div>

        <div className="Work-Experience">
          <Row md={2} lg={2} sm={1}>
            <Col style={{ width: "30%" }}>
              <div className="work-profile">
                <img className="cv-img" src="/images/workexp.png"></img>
                <h2 className="jobTitle asadCvTitle">Work Experience</h2>
              </div>
            </Col>

            <Col>
              {experience_values.length > 0 &&
                experience_values.map((exp, i) => (
                  <div key={i} className="work-right">
                    <div className="work-exp-start-and-title">
                      <span className="work-date">
                        {exp.start_date} - {exp.end_date}
                      </span>
                      <h2 className="work-title">{exp.title}</h2>
                    </div>
                    <div>
                      <p className="work-info" style={{ fontSize: "15px" }}>
                        {exp.information}
                      </p>
                    </div>
                  </div>
                ))}
            </Col>
          </Row>
        </div>
        <div className="Work-Experience entrests ">
          <Row md={2} lg={2} sm={1}>
            <Col style={{ width: "25%" }}>
              <div className="interest-profile">
                <div className="entrest-prof">
                  <img src="images/Interest.png" className="cv-img"></img>
                  <h2 className="asadCvTitle">Entrests</h2>
                </div>
              </div>
            </Col>

            <Col style={{ width: "60%" }} className="asad-intrests-images">
              {interest.length > 0 &&
                interest.map((inte, id) => (
                  <div className="entrest-imges"  key={id}>
                    <div className="interst-img">
                      <div  className="asad-interest-img-title">
                      <img
                          className="prof-img intrest-img"
                          width={50}
                          height={50}
                          src={inte.image}
                        />
                        

                        <h4>{inte.title}</h4>
                      </div>
                    </div>
                  </div>

                ))}
            </Col>
          </Row>
        </div>

        <div className="Work-Experience ">
          <Row md={2} lg={2} sm={1}>
            <Col>
              <div className="skills-awards">
                {" "}
                <div className="skills-profile">
                  <img src="images/skillaward.png" className="cv-img" />
                  <h2>Skills and Awards</h2>
                </div>
                <div className="" style={{ fontSize: "15px" }}>
                  {skills.length > 0 &&
                    skills.map((skill, i) => (
                      <div key={i} className="skill-level">
                        <div className="skill-level-skill">
                          {" "}
                          <ul>
                            <li>{skill.skills}</li>
                          </ul>
                        </div>
                        <div>
                          {" "}
                          <ul style={{ color: "#21c17a" }}>
                            <li>{skill.skills_level}</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Col>

            <Col>
              <div className="work-right">
                
                <h2 className="work-title">
                  Mobile Technician Hardware And Software
                </h2>
                <p style={{ fontSize: "15px" }}>
                  Since i was 15 years old I repaired cell phones (hardware and
                  software wise) as a simple worker and have gained many
                  milestone in this realm. Moreover, I am passionate about the
                  technology. Nowadays, I have become one of the significant
                  repair persons in mobile area and work as a professional. In
                  addition to maintenance, i have the experience of marketing.
                </p>
              </div>
            </Col>
          </Row>        
        </div>

        <div className="edu-skill ">
          <Row md={2} lg={2} sm={1}>
            <Col>
              <div className="edu-profile">
                <div>
                  <img className="cv-img" src="images/edu.png"></img>
                  <h2 className="Edu-title asadCvTitle">Education</h2>
                </div>
                {education.length > 0 &&
                  education.map((edu, i) => (
                    <div
                      style={{fontSize: "15px" ,display:'flex',flexDirection:'column'}}
                      key={i}
                      className="edu-lists"
                     
                    >
                   <div>
                   <span className="work-date">
                        2019 - {edu.graduationDate}
                      </span>

                      <ul style={{ fontSize: "15px" }}>
                        <li>{edu.school} </li>
                        <li>{edu.field} </li>
                    
                      </ul>
                      <div>
                        <p>{edu.info}</p>
                      </div>
                   
                   </div>



                    </div>
                  ))}
              </div>
            </Col>
            <Col>
              <div className="skills ">

                <div className="skill-lang">
                  <div className="lang-titles">
                 
                <h2 className="skill-title asadCvTitle">Skills</h2>
                    <h2 className="skill-title">Level(SCOR)</h2>
                  </div>
                  {skills.length > 0 &&
                    skills.map((skill, i) => (
                      <div key={i} className="lang-parts">
                        <div>
                          {" "}
                          <ul
                            className="skill-lists"
                            style={{ fontSize: "15px" }}
                          >
                            <li>
                              {/* {langCounter}{setAllLanguage(langCounter++)}: */}
                              --{skill.skills}
                            </li>
                          </ul>
                        </div>

                        <div>
                          <ul
                            className="skill-lists"
                            style={{ fontSize: "15px" }}
                          >
                            <li>{skill.skills_level}</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="skill-lang">
                  <div className="lang-titles">
                    <h2 className="skill-title">Languages</h2>
                    <h2 className="skill-title">Level(SCOR)</h2>
                  </div>
                  {language.length > 0 &&
                    language.map((lang, i) => (
                      <div key={i} className="lang-parts">
                        <div>
                          {" "}
                          <ul
                            className="skill-lists"
                            style={{ fontSize: "15px" }}
                          >
                            <li>
                              {/* {langCounter}{setAllLanguage(langCounter++)}: */}
                              --{lang.language}
                            </li>
                          </ul>
                        </div>

                        <div>
                          <ul
                            className="skill-lists"
                            style={{ fontSize: "15px" }}
                          >
                            <li>{lang.level}</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="mt-5 mb-5 btn-first-template">
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
    </div>
  );
}
