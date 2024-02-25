import React,{useState,useEffect} from 'react';
import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';
import axios from '../../../Auth/api/axios';
const styles = StyleSheet.create({

  
  page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
        padding: 20,
      },
      section: {
        flexGrow: 1,
        margin: 10,
        backgroundColor: "#ECECEC",
        borderRadius: 5,
        padding: 20,
      },
      logoSection: {
        width: "25%",
        height: "60%",
        backgroundColor: "#66522E",
        marginLeft: "12%",
      },
      logo: {
        width: "40%",
        height: "60%",
        backgroundColor: "#66522E",
        borderWidth: 17,
        borderColor: "#66522E",
        borderRadius: "50%",
        position: "absolute",
        top: "20%",
        left: "7%",
      },
      headingSection: {
        width: "48%",
        height: "40vh",
        padding: "1% 1% 2% 2%",
        float: "left",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      title: {
        fontSize: "3.5rem",
        marginBottom: 35,
        color: "#FFF",
      },
      subTitle: {
        fontSize: "2rem",
        fontWeight: 100,
        marginBottom: 10,
        color: "#836A3D",
      },
      paragraph: {
        marginTop: 35,
        fontSize: "1rem",
        lineHeight: "2rem",
        color: "#947740",
      },
      row: {
        flexDirection: "row",
        backgroundColor: "#DFCEA1",
        color: "#66522E",
        margin: "auto",
        clear: "both",
      },
      column: {
        width: "50%",
        padding: "0 4%",
        float: "left",
      },
      contactSection: {
        marginBottom: 30,
        fontSize: 18,
        marginLeft: 20,
        display: "flex",
        alignItems: "center",
      },
      contactIcon: {
        marginRight: 10,
        color: "#66522E",
      },
      workTitle: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 10,
      },
      year: {
        textAlign: "center",
        marginBottom: 10,
      },
      educationHeader: {
        textAlign: "center",
        fontSize: 22,
        color: "#5F4A24",
        textTransform: "uppercase",
        marginBottom: 10,
      },
      educationParagraph: {
        textAlign: "center",
        marginBottom: 10,
      },
      languageList: {
        textAlign: "center",
        margin: "30px auto 34px",
      },
      interestsList: {
        margin: "75px auto",
        textAlign: "center",
        fontSize: 18,
      },










});

const PdfDocument = () => {
  const [personalInfo, setPersonalInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/personal-list").then((res) => {
      setPersonalInfo(res.data.list);
    });
  }, []);

  return (
    <Document>
      <Page>
        <View style={styles.page}>
          <View style={styles.section}>
            {personalInfo.length > 0 &&
              personalInfo.map((pers, i) => (
                <View key={i}>
                  <View style={styles.row}>
                    {/* Profile Section */}
                    <View style={styles.column}>
                      <View style={styles.logoSection}>
                        {/* <Image
                          style={styles.logo}
                          src="images/profile.jpg"
                          alt="Profile"
                        /> */}
                      </View>
                      <View style={styles.headingSection}>
                        <Text style={styles.title}>
                          {pers.firstname} {pers.lastname}
                        </Text>
                        <Text style={styles.subTitle}>{pers.jobtitle}</Text>
                        <Text style={styles.paragraph}>{pers.aboutme}</Text>
                      </View>
                    </View>

                    {/* Contact Section */}
                    <View style={styles.column}>
                      <Text style={styles.workTitle}>Contact</Text>
                      
                      <Text style={styles.contactSection}>
                        <Text style={styles.contactIcon}>
                          <i className="fa fa-phone" />
                        </Text>
                        {pers.phone}
                      </Text>

                      <Text style={styles.contactSection}>
                        <Text style={styles.contactIcon}>
                          <i className="fa fa-envelope" />
                        </Text>
                        {pers.email}
                      </Text>

                      <Text style={styles.contactSection}>
                        <Text style={styles.contactIcon}>
                          <i className="fa fa-globe" />
                        </Text>
                        www.resume.af
                      </Text>

                      <Text style={styles.contactSection}>
                        <Text style={styles.contactIcon}>
                          <i className="fa fa-map-marker" />
                        </Text>
                        {pers.country} - {pers.city}
                      </Text>
                      
                    </View>

                    {/* Add other sections (e.g., work experience, education, etc.) here */}
                  </View>
                </View>
              ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
