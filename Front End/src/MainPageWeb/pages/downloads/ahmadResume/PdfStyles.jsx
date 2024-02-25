import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4',
//     padding: 30,
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

const PdfStyles = () => {
  return (
    <style>
      {`
        /* Apply the styles defined in the StyleSheet.create() */
        .page {
          flex-direction: row;
          background-color: #E4E4E4;
          padding: 30px;
        }
        .section {
          margin: 10px;
          padding: 10px;
          flex-grow: 1;
        }
      `}
    </style>
  );
};

export default PdfStyles;