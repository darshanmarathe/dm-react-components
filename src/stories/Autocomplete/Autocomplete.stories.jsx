import React from "react";
import AutoComplete from "./Autocomplete";

const data = [
  {
    id: "A",
    fname: "Tony",
    lname: "Stark",
    superName: "IronMan",
    age: 30,
    gender: "M",
    powers: ["inteligence", "money"],
  },
  {
    id: "F",
    fname: "Rilly",
    lname: "Willems",
    superName: "IronHeart",
    age: 15,
    gender: "F",
    powers: ["inteligence", "money"],
  },
  {
    id: "B",
    fname: "Natasha",
    lname: "Romonov",
    superName: "Black widow",
    age: 23,
    gender: "F",
    powers: ["inteligence", "slow ageing"],
  },
  {
    id: "C",
    fname: "Clint",
    lname: "Barton",
    superName: "HawkEye",
    age: 35,
    gender: "M",
    powers: ["inteligence", "slow ageing", "Archary"],
  },
  {
    id: "E",
    fname: "Thor",
    lname: "Asgardian",
    superName: "Thor",
    age: 100,
    gender: "M",
    powers: ["Lighting", "Super strength", "Hammer"],
  },
];

export default {
  title: "Advanced/Autocomplete",
  component: AutoComplete,
};

export const Basic = () => <AutoComplete id="simpleTable" keyprop="id" textprop="superName" records={data} />;

export const Template = () => <AutoComplete id="simpleTable" template="{superName} -> {fname} {lname}" keyprop="id" textprop="superName" records={data} />;


export const TextTemplate = () => <AutoComplete id="simpleTable" texttemplate="{superName} {powers}" template="{superName} -> {fname} {lname}" keyprop="id" textprop="superName" records={data} />;



export const AJAX_url = () => <AutoComplete id="simpleTable" url="https://jsonplaceholder.typicode.com/users" 
textprop="name"
keyprop="username"
placeholder="Users"
template="{username} - {name} <br> {company.name}" />;





export const Events = () => <AutoComplete id="simpleTable" url="https://jsonplaceholder.typicode.com/users" 
textprop="name"
keyprop="username"
placeholder="Users"
onSelect={console.log}
template="{username} - {name} <br> {company.name}" />;
