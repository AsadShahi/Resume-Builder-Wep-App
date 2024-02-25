import React from "react";

import "./TopBar.css";

import {CiLogout} from 'react-icons/ci';



import useAuthContext from '../../../Auth/context/AuthContext';

import { Link } from "react-router-dom";


export default function TopBar() {

  const {logout}=useAuthContext();


 
  const handleLogout=()=>{
    localStorage.removeItem('user_ID');
    localStorage.removeItem('email');
    localStorage.removeItem('user_name');
    logout(); //call from authContext to logout authenticated user
    
  }

  return (
    <div>
      <div className="topBar">
        <div className="topBarWrapper">
          <div className="left_TopBar">
           
          </div>

          <div className="right_TopBar">
            
         

          <div className="logo">
              <Link  to={'/'} className="user-logout "style={{textDecoration:'none'}} onClick={handleLogout} ><CiLogout/>Logout🤦‍♂️</Link>
         
            </div>

           

              
          </div>
        </div>
      </div>
    </div>
  );
}
