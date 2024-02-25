import React, { useState, useEffect, useRef } from "react";
import "./AhmadTemplate.css";


import axios from '../../../../Auth/api/axios';
import html2pdf from "html2pdf.js";
import { Document, Paragraph, TextRun, Packer } from "docx";

import { Row, Col } from "react-bootstrap";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Download from "../downloadResumesModal/Download";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";


export default function AhmadTemplate() {
  const [language, setAllLanguage] = useState([]);
  const [personalInfo, setResumes] = useState([]);
 

  const [experience_values, setExperience] = useState([]);


  const [education, setEducation] = useState([]);
  const [interest, setInterest] = useState([]);
  const [skills, setSkills] = useState([]);
 

  useEffect(() => {
    axios.get("http://localhost:8000/personal-list").then((res) => {
      setResumes(res.data.list);
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


  
  
  const ResumePDF = async () => {
    const input = pdfRef.current;
    const canvas = await html2canvas(input, {
      scale: 3.5, // Increase scale for higher quality (adjust as needed)
      useCORS: true, // Enable CORS if your content is from a different origin
    });
  
    const imgData = canvas.toDataURL('image/jpeg', 1); // Adjust JPEG quality (0.8 = 80%)
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
  
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, imgHeight, '', 'FAST'); // Use 'FAST' for faster rendering
  
    pdf.save('resume.pdf');
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
 

  //export pdf browser
 

  const handleDownloadPDF = () => {
    const element = pdfRef.current;

    if (element) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <head>
              <title>Resume</title>
              <style>
                @media print {
                  body {
                    padding: 20px;
                  }
                }
              </style>
            </head>
            <body>
              ${element.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      }
    }

  };

  return (
    <div className="container ahmad-temp mt-5 mb-5">
      <div className="main-ahmad-resume-temp" ref={pdfRef}>
        {personalInfo.length > 0 &&
          personalInfo.map((pers ,i) => (
            <div key={i}>
              <section className="row-2 profile-section">
                <section className="logo-section">
                  <div id="back-div"></div>
                  <img  src={pers.image_url}></img>
                </section>

                <section className="heading-section">
                  <h2>
                    {pers.firstname} {pers.lastname}
                  </h2>
                  <div className="h2">{pers.jobtitle}</div>
                  <p>{pers.aboutme}</p>
                </section>
              </section>
            </div>
          ))}

        <section className="row-2">
          <section className="col-1-of-row2 sec-1-2">
            {personalInfo.length > 0 &&
              personalInfo.map((pers,i) => (
                <div key={i}>
                  <h2 className="ahmad-title">contact</h2>

                  <ul id="social-ul">
                    <li>
                      <a href="">
                        <i>
                          <PhoneInTalkOutlinedIcon style={{color:'#66522e'}} />
                        </i>
                      </a>
                      {pers.phone}
                    </li>
                    <li>
                      <a href="">
                        <i>
                          <EmailOutlinedIcon  style={{color:'#66522e'}} />
                        </i>
                      </a>
                      {pers.email}
                    </li>
                    <li>
                      <a href="">
                        <i>
                          <PublicOutlinedIcon  style={{color:'#66522e'}} />
                        </i>{" "}
                      </a>
                      www.resume.af
                    </li>
                    <li>
                      <a href="">
                        <i><LocationOnOutlinedIcon  style={{color:'#66522e'}}/></i>{" "}
                      </a>
                      {pers.country} - {pers.city}
                    </li>
                  </ul>
                  <br />
                  <br />
                  <br />
                </div>
              ))}
          </section>

          <section className="col-2-of-row2 sec-1-2">
            <h2 className="ahmad-title">work experience</h2>
            {experience_values.length > 0 &&
              experience_values.map((exp,i) => (
                <div key={i}>
                  <div className="work-h">{exp.title}</div>
                  <div className="yeardiv">
                    {exp.start_date}-{exp.end_date}
                  </div>
                  <p>{exp.information}</p>
                
                </div>
              ))}
          </section>
        </section>

        <section className="row-2">
          <section className="col-1-of-row2">
            <h2 className="ahmad-title">language</h2>
            {language.length > 0 &&
              language.map((lang,i) => (
                <div key={i} className="lang-parts">
                  <ul className="language-ul">
                    <li>{lang.language}</li>
                  </ul>

                  <ul className="language-ul">
                    <li>{lang.level}</li>
                  </ul>
                </div>
              ))}
          </section>

          <section className="col-1-of-row2">
            <h2 className="ahmad-title">skills</h2>
            {skills.length > 0 &&
              skills.map((skill,i) => (
                <div key={i}>
                 <div key={i} className="lang-parts">
                  <ul className="language-ul">
                    <li>{skill.skills}</li>
                  </ul>

                  <ul className="language-ul">
                    <li>{skill.skills_level}</li>
                  </ul>
                </div>
                </div>
              ))}
          </section>
        </section>

        <section className="row-2 ">
          <section className="col-1-of-row2">
            <h2 className="ahmad-title">education</h2>
            {education.length > 0 &&
              education.map((edu,i) => (
                <div key={i}>
                  <p className="edu-header">{edu.school}</p>
                  <div className="yeardiv">2019-{edu.graduationDate}</div>
                  <p className="edu-p">{edu.info}</p>

                 
                </div>
              ))}
          </section>

          <section className="col-2-of-row2 col-6">
            <h2 className="ahmad-title">interests</h2>
            {interest.length > 0 &&
              interest.map((interest,i) => (
                <div key={i}>
                  <ul className="inter-ul">
                    <li>{interest.title}</li>
                  
                  </ul>
                </div>
              ))}
        
          </section>
        </section>
      </div>
      <div className="mt-5 mb-5 btn-first-template">
        <Button
          onClick={() => showModalHandler()}
          variant="contained"
          color="primary"
        >
          Download Resume
        </Button>
        {/* <Button
          onClick={handleDownloadPDF}
          variant="contained"
          color="primary"
        >
         Print Pdf
        </Button> */}
      </div>
      {ishowModal && (
        <Download
          onHide={onHideModal}
          downloadResumPDF={ResumePDF}
          // downloadDoc={generateDOC}
        />
      )}
    </div>
  );
}
