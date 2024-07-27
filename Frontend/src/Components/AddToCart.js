import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import Headers from "./Headers";
import Pdf from "./Pdf";
import { saveAs } from "file-saver";
import {PDFDownloadLink,Document,Page} from '@react-pdf/renderer'


function AddToCart() {
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <><Headers idata={isEmpty}/><p>{localStorage.setItem('symbol',false)}Your cart is empty</p></>;

  let totalPrice = 0;

  const generatePDF = () => {
    const pdfContent = (
      <Pdf
        items={items}
        invoiceData={{ title: "Invoice", subtitle: "63222" }}
      />
    );
    console.log(pdfContent); 
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    console.log(blob)
    const url = URL.createObjectURL(blob);
    saveAs(url, "invoice.pdf");
    URL.revokeObjectURL(url);

    setPdfGenerated(true);
    setPdfVisible(true); // Set PDF visibility to true after generating
  };

  return (
    <>
      <CartProvider>
        <Headers idata={isEmpty}/>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>Cart ({totalUniqueItems})</h1>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((item) => {
              totalPrice += item.quantity * item.price;
              return (
                <li key={item.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ flex: '1' }}>
                      <strong>{item.name}</strong> ({item.quantity} x Rs. {item.price})
                    </div>
                    <div>
                      <button
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        style={buttonStyle}
                      >-</button>
                      <span style={{ margin: '0 10px', fontSize: '16px' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        style={buttonStyle}
                      >+</button>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{ ...buttonStyle, backgroundColor: '#ff5050', color: '#fff' }}
                      >&times;</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <strong>Total Price: Rs. {totalPrice}</strong>
          </div>
        </div>
        <PDFDownloadLink document={<Pdf
          items={items}
          invoiceData={{ title: "Invoice", subtitle: "63222" }}
         // Pass the visibility state to the Pdf component
        />} fileName="invoice.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <button>Generate PDF</button>)}
      </PDFDownloadLink>
        
      </CartProvider>
    </>
  );
}

const buttonStyle = {
  padding: '8px 15px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#337ab7',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '16px',
};

export default AddToCart;
