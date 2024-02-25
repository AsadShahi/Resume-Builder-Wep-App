import React, { useEffect, useState } from "react";

import axios from '../../../../Auth/api/axios';
import './testProjectfile.css';

export default function TestingProjectFile(props) {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/language-list").then((response) => {
      console.log(response.data.list);
      setLanguages(response.data.list);
    });
  }, []);

  console.log("lang"+languages);

  return (
    <div
      style={{
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>this is just for testing projects</h1>

      <div >
        <div className="lang-level-testing">
          <h4>Language</h4>
          <h4>Level</h4>
        </div>
 
 {languages.length>0 &&languages.map((lang)=>(


       

          <ul className="lang-for-test">


            <li className="lang-testing">{lang.language}</li>
            <li>{lang.level}</li>
          </ul>
       

 ))}
       
      </div>
    </div>
  );
}
