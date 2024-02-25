import React, { useRef } from "react";
import "../ResumeStyle.css";

import { Row, Col } from "react-bootstrap";
import FilledInput from "@mui/material/FilledInput";
import { Link } from "react-router-dom";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import useAuthContext from "../../../../../Auth/context/AuthContext";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatingResume() {
  // const csrf=()=>axios.get('/sanctum/csrf-cookie')
  const { csrf } = useAuthContext();
  const { user } = useAuthContext();
 
  const user_id =localStorage.getItem('user_ID');
  console.log("userID::"+user_id);
  
  
  //progress bar
  const [progressPercentage, setProgressPercentage] = useState(10);

  const [jobtitle, setJobTitle] = useState("");

  //for avatar image
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAvatarClick = () => {
    inputFileRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      setImage(file);
    }
  };

  const [inputValues, setInputErrorValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [aboutme, setAboutMe] = useState("");
  const [image, setImage] = useState("");
  const [FialdInput, setInput] = useState([]);
  const navigate = useNavigate();
  //user id rtrief from user panel component

  // const userId = localStorage.getItem('id');
  const UploadResume = async () => {
    const data = new FormData();
    data.append("user_id", user_id);
    data.append("jobtitle", jobtitle);
    data.append("firstname", firstname);
    data.append("lastname", lastname);
    data.append("email", email);
    data.append("phone", phone);
    data.append("country", country);
    data.append("city", city);
    data.append("aboutme", aboutme);
    data.append("image", image);
    // await csrf();
    const response = await axios
      .post("http://localhost:8000/api/admin/resume-create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputErrorValues(error.response.data.message);
          }
          if (error.response.status === 500) {
            // setLoading(false)
          }
        }
      });
    if (response) {
      navigate("/exp-info");
      const newProgressPercentage = ((data.length + 1) / 10) * 100;
      setProgressPercentage(newProgressPercentage);
    }
  };
  const SubmitExperienceForm = async (event) => {
    event.preventDefault();
    await csrf();
    await UploadResume();
  };
  //avatar and
  const inputFileRef = useRef(null);

  useEffect(() => {});
console.log(image)
  return (
    <div className="container-fliud bg-backround-forms mb-5">

    <div className="container CreateResume">
      <Typography variant="h4" className="type">
        {" "}
        Personal Information
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

      <div className="personal">
        <form onSubmit={SubmitExperienceForm} className="forms-pers">
          <Row md={2} sm={1} lg={2}>
            <Col>
              <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                <FormLabel>Job Title</FormLabel>
                <FilledInput
                  name="jobtitle"
                  onChange={(e) => setJobTitle(e.target.value)}
                  fullWidth
                  required
                  className="input-form"
                  placeholder="eg.Teacher"
                />
              </FormControl>
            </Col>

            <Col>
              <div
                style={{ m: 1, fontSize: "20px", width: "45%" }}
                className="avatar-pers"
              >
                <Link className="avatar-photo" onClick={handleAvatarClick}>
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      className="avatar-selected"
                      alt="Selected Avatar"
                    />
                  ) : (
                    <AccountBoxIcon
                      className="avatar"
                      style={{ fontSize: "40px" }}
                    ></AccountBoxIcon>
                  )}
                  <span className="link">
                    {selectedImage ? "Change Photo" : "Select Photo"}
                  </span>
                </Link>

                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  ref={inputFileRef}
                  style={{ display: "none" }}
                />
                <span className="text-danger">{inputValues.image}</span>
              </div>
            </Col>
          </Row>
          <Row md={2} sm={1} lg={2}>
            <Col>
              <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                <FormLabel>FirstName</FormLabel>
                <FilledInput
                  label="FirstName"
                  placeholder="FirstName"
                  variant="filled"
                  name="firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                  fullWidth
                  required
                />
                <span className="text-danger">{inputValues.firstname}</span>
              </FormControl>
            </Col>

            <Col>
              <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                <FormLabel>LastName</FormLabel>
                <FilledInput
                  name="lastname"
                  lable="Last Name "
                  placeholder="last name"
                  variant="filled"
                  onChange={(e) => setLastname(e.target.value)}
                  fullWidth
                  required
                />
                <span className="text-danger">{inputValues.lastname}</span>
              </FormControl>
            </Col>
          </Row>

          <Row md={2} sm={1} lg={2}>
            <Col>
              <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                <FormLabel>Email</FormLabel>
                <FilledInput
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  variant="filled"
                  fullWidth
                  required
                />
                <span className="text-danger">{inputValues.email}</span>
              </FormControl>
            </Col>
            <Col>
              {" "}
              <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                <FormLabel>Phone</FormLabel>
                <FilledInput
                  name="phone"
                  lable="Phone"
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  variant="filled"
                  fullWidth
                  required
                />
                <span className="text-danger">{inputValues.phone}</span>
              </FormControl>
            </Col>
          </Row>

          <Row md={2} sm={1} lg={2}>
            <Col>
              {" "}
              <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                <FormLabel>Country</FormLabel>
                <FilledInput
                  name="country"
                  lable="Country"
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                  variant="filled"
                  fullWidth
                  required
                />
                <span className="text-danger">{inputValues.country}</span>
              </FormControl>
            </Col>
            <Col>
              {" "}
              <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
                <FormLabel>City</FormLabel>
                <FilledInput
                  name="city"
                  lable="city"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  variant="filled"
                  fullWidth
                  required
                />
                <span className="text-danger">{inputValues.city}</span>
              </FormControl>
            </Col>
          </Row>

          <Row md={2} sm={1} lg={2} className="about-persRow">
            <Col>
              <Stack spacing={3}>
                <div className="contact-text-area">
                  <FormLabel>About Me</FormLabel>
                  <Textarea
                    name="aboutme"
                    lable="Zip Code "
                    onChange={(e) => setAboutMe(e.target.value)}
                    placeholder="Message..."
                    fullWidth
                    required
                    minRows={6}
                    variant="soft"
                    sx={{
                      borderBottom: "2px solid",
                      borderColor: "neutral.outlinedBorder",
                      borderRadius: 0,
                      "&:hover": {
                        borderColor: "neutral.outlinedHoverBorder",
                      },
                      "&::before": {
                        border: "1px solid var(--Textarea-focusedHighlight)",
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

                  <span className="text-danger">{inputValues.aboutme}</span>
                </div>
              </Stack>
            </Col>

            <Col>
              <Grid item className="mt-5 pers-btns">
                <Button
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
                  type="reset"
                >
                  <Link to={"/"}>Cancel</Link>
                </Button>
              </Grid>
            </Col>
          </Row>
        </form>
      </div>
      {/* avatar */}
    </div>


    </div>
  );
}

// import React, { useRef } from "react";
// import "./ResumeStyle.css";

// import { Row, Col } from "react-bootstrap";
// import FilledInput from "@mui/material/FilledInput";
// import { Link } from "react-router-dom";
// import Textarea from "@mui/joy/Textarea";
// import Stack from "@mui/joy/Stack";

// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/joy/FormLabel";

// import AccountBoxIcon from "@mui/icons-material/AccountBox";

// import {
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   TextField,
//   Button,
// } from "@material-ui/core";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// export default function CreatingResume() {
//   //progress bar
//   const [progressPercentage, setProgressPercentage] = useState(10);

//   const [jobtitle, setJobTitle] = useState("");

//   //for avatar image
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleAvatarClick = () => {
//     inputFileRef.current.click();
//   };
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageURL = URL.createObjectURL(file);
//       setSelectedImage(imageURL);
//       setImage(file);
//     }
//   };

//   const [inputValues, setInputErrorValues] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");
//   const [aboutme, setAboutMe] = useState("");
//   const [image, setImage] = useState("");
//   const [FialdInput, setInput] = useState([]);

//   //user id rtrief from user panel component
//   const userId = localStorage.getItem('id');

//   const navigate = useNavigate();

//   const UploadResume = async () => {
//     const data = new FormData();
//     data.append("user_id", userId);
//     data.append("jobtitle", jobtitle);
//     data.append("firstname", firstname);
//     data.append("lastname", lastname);
//     data.append("email", email);
//     data.append("phone", phone);
//     data.append("country", country);
//     data.append("city", city);
//     data.append("aboutme", aboutme);
//     data.append("image", image);

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/admin/resume-create",
//         data,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       console.log("res", response);
//       navigate("/exp-info");
//       const newProgressPercentage = ((data.length + 1) / 10) * 100;
//       setProgressPercentage(newProgressPercentage);
//     } catch (error) {
//       if (error.response) {
//         if (error.response.status === 422) {
//           setInputErrorValues(error.response.data.message);
//         }
//         if (error.response.status === 500) {
//           // setLoading(false)
//         }
//       }
//     }
//   };

//   const SubmitExperienceForm = async (event) => {
//     event.preventDefault();
//     await UploadResume();
//   };

//   //avatar and
//   const inputFileRef = useRef(null);

//   useEffect(() => {});

//   return (
//     <div className="container CreateResume">
//       <Typography variant="h4" className="type">
//         {" "}
//         Personal Information
//       </Typography>

//       <div className="progresses">
//         <p>
//           <span className="progress-num">{progressPercentage}%</span>Score
//         </p>

//         <div className="progress-line-first ">
//           <div
//             className="progress-line-second"
//             style={{ width: `${progressPercentage}%` }}
//           ></div>
//         </div>
//       </div>

//       <div className="personal">
//         <form onSubmit={SubmitExperienceForm} className="forms-pers">
//           <Row md={2} sm={1} lg={2}>
//             <Col>
//               <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
//                 <FormLabel>Job Title</FormLabel>
//                 <FilledInput
//                   name="jobtitle"
//                   onChange={(e) => setJobTitle(e.target.value)}
//                   fullWidth
//                   required
//                   className="input-form"
//                   placeholder="eg.Teacher"
//                 />
//               </FormControl>
//             </Col>

//             <Col>
//               <div
//                 style={{ m: 1, fontSize: "20px", width: "45%" }}
//                 className="avatar-pers"
//               >
//                 <Link className="avatar-photo" onClick={handleAvatarClick}>
//                   {selectedImage ? (
//                     <img
//                       src={selectedImage}
//                       className="avatar-selected"
//                       alt="Selected Avatar"
//                     />
//                   ) : (
//                     <AccountBoxIcon
//                       className="avatar"
//                       style={{ fontSize: "40px" }}
//                     ></AccountBoxIcon>
//                   )}
//                   <span className="link">
//                     {selectedImage ? "Change Photo" : "Select Photo"}
//                   </span>
//                 </Link>

//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleImageChange}
//                   ref={inputFileRef}
//                   style={{ display: "none" }}
//                 />
//                 <span className="text-danger">{inputValues.image}</span>
//               </div>
//             </Col>
//           </Row>
//           <Row md={2} sm={1} lg={2}>
//             <Col>
//               <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
//                 <FormLabel>FirstName</FormLabel>
//                 <FilledInput
//                   label="FirstName"
//                   placeholder="FirstName"
//                   variant="filled"
//                   name="firstname"
//                   onChange={(e) => setFirstname(e.target.value)}
//                   fullWidth
//                   required
//                 />
//                 <span className="text-danger">{inputValues.firstname}</span>
//               </FormControl>
//             </Col>

//             <Col>
//               <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
//                 <FormLabel>LastName</FormLabel>
//                 <FilledInput
//                   name="lastname"
//                   lable="Last Name "
//                   placeholder="last name"
//                   variant="filled"
//                   onChange={(e) => setLastname(e.target.value)}
//                   fullWidth
//                   required
//                 />
//                 <span className="text-danger">{inputValues.lastname}</span>
//               </FormControl>
//             </Col>
//           </Row>

//           <Row md={2} sm={1} lg={2}>
//             <Col>
//               <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
//                 <FormLabel>Email</FormLabel>
//                 <FilledInput
//                   name="email"
//                   label="Email Address"
//                   type="email"
//                   placeholder="Email Address"
//                   onChange={(e) => setEmail(e.target.value)}
//                   variant="filled"
//                   fullWidth
//                   required
//                 />
//                 <span className="text-danger">{inputValues.email}</span>
//               </FormControl>
//             </Col>
//             <Col>
//               {" "}
//               <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
//                 <FormLabel>Phone</FormLabel>
//                 <FilledInput
//                   name="phone"
//                   lable="Phone"
//                   type="number"
//                   onChange={(e) => setPhone(e.target.value)}
//                   placeholder="Phone"
//                   variant="filled"
//                   fullWidth
//                   required
//                 />
//                 <span className="text-danger">{inputValues.phone}</span>
//               </FormControl>
//             </Col>
//           </Row>

//           <Row md={2} sm={1} lg={2}>
//             <Col>
//               {" "}
//               <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
//                 <FormLabel>Country</FormLabel>
//                 <FilledInput
//                   name="country"
//                   lable="Country"
//                   onChange={(e) => setCountry(e.target.value)}
//                   placeholder="Country"
//                   variant="filled"
//                   fullWidth
//                   required
//                 />
//                 <span className="text-danger">{inputValues.country}</span>
//               </FormControl>
//             </Col>
//             <Col>
//               {" "}
//               <FormControl sx={{ m: 1, width: "100%" }} variant="filled">
//                 <FormLabel>City</FormLabel>
//                 <FilledInput
//                   name="city"
//                   lable="city"
//                   onChange={(e) => setCity(e.target.value)}
//                   placeholder="City"
//                   variant="filled"
//                   fullWidth
//                   required
//                 />
//                 <span className="text-danger">{inputValues.city}</span>
//               </FormControl>
//             </Col>
//           </Row>

//           <Row md={2} sm={1} lg={2} className="about-persRow">
//             <Col>
//               <Stack spacing={3}>
//                 <div className="contact-text-area">
//                   <FormLabel>About Me</FormLabel>
//                   <Textarea
//                     name="aboutme"
//                     lable="Zip Code "
//                     onChange={(e) => setAboutMe(e.target.value)}
//                     placeholder="Message..."
//                     fullWidth
//                     required
//                     minRows={6}
//                     variant="soft"
//                     sx={{
//                       borderBottom: "2px solid",
//                       borderColor: "neutral.outlinedBorder",
//                       borderRadius: 0,
//                       "&:hover": {
//                         borderColor: "neutral.outlinedHoverBorder",
//                       },
//                       "&::before": {
//                         border: "1px solid var(--Textarea-focusedHighlight)",
//                         transform: "scaleX(0)",
//                         left: 0,
//                         right: "10px",
//                         bottom: "-2px",
//                         top: "unset",
//                         transition:
//                           "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
//                         borderRadius: 0,
//                       },
//                       "&:focus-within::before": {
//                         transform: "scaleX(1)",
//                       },
//                     }}
//                   />

//                   <span className="text-danger">{inputValues.aboutme}</span>
//                 </div>
//               </Stack>
//             </Col>

//             <Col>
//               <Grid item className="mt-5 pers-btns">
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   className="btn-pers"
//                   type="submit"
//                 >
//                   Save
//                 </Button>

//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   className="btn-pers"
//                   type="reset"
//                 >
//                   Reset
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   className="btn-pers"
//                   type="reset"
//                 >
//                   <Link to={"/"}>Cancel</Link>
//                 </Button>
//               </Grid>
//             </Col>
//           </Row>
//         </form>
//       </div>
//       {/* avatar */}
//     </div>
//   );
// }
