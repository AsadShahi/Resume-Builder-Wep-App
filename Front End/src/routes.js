import React from "react";
import { Navigate } from "react-router-dom";
//admin dashboard
import AdminPage from "./AdminDashboard/pages/AdminPage/AdminPage";

import CreateCoverLatter from "./MainPageWeb/pages/CoverLatter/CreateCoverLatter";

// import HomePage from './HomePage';

import FirstTemplate from "./MainPageWeb/pages/downloads/resume/firstTemplate/FirstTemplate";
import SecondTemplate from "./MainPageWeb/pages/downloads/resume/SecondTemplate";
import ThirdTemplate from "./MainPageWeb/pages/downloads/resume/ThirdTemplate";
import CoverLatter from "./MainPageWeb/pages/downloads/coverlatter/CoverLatter";


import CreatingResume from "./MainPageWeb/pages/resumeBuilder/creatingResumePages/personal-info/CreatingResume";
import Experience from "./MainPageWeb/pages/resumeBuilder/creatingResumePages/experience-info/Experience";
import Education from "./MainPageWeb/pages/resumeBuilder/creatingResumePages/education-info/Education";
import Skills from "./MainPageWeb/pages/resumeBuilder/creatingResumePages/skills-info/Skills";
import SocialLinks from "./MainPageWeb/pages/resumeBuilder/creatingResumePages/social-links/SocialLinks";
import Myinterest from "./MainPageWeb/pages/resumeBuilder/creatingResumePages/interest-info/Myinterest";
import Language from "./MainPageWeb/pages/resumeBuilder/creatingResumePages/language-info/Language";



import PDFCoverLatter from "./MainPageWeb/pages/downloads/coverlatter/PDFCoverLatter";
import Alldownload from "./MainPageWeb/pages/downloads/resume/Alldownload";



//asad

import Home from "./MainPageWeb/pages/home/Home";


import ResumeBuilderFAQ from "./MainPageWeb/components/resumBuilder FAQ/ResumeBuilderFAQ";
import AboutUs from "./MainPageWeb/pages/About Us/AboutUs";
import HowToWriteResume from "./MainPageWeb/pages/howToWriteResume/HowToWriteResume";
import AsadCvTemplete from "./MainPageWeb/pages/downloads/asadResume/AsadCvTemplete";
import Contact from "./MainPageWeb/pages/Contact/Contact";
import TemplateSample from "./MainPageWeb/components/TemplateCard/TemplateSample";

// import NewsLetter from "./admin/newsletter/NewsLetter";

import AhmadTemplate from "./MainPageWeb/pages/downloads/ahmadResume/AhmadTemplate";
// import UserPanel from "./MainPageWeb/pages/UsersPanels/UserPanel";

//admin panel imports compenents

import LoginAdminpanel from "./AdminDashboard/Login/LoginAdminpanel";

import AdminHome from "./AdminDashboard/pages/home/Home";

import NewUser from "./AdminDashboard/pages/addAdmin/AddAdmin";

import UserList from "./AdminDashboard/pages/userList/UserList";
import ContactList from "./AdminDashboard/pages/contact/ContactList";
import Products from "./AdminDashboard/pages/products/Products";
import NewsLetter from "./AdminDashboard/pages/newsLetter/NewsLetter";
import Admin from "./AdminDashboard/pages/admins/Admin";
import Testimonial from "./AdminDashboard/pages/testimonial/TestimonialCreate";
import HomeAdmin from "./AdminDashboard/pages/home/Home";
// import AdminPage from "./MainPageWeb/pages/AdminPage/AdminPage";
// import NewUser from "./MainPageWeb/pages/newUser/NewUser";
// import UserList from "./MainPageWeb/pages/userList/UserList";
// import ContactList from "./MainPageWeb/pages/contact/ContactList";
// import Products from "./MainPageWeb/pages/products/Products";
// import NewsLetter from "./MainPageWeb/pages/newsLetter/NewsLetter";
// import Admin from "./MainPageWeb/pages/admins/Admin";

//user panel
import ChangePassword from "./UserPanel/pages/changePassword/ChangePassword";

import ForgetPassword from './Auth/forgetPassword/ForgetPassword';
import Ticket from "./UserPanel/pages/Ticket/Ticket";
import UserpanelPage from "./UserPanel/pages/AdminPage/UserpanelPage";
import HomeUser from "./UserPanel/pages/home/HomeUser";
import Inforamtion from "./UserPanel/pages/inforamtion/Inforamtion";
import UserWallet from "./UserPanel/pages/wallet/UserWallet";
import ResumeUser from "./UserPanel/pages/ResumesUser/ResumeUser";





//all resume sampl demo
import MultipleResume from "./MainPageWeb/pages/resumeBuilder/mutipleResume/MultipleResume";

//templates for Downloads
import AminTemplate from "./MainPageWeb/pages/downloads/aminTemplate/AminTemplate";
import ZikryaTemplate from "./MainPageWeb/pages/downloads/zikryaTemplate/ZikryaTemplate";
import YounosTemplate from "./MainPageWeb/pages/downloads/younosTemplate/YounosTemplate";
import SharifTemplate from "./MainPageWeb/pages/downloads/sharifTemplate/SharifTemplate";
//for testing
import TestingProjectFile from "./MainPageWeb/pages/downloads/resumeForms/TestingProjectFile";

let routes = [
  //mutiple resume template show
  { path: "/mutipleresume", element: <MultipleResume /> },

  
  { path: "/testproject", element: <TestingProjectFile /> },

  //user panel page

  {
    path: "/userpanelPage",
    element: <UserpanelPage />,
    children: [
    
      { path: "/userpanelPage/*", element: <NewUser /> },
      { path: "/userpanelPage/*", element: <Products /> },
      { path: "/userpanelPage/*", element: <Ticket /> },
      { path: "/userpanelPage/*", element: <UserWallet /> },
      { path: "/userpanelPage/*", element: <ChangePassword /> },
      { path: "/userpanelPage/*", element: <Inforamtion /> },
      { path: "/userpanelPage/*", element: <ResumeUser /> },

      { path: "/userpanelPage/inforamtion", element: <HomeUser /> },
    ],
  },

  //admin panel


  { path: "/adminpanelLogin", element: <LoginAdminpanel /> },
  { path: "/forgetpassword", element: <ForgetPassword /> },

  {
    path: "/adminpanel",
    element: <AdminPage />,
    children: [
      { path: "/adminpanel/userLists", element: <UserList /> },
      { path: "/adminpanel/newadmin", element: <NewUser /> },
      { path: "/adminpanel/productsPanel", element: <Products /> },
      { path: "/adminpanel/contactList", element: <ContactList /> },
      { path: "/adminpanel/newsLetter", element: <NewsLetter /> },
      { path: "/adminpanel/adminlist", element: <Admin /> },
      { path: "/adminpanel/TestimonialCreate", element: <Testimonial /> },
      { path: "/adminpanel", element: <HomeAdmin /> },
   
    ],
    // Add the following action to redirect to the login page

  },
  
  //Asadshahi
  { path: "/", element: <Home /> },
  { path: "/createResume", element: <CreatingResume /> },

  
  { path: "/faqs", element: <ResumeBuilderFAQ /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/HowToWriteResume", element: <HowToWriteResume /> },
  { path: "/asadCV", element: <AsadCvTemplete /> },
  { path: "/ahmadcv", element: <AhmadTemplate /> },
  { path: "/contact", element: <Contact /> },
  { path: "/templateContent", element: <TemplateSample /> },
  { path: "/personal-info", element: <CreatingResume /> },
  { path: "/exp-info", element: <Experience /> },
  { path: "/edu-info", element: <Education /> },
  { path: "/skills-info", element: <Skills /> },
  { path: "/social-links", element: <SocialLinks/> },

  { path: "/language-info", element: <Language /> },
  { path: "/interest", element: <Myinterest /> },
  { path: "/CreateCoverLatter", element: <CreateCoverLatter /> },


  { path: "/about-us", element: <AboutUs /> },

  // Resume Template Sample Download
  { path: "/download/first-template", element: <FirstTemplate /> },
  { path: "/download/second-template", element: <SecondTemplate /> },
  { path: "/download/thirdtemplate", element: <ThirdTemplate /> },
  { path: "/aminresume", element: <  AminTemplate /> },
  { path: "/zikryaresume", element: <  ZikryaTemplate /> },
  { path: "/younosresume", element: <  YounosTemplate /> },
  { path: "/sharifresume", element: <  SharifTemplate /> },
  

 
  // Download Section for Resume Builder
  { path: "/download/reusme", element: <CoverLatter /> },
  { path: "/download/cover", element: <PDFCoverLatter /> },
  { path: "/resumeall", element: <Alldownload /> },
  { path: "/cover-download", element: <CoverLatter /> },

  // Every things is test
];
export default routes;
