import { Row, Col, ProgressBar } from "react-bootstrap";

import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useMemo,useState, useEffect } from "react";
import "../ResumeStyle.css";
import { useNavigate } from "react-router-dom";
import { InputAdornment, IconButton } from "@material-ui/core";
import {GiSkills} from 'react-icons/gi';
//language form
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";

import Stack from "@mui/material/Stack";
import { FormControl, FormLabel, FilledInput, Button } from "@mui/material";

export default function SocialLinks() {
  const [progressPercentage, setProgressPercentage] = useState(90);
  
  const [inputValues, setInputValues] = useState({});

  const user_ID = localStorage.getItem("user_ID"); //get user id from local storage

  const navigate = useNavigate();

  const [socialLinks, setSocialLinks] = useState([
    {
      label: "",
      link: "",
    },
  ]);


  const memoizedHandleForm = useMemo(() => {
    return (index, field, value) => {
      const newSocialLinks = [...socialLinks];
      newSocialLinks[index] = {
        ...newSocialLinks[index],
        [field]: value,
      };
      setSocialLinks(newSocialLinks);
    };
  }, [socialLinks]); // Only update when socialLinks change









  // const handleForm = (index, field, value) => {
  //   const newSocialLinks = [...socialLinks];
  //   newSocialLinks[index] = {
  //     ...newSocialLinks[index],
  //     [field]: value,
  //   };
  //   setSocialLinks(newSocialLinks);
  // };



  const submitForm = (event) => {
    event.preventDefault();

    const requestData = {
      user_id: user_ID,
      socialLinks: socialLinks,
    };


    axios
      .post("http://localhost:8000/api/admin/solial-links", requestData)
      .then((res) => {
        navigate("/language-info");
        const newProgressPercentage = ((socialLinks.length + 1) / 10) * 100;
        setProgressPercentage(newProgressPercentage);
       
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
    setSocialLinks((prevState) => [
      ...prevState,
      {
        label: "",
        link: "",
      },
    ]);
  };

  const handleRemoveField = (index) => {
    setSocialLinks((prevState) => {
      const newData = [...prevState];
      newData.splice(index, 1);

      return newData;
    });
  };

 console.log(socialLinks)
  return (
    <div className="container-fliud bg-backround-forms">
      <div className="container" style={{ alignItems: "center" }}>
        <Typography className="type" color="" variant="h3">
          Social Links
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
          {socialLinks.map((social, index) => (
            <>
              <div className="displa-flex" key={index}>
                <Row md={2} sm={1} lg={2}>
                  <Col>
                    <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                      <FormLabel>+ Label</FormLabel>

                      <FilledInput
                        type="text"
                        value={social.label}
                        name="label"
                        onChange={(e) =>
                          memoizedHandleForm(index, "label", e.target.value)
                        }
                        className="input-form"
                        placeholder="e.g.Insta"

                        endDecorator={<GiSkills/>}
                      />
                    </FormControl>
                  </Col>

                  <Col>
                    <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                      <FormLabel>Link</FormLabel>
                      <FilledInput
                        value={social.link}
                        required
                        fullWidth
                        name="link"
                        id={`Score-${index}`}
                        className="input-form"
                        placeholder="e.g.asadshahi404"
                        type="text"
                        onChange={(e) =>
                          memoizedHandleForm(index, "link", e.target.value)
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
              {socialLinks.length > 1 && (
                <Button
                  variant="outlined"
                  onClick={() => handleRemoveField(socialLinks.index)}
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
