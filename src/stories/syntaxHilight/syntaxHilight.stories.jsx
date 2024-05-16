import React from "react";

import SyntaxHilight from "./syntaxHilight";

export default {
  title: "Advanced/Syntax Hilight",
  component: SyntaxHilight,
};

const baseObj = {
  language: 'javascript'
}

const cssObject = {
  code : `p { color: red }`
}

export const Basic = () => <SyntaxHilight  {...baseObj}  {...cssObject}/>;

