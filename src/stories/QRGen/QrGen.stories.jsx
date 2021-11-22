import React from "react";

import QrGen from "./QrGen";

export default {
  title: "Advanced/QR Generator",
  component: QrGen,
};

export const Basic = () => <QrGen id="QRGen" value={"http://google.com"} />;
export const Size = () => (
  <QrGen id="QRGen" size="200" value={"http://google.com"} />
);

export const Colorful = () => (
  <QrGen
    id="QRGen"
    size="150"
    foreground="red"
    background="yellow"
    value={"http://google.com"}
  />
);
