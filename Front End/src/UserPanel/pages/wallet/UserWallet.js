import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { Row, Col } from "react-bootstrap";
import "./userWallet.css";

export default function UserWallet() {
  return (
    <div className="container-fluid">
      <div className="features mt-5">
        <Row md={2} lg={2} sm={1} className="features-rows" >
          <Col style={{width:'100%'}} >
            <div className="featuresItem mb-3">
              <span className="featureTitle"><strong>Ammount</strong></span>
              <div className="featureContainer">
                <span className="featureMoney">2300AFN</span>

                <span className="featureRate">
                  Present <ArrowUpwardOutlinedIcon className="featureIcon" />
                </span>
              </div>
              <span className="featureSub">Total Money in your wallet</span>
            </div>
          </Col>

          <Row md={2} lg={2} sm={1} className="container">
            <div className="user-botum-columns container ">
              <Col >
                <div className="featuresItem">
                  <span className="featureTitle">CoverLatter</span>
                  <div className="featureContainer">
                    <span className="featureMoney">300AFN</span>
                    <span className="featureRate">
                      1item{" "}
                      <ArrowDownwardOutlinedIcon className="featureIcon negative " />
                    </span>
                  </div>
                  <span className="featureSub">Total of cover letter</span>
                </div>
              </Col>
              <Col >
                {" "}
                <div className="featuresItem">
                  <span className="featureTitle">Resume</span>
                  <div className="featureContainer">
                    <span className="featureMoney">2900AFN</span>
                    <span className="featureRate">
                      4Item <ArrowUpwardOutlinedIcon className="featureIcon" />
                    </span>
                  </div>
                  <span className="featureSub">Total That you made resume</span>
                </div>
              </Col>
            </div>
          </Row>


        </Row>
      </div>
    </div>
  );
}
