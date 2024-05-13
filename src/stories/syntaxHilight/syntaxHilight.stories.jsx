import React from "react";

import SyntaxHilight from "./syntaxHilight";

export default {
  title: "Adavance/Syntax Hilight",
  component: SyntaxHilight,
};

const baseObj = {
  language: 'javascript'
}

export const Basic = () => <SyntaxHilight id="Card" {...baseObj} />;

