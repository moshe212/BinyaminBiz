import React from "react";
import Ticker from "react-ticker";

import "./BizTicker.css";

const BizTicker = () => (
  <Ticker mode="smooth">
    {({ index }) => (
      <>
        <p className="BizTicketText">שירות מעולה !</p>
      </>
    )}
  </Ticker>
);

export default BizTicker;
