import React from "react";

function Amount() {
  return (
    <div className="AmonutConfirm">
      <div className="amountAndTax">
        <ul style={{ marginLeft: "-1rem" }}>
          <p>Total Amount</p>
          <p className="inclusivetax">inclusive all taxes</p>
        </ul>
        <p className="balance">$ 30.49</p>
      </div>
      <button className="confirmButton">CONFIRM</button>
    </div>
  );
}

export default Amount;
