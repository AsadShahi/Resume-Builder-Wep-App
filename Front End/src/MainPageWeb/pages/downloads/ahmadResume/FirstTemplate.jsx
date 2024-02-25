

import React, { useEffect, useState, useRef } from "react";

import "./FirstTemplete.css";


import PdfDocument from "./PdfDocument";
import Download from "../../Download";
import {
  Document,
  Page,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import PdfStyles from "./PdfStyles";
// Set worker path for PDF.js
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function FirstTemplate() {
  // ...
  const pdfRef = useRef();
  const [ishowModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const onHideModal = () => {
    setShowModal(false);
    console.log('Clicked Escpe button');
  };

  return (
    <section className="container mt-5 mb-5">
      <section className="card">
        <PdfStyles />
        <Document ref={pdfRef}>
          <Page size="A4">
            <div className="card-body">
              <h2>Asad Shahi</h2>
              <p>
                Since I was 15 years old, I repaired cell phones (hardware and
                software wise) as a simple worker and have gained many
                milestones in this realm. Moreover, I am passionate about
                technology. Nowadays, I have become one of the significant
                repair persons in the mobile area and work as a professional. In
                addition to maintenance, I have the experience of marketing.
              </p>
            </div>
          </Page>
        </Document>
        
        <div className="btn-first-template">
          <PDFDownloadLink
            document={<PdfDocument />} //document is one of the props 
            fileName="resume.pdf"
          >
            {({ blob, url, loading, error }) =>  //blob is for displaying pdf befor genrating pdf 
              loading ? "Loading document..." : "Download as PDF"
            }
          </PDFDownloadLink>
        </div>

        {ishowModal && <Download onHide={onHideModal} />}
      </section>
    </section>
  );
}
