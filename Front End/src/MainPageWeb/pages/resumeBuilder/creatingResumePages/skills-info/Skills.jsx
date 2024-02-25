import { Row, Col, ProgressBar } from "react-bootstrap";

import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../ResumeStyle.css";
import { useNavigate } from "react-router-dom";
import { InputAdornment, IconButton } from "@material-ui/core";
import {GiSkills} from 'react-icons/gi';
//language form
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";

import Stack from "@mui/material/Stack";
import { FormControl, FormLabel, FilledInput, Button } from "@mui/material";

export default function Skills() {
  const [progressPercentage, setProgressPercentage] = useState(80);
  const [inputValues, setInputValues] = useState({});

  const user_ID = localStorage.getItem("user_ID"); //get user id from local storage

  const navigate = useNavigate();

  const [skills, setSkills] = useState([
    {
      skill: "",
      level: "",
    },
  ]);

  const handleForm = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index] = {
      ...newSkills[index],
      [field]: value,
    };
    setSkills(newSkills);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const requestData = {
      user_id: user_ID,
      skills: skills,
    };

    console.log(requestData);

    axios
      .post("http://localhost:8000/api/admin/skills-create", requestData)
      .then((res) => {
        
        navigate("/social-links");
        const newProgressPercentage = ((skills.length + 1) / 10) * 100;
        setProgressPercentage(newProgressPercentage);
        console.log(requestData);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputValues(error.response.data.message);
          }
          if (error.response.status === 500) {
            // handle server error
          }
        }
      });
  };

  const handleAddMore = () => {
    setSkills((prevState) => [
      ...prevState,
      {
        skill: "",
        level: "",
      },
    ]);
  };

  const handleRemoveField = (index) => {
    setSkills((prevState) => {
      const newData = [...prevState];
      newData.splice(index, 1);

      return newData;
    });
  };

  return (
    <div className="container-fliud bg-backround-forms">
      <div className="container" style={{ alignItems: "center" }}>
        <Typography className="type" color="" variant="h3">
          Skills
        </Typography>

        {/* progress bar */}
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

        <form onSubmit={submitForm} className="forms-pers">
          {skills.map((skill, index) => (
            <>
              <div className="displa-flex" key={index}>
                <Row md={2} sm={1} lg={2}>
                  <Col>
                    <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                      <FormLabel>+ Skills a.s</FormLabel>

                      <FilledInput
                        type="text"
                        value={skill.skill}
                        name="skills"
                        onChange={(e) =>
                          handleForm(index, "skill", e.target.value)
                        }
                        className="input-form"
                        placeholder="e.g.Skills"

                        endDecorator={<GiSkills/>}
                      />
                    </FormControl>
                  </Col>

                  <Col>
                    <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                      <FormLabel>Level</FormLabel>
                      <FilledInput
                        value={skill.level}
                        required
                        fullWidth
                        name="level"
                        id={`Score-${index}`}
                        className="input-form"
                        placeholder="Score or level"
                        type="text"
                        onChange={(e) =>
                          handleForm(index, "level", e.target.value)
                        }
                      />
                    </FormControl>
                  </Col>
                </Row>
              </div>
            </>
          ))}

          <div className="d-flex">
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                style={{ marginRight: "10px" }}
              >
                Next
              </Button>
              <Button type="reset" variant="outlined">
                reset
              </Button>
              <Button
                onClick={handleAddMore}
                variant="outlined"
                startDecorator={<Add />}
              >
                Add More Lang
              </Button>
              {skills.length > 1 && (
                <Button
                  variant="outlined"
                  onClick={() => handleRemoveField(skills.index)}
                  style={{ color: "red" }}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              )}
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}
