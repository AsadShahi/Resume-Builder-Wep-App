import React from "react";
import './resumeBuilderFAQ.css'
import { Row, Col } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { TranslationProvider } from "../Locales/TranslationContext";
export default function ResumeBuilderFAQ() {
  return (
    <div>
      <TranslationProvider>

          <Navbar></Navbar>
          
          <Header></Header>


     
      <div className="faqs">
      <Row md={2} sm={1} lg={3}>
        <Col><img className="img-faq" src="/images/carton1.png"/></Col>
        <Col>
          <div className="container-resume-faq">
          <h2 className="Faq-Title">Resume Builder FAQ</h2> <hr />
          <div>
            <h3>Why should I use a resume builder?</h3>

            <p>
              Using a resume builder makes the process of creating a resume
              significantly faster and easier. Ever tried building your resume
              with Word? The whole process is a huge pain – you make a TINY
              change to your resume, and the entire resume layout gets
              completely messed up. With a resume builder, you don’t have to
              worry about the nitty gritty of resume creation, like font
              selection, layout, formatting, etc. All you have to do is pick a
              resume template, fill it in, and then you’re ready to start
              applying for jobs!
            </p>
          </div>
          </div>
        </Col>

        <Col></Col>
      </Row>

      <Row md={3} sm={1} lg={3}>
      <Col></Col>
        <Col>
          <div className="container-resume-faq">
            <h3>What is the best resume builder?</h3>

            <p>
              Over the past 7 years, we’ve been working hard to make Novorésumé
              the best resume builder out there. And we’d say we succeeded!
              Here’s what sets us apart from the rest of the competition:
            </p>
            <ul>
              <li>
                Easy to Use - Our builder is very easy to use, even if you're
                not too tech-friendly.
              </li>
              <li>
                Get Started in under 5 Minutes - Just pick one of our resume
                templates, and you're good to go!
              </li>
              <li>
                It's 100% free - Some resume builders out there pretend to be
                free… and then they hit you with a paywall once you’re done
                writing your resume! We don’t do that. Our builder will
                instantly notify you if you’re using any of our premium
                features.
              </li>
              <li>
                Cover Letter Builder - If you’re using Novorésumé Premium, you
                gain access to our cover letter builder for free (including
                matching cover letter templates).
              </li>
              <li>
                Tons of Customization and Design Options - Our builder offers a
                ton of customization. You can make changes to the layout, color
                schemes, and much more.
              </li>
              <li>
                ATS-Friendly Resume Templates - Our resume templates are built
                on top of some of the most popular applicant tracking systems
                out there. Meaning, your resume won't automatically get rejected
                by any ATS.
              </li>
            </ul>
          </div>
        </Col>

        <Col><img className="img-faq" src="/images/carton3.png"/></Col>
      </Row>

      <Row md={2} sm={1} lg={3} >
      <Col><img className="img-faq" src="/images/carton1.png"/></Col>
        <Col>
          <div className="container-resume-faq">
            <h3>Is this a completely free resume builder?</h3>

            <p>
              Yes, Novorésumé is a 100% free resume builder. If you’re on a
              budget, you can use it to create your resume completely free of
              charge. And no, unlike some other resume builders out there, we
              don’t hit you with a paywall once you’ve completed your resume. If
              you use any of our premium features, the software will let you
              know about it. It will then ask if you did it accidentally, or if
              you would like to upgrade to Novorésumé Premium. You're in
              control!
            </p>
          </div>
        </Col>

        <Col></Col>
      </Row>

      <Row md={2} sm={1} lg={3}>
      <Col></Col>
        <Col>
          <div className="container-resume-faq">
            <h3>What is a resume?</h3>

            <p>
              A resume (also known as a CV, or curriculum vitae) is a 1-2 page
              document that summarizes your work experience and career history.
            </p>
            <ul>
              <h4>It usually includes information about the following:</h4>
              <li>Your work history</li>
              <li>Educational background</li>
              <li>Achievements</li>
              <li>Contact information</li>
              <li>Resume summary or resume objective</li>
            </ul>
          </div>
        </Col>
        <Col><img className="img-faq" src="/images/carton2.png"/></Col>

       
      </Row>

      <Row md={2} sm={1} lg={3}>
      <Col><img className="img-faq" src="/images/carton3.png"/> </Col>
        <Col>
          <div className="container-resume-faq">
            <h3>What's the difference between a CV and a resume?</h3>

            <p>
              In the EU, the words "CV" and "resume" are used interchangeably In
              the United States, however, a resume is a document you use to
              apply for jobs, while a CV is mainly used by academics. Want to
              learn more? Check out our article on the differences between CVs
              and resumes.
            </p>
          </div>
        </Col>

        <Col></Col>
      </Row>
      </div>
    
      <Footer/>
      </TranslationProvider>
    </div>
  );
}
