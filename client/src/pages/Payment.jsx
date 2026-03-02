import { useState } from "react";
import { useLocation } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

function Payment() {
  const { state } = useLocation();
  const upiLink = state?.upiLink;

  const [selectedMethod, setSelectedMethod] = useState(null);

  if (!upiLink) {
    return <h2>No Payment Data Found</h2>;
  }

  return (
    <div className="page" style={{ textAlign: "center", marginTop: "50px" }}>
      
      {!selectedMethod && (
        <>
          <h2>Select Payment Method</h2>

          <button
            className="btn-primary"
            onClick={() => setSelectedMethod("upi")}
          >
            Pay via UPI
          </button>
        </>
      )}

      {selectedMethod === "upi" && (
        <>
          <h2>Scan QR to Pay</h2>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              display: "inline-block",
              marginTop: "20px"
            }}
          >
            <QRCodeCanvas value={upiLink} size={220} />
          </div>

          <p style={{ marginTop: "20px" }}>
            Or click below to open UPI App
          </p>

          <a href={upiLink} className="btn-primary">
            Open UPI App
          </a>
        </>
      )}
    </div>
  );
}

export default Payment;