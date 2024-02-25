import React from "react";

import "./TopBar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import useAuthContext from "../../../Auth/context/AuthContext";

import { Link } from "react-router-dom";
import {CiLogout} from 'react-icons/ci'

export default function TopBar() {
  const { adminLogout } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem('adminName');
    adminLogout(); //call from authContext to logout authenticated user
  };
  const adminName=localStorage.getItem('adminName');
console.log(adminName);
  return (
    <div>
      <div className="topBar">
        <div className="topBarWrapper">
          <div className="left_TopBar">
            <div className="logo">
              <Link
                to={"/adminpanelLogin"}
                className="user-logout "
                style={{ textDecoration: "none" }}
                onClick={handleLogout}
              >
                <CiLogout />
                Logout🤦‍♂️
              </Link>
              {/* <span className="logo-span">ResumeBuilder.af 💙</span> */}
            </div>
          </div>

          <div className="right_TopBar">
            <div className="topBarIconContainer">
              <NotificationsIcon />
              <span className="topIconBadge">2</span>
            </div>

            <div className="topBarIconContainer">
              <LanguageIcon />
              <span className="topIconBadge">2</span>
            </div>

            <div className="topBarIconContainer">
              <SettingsIcon />
            </div>
            <div
              className="adminProfile"
              style={{ direction: "rtl", marginRight: "10px" }}
            >
              <h3 style={{ fontSize: "18px" }}>{adminName}</h3>
              <h5 style={{ fontSize: "13px" }}>برنامه نویس فرانت اند</h5>
            </div>
            <img className="topAvatar" src="../images/adminpanel.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
