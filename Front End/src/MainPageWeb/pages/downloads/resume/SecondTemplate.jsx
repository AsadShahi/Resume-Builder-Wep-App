import React, { useEffect, useState, useRef } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import axios from 'axios';

import { Button, Link, ListItemSecondaryAction, TableCell, TableRow } from '@mui/material';
export default function SecondTemplate() {
  const [take, setTake] = useState([])
  const [values, setExperienceValues] = useState([])
  const [education,setEducation]=useState([])
  const [language, setLanguage] = useState([])
  const pdfRef = useRef();
  const docsref = useRef();
  const resumefunction = () => {
    axios.get('http://localhost:8000/api/admin/resume-list')
      .then(res => {
        // console.log(res)
        setTake(res.data.list)
      })
  }
  const experiencefunction = () => {
    axios.get('http://localhost:8000/api/admin/experience-list')
      .then(res => {
        setExperienceValues(res.data.list)
      })
  }
  const EducationFunction = () => {
    axios.get('http://localhost:8000/api/admin/education-list')
      .then(res => {
        setEducation(res.data.list)
      })
  }
  const skillsFunction = () => {
    axios.get('')
      .then(res => {
        console.log(res.data.skills)
      })
  }
  const languageFunction = () => {
    axios.get('http://localhost:8000/api/admin/language-list')
      .then(res => {
        setLanguage(res.data.list)
      })
  }
  useEffect(() => {
    resumefunction()
    experiencefunction()
    EducationFunction()
    skillsFunction()
    languageFunction()
  }, [])
  const ResumePDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imageData = canvas.toDataURL('image/png')
      const imgWidth = 190;
      const pageHeight = 290;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightleft = imgHeight;
      const doc = new jsPDF('pt', 'mm')
      let position = 0
      doc.addImage(imageData, 'PNG', 10, 0, imgWidth, imgHeight + 25)
      heightleft -= pageHeight;
      while (heightleft >= 0) {
        position = heightleft - imgHeight;
        doc.addPage()
        doc.addImage(imageData, 'PNG', 10, position, imgWidth, imgHeight + 25)
        heightleft -= pageHeight;

      }
      doc.save('resume.pdf')
    });
  }
  return (
    <section className='container'>
      <section className="card ">
        <section className="card-body">
          <section className="main-second-page" ref={pdfRef}>

            <section className="peronsal-information">
              <section className="peronsal-info">
                {
                  take.map((item, i) => (
                    <>
                      <h3>{item.firstname} - {item.lastname}</h3>
                      <ul>
                        <li>{item.email}</li>
                        <li>+0093{item.phone}</li>
                        <li>{item.country} - {item.city}</li>
                      </ul>
                    </>
                  ))
                }
              </section>
              <hr />
              <section className="experience-second-template">
                <h3>Experience Now</h3>
                <div>
                  {
                    values.map((index, item) => (
                      <>
                        <ul>
                          <li>Worked On: <p>{index.title}</p></li>
                          <li> Role:  <p>{index.role}</p></li>
                          <li> Start : <p>{index.start_date}</p></li>
                          <li> End:  <p>{index.end_date}</p></li>
                        </ul>
                        <p>{index.information}</p>
                      </>
                    ))
                  }
                </div>
                {/* {
                myExperience.map((indexitem,i)=>(
                  <>
                   <b>{indexitem.id}</b>
                <p>
                </p>
                  </>
                ))
               } */}
                {/* {
                  experience_values.map((index, i) => (
                    <p>{index.information}</p>
                  ))
                } */}
              </section>
              <hr />
              <section className="education">
                <h3>Education</h3>
                {/* {
                  education.map((index, i) => (
                    <>
                      <ul>
                        <li>{index.school}</li>
                        <li>{index.field}</li>
                        <li>{index.graduationDate}</li>
                        <li>{index.city}</li>
                        <li>{index.country}</li>
                      </ul>
                      <p>
                        {index.info}
                      </p>
                    </>
                  ))
                } */}
                {
                      education.map((index,i)=>(
                        <>
                        <ul>
                          <li>{index.school}</li>
                          <li>{index.field}</li>
                          <li>{index.graduationDate}</li>
                          <li>{index.city}</li>
                          <li>{index.country}</li>
                        </ul>
                        <p>
                          {index.info}
                        </p>
                        </>
                      ))
                    }
              </section>
              <hr />
              <section className="skills_level">
                <h1>My Skills</h1>
                <b>PHP</b>
                <b>LARAVEL</b>
                <b>MYSQL DATABASE</b>
                <b>REACT</b>
                <b>ENGLISH</b>
              </section>
              <hr />
              <section className="language">
                {
                  language.map((language, index) => (
                    <>
                      <b>{language.language}</b><b />
                      <b>{language.level}</b>
                    </>
                  ))
                }
              </section>
              <hr />
            </section>
          </section>
        </section>
        <div className='btn-second-template' style={{ width: '100px' }}>
          <Button onClick={ResumePDF} variant='contained' color='primary'>PDF</Button>
        </div>
      </section>
    </section>
  )
}
