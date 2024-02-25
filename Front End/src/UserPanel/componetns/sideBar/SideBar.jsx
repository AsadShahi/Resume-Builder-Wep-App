
import React from "react";
import "./SideBar.css";
import {BsTicketDetailed} from 'react-icons/bs';
import {RiLockPasswordLine} from 'react-icons/ri';
import {BsWallet} from 'react-icons/bs';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LineStyleIcon from "@mui/icons-material/LineStyle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BarChartIcon from "@mui/icons-material/BarChart";

import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

// import TimelineIcon from "@mui/icons-material/Timeline";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import StorefrontIcon from "@mui/icons-material/Storefront";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
// import ContactMailIcon from '@mui/icons-material/ContactMail';

// import NotificationsIcon from "@mui/icons-material/Notifications";
// import LanguageIcon from "@mui/icons-material/Language";
// import SettingsIcon from "@mui/icons-material/Settings";

// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


import { Link } from "react-router-dom";


export default function Sidebar() {

  const user_name=localStorage.getItem('user_name');
  
  return (

    <>
      <div className=" userpanel-profile"  style={{height:'30px'}}>

          <div className="user-Profile">

          <img className="topAvatar" src="../images/adminpanel.jpg"></img>
          <h3 style={{fontSize:'25px',marginLeft:'1rem'}} >{user_name}</h3>
          </div>
                 
     </div>
     
    <div className="sidebar-user">
      
      <div className="sidebarWrapper">
    
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/userpanelPage/HomeUser" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/createResume" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Create Resume
              </li>
            </Link>
            <Link to="/CreateCoverLatter" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Create Cover Letter
              </li>
            </Link>
          
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <Link to="/userpanelPage/inforamtion" className="link">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                Innforamtion
              </li>
            </Link>
          

            <Link to="/userpanelPage/userwallet" className="link">
              <li className="sidebarListItem">
                <BsWallet className="sidebarIcon" />
                Wallet
              </li>
            </Link>
            <Link to="/userpanelPage/ticket" className="link">
              <li className="sidebarListItem">
                <BsTicketDetailed className="sidebarIcon" />
                 Ticket
              </li>
            </Link>
            <Link to="/userpanelPage/changePassword" className="link">
              <li className="sidebarListItem">
                <RiLockPasswordLine className="sidebarIcon" />
                ChangePassword
              </li>
            </Link>
         
            <Link to="/userpanelPage/resumeuser" className="link" >
              <li className="sidebarListItem">
                <NewspaperOutlinedIcon className="sidebarIcon" />
                Resumes
              </li>
            </Link>
       
          </ul>
        </div>
        
       
      </div>
    </div>
    
    </>
  );
}

