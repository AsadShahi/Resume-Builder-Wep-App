import * as React from "react";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import "./multipleResume.css";
import { Button, useAccordionButton } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navabar from "../../../components/navbar/Navbar";

export default function MultipleResume() {
  const [spacing, setSpacing] = React.useState(2);
  const jsx = `
<Grid container spacing={${spacing}}>
`;
  let formatimage = "jpg" || "png";

  return (
    <>
      <Navabar />

      <Grid
        sx={{ flexGrow: 1 }}
        container
        id="resumesample"
        spacing={4}
        className="mt-5 mb-5 templates-sample"
      >
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            <header className="user-header">
              <h2>Choose Template to Show Your Resume</h2>
              <span class="underline n-bg-c"></span>
            </header>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
              <Grid key={value} item>
                <div className="resume-temps">
                  <img
                    src={`/images/Res-${value}.${formatimage}`}
                    style={{ width: "300px", height: "400px" }}
                  ></img>
                  <div className="btn-select">


                  {value==1&&(
                          <Link
                          underline="none"
                          variant="contained"
                          to={"/aminresume"}
                        >
                          Slecet Template
                        </Link>
                    )}
                     {value==2&&(
                          <Link
                          underline="none"
                          variant="contained"
                          to={"/asadcv"}
                        >
                           Slecet Template
                        </Link>
                    )}

                    {value==3 &&(
                          <Link
                          underline="none"
                          variant="contained"
                          to={"/ahmadcv"}
                        >
                           Slecet Template
                        </Link>
                    )}
      {value == 4 && (
                 <Link
                 underline="none"
                 variant="contained"
                 to={"/zikryaresume"}
               >
                  Slecet Template
               </Link>
                )}
                {value == 5 && (
                    <Link
                    underline="none"
                    variant="contained"
                    to={"/sharifresume"}
                  >
                     Select Template
                  </Link>
                )}{" "}
                {value == 6 && (
                  <>
                    <Link
                          underline="none"
                          variant="contained"
                          to={"/younosresume"}
                        >
                          Slecet Template
                        </Link>
                  </>
                )}
                    
                  </div>
                </div>
          
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
