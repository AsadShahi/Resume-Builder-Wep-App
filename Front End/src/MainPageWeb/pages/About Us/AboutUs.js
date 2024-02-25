import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Row, Col, Container } from "react-bootstrap";
import "./about.css";
import { TranslationProvider } from "../../components/Locales/TranslationContext";

export default function AboutUs() {
  return (
    <TranslationProvider>
      <Navbar></Navbar>

      <Container className="mb-5">
        <Row className=" first-about mt-5" md={2} lg={2} sm={1}>
          <Col>
            <h1 className="about-title mt-5">ABOUT US</h1>

            <p className="about-slogan">
              “Our mission is to help job seekers grow careers. We love helping
              people stand out in their job search and get hired faster.”
            </p>
          </Col>
        </Row>

        <Row md={2} lg={2} sm={1} className="about mt-5 mb-5">
          <Col>
            <h2 className="mt-5">Few Details</h2>
            <h4>
              At Resume.io, we believe that building a job-worthy resume should
              be a fast and simple process. In fact, we’ve always been about
              building systems that are quick and easy-to-use, yet consistently
              get good results.
            </h4>

            <p className="text-about">
              It all started in 2012, when we launched a small web app that
              built online documents such as cancellation letters and basic
              resumes. A couple months after launching we noticed a strange
              trend; most people were visiting our site just to build resumes.
              In an effort to deliver more value to our users, we decided to
              specialize in just resume-building. Knowing that hiring managers
              nowadays are stricter than ever; we devoted countless hours to
              studying job-winning resumes, getting resume templates critiqued
              by experts and testing our resume content through the grueling
              process of trial & error. The result? We figured out that building
              a job-winning resume is a science, not art. We learned there’s an
              exact structure and set of ‘resume rules’ that hiring managers
              respond to when it comes to calling back applicants. Since then,
              we launched Resume.io, which uses these exact job-winning resume
              structures and ‘resume rules’ to give you the edge over your
              competition so you get hired faster. Up to now, we’ve helped over
              15,000,000 people successfully build job-winning resumes, as well
              as helping countless others win jobs at elite companies such as
              PWC, BMW and T-Mobile.
            </p>
          </Col>

          <Col className="right-about mt-5" md={2}>
            <h1 className="title-num">30,194,172</h1>
            <p>Resumes built</p>

            <h1 className="title-num">58,337</h1>
            <p>Signups a day</p>
          </Col>
        </Row>

        <Row className="about-team">
          <Col>
            <h2>The Team</h2>

            <p>
              We have always believed that co-creation with users and recruiters
              is the key to our success. By soliciting the feedback of both
              groups, we ensure that users' and recruiters' needs continually
              align with our products. Not only does this allow us to improve
              the current application, but it has led to several ideas for
              additional products and services.
            </p>
          </Col>
        </Row>

        <Row md={2} lg={2} sm={1}>
          <Col>
            <div className="about-personal">
              <div className="prof-about">
                <img className="prof-about-img" src="/images/profile.jpg"></img>

                <div className="prof-title">
                  <h2>Sharif</h2>
                  <p>Social Media Copywriter</p>
                </div>
              </div>

              <div className="details">
                <p>
                  „Many people wonder why this Transylvanian is awake at night…
                  All we know is that by dawn, he disappeared, leaving behind
                  only an empty coffee mug and mysterious new updates.”
                </p>
              </div>
            </div>

            <div className="about-personal">
              <div className="prof-about">
                <img className="prof-about-img" src="/images/profile.jpg"></img>

                <div className="prof-title">
                  <h2>Amin Bomani</h2>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>

              <div className="details">
                <p>
                  „Many people wonder why this Transylvanian is awake at night…
                  All we know is that by dawn, he disappeared, leaving behind
                  only an empty coffee mug and mysterious new updates.”
                </p>
              </div>
            </div>

            <div className="about-personal">
              <div className="prof-about">
                <img className="prof-about-img" src="/images/younus.jpg"></img>

                <div className="prof-title">
                  <h2>Zikrya Mirzaie</h2>
                  <p>Customer Support Associate</p>
                </div>
              </div>

              <div className="details">
                <p>
                  „An avid marketer, researcher, and bookworm at heart. He loves
                  reading biographies of great people and running as a form of
                  meditation.”
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="about-personal">
              <div className="prof-about">
                <img className="prof-about-img" src="/images/Sharifullah.jpg"></img>

                <div className="prof-title">
                  <h2>Younos Naseri</h2>
                  <p>Junior Developer</p>
                </div>
              </div>

              <div className="details">
                <p>
                  „A badass visual designer who never misses a chance to throw
                  in some nerdy PUNchlines during creative meetings. Besides his
                  undying love for Star Wars, he cares about the environment and
                  sustainability.”
                </p>
              </div>
            </div>
            <div className="about-personal">
              <div className="prof-about">
                <img className="prof-about-img" src="/images/amin.jpg"></img>

                <div className="prof-title">
                  <h2>Ahmad Mohammadi</h2>
                  <p>Creative Director</p>
                </div>
              </div>

              <div className="details">
                <p>
                  „After falling in love with MS.Paint at the age of 7, he has
                  moved on to other programs such as Illustrator, Cinema 4D, and
                  Kerbal Space Program. Creativity through software is his
                  thing.”
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </TranslationProvider>
  );
}
