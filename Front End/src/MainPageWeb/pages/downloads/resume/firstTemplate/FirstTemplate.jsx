import React, { useRef } from "react";


export default function FirstTemplate() {

  
  const containerRef = useRef();

  const handleDownloadPDF = () => {
    const element = containerRef.current;

    if (element) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <head>
              <title>Resume</title>
              <style>
                @media print {
                  body {
                    padding: 20px;
                  }
                }
              </style>
            </head>
            <body>
              ${element.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      }
    }
  };

  return (
    <section className="container mt-5 mb-5">
      <section className="card">
        <div className="card-body" ref={containerRef}>
          <h2>اسد شاهی شمشیرگران شهسوار نواباد</h2>
          <p>
            Since I was 15 years old, I repaired cell phones (hardware and
            software wise) as a simple worker and have gained many milestones in
            this realm. Moreover, I am passionate about technology. Nowadays, I
            have become one of the significant repair persons in the mobile area
            and work as a professional. In addition to maintenance, I have the
            experience of marketing.
          </p>
        </div>

        <div className="btn-first-template">
          <button onClick={handleDownloadPDF}>Download as PDF</button>
        </div>
      </section>
    </section>
  );
}

// this function work successfully
// import React, { useEffect, useRef } from "react";

// import html2pdf from "html2pdf.js";
// import "./FirstTemplete.css";

// export default function FirstTemplate() {
  

//   const handleDownloadPDF = () => {
//     const element = containerRef.current;

//     html2pdf()
//       .set({
//         margin: 10,
//         filename: "resume.pdf",
//         image: { type: "jpeg", quality: 0.98 },
//         html2canvas: { scale: 2, logging: true },
//         jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//       })
//       .from(element)
//       .save();
//   };
//   const containerRef = useRef();
//   return (
//     <section className="container mt-5 mb-5">
//       <section className="card">
//         <div className="card-body" ref={containerRef}>
//           <h2>اسد شاهی شمشیرگران شهسوار نواباد</h2>
//           <p>
//             Since I was 15 years old, I repaired cell phones (hardware and
//             software wise) as a simple worker and have gained many milestones in
//             this realm. Moreover, I am passionate about technology. Nowadays, I
//             have become one of the significant repair persons in the mobile area
//             and work as a professional. In addition to maintenance, I have the
//             experience of marketing.
//           </p>
//         </div>

//         <div className="btn-first-template">
//           <button onClick={handleDownloadPDF}>Download as PDF</button>
//         </div>
//       </section>
//     </section>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { Text, Page, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
// import axios from "../../../Auth/api/axios";
// import { PDFViewer } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//     padding: 20,
//   },
//   section: {
//     flexGrow: 1,
//     margin: 10,
//     backgroundColor: "#ECECEC",
//     borderRadius: 5,
//     padding: 20,
//   },
//   logoSection: {
//     width: "25%",
//     height: "60%",
//     backgroundColor: "#66522E",
//     marginLeft: "12%",
//   },
//   logo: {
//     width: "40%",
//     height: "60%",
//     backgroundColor: "#66522E",
//     borderWidth: 17,
//     borderColor: "#66522E",
//     borderRadius: "50%",
//     position: "absolute",
//     top: "20%",
//     left: "7%",
//   },
//   headingSection: {
//     width: "48%",
//     height: "40vh",
//     padding: "1% 1% 2% 2%",
//     float: "left",
//     position: "relative",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: "3.5rem",
//     marginBottom: 35,
//     color: "#FFF",
//   },
//   subTitle: {
//     fontSize: "2rem",
//     fontWeight: 100,
//     marginBottom: 10,
//     color: "#836A3D",
//   },
//   paragraph: {
//     marginTop: 35,
//     fontSize: "1rem",
//     lineHeight: "2rem",
//     color: "#947740",
//   },
//   row: {
//     flexDirection: "row",
//     backgroundColor: "#DFCEA1",
//     color: "#66522E",
//     margin: "auto",
//     clear: "both",
//   },
//   column: {
//     width: "50%",
//     padding: "0 4%",
//     float: "left",
//   },
//   contactSection: {
//     marginBottom: 30,
//     fontSize: 18,
//     marginLeft: 20,
//     display: "flex",
//     alignItems: "center",
//   },
//   contactIcon: {
//     marginRight: 10,
//     color: "#66522E",
//   },
//   workTitle: {
//     textAlign: "center",
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   year: {
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   educationHeader: {
//     textAlign: "center",
//     fontSize: 22,
//     color: "#5F4A24",
//     textTransform: "uppercase",
//     marginBottom: 10,
//   },
//   educationParagraph: {
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   languageList: {
//     textAlign: "center",
//     margin: "30px auto 34px",
//   },
//   interestsList: {
//     margin: "75px auto",
//     textAlign: "center",
//     fontSize: 18,
//   },
// });

// const PdfDocument = () => {
//   const [language, setAllLanguage] = useState([]);
//   const [personalInfo, setResumes] = useState([]);
//   const [experienceValues, setExperience] = useState([]);
//   const [education, setEducation] = useState([]);
//   const [interest, setInterest] = useState([]);
//   const [skills, setSkills] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:8000/personal-list").then((res) => {
//     setResumes(res.data.list);
//   });
// }, []);

//   useEffect(() => {
//     axios.get("http://localhost:8000/skills-list").then((response) => {
//       setSkills(response.data.list);
//     });
//   }, []);

//   useEffect(() => {
//     axios.get("http://localhost:8000/language-list").then((response) => {
//       setAllLanguage(response.data.list);
//     });
//   }, []);

//   useEffect(() => {
//     axios.get("http://localhost:8000/education-list").then((res) => {
//       setEducation(res.data.list);
//     });
//   }, []);

//   useEffect(() => {
//     axios.get("http://localhost:8000/experience-list").then((res) => {
//       setExperience(res.data.list);
//     });
//   }, []);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/interest-list")
//       .then((response) => {
//         setInterest(response.data.interest);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <PDFViewer width="1000" height="600">
//       <Document>
//         <Page size="A4" style={styles.page}>
//           <View style={styles.section}>
//             <View>
//               {personalInfo.length > 0 &&
//                 personalInfo.map((pers, i) => (
//                   <View key={i}>
//                     <View style={[styles.row, styles.profileSection]}>
//                       <View style={styles.logoSection}>
//                         {/* <Image
//                           style={styles.logo}
//                           src="images/profile.jpg"
//                           alt="Profile"
//                         /> */}
//                       </View>
//                       <View style={styles.headingSection}>
//                         <Text style={styles.title}>
//                           {pers.firstname} {pers.lastname}
//                         </Text>
//                         <Text style={styles.subTitle}>{pers.jobtitle}</Text>
//                         <Text style={styles.paragraph}>{pers.aboutme}</Text>
//                       </View>
//                     </View>
//                   </View>
//                 ))}
//             </View>

//             {/* <View style={styles.row}>
//               <View style={styles.column}>
//                 {personalInfo.length > 0 &&
//                   personalInfo.map((pers, i) => (
//                     <View key={i}>
//                       <Text style={styles.workTitle}>Contact</Text>
//                       <ul>
//                         <Text style={styles.contactSection}>
//                           <Text style={styles.contactIcon}>
//                             <i className="fa fa-phone" />
//                           </Text>
//                           {pers.phone}
//                         </Text>

//                         <Text style={styles.contactSection}>
//                           <Text style={styles.contactIcon}>
//                             <i className="fa fa-envelope" />
//                           </Text>
//                           {pers.email}
//                         </Text>
//                         <Text style={styles.contactSection}>
//                           <Text style={styles.contactIcon}>
//                             <i className="fa fa-globe" />
//                           </Text>
//                           www.resume.af
//                         </Text>
//                         <Text style={styles.contactSection}>
//                           <Text style={styles.contactIcon}>
//                             <i className="fa fa-map-marker" />
//                           </Text>
//                           {pers.country} - {pers.city}
//                         </Text>
//                       </ul>
//                     </View>
//                   ))}
//               </View>

//               <View style={styles.column}>
//                 <Text style={styles.workTitle}>Work Experience</Text>
//                 {experienceValues.length > 0 &&
//                   experienceValues.map((exp, i) => (
//                     <View key={i}>
//                       <Text style={styles.workTitle}>{exp.title}</Text>
//                       <Text style={styles.year}>
//                         {exp.start_date}-{exp.end_date}
//                       </Text>
//                       <Text style={styles.paragraph}>{exp.information}</Text>
//                     </View>
//                   ))}
//               </View>
//             </View>

//             <View style={styles.row}>
//               <View style={styles.column}>
//                 <Text style={styles.workTitle}>Language</Text>
//                 {language.length > 0 &&
//                   language.map((lang, i) => (
//                     <View key={i} style={styles.languageList}>
//                       <ul>
//                         <Text>{lang.language}</Text>
//                       </ul>
//                     </View>
//                   ))}
//               </View>

//               <View style={styles.column}>
//                 <Text style={styles.workTitle}>Skills</Text>
//                 {skills.length > 0 &&
//                   skills.map((skill, i) => (
//                     <View key={i}>
//                       <table>
//                         <tr>
//                           <Text>{skill.skills}</Text>
//                           <Text>{skill.skills_level}</Text>
//                         </tr>
//                       </table>
//                     </View>
//                   ))}
//               </View>
//             </View>

//             <View style={styles.row}>
//               <View style={styles.column}>
//                 <Text style={styles.workTitle}>Education</Text>
//                 {education.length > 0 &&
//                   education.map((edu, i) => (
//                     <View key={i}>
//                       <Text style={styles.educationHeader}>{edu.school}</Text>
//                       <Text style={styles.year}>2019-{edu.graduationDate}</Text>
//                       <Text style={styles.educationParagraph}>{edu.info}</Text>
//                     </View>
//                   ))}
//               </View>

//               <View style={styles.column}>
//                 <Text style={styles.workTitle}>Interests</Text>
//                 {interest.length > 0 &&
//                   interest.map((interest, i) => (
//                     <View key={i} style={styles.interestsList}>
//                       <ul>
//                         <Text>{interest.title}</Text>
//                       </ul>
//                     </View>
//                   ))}
//               </View>
//             </View> */}

//           </View>
//         </Page>
//       </Document>
//     </PDFViewer>
//   );
// };

// export default PdfDocument;
