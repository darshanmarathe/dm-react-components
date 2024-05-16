import React from "react";

import SyntaxHilight from "./syntaxHilight";

export default {
  title: "Advanced/Syntax Hilight",
  component: SyntaxHilight,
};

const baseObj = {
  language: 'javascript'
}

const javascriptObject = {
  code: `
  function outerFunction() {
    let outerVariable = 'I am outer!';
    
    function innerFunction() {
      console.log(outerVariable);
    }
    
    return innerFunction;
  }
  
  // Call outerFunction to get the innerFunction
  const closureExample = outerFunction();
  
  // Call the innerFunction, which still has access to the outerVariable
  closureExample(); // Output: "I am outer!"
  
  `
}

export const Basic = () => <SyntaxHilight  {...baseObj} {...javascriptObject} />;

export const LineNumbers = () => <SyntaxHilight  {...baseObj} {...javascriptObject} lineNumbers={true} />;