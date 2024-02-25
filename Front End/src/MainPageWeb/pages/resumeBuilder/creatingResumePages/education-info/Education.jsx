//second
import {
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { InputAdornment, IconButton } from "@material-ui/core";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import { FaUniversity } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { BsFlag } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";

import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { useNavigate, useNavigation } from "react-router-dom";
import "../ResumeStyle.css";
import "./Education.css";

import useAuthContext from "../../../../../Auth/context/AuthContext";

const TypographyStyle = {
  backgroundColor: "gray",
};
const ButtonStyle = {
  border: "1px solid red",
};

export default function Education() {
  //progress bar
  const [progressPercentage, setProgressPercentage] = useState(40);
  
  const navigate = useNavigate();
  const [inputValue, setInputError] = useState({});
  
  const user_ID = localStorage.getItem("user_ID");
  const [educationData, setEducationData] = useState([
    {
      school: "",
      field: "",
      graduationDate: "",
      city: "",
      state: "",
      country: "",
      info: "",
    },
  ]);


  const handleFormChange = (index, name, value) => {
    setEducationData((prevState) => {
      const updatedForms = [...prevState];
      updatedForms[index] = { ...prevState[index], [name]: value };
      return updatedForms;
    });
  };

  const SendEducationForm = (event) => {
    event.preventDefault();

    const requestData = {
      user_id: user_ID,
      education: educationData,
    };

    console.log(requestData);
    
     axios.post("http://localhost:8000/api/admin/education-create", requestData)
      .then((response) => {
        navigate("/interest");
        // Update progressPercentage accordingly
      })


      .catch((error) => {
        if (error.response) {
          if (error.response.status === 422) {
            setInputError(error.response.data.message);
          }
          if (error.response.status === 500) {
            // Handle server error
          }
        }
      });

    console.log("from Request:" + requestData);
  };

  const handleAddMore = () => {
    setEducationData((prevState) => [
      ...prevState,
      {
        school: "",
        field: "",
        graduationDate: "",
        city: "",
        state: "",
        country: "",
        info: "",
      },
    ]);

  };

  console.log(educationData);

  const handleRemoveField = (index) => {
    setEducationData((prevState) => {
      const newData = [...prevState];
      newData.splice(index, 2);

      return newData;
    });
  };

  return (
    <div className="container-fliud  bg-backround-forms">
      <div className="education container" >
        <Typography className="type" color="" variant="h3">
          Education information
        </Typography>
        {/* progress bar */}
        <div className="progresses">
          <p>
            <span className="progress-num">{progressPercentage}%</span>Score
          </p>

          <div className="progress-line-first ">
            <div
              className="progress-line-second"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <Card style={{ width: "100%", margin: "0 auto" }}>
          <div className="personal"></div>

          {educationData.map((edu, index) => (
            <form
              onSubmit={SendEducationForm}
              className="forms-pers"
              key={index}
            >
              <CardContent>
                <Grid container spacing={1} key={index}>
                  <Grid xs={12} sm={6} item>
         

                    <TextField
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton>
                              <FaUniversity />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      label="School Name"
                      placeholder="School Name"
                      variant="filled"
                      name="school"
                      value={edu.school}
                      onChange={(e) =>
                        handleFormChange(index, e.target.name, e.target.value)
                      }
                      fullWidth
                      required
                    />
                    <span className="text-danger">{inputValue.school}</span>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      label="Feild of Study"
                      placeholder="Feild of Study"
                      variant="filled"
                      name="field"
                      value={edu.field}
                      onChange={(e) =>
                        handleFormChange(index, e.target.name, e.target.value)
                      }
                      fullWidth
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" className="bg-light">
                            <IconButton>
                              <SchoolOutlinedIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <span className="text-danger">{inputValue.field}</span>
                  </Grid>
                  <Grid xs={12} sm={12} item>
                    <TextField
                      // label='Graduation Date' BsCalendarDate
                      placeholder="Graduation Date"
                      variant="filled"
                      type="date"
                      name="graduationDate"
                      value={edu.graduationDate}
                      onChange={(e) =>
                        handleFormChange(index, e.target.name, e.target.value)
                      }
                      fullWidth
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton>
                              <BsCalendarDate />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <span className="text-danger">
                      {inputValue.graduationDate}
                    </span>
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <TextField
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton>
                              <BsFlag />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      label="Country"
                      placeholder="Country"
                      variant="filled"
                      name="country"
                      value={edu.country}
                      onChange={(e) =>
                        handleFormChange(index, e.target.name, e.target.value)
                      }
                      fullWidth
                      required
                    />
                    <span className="text-danger">{inputValue.country}</span>
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <TextField
                      label="City "
                      placeholder="City "
                      variant="filled"
                      name="city"
                      value={edu.city}
                      onChange={(e) =>
                        handleFormChange(index, e.target.name, e.target.value)
                      }
                      fullWidth
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton>
                              <FaCity />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <span className="text-danger">{inputValue.city}</span>
                  </Grid>
                  <Grid xs={60} sm={6} style={{ width: "100%" }} item>
                    <TextField
                      label="State"
                      placeholder="State"
                      variant="filled"
                      name="state"
                      value={edu.state}
                      onChange={(e) =>
                        handleFormChange(index, e.target.name, e.target.value)
                      }
                      fullWidth
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton>
                              <MdRealEstateAgent />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <span className="text-danger">{inputValue.state}</span>
                  </Grid>

                  <Grid xs={12} sm={12} lg={6} item>
                    <TextField
                      label="Summary"
                      placeholder="Discreption..."
                      variant="outlined"
                      name="info"
                      value={edu.info}
                      onChange={(e) =>
                        handleFormChange(index, e.target.name, e.target.value)
                      }
                      multiline
                      rows={6}
                      fullWidth
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton>
                              <BiMessageAltDetail />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <span className="text-danger">{inputValue.info}</span>
                  </Grid>
                </Grid>
              </CardContent>
              {index === educationData.length - 1 && (
                <div className="d-flex">
                    <Stack direction="row" spacing={2}>


                   
                  <Button
                    type="submit"
                    variant="primary"
                    className="btn-edu"
                    style={{ marginRight: "10px" }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="primary"
                    color="primary"
                    className="btn-pers"
                    type="reset"
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={handleAddMore}
                    className="btn-edu"
                    variant="primary"
                  >
                    Add More
                  </Button>
                  {educationData.length > 1 && (
                   <Button
                   variant="outlined"
                   onClick={() => handleRemoveField(index)}
                   style={{ backgroundColor: "red" }}
                   startIcon={<DeleteIcon  />}
                 >

                   Delete
                 </Button>
                  )}
                   </Stack>
                </div>
              )}
            </form>
          ))}
        </Card>
      </div>
    </div>
  );
}
