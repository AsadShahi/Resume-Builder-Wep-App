import React, { useState, useEffect, useRef } from "react";
import "./zikryaTemplate.css";
import axios from "../../../../Auth/api/axios";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import Download from "../downloadResumesModal/Download";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
import HtmlDocx from "html-docx-js/dist/html-docx";

export default function ZikryaTemplate() {
  const [languages, setLanguages] = useState([]);
  const [personalInfos, setPersonalInfos] = useState([]);

  const [experience, setExperience] = useState([]);

  const [education, setEducation] = useState([]);
  const [interest, setInterest] = useState([]);
  const [skills, setSkills] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

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
      .catch((error) => {});
  }, []);


  const pdfRef = useRef();

  const docsref = useRef();

  

  const ResumePDF = async () => {

    const input = pdfRef.current;
    const canvas = await html2canvas(input, {


      scale: 2, // Increase scale for higher quality (adjust as needed)


      // useCORS: true, // Enable CORS if your content is from a different origin
      // allowTaint: true,

      allowTaint: false,
      useCORS: true,
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
    <div className="container container-zikrya ">
               

      <div className="container p-3" ref={pdfRef}>
        {personalInfos.length > 0 &&
          personalInfos.map((pers, i) => (
            <div className="header">
              <div className="img-area">
                {/* <img src="pers.image_url+ '?time=' + new Date().valueOf()"   crossOrigin=""/> */}
                <img src="/images/profile.jpg"/>
              </div>
              <h1>
                {pers.firstname} {pers.lastname}
              </h1>
              <h3>{pers.jobtitle}</h3>
            </div>
          ))}

        <div className="main">
          <div className="left">
            <h2 className="zik-temp-title">Personal Inforamation</h2>
            {personalInfos.length > 0 &&
              personalInfos.map((pers, i) => (
                <>
                  <p>
                    <strong>Email: </strong>
                    {pers.email}
                  </p>
                  <p>
                    <strong>Phone: </strong>
                    {pers.phone}
                  </p>
                </>
              ))}

            <div className="skills mb-3">
              <h2 className="zik-temp-title">Skills</h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>Skills</h3>
                <h3>Levels</h3>
              </div>

              {languages.length > 0 &&
                languages.map((lang, id) => (
                  <div className="skill-lever-order" key={id}>
                    <p>{lang.language}</p>
                    <p>{lang.level}</p>
                  </div>
                ))}
            </div>

            <div className="skills mb-3">
              <h2 className="zik-temp-title">Languages</h2>

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

            <h2 className="zik-temp-title">Education</h2>
            {education.length > 0 &&
              education.map((edu, i) => (
                <>
                  <h3>{edu.title}</h3> <br />
                  <p>
                    <strong>
                      {" "}
                      {edu.field}, 2019-{edu.graduationDate}
                    </strong>
                  </p>
                  <p>{edu.info}</p>
                </>
              ))}
          </div>

          <div className="right">
            <h2 className="zik-temp-title">Work Experience</h2>
            {experience.length > 0 &&
              experience.map((exp, i) => (
                <>
                  <h3>{exp.ttile}</h3>
                  <p>
                    <strong>Position: </strong>
                    {exp.title}
                  </p>
                  <p>
                    <strong>Duration: </strong>
                    {exp.start_date} {exp.end_date}
                  </p>
                  <p>{exp.information}</p>
                </>
              ))}
          </div>
        </div>
      </div>

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
    </div>
  );
}
