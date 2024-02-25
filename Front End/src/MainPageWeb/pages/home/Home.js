import React, { useDebugValue, useEffect } from "react";
import './home.css'
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Testimonial from "../../components/testimonial/Testimonial2";
import Footer from "../../components/footer/Footer";

import BoxCard from "../../components/BoxCard/BoxCard";

import useAuthContext from "../../../Auth/context/AuthContext";

import { TranslationProvider } from "../../components/Locales/TranslationContext";
import TemplateSample from '../../components/TemplateCard/TemplateSample'

export default function Home() {

  const {user,getUser}=useAuthContext();

  useEffect(()=>{
    if(!user){
      getUser();
    } 
  },[])
  return (
    <div className="home">
  <TranslationProvider>
     <div>USERDDD:{user?.name}</div>


      <Navbar></Navbar>
      <Header></Header>
      <BoxCard/>
     

     <TemplateSample/>
      
      <Testimonial/>
      <Footer/>

  </TranslationProvider>

     
    </div>
  );
}
