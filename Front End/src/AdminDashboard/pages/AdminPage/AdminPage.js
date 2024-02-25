


import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import routesAdmin from "../../routes";
import './adminPage.css';

import TopBar from "../../componetns/topBar/TopBar";
import Sidebar from "../../componetns/sideBar/SideBar";


import useAuthContext from '../../../Auth/context/AuthContext';



export default function AdminPage() {
  let Routers = useRoutes(routesAdmin);
  const navigate = useNavigate();

  const { adminLogin, isAuthenticated, checkAthenticationAdmin,authToken } =
    useAuthContext();


    
  useEffect(() => {
    checkAthenticationAdmin(); //chech authentication

    if (!isAuthenticated) {
      navigate("/adminpanelLogin");
    } 
  //  if(authToken){
  //     navigate('/adminpanel');
  //   }

  }, [isAuthenticated, navigate,checkAthenticationAdmin,authToken]);

  return (
    <>
      <TopBar />
      <div className="container-fluid adminpage">
        <Row md={2} sm={1} lg={2}>
          <Col style={{width:'300px'}}>
            <Sidebar />
          </Col>

          {/* left admin panel page */}
          <Col className="container mt-5 admin-right-section " style={{width:'70%', dispaly: "flex",alignItems:'center',justifyContent:'center' }}>
         
          {Routers}

         
          </Col>
        </Row>
      </div>
    </>
  );
}
