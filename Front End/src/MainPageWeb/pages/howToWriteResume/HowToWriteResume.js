import React from "react";
import './HowToWriteResume.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { TranslationProvider } from "../../components/Locales/TranslationContext";

import {Row,Col,Container} from 'react-bootstrap'

export default function HowToWriteResume() {
  return (
    <TranslationProvider>
      <Navbar />

      <Container className="howToWriteResume mt-5 mb-5">
        <Row className="howToWriteResume  mb-5">
          <Col className="mt-5">
          <h2>How to Make a Resume in 2023 | Beginner's Guide</h2>
            <p>
              For most job-seekers, a good resume is what stands between a dream
              job and Choice D. Get your resume right, and you’ll be getting
              replies from every other company you apply to. If your resume game
              is weak, though, you’ll end up sitting around for weeks, maybe
              even months, before you even get a single response. So you’re
              probably wondering how you can write a resume that leads to HR
              managers inviting you to interviews daily. Well, you’ve come to
              the right place! In this guide, we’re going to teach you
              everything you need to know about how to make a resume, including:
            </p>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </TranslationProvider>
  );
}
