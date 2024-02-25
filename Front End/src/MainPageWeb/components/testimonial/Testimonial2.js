import React, { useContext, useState, useEffect } from "react";
import "./Testimonial2.css";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import TranslationContext, {
  TranslationProvider,
} from "../Locales/TranslationContext";
import { Translate } from "@material-ui/icons";
import { test } from "html-docx-js/dist/html-docx";

export default function Testimonial2() {
  const [showMore, isShowMore] = useState(false);
  const { translate } = useContext(TranslationContext);
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/admin/test-index").then((res) => {
      setTestimonial(res.data.test);
      
    });
  }, []);

  const showMoreText = () => {
    isShowMore(true);
    setTimeout(() => {
      isShowMore(false);
    }, 4000);
  };

  return (
    <TranslationProvider>
      <div className="  testimonial mt-5" >
        <header className="user-header">
          <h2>{translate("testimonialTitle")}</h2>
          <span className="underline n-bg-c"></span>
        </header>

        <div className=" container user-container">
          <div className="userCardList">
            <Row>
              <Col>
                {testimonial.length > 0 &&
                  testimonial.map((test) => (
                    <div className="userCard">
                      <header className="header-card">
                        <figure>
                          <img
                            className="user-img"
                            loading="lazy"
                            alt="Brandon Klein"
                            src="/images/profile.jpg"
                          />
                        </figure>
                        <div className="userRole">
                          <h3 className="userName">AsadShahi</h3>
                          <p>{test.test_title}</p>
                        </div>
                      </header>
                      <div className="user-card-body">
                        <p className="userDescription"> {test.test_body}</p>
                        <p
                          className="expand-description"
                          onClick={() => showMoreText(true)}
                        >
                          Show More...
                        </p>

                        {showMore && (
                          <p>
                            {" "}
                            Even better, the $16 you pay for the month doesn't
                            auto-renew!{" "}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                
              </Col>




   {/* static */}
              <Col>
                <div className="userCard">
                  <header className="header-card">
                    <figure>
                      <img
                        className="user-img"
                        loading="lazy"
                        alt="Linn Mollberg"
                        src="/images/Sharifullah.jpg"
                      />
                    </figure>
                    <div className="userRole">
                      <h3 className="userName">Sharifullah AminYawari </h3>
                      <p>Junior Marketing Assistant</p>
                    </div>
                  </header>
                  <div className="user-card-body">
                    <p className="userDescription">
                      With sleek designs and an easy to use online tool,
                      Novorésumé allowed me to quickly build and edit a
                      professional resume with a personal touch, which
                      ultimately helped me to get my dream job. I am now
                      relocating to Barcelona to work for a top tier company.
                    </p>
                    <p
                      className="expand-description"
                      onClick={() => showMoreText()}
                    >
                      Show More...
                    </p>
                    {showMore && (
                      <p>
                        {" "}
                        I strongly recommend Novorésumé’s Resume and Cover
                        Letter editor to all job seekers out there.{" "}
                      </p>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </TranslationProvider>
  );
}
