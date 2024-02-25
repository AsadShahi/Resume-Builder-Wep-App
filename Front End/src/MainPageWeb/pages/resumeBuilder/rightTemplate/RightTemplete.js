import React, { useState } from "react";
import "./rightTemplete.css";
import { Button } from "react-bootstrap";
import CVTemplete from "../resumeForms/CVTemplete";
import Download from "../../downloads/Download";
export default function RightTemplete(props) {
  const [isShowModal,setIsShowModal]=useState(false)


 const  {profileResume,education}=props


 
  const handlShowModal=()=>{
    setIsShowModal(true)
  }


  const onHideDetailsModal=()=>{
    setIsShowModal(false)
  }

  return (


<>

    <div className="right-templete ">
    <div className=" main-templete">
      
      

      <div className="templete">
        <CVTemplete profileResume={profileResume}  education={education}/>

      </div>

      <div className="templete-footer mb-5 ">
        <div className="footer-btns">
          <Button className="footer-btn btn-temp-select">SlectTemplete</Button>
          <Button className="footer-btn" onClick={handlShowModal}>Download</Button>
        </div>
      </div>
    </div>
  </div>

  {isShowModal&&(
    <Download  onHide={onHideDetailsModal}/>
  )}
</>
    
  );
}
