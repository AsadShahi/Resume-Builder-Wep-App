import { ChildCareRounded } from "@material-ui/icons";
import { createContext, useState } from "react";

const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // زبان فعلی

  const translation = {
    en: {
      home: "Home",
      signUp: "Sign Up",
      signIn: "Sign In",
      UserPanel:'UserPanel',
      about: "About",

      contact: "Contact Us",
      resume: "Resume",
      CoverLetter: "CoverLetter",
      coverLetterBuilder: "Cover Letter Builder",
      coverLetterSmaple: " Cove Letter Builder",
      howToBuildCoverLetter: "How To Build Cover Letter",

      resumeBuilder: "Resume Builder",
      ResumeSmaple: " Resume Sample",
      howToBuildResume: "How To Build Cover Resume",

      //heading transleting
      Buildresumeforfree: "Build a Professional Resume For Free",
      createResumeDisc:
        "Create your resume easily with our free builder and professional templates.",
      createResume: "Create Resume",

      //Footer
      Links: "Links",
      ResumeTemplets: "Resume Templetes",
      CvTempletes: "CV Templetes",

      CoverLetters: "Cover Letters",
      Resume: "Resume",
      /// learn section footer
      Learn: "Learn",
      ClearBlog: "Clear Blog",
      Howtowritearesume: " How tow rite a resume",
      Howtowritecv: " How to write cv",
      ResumeExamples: "Resume Examples",
      CoverletterExamples: "Cover letter Examples",


            ///other footer section
      Other: "Other",
      Pricing: "Pricing",
      AboutUs: "About Us",
      EbookHowtogetajobin2023:"Ebook-How to geta job in 2023",
      MediaKit: "Medai Kit",
      HelpCenter: "help center",

      //news letter sign up
      Newslettersignup:'Subscribe to Newsletter',
      submit:'Subscribe',
      EnterYourEmail:'Enter your email',
      send:'Send',
      TypeEmail:'Type Email...',


      //testomonial
      testimonialTitle :"Our Users Are Being Hired at the World's Leading Companies.",

      //footer copy right
      copyRightFooter:'Copyright © 2023 resume.af All Rights Reserved by CS students',



      //contact page
      contactTitle:'Contact',
      contactDesc:'Have comments, questions, or feedback to share? Our team would love to hear from you. Give us a call or submit a message below.',

      Address:'Adress',
      addressPath:'KabulShah,Kandahar,Afghanistan',
      CallCenter:'Phone Numbe: +93797277737',
      Name:'Name',
      Email:'Email',
      Messege:'Messege',
      FullNameForInput:'FullName...',
      EmailForInput:'Email...',
      TypeHere:'Type Here...',
      FindGoogle:'Find Us On Google Map',

      
     



      //card templates sample
      chooseTemplates:'Choose any Templates from this to make your Resume',
      CreativeResumeTemplate:'Creative Resume Template',
      Aresumetemplateascreativeas:'A resume template as creative as your imagination',

      //second card tamplete sample in hoome
      ProfessionalResumetemplate:'Professional Resume template',
      Putyourbestfootforward:'Put your best foot forward with a professional resume template',

      //third
      CollegeResumeTemplate:'College Resume Template',
      NoexperienceNo:'No experience? No problem!',
      

      //box card
      HowtoBuildResume:'How to build Resume',
      clickHereFor:'Clicl here for more...',
       views:'Views',
       hourAgo:'1 hour ago',





    },



    fa: {
      home: "خانه",
      about: "درباره ما",
      signUp: "ثبت نام",
      signIn: "ورود",
      UserPanel:'پنل کاربری',
      contact: "تماس  با ما",
      resume: "رزومه",
      CoverLetter: "کاور لتر",
      coverLetterSmaple: "نمونه کاور لتر",
      coverLetterBuilder: "ساخت کاور لتر",
      howToBuildCoverLetter: "چگونه کاور لتر بسازیم",

      resumeBuilder: "رزومه ساز",
      ResumeSmaple: " نمونه های رزومه",
      howToBuildResume: "چگونه رزومه را بسازیم",

      //heading transleting
      Buildresumeforfree: "روزمه خود را به صورت معیاری بسازید",
      createResumeDisc:
        "رزومه خودرا بسیار اسان با رزومه ساز وقالب های متونع ما به صورت معیاری  ورایگان بسازید",
      createResume: "ایجاد رزومه",

      //Footer
      Links: "لینک ها",
      ResumeTemplets: "قالب های رزومه",
      CvTempletes: "قالب های کاور لتز",

      CoverLetters: "کاور لتر ها",
      Resume: "رزومه",
      TypeEmail:'ای میل خودرا تایپ کنید..',

      /// learn section footer

      Learn: "اموزش",
      ClearBlog: "بلاگری",
      Howtowritearesume: " چگونه رزونه بسازیم",
      Howtowritecv: " چگونه سی وی بسازیم",
      ResumeExamples: "مثال های رزومه",
      CoverletterExamples: "مثال های کاور لتر",

      //Oter
      Other: "سایر",
      Pricing: "قیمت گذاری",
      AboutUs: "در باره ما",
      EbookHowtogetajobin2023:"چگونه یک وظیفه بگیریم در 2023",
      MediaKit: "رسانه گیت",
      HelpCenter: "راهنماه",

      //News letter sign up
      Newslettersignup:'عضویت در خبر نامه',
        
        submit:'ارسال',
        EnterYourEmail:'ای میل خودرا وارد کنید',
        send:'ارسال',


         //testomonial
      testimonialTitle :".کاربران ما در بهترین شرکت های جهان استخدام شده اند",

      //copy right footer
      copyRightFooter:'Copyright © 2023 است resume.af تمام حقوق مادی ومعنوی این سایت متعلق به ',

      //Contact pages
      contactTitle:'تماس',
      contactDesc:'نظر دارید,سوال,فیدبک برای اشتراک گذاری؟ تیم ما علاقه مند که مشکلات شما بیشنود.از طریق فورم زیر برای ما پیام ارسال کنید',
      Address:'آدرس',
      addressPath:'افغانستان,کندهار,',
      CallCenter:'شماره تماس:079727737',
      Name:'نام',
      Email:'ای میل',
      
      Messege:'پیام',
      FullNameForInput:'نام کامل...',
      EmailForInput:'ای میل..',
      TypeHere:'اینجا تایپ کنید..',
      FindGoogle:'در گوگل ما را پیدا کنید..',
  

        //card templates sample
        chooseTemplates:' .از قالب های زیر یکی رو لطفا انتخاب کنید',
        CreativeResumeTemplate:'ایجاد قالب خلاقانه',
        Aresumetemplateascreativeas:'تصور کنید و قالب رزومه خود را خلاقه بسازید',
  
        //second card tamplete sample in hoome
        ProfessionalResumetemplate:'قالب رزومه حرفوی',
        Putyourbestfootforward:'قدم خودرا به طرف یک رزومه حرفوی بردارید',
  
        //third
        CollegeResumeTemplate:'قالب رزومه کالج',
        NoexperienceNo:'بدون کدام تجربه کاری؟ یا کدام مشکل!',
        

        //swiper 
        HowtoBuildResume:'چگونه رزومه بسازیم',
        clickHereFor:'...برای مطالعه بیشتر اینجا کلیک کنید',
         views:'مشاهده ',
         hourAgo:'یک ساعت پیش',




  
    },
  };




  const translate = (key) => {
    return translation[language][key] || key;
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider value={{ translate, changeLanguage,language }}>
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationProvider };

export default TranslationContext;
