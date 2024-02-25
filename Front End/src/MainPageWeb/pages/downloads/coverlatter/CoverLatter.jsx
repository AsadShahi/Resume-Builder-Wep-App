import { Button, TableCell, TableRow } from '@mui/material'
import axios from 'axios'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import React, { useEffect, useState,useRef } from 'react'
import { Link } from 'react-router-dom'
export default function CoverLatter() {
  const pdfRef = useRef();
  const [user, setCovers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/admin/cover-show-only')
    .then(res=>{
        // console.log(res)
        setCovers(res.data.users)
    })
}, [])
  const coverDonwload=()=>{
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imageData = canvas.toDataURL('image/png')
      const imgWidth = 190;
      const pageHeight = 290;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightleft = imgHeight;
      const doc = new jsPDF('pt','a4', 'mm')
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
    <div className='cover-latter container col-lg-8 mt-5'>
      <section className='download'ref={pdfRef}>
      {
         user.map((item,index)=>{
          return(
            <section>
              <h2>{item.fullname}</h2>
              <b>{item.email}</b>
              <b>{item.phone}</b>
              <b>{item.company}</b>
              <hr/>
            </section>
          )
      })
      }
     
       {
         user.map((item,index)=>{
          return(
            <section>
              <p>{item.coverdetails}</p>
            </section>
          )
      })
      }
        </section>
      <Button onClick={coverDonwload} variant='primary'>Download</Button>
    </div>
  )
}
