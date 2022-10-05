import React from "react";

import SmartTexter from "./smartTexter";
export default {
  title: "Advanced/SmartTexter",
  component: SmartTexter,
};


const obj = {
  '2dy' : 'EE:new Date().toDateString()',
  'hiii': 'Hi #$, \n\nRegards,\nDarshan Marathe',
  'hru' : 'How are you?#$',
  "gooe" : "Good evening!!#$",
  "goom" : "Good Morning!!#$",
  "gooa" : "Good Afternoon!!#$",
  "tc" : "Take care!!#$",
  "bs" : "Be Safe#$",
  "tu" : "Thank you!!#$", 
  "sfdr" : "Sorry for delayed reply.\n#$", 
}


export const Basic = () => {
  
  return <SmartTexter smarts={obj} showPreview-={true}/>

}

export const ShowToolBar = () => {
  
  return <SmartTexter showToolBar={true} smarts={obj}/>

}

export const ShowPreview = () => {
  
  return <SmartTexter showToolBar={true} showPreview-={true} smarts={obj}/>

}