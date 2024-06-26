import React from "react";

import SyntaxHighlight from "./syntaxHighlight";

export default {
  title: "Advanced/Syntax Highlight",
  component: SyntaxHighlight,
};


const javascriptObject = {
  language: 'javascript',
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


const htmlObject = {
  language: 'html',
  code: `
    <html>
      <head>
        <title> Hello </title>
      </head>
      <body>
        <h1>Hello </h1>
      </body>
    </html>`
}


const goObject = {
  code: `package main

import "fmt"

func main() {
	fmt.Println("Hello, 世界")
}  `,
  language: 'go'
}


const pythonObj = {
  code: `num = int(input("Enter a number: "))
if (num % 2) == 0:
   print("{0} is Even".format(num))
else:
   print("{0} is Odd".format(num))`,
  language: 'py'
}


const csharpObj = {
  code: `using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}`,
  language: 'csharp'

}
export const Basic = () => <SyntaxHighlight   {...javascriptObject} />;

export const HTML = () => <SyntaxHighlight {...htmlObject} lineNumbers={true} />;


export const Golang = () => <SyntaxHighlight {...goObject} lineNumbers={true} />;


export const Python = () => <SyntaxHighlight {...pythonObj} lineNumbers={true} />;



export const Csharp = () => <SyntaxHighlight {...csharpObj} lineNumbers={true} />;