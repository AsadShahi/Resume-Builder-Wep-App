import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";


import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FaPinterestP } from "react-icons/fa";
import { InputAdornment, IconButton } from "@material-ui/core";
import Add from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

export default function Myinterest() {
  const [progressPercentage, setProgressPercentage] = useState(60);
  const navigate = useNavigate();
  const [interests, setInterests] = useState([{ title: "", image: null }]);


  const user_ID=localStorage.getItem('user_ID');

  const handleFormChange = (index, name, value) => {
    setInterests((prevState) => {
      const updatedInterests = [...prevState];
      updatedInterests[index] = {
        ...prevState[index],
        [name]: value,
      };
      return updatedInterests;
    });
  };

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    setInterests((prevState) => {
      const updatedInterests = [...prevState];
      updatedInterests[index].image = file;
      return updatedInterests;
    });
  };


  const handleAddMore = () => {
    setInterests((prevState) => [
      ...prevState,
      {
        title: "",
        image: null,
      },
    ]);
  };

  const handleRemoveField = (index) => {
    setInterests((prevState) => {
      const updatedInterests = [...prevState];
      updatedInterests.splice(index, 1);
      return updatedInterests;
    });
  };



  const sendInterestForm = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      interests.forEach((interest, index) => {
        formData.append(`interests[${index}][title]`, interest.title);
        formData.append(`interests[${index}][image]`, interest.image); // Append the image file to form data
      });
  
      formData.append("user_id", user_ID); // Append the user_id to form data
  
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
  
      const response = await axios.post(
        "http://localhost:8000/api/admin/interest-create",
        formData,
        config
      );
  
      console.log(response.data);
      navigate("/skills-info");
    } catch (error) {
      console.log(error);
    }
  };




  console.log("intrest"+interests)
  return (
    <div className="container-fliud bg-backround-forms">
      <div className="container">
        <Typography className="type" color="" variant="h3">
          Interests
        </Typography>
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
        <div className="container">
          <Card>
            <CardContent>
              <Grid>
                {interests.map((interest, index) => (
                  <form onSubmit={sendInterestForm} className="forms-pers" key={index}>
                    <Row md={2} sm={1} lg={2}>
                      <Col>
                        <Grid className="mb-3">
                          <TextField
                            type="text"
                            name={`interests[${index}][title]`}
                            label="Interest Title"
                            fullWidth
                            required
                            value={interest.title}
                            onChange={(e) =>
                              handleFormChange(
                                index,
                                "title",
                                e.target.value
                              )
                            }
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <IconButton>
                                    <FaPinterestP />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      </Col>
                      <Col>
                        <Grid className="mb-2">
                          <TextField
                           label="This is optional"

                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, index)}
                          />
                        </Grid>
                      </Col>
                    </Row>
                    {index === interests.length - 1 && (
                      <Stack direction="row" spacing={2}>
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
                              Reset
                            </Button>
                            <Button
                              onClick={handleAddMore}
                              variant="outlined"
                              startIcon={<Add />}
                            >
                              Add More Interest
                            </Button>
                            {interests.length > 1 && (
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
                        </div>
                      </Stack>
                    )}
                  </form>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}




// const handleFormChange = (index, name, value) => {
    
     
     
  
//   // Create a new FormData o
//   setIntrest((prevState) => {
//     const updatedForms = [...prevState];
//     updatedForms[index] = { ...prevState[index], [name]: value };
//     return updatedForms;
//   });

// };












// const handleFormChange = (index, name, value,e) => {
//   if (name === "image") {
//     // Get the file object from the input field
//     const file = e.target.files[0];

//     // Create a new FormData object
//     const formData = new FormData();
//     formData.append("file", file);

//     // Set the updated file name and file object in the interest object
//     setIntrest((prevState) => {
//       const updatedForms = [...prevState];
//       updatedForms[index] = {
//         ...prevState[index],
//         [name]: file.name, // Set the file name instead of the file path
//         file: formData, // Set the FormData object instead of the file path
//       };
//       return updatedForms;
//     });
//   } else {
//     setIntrest((prevState) => {
//       const updatedForms = [...prevState];
//       updatedForms[index] = { ...prevState[index], [name]: value };
//       return updatedForms;
//     });
//   }
// };