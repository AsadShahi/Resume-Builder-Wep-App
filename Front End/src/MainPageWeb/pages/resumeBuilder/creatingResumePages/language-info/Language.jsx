import { Row, Col } from "react-bootstrap";

import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import "../ResumeStyle.css";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Add from '@mui/icons-material/Add';

import Stack from "@mui/material/Stack";

//language form

import { FormControl, FormLabel, FilledInput, Button } from "@mui/material";

export default function LanguageForm() {
  //Asadullah....

  const [progressPercentage, setProgressPercentage] = useState(100);
  const [inputValues, setInputError] = useState({});
  const navigate = useNavigate();

  const user_ID = localStorage.getItem("user_ID");

  const [languages, setLanguages] = useState([{ language: "", level: "" }]);

  const handleAddMore = () => {
    setLanguages((prevState) => [...prevState, { language: "", level: "" }]);
  };




    const handleFormChange = (index, field, value) => {
      const newLanguages = [...languages];
      newLanguages[index][field] = value;
      setLanguages(newLanguages);
    };




  const SubmitForm = (event) => {
    event.preventDefault();

    const requestData = {
      user_id: user_ID, // Get the user_id from localStorage
      languages: languages,
    };

    console.log(requestData);
    axios
      .post("http://localhost:8000/api/admin/language-create", requestData)
      .then((res) => {
        navigate("/mutipleresume"); // Redirect to the mutipleResume component
        const newProgressPercentage = ((languages.length + 1) / 10) * 100; // Use languages.length instead of data.length
        setProgressPercentage(newProgressPercentage);

        console.log(requestData);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputError(error.response.data.message);
          }
          if (error.response.status === 500) {
            // setLoading(false)
          }
        }
      });
  };

  console.log(languages);

  const handleRemoveField = (index) => {
    setLanguages((prevState) => {
      const newData = [...prevState];
      newData.splice(index, 1);

      return newData;
    });
  };
  return (
    <div className="container-fliud bg-backround-forms">
      <div className="container">
        <Typography variant="h3" className="type">
          Language
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

        {languages.map((language, index) => (
          <div className="" key={index}>
            <form onSubmit={SubmitForm} className="forms-pers w-100 ">
              <Row md={2} sm={1} lg={2}>
                <Col>
                  {" "}
                  <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                    <FormLabel>+ Language a.s</FormLabel>
                    <FilledInput
                      type="text"
                      value={language.language}
                      name="language"
                      onChange={(e) =>
                        handleFormChange(index, "language", e.target.value)
                      }
                      placeholder="e.g. English"
                    />
                  </FormControl>
                </Col>
                <Col>
                  <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                    <FormLabel>Level</FormLabel>
                    <FilledInput
                      value={language.level}
                      required
                      fullWidth
                      name="level"
                      onChange={(e) =>
                        handleFormChange(index, "level", e.target.value)
                      }
                      id={`Score-${index}`}
                      placeholder="Score or level"
                    />
                  </FormControl>
                </Col>
              </Row>

              {index === languages.length - 1 && (
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
                      <Button onClick={handleAddMore} variant="outlined" startDecorator={<Add />}>
                        Add More Lang
                      </Button>
                      {languages.length > 1 && (
                      <Button
                        variant="outlined"
                        onClick={() => handleRemoveField(index)}
                        style={{color:'red'}}
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                       )}
                    </Stack>
                 
                </div>
              )}
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
