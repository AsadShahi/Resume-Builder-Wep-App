import * as React from "react";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import "./TemplateSample.css";
import { Button, useAccordionButton } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import Login from '../../../Auth/Login/Login';

import TranslationContext from "../Locales/TranslationContext";

import useAuthContext from "../../../Auth/context/AuthContext";

export default function TemplateSample() {
  const { translate, language } = useContext(TranslationContext);
  const { user } = useAuthContext();

  const [showLogin, setShowLogin] = useState(false);
  const [spacing, setSpacing] = React.useState(2);

  const jsx = `
<Grid container spacing={${spacing}}>
`;
  let formatimage = "jpg" || "png";

  const showLoginComponent = () => {
    setShowLogin(true);
  };
  return (
    <Grid
      sx={{ flexGrow: 1 }}
      container
      id="resumesample"
      spacing={4}
      className="mt-5 mb-5 templates-sample"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          <header className="user-header">
            <h2>{translate("chooseTemplates")}</h2>
            <span class="underline n-bg-c"></span>
          </header>
          {[1, 2, 3].map((value) => (
            <Grid key={value} item>
              <div className="resume-temps">
                <img
                  src={`/images/Res-${value}.${formatimage}`}
                  style={{ width: "300px", height: "400px" }}
                ></img>
                <div className="btn-select">
                  
                  {/* if user is exist direct create resume if not user login first shoud be login */}
                  {user ? (
                       <Link    to={"/createResume"}>
                       {translate("createResume")}
                     </Link>
                  ) : (
                    <Link onClick={showLoginComponent}>
                      {translate("createResume")}
                    </Link>
                  )}
                </div>
              </div>
              {value == 1 && (
                <>
                  <h4>{translate("CreativeResumeTemplate")}</h4>
                  <p className="temp-desc">
                    {translate("Aresumetemplateascreativeas")}
                  </p>
                </>
              )}
              {value == 2 && (
                <>
                  <h4> {translate("ProfessionalResumetemplate")}</h4>
                  <p className="temp-desc">
                    {translate("Putyourbestfootforward")}
                  </p>
                </>
              )}{" "}
              {value == 3 && (
                <>
                  <h4> {translate("CollegeResumeTemplate")}</h4>
                  <p className="temp-desc">{translate("NoexperienceNo")}</p>
                </>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
    </Grid>
  );
}
