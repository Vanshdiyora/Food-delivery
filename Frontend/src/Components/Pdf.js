import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
  },
  tableRow: { flexDirection: "row" },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#f2f2f2",
    padding: 5,
    textAlign: "center",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 12,
  },
});

const Pdf = ({ items, invoiceData,visible }) => {
  // if (!visible) {
  //   return null; // Don't render anything if isVisible is false
  // }
  // Calculate total amount
  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.title}>{invoiceData.title}</Text>
            <Text style={styles.subtitle}>{invoiceData.subtitle}</Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Name</Text>
              <Text style={styles.tableColHeader}>Price</Text>
              <Text style={styles.tableColHeader}>Quantity</Text>
              <Text style={styles.tableColHeader}>Final Amount</Text>
            </View>
         
            {items.map((item) => (
              <View style={styles.tableRow} key={item.id}>
                <Text style={styles.tableCol}>{item.name}</Text>
                <Text style={styles.tableCol}>{item.price}</Text>
                <Text style={styles.tableCol}>{item.quantity}</Text>
                <Text style={styles.tableCol}>
                  {item.price * item.quantity}
                </Text>
              </View>
            ))}
            
            <View style={styles.tableRow}>
              <Text style={styles.tableCol} />
              <Text style={styles.tableCol} />
              <Text style={styles.tableCol}>Total</Text>
              <Text style={styles.tableCol}>{totalAmount}</Text>
            </View>
          </View>
          <Text style={styles.footer}>Thank you for your purchase!</Text>
        </Page>
      </Document>

  );
};

export default Pdf; 