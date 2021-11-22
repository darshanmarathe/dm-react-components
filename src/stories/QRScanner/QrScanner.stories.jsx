import React from "react";

import QrScanner from "./QrScanner.jsx";

export default {
  title: "Advanced/QR Scanner",
  component: QrScanner,
};

export const Basic = () => (
  <QrScanner onQRDetect={(e) => console.log(e)} id="QRScan" />
);
// export const Size = () => (
//   <QrGen id="QRGen" size="200" value={"http://google.com"} />
// );

// export const Colorful = () => (
//   <QrGen
//     id="QRGen"
//     size="150"
//     foreground="red"
//     background="yellow"
//     value={"http://google.com"}
//   />
// );
