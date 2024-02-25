import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import './CreateCoverLatter.css';
import Navbar from "../../components/navbar/Navbar";
import { Container, FormControl, FilledInput, FormLabel } from "@mui/material";

import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import axios from "axios";
import Loading from "../../components/Loading";



export default function CreateCoverLatter() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cover, setCover] = useState({
    fullname: "",
    email: "",
    jobtitle: "",
    phone: "",
    company: "",
    coverdetails: "",
  });
  const handleForm = (e) => {
    e.persist();
    setCover({ ...cover, [e.target.name]: e.target.value });
  };
  const SubmitCoverForm = (event) => {
    event.preventDefault();
    setLoading(true);
    const Data = {
      fullname: cover.fullname,
      email: cover.email,
      jobtitle: cover.jobtitle,
      phone: cover.phone,
      company: cover.company,
      coverdetails: cover.coverdetails,
    };
    console.log(Data);
    axios
      .post("http://localhost:8000/api/admin/cover-create", Data)
      .then((res) => {
        console.log(res.data.message);
        setLoading(false);
        navigate("/download/cover");
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setLoading(false);
            // setInputErrors(.)
            alert("Error is detected!!!");
          }
          if (error.response.status === 500) {
            setLoading(false);
            // alert()
          }
        }
      });
  };
  if (loading) {
    <Loading />;
  }
  return (
    <div>
    

    <Navbar />
    <section className="container mt-5 mb-5 coverLatter">
      <Typography gutterBottom variant="h3" className="mt-5" color="info">
        Create Cover Letter
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={SubmitCoverForm}>
            <Grid container spacing={12} className="mb-2">
              <Row md={2} sm={1} lg={2} style={{}}>
                <Col>
                  <Grid item style={{ padding: "3px" }}>
                    <TextField
                      placeholder="Full Name"
                      label="FullName"
                      variant="filled"
                      name="fullname"
                      value={cover.fullname}
                      onChange={handleForm}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item style={{ padding: "3px" }}>
                    <TextField
                      placeholder="Email Address"
                      label="Email Address"
                      variant="filled"
                      name="email"
                      value={cover.email}
                      onChange={handleForm}
                      fullWidth
                      required
                    />
                  </Grid>
                </Col>

                <Col>
                  {" "}
                  <Grid item style={{ width: "700px", padding: "3px" }}>
                    <TextField
                      placeholder="Job Title"
                      label="Job Title"
                      variant="filled"
                      name="jobtitle"
                      value={cover.jobtitle}
                      onChange={handleForm}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item style={{ width: "700px", padding: "3px" }}>
                    <TextField
                      placeholder="Phone Number "
                      label="Phone Number "
                      variant="filled"
                      name="phone"
                      value={cover.phone}
                      onChange={handleForm}
                      fullWidth
                      required
                    />
                  </Grid>
                </Col>


                



              <Col >
                  {" "}
                  <Grid item style={{ width:'100%',padding: "3px"  }}>
                    <TextField
                      placeholder="Company Name"
                      label="Company Name"
                      variant="filled"
                      name="company"
                      value={cover.company}
                      onChange={handleForm}
                      fullWidth
                      required
                    />
                  </Grid>
                 
                
                  
                  <Stack spacing={3}>
                    <div className="contact-text-area">
                      <FormLabel>Discription</FormLabel>
                      <Textarea
                          name="coverdetails"
                          value={cover.coverdetails}
                          onChange={handleForm}
                          fullWidth
                          required
                        minRows={6}
                        placeholder="Type in here…"
                        variant="soft"
                        sx={{
                          borderBottom: "2px solid",
                          borderColor: "neutral.outlinedBorder",
                          borderRadius: 0,
                          "&:hover": {
                            borderColor: "neutral.outlinedHoverBorder",
                          },
                          "&::before": {
                            border:
                              "1px solid var(--Textarea-focusedHighlight)",
                            transform: "scaleX(0)",
                            left: 0,
                            right: "10px",
                            bottom: "-2px",
                            top: "unset",
                            transition:
                              "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                            borderRadius: 0,
                          },
                          "&:focus-within::before": {
                            transform: "scaleX(1)",
                          },
                        }}
                      />
                   
                    </div>
                  </Stack>

                
              
                </Col>
              
              </Row>
          



                

              













            

            </Grid>{" "}
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </section>
    </div>
  );
}
