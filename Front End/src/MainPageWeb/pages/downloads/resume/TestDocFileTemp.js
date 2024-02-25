import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./testDocFileTemp.css";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
import HtmlDocx from "html-docx-js/dist/html-docx";
import {Row,Col} from 'react-bootstrap'

export default function TestDocFileTemp() {
  const [language, setAllLanguage] = useState([]);
  const [user, setResumes] = useState([]);
  const [personal, setPersonal] = useState("");
  const [experience_values, setExperience] = useState([]);
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState([]);
  // ...
  const resumefunction = () => {
    axios.get("http://localhost:8000/api/admin/resume-list").then((res) => {
      // console.log(res)
      setResumes(res.data.list);
    });
  };
  const experiencefunction = () => {
    axios.get("http://localhost:8000/api/admin/experience-list").then((res) => {
      setExperience(res.data.list);
    });
  };
  const EducationFunction = () => {
    axios.get("http://localhost:8000/api/admin/education-list").then((res) => {
      setEducation(res.data.list);
    });
  };
  const skillsFunction = () => {
    axios.get("").then((res) => {
      console.log(res.data.skills);
    });
  };
  const languageFunction = () => {
    axios.get("http://localhost:8000/api/admin/language-list").then((res) => {
      setAllLanguage(res.data.list);
    });
  };
  useEffect(() => {
    resumefunction();
    experiencefunction();
    EducationFunction();
    skillsFunction();
    languageFunction();
  }, []);


  const generateDOC = () => {
    const docContent = document.getElementById("main-first-page").innerHTML;
    const convertedDoc = HtmlDocx.asBlob(docContent);

    saveAs(convertedDoc, "document.doc");
  }

  return (
   <>
  
    <section className="container">
      <section className="card ">
        <section className="card-body">
          <section className="main-first-page" id="main-first-page">
            {/* Rest of your code */}
            <div className="main">
              <div className="top-section">
                {user.map((index, i) => (
                  <section key={i}>
                    <img
                      src={`http://localhost:8000/storage/${index.image}`}
                      width={200}
                      height={200}
                      alt=""
                      className="profile"
                    />
                    <p className="p1">
                      <span>{index.fullname}</span>
                    </p>
                    <p className="p2">{index.email}</p>
                    <p className="p2">{index.phone}</p>
                  </section>
                ))}
              </div>
              <div className="clearfix">

              <Row md={2} lg={2} sm={2}>
                  <Col><h2>AsadshahiMoon</h2></Col>
                  <Col>Semsdjfs gdsa djgksajdgksadjgklsajdgggggggggsjdgkjsdkgjksdg</Col>
   </Row>
              </div>
              <div className="col-div-4">
                <div className="content-box" style={{ paddingLeft: "40px" }}>
                  <p className="head">Contact</p>
                
                  {user.map((all, i) => (
                    <>
                      <li>+{all.phone}</li>
                      <li>{all.email}</li>
                      <li>
                        {all.country} - {all.city}
                      </li>
                    </>
                  ))}
                  <br />
                  <p className="head">My skills</p>
                  <ul>
                    <li>
                      <span>Web Designing</span>
                    </li>
                    <li>
                      <span>English Trainer</span>
                    </li>
                    <li>
                      <span>HTML-5</span>
                    </li>
                    <li>
                      <span>CSS-3</span>
                    </li>
                    <li>
                      <span>Java Script</span>
                    </li>
                  </ul>
                  <div></div>
                  <br />
                  <div>
                    {language.map((takeValue, i) => (
                      <ul>
                        <li>{takeValue.language}</li>
                        <li>{takeValue.level}</li>
                      </ul>
                    ))}
                  </div>
                  <br />
                </div>
              </div>
              <div className="line"></div>
              <div className="col-div-8">
                <div className="content-box">
                  <p className="head">profile</p>
                  <p className="p3" style={{ fontSize: "14px" }}>
                    {experience_values.map((index, i) => (
                      <p>{index.information}</p>
                    ))}
                  </p>
                  <br />
                  <p className="head">experience</p>
                  <div>
                    {experience_values.map((index, i) => (
                      <ul>
                        <li>
                          {" "}
                          <h1>{index.title}</h1>
                        </li>
                        <li>
                          {" "}
                          <h1>{index.role}</h1>
                        </li>
                        <li>
                          {" "}
                          <h1>{index.start_date}</h1>
                        </li>
                        <li>
                          {" "}
                          <h1>{index.end_date}</h1>
                        </li>
                      </ul>
                    ))}
                  </div>
                  <br />
                  <h4 className="head">education</h4>
                  {education.map((index, i) => (
                    <>
                      <ul>
                        <li>{index.school}</li>
                        <li>{index.field}</li>
                        <li>{index.graduationDate}</li>
                        <li>{index.city}</li>
                        <li>{index.country}</li>
                      </ul>
                      <p>{index.info}</p>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="btn-first-template">
          <Button onClick={generateDOC} variant="contained" color="primary">
            Download DOC
          </Button>
        </div>
      </section>
    </section>
    
    </>
  );
}