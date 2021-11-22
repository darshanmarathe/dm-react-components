import React from 'react';
import DynaTable from "./dynaTable";


const data = [{
    id : "A",
    fname : "Tony",
    lname : "Stark",
    superName : "IronMan",
    age : 30,
    gender : "M",
    powers : ["inteligence" , "money"]
},
{
    id : "B",
    fname : "Natasha",
    lname : "Romonov",
    superName : "Black widow",
    age : 23,
    gender : "F",
    powers : ["inteligence" , "slow ageing"]
},
{
    id : "C",
    fname : "Clint",
    lname : "Barton",
    superName : "HawkEye",
    age : 35,
    gender : "M",
    powers : ["inteligence" , "slow ageing" , "Archary"]
},
{
    id : "E",
    fname : "Thor",
    lname : "Asgardian",
    superName : "Thor",
    age : 100,
    gender : "M",
    powers : ["Lighting" , "Super strength" , "Hammer"]
}


]


export default {
    title : "Advanced/Dynamic Table",
    component : DynaTable    
}


export const Basic = () => <DynaTable id="simpleTable" data={data} />
export const Sortable = () => <DynaTable data={data} sortable={true} />
// export const Filter = () => <DynaTable data={data} allowFilter={true} />
// export const SortAndFilter = () => <DynaTable data={data} sortable={true} allowFilter={true} />