import React, { useState } from "react";

import QrGen from "./QrGen";

export default {
  title: "Advanced/QR Generator",
  component: QrGen,
};

export const Basic = () => <QrGen id="QRGen" value={"http://google.com"} />;
export const Size = () => (
  <QrGen id="QRGen" size="200" value={"http://google.com"} />
);


export const MyProfile = () => (
  <>
  <table>
    <tr>
      <td>
         <h1>Github</h1> <br/>
  <QrGen id="QRGenGithub" size="200" value={"https://github.com/darshanmarathe"} />
      </td>
      <td>
        
 <h1>LinkedIn</h1> <br/>
  <QrGen id="QRGenLinkedIn" size="200" value={"https://www.linkedin.com/in/darshan-marathe-665776a4/"} />
      </td>
    </tr>
  </table>
 
</>
);



export const GenerateYours = () => 
{
const [data , setData] = useState('http://google.com')
    
return (
  <>
 <h1>Enter your data</h1> <br/>
  <input type="text" name="url" placeholder="enter url to genrate QR" value={data} onChange={(e) => setData(e.target.value)} />
  <br/>
  <QrGen id="QRGenGithub" size="200" value={data} />
 
</>
);
}


export const Colorful = () => (
  <QrGen
    id="QRGen"
    size="150"
    foreground="red"
    background="yellow"
    value={"http://google.com"}
  />
);
