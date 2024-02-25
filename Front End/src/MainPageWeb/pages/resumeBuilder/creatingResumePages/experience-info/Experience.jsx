import { Button, Card, CardContent, Grid, TextField } from "@material-ui/core";
import { Stack, Typography } from "@mui/material";

import React from "react";
import axios from "axios";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";
import "../ResumeStyle.css";
import { useNavigate } from "react-router-dom";
export default function Experience() {
  const [progressPercentage, setProgressPercentage] = useState(20);

  const [inputValues, setInputError] = useState({});

  const user_ID = localStorage.getItem("user_ID");
  const navigate = useNavigate();

  const [experience, setExperience] = useState([
    {
      jobtitle: "",
      role: "",
      start_date: "",
      end_date: "",
      country: "",
      city: "",
      state: "",
      info: "",
    },
  ]);

  const handleFormChange = (index, name, value) => {
    setExperience((prevState) => {
      const updateForms = [...prevState];
      updateForms[index] = { ...prevState[index], [name]: value }; //index show wich object shoud update

      return updateForms;
    });
  };

  const sendFormExperience = (event) => {
    event.preventDefault();

    const requestData = {
      user_id: user_ID,
      experienceData: experience,
    };
    console.log(requestData);
    axios
      .post("http://localhost:8000/api/admin/experience-create", requestData)
      .then((res) => {
        navigate("/edu-info");
        const newProgressPercentage = ((requestData.length + 1) / 10) * 100;
        setProgressPercentage(newProgressPercentage);
        console.log(requestData);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputError(error.response.data.message);
            // setLoading(false)
          }
          if (error.response.status === 500) {
            // setLoading(false)
          }
        }
      });
  };

  const handleAddMore = () => {
    setExperience((prevState) => [
      ...prevState,
      {
        jobtitle: "",
        role: "",
        start_date: "",
        end_date: "",
        country: "",
        city: "",
        state: "",
        info: "",
      },
    ]);
  };

  const handleRemoveField = (index) => {
    setExperience((prevState) => {
      const newData = [...prevState];
      newData.splice(index, 1);
      return newData;
    });
  };

  console.log(experience);

  return (
    <div className="container-fliud bg-backround-forms">
      <div className="experience container">
        <Typography className="type" color="" variant="h3">
          Experience information
        </Typography>

        <div className="progresses">
          <p>
            <span className="progress-num">{progressPercentage}%</span>Score
          </p>

          <div className="progress-line-first">
            <div
              className="progress-line-second"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="personal" style={{ flexDirection: "column" }}>
          {experience.map((exp, index) => (
            <form onSubmit={sendFormExperience} className="forms-pers">
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Job Title"
                    placeholder="Job Title"
                    variant="filled"
                    name="jobtitle"
                    onChange={(e) =>
                      handleFormChange(index, e.target.name, e.target.value)
                    }
                    value={exp.jobtitle}
                    fullWidth
                    required
                  />

                  <span className="text-danger">{inputValues.jobtitle}</span>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    name="role"
                    value={exp.role}
                    label="Role "
                    variant="filled"
                    onChange={(e) =>
                      handleFormChange(index, e.target.name, e.target.value)
                    }
                    fullWidth
                    required
                  />
                  <span className="text-danger">{inputValues.role}</span>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Start Date"
                    name="start_date"
                    value={exp.start_date}
                    onChange={(e) =>
                      handleFormChange(index, e.target.name, e.target.value)
                    }
                    type="text"
                    variant="filled"
                    fullWidth
                    required
                  />
                  <span className="text-danger">{inputValues.start_date}</span>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="End Date.."
                    name="end_date"
                    value={exp.end_date}
                    onChange={(e) =>
                      handleFormChange(index, e.target.name, e.target.value)
                    }
                    type="text"
                    variant="filled"
                    fullWidth
                    required
                  />

                  <span className="text-danger">{inputValues.end_date}</span>
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    label="country"
                    name="country"
                    value={exp.country}
                    onChange={(e) =>
                      handleFormChange(index, e.target.name, e.target.value)
                    }
                    type="text"
                    variant="filled"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    label="City"
                    type="text"
                    name="city"
                    value={exp.city}
                    onChange={(e) =>
                      handleFormChange(index, e.target.name, e.target.value)
                    }
                    variant="filled"
                    fullWidth
                    required
                  />
                  <span className="text-danger">{inputValues.city}</span>
                </Grid>
                <Grid xs={60} sm={6} style={{ width: "100%" }} item>
                  <TextField
                    label="State"
                    name="state"
                    value={exp.state}
                    onChange={(e) =>
                      handleFormChange(index, e.target.name, e.target.value)
                    }
                    variant="filled"
                    fullWidth
                    required
                  />
                  <span className="text-danger">{inputValues.state}</span>
                </Grid>
                <Grid xs={12} sm={12} lg={6} item>
                  <TextField
                    label="Work info"
                    variant="filled"
                    fullWidth
                    required
                    name="info"
                    value={exp.info}
                    onChange={(e) =>
                      handleFormChange(index, e.target.name, e.target.value)
                    }
                    multiline
                    rows={5}
                  />
                  <span className="text-danger">{inputValues.info}</span>
                </Grid>
                {index === experience.length - 1 && (
                  <Grid item className="mt-5  pers-btns">
                    <Stack direction="row" spacing={2}>
                      <Button
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                        variant="contained"
                        color="primary"
                        className="btn-pers"
                        type="submit"
                      >
                        Save
                      </Button>

                      <Button
                        variant="outlined"
                        color="primary"
                        className="btn-pers"
                        type="reset"
                      >
                        Reset
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        className="btn-pers"
                        onClick={handleAddMore}
                        type="reset"
                      >
                        AddMore
                      </Button>
                      {experience.length > 1 && (
                        <Button
                          variant="outlined"
                          onClick={() => handleRemoveField(index)}
                          style={{ color: "red" }}
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      )}
                    </Stack>
                  </Grid>
                )}
              </Grid>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}
