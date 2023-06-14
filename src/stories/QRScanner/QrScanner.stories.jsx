import React from "react";

import QrScanner from "./QrScanner.jsx";

export default {
  title: "Advanced/QR Scanner",
  component: QrScanner,
};


const log = function(str =""){
  console.log(str);
  alert(str)
  if(str.includes("://"))
    window.open(str)

}

export const Basic = () => (
  <QrScanner onQRDetect={(e) => log(e)} id="QRScan" />
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
