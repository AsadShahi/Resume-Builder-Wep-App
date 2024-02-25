import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const PdfDocument = () => {
  return (
    <Document>
      <Page>
        <View style={styles.page}>
          <View style={styles.section}>
            <Text>Asad Shahi</Text>
            <Text>
              Since I was 15 years old, I repaired cell phones (hardware and
              software wise) as a simple worker and have gained many milestones
              in this realm. Moreover, I am passionate about technology.
              Nowadays, I have become one of the significant repair persons in
              the mobile area and work as a professional. In addition to
              maintenance, I have the experience of marketing.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;