import React, { useEffect, useState, useRef } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import axios from 'axios';

import { Button, Link, ListItemSecondaryAction, TableCell, TableRow } from '@mui/material';
export default function ThirdTemplate() {
  const [take, setTake] = useState([])
  const [personal, setPersonal] = useState('')
  const [experience, setExperience] = useState('')
  const [education, setEducation] = useState('')
  const [skills, setSkills] = useState('')
  const pdfRef = useRef();
  const docsref = useRef();
  const getResume=()=>{
    axios.get('http://localhost:8000/api/admin/resume-index')
    .then(result=>{
      setTake(result.data)
    })
    // .then(res=>{
    //   setResumeValue(res.data)
    // })
  }
const getExperience=()=>{
  axios.get('http://localhost:8000/api/admin/experience-index')
  .then(values=>{
    setExperience(values.data)
  })
}
  useEffect(() => {
    getResume()
    getExperience()
    // getExperienc()
  }, [])
  // var userDetails=''
  // userDetails=resume.map((item,index)=>{
  //     return(
  //         <TableRow key={index}>
  //             <TableCell>{item.id}</TableCell>

  //             <TableCell>
  //                 <Link to={`/admin/user-edit/${item.id}`}>Edit</Link>
  //             </TableCell>

  //         </TableRow>
  //     )
  // })
  const ResumePDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imageData = canvas.toDataURL('image/png')
      const pageNumber=1
      const pdf = new jsPDF('p', 'mm', 'a4', true)
      const pdfwidth = pdf.internal.pageSize.getWidth();
      const pdfheight = pdf.internal.pageSize.getHeight();
      const imgwidth = canvas.width;
      const imgheight = canvas.height;
      const ratio = Math.min(pdfwidth / imgwidth, pdfheight / imgheight)
      const imgX = (pdfwidth - imgwidth * ratio) / 2
      const imgY = 90;
      pdf.addImage(imageData, 'png', imgX, imgY, imgwidth * ratio, imgheight * ratio)
      pdf.save('Resume.pdf');
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
  // const DownloadDOCS = () => {
  //     const input = pdfref.current;
  //     html2canvas(input).then((canvas) => {
  //         const imageData = canvas.toDataURL('image/png')
  //         const pdf = new jsPDF('p', 'mm', 'a4', true)
  //         const pdfwidth = pdf.internal.pageSize.getWidth();
  //         const pdfheight = pdf.internal.pageSize.getHeight();
  //         const imgwidth = canvas.width;
  //         const imgheight = canvas.height;
  //         const ratio = Math.min(pdfwidth / imgwidth, pdfheight / imgheight)
  //         const imgX = (pdfwidth - imgwidth * ratio) / 2
  //         const imgY = 30;
  //         pdf.addImage(imageData, 'png', imgX, imgY, imgwidth * ratio, imgheight * ratio)
  //         pdf.save('Resume.docs');
  //     });
  // }
  // }
  return (
    <section className='container'>
        <section className="card ">
          <section className="card-body">
          <section className="main-first-page" ref={pdfRef}>
      
          <div className="main">
        <div className="top-section">
        {/* {
          take.map((index,i)=>(
          //  <section>
          //    <img src={``} width={200} height={200} alt="" className='profile'/>
          //   <p className="p1">{index.id}<span>Mirzaie</span></p>
          //   <p className="p2">Web designer, programmer, English trainer</p> 
          //  </section>
          <h1>{index.id}</h1>
          ))
        } */}
        {/* {
          experience.map((index,i)=>(
            <h1>{index.id}</h1>
          ))
        } */}
        </div>
        <div className="clearfix"></div>
            <div className="col-div-4">
                <div className="content-box" style={{paddingLeft: '40px'}}>
                    <p className="head">Contact</p>
                    <ul>
                        <li>+93749726661</li>
                        <li>Zikryamirzaie6@gmail.com</li>
                        <li>Kandahar, Afghanistan</li>
                    </ul>
                    <br/>
                    <p className="head">My skills</p>
                    <ul>
                        <li><span>Web Designing</span></li>
                        <li><span>English Trainer</span></li>
                        <li><span>HTML-5</span></li>
                        <li><span>CSS-3</span></li>
                        <li><span>Java Script</span></li>
                    </ul>

                    <br/>

                    <p className="head">Awards</p>
                    <p className="p3">Css Design Awards</p>
                    <p className="p3">English fluent speaking award</p>
                    <p className="p3">Computer programs certificate</p>
                    <p className="p3">the shorty award</p>
                    <p className="p3">more.....</p>
                    
                    <br/>

                    <p className="head">Language</p>
                    <p className="p3">Persian</p>
                    <p className="p3">Pashto</p>
                    <p className="p3">English</p>
                    <p>Urdu</p>

                </div>
            </div>
            <div className="line"></div>
            <div className="col-div-8">
                <div className="content-box">

                    <p className="head">profile</p>
                    <p className="p3" style={{fontSize: '14px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, itaque laboriosam minus, laudantium dolorem beatae voluptate dolores nihil voluptatibus corporis nam illum aut sapiente. Consequatur, iusto facere! Non, commodi temporibus.
                    Harum laudantium autem illo illum provident ratione delectus ullam nam ipsum consectetur non iste alias mollitia, officiis molestias itaque sed rerum perspiciatis deserunt consequuntur modi consequatur, minus eaque facere. Ab!</p>

                    <br/>

                    <p className="head">experience</p>
                    <p>English Trainer in Salame Fars (2020 - Now)</p>
                    <p>Online English Teacher In at TeachTeam.online(2021 - Now)</p>
                    <p>UI Designer (2022 - Now)</p>
                    <p>Microsoft programs teacher(2020 - 2021)</p>

                    <br/>

                    <p className="head">education</p>
                    <p>High School Graduate in 2019</p>
                    <p>Bachelor of Computer Science At kandahar university 2023</p>
                    <p>Advance English language graduate 2018</p>
                    <p>Computer Microsoft Programs graduate 2018</p>
                    <br/>
                    <p className="head">reference</p>
                    <p>MR.Ghulam Rasool CEO of Salman e Fars</p>
                    <p>mobile: +93*********</p>
                    <p>email:Ghulamrasool@gmail.com</p>
                </div>
            </div>
    </div>
          </section>
        </section>
      <Button onClick={ResumePDF} variant='contained'color='primary'>Download</Button>
    </section>
    </section>
  )
}
