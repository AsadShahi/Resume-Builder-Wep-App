import React,{useEffect,useRef} from "react";
import "./download.css";

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { Button } from "react-bootstrap";

import { usePDF } from "@react-pdf/renderer";

export default function Download(props) {

  const {onHide,downloadResumPDF,downloadDoc}=props
 

    //for hiding window using escButton
    useEffect(()=>{

        const checkKey=(event)=>{
           
            if(event.keyCode===27)
            onHide()
        }

        window.addEventListener('keydown',checkKey)
        return ()=>window.removeEventListener('keydown',checkKey) //for removing function
    })

   const downloadResume=()=>{
    downloadResumPDF();

   }

   const downloadDocFile=()=>{
    
    downloadDoc()
   }

  return (
    <div className="modal-parent active">
        <Button variant="text"className="close-btn-download"onClick={onHide}>❌</Button>
      <div className="downloads">
        <h3 className="download-title">Download your resume❤️ </h3>
       
      <div className="download-btn">
        <Button className=" btn btn-pdf" onClick={()=>downloadResume()}>PDF</Button>
        <Button className=" btn btn-doc" onClick={()=>downloadDocFile()}>DOC</Button>
      </div>
      </div>
    </div>
  );
}
