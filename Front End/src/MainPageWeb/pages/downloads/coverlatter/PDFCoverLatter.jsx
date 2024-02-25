import React, { useRef, useEffect, useState } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import axios from 'axios';
import Button from '@mui/material/Button';
import './cover.css'
import { useNavigate } from 'react-router-dom';
export default function PDFCoverLatter() {
    const navigate = useNavigate
    const [download, setDownload] = useState([])
    const [firstdwonload, setFirstdownload] = useState([])
    const pdfRef = useRef();
    const DownloadCoverLatterPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4', true)
            const pdfwidth = pdf.internal.pageSize.getWidth()
            const pdfheight = pdf.internal.pageSize.getHeight()
            const imgWidth = canvas.width;
            const imgheight = canvas.height;
            const ratio = Math.min(pdfwidth / imgWidth, pdfheight / imgheight)
            const imgX = (pdfwidth - imgWidth * ratio) / 2
            const imgY = 30
            pdf.addImage(imgData, 'png', imgX, imgY, imgWidth * ratio, imgheight * ratio)
            pdf.save('cover_latter.pdf')
        });
    };
    useEffect(() => {
        axios.get('http://localhost:8000/api/admin/cover-index')
            .then(res => {
                setDownload(res.data.covers)
                setTimeout(() => {
                    navigate('/')
                })
            })
        // axios.get('http://localhost:8000/api/admin/cover-index')
        // .then(res => {
        //     setFirstdownload(res.data.covers)
        //     setTimeout(() => {
        //         navigate('/')
        //     })
        // })
    })
    return (
        <div className='container cover-letter' style={{ width: '800px' }}>
            <section className="card ">
                <section className="card-body">
                    <div className='container' ref={pdfRef}>
                        {
                            download.map((index, i) => (
                                <>
                                    <section className='personal'>
                                        <h2>{index.fullname}</h2>
                                        <ul>
                                            <li>{index.id}</li>
                                            <li>{index.email}</li>
                                            <li>{index.phone}</li>
                                            
                                        </ul>
                                        <hr/>
                                    </section>
                                    <section className="details">
                                        {index.coverdetails}
                                    </section>
                                </>
                            ))
                        }
                        {
                            firstdwonload.map((index, i) => (
                                <>
                                    <section className='personal'>
                                        <h1>{index.id}</h1>
                                        <h1>{index.fullname}</h1>
                                        <h1>{index.email}</h1>
                                        <h1>{index.phone}</h1>
                                    </section>
                                    <section className="details">
                                        {index.coverdetails}
                                    </section>
                                </>
                            ))
                        }

                    </div>
                </section>
            </section>
            <div className='mt-5'>
            <Button  variant="contained" onClick={DownloadCoverLatterPDF}>Download</Button>
            </div>
           
        </div>
    )
}
