import React from "react";

import SmartTexter from "./smartTexter";
export default {
  title: "Advanced/SmartTexter",
  component: SmartTexter,
};


const obj = {
  '2dy' : 'EE:new Date().toDateString()',
  'hiii': 'Hi, \n#$\n\nRegards,\n Darshan Marathe',
  'hru' : 'How are you?#$',
  "gooe" : "Good evening!!#$",
  "goom" : "Good Morning!!#$",
  "gooa" : "Good Afternoon!!#$",
  "tc" : "Take care!!#$",
  "bs" : "Be Safe#$",
  "tu" : "Thank you!!#$", 
  "sfdr" : "Sorry for delayed reply#$", 
}


export const Basic = () => {
  
  return <SmartTexter smarts={obj}/>

}

export const ShowToolBar = () => {
  
  return <SmartTexter showToolBar={true} smarts={obj}/>

}