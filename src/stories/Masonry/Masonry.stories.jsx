import React from "react";

import { LoremIpsum } from "lorem-ipsum";

import Masonry from "./Masonry";

import Card from "../Card/Card";

export default {
  title: "Advanced/Masonry",
  component: Masonry,
};

// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});



function baseObj(number) {
    const orgNum = number;
    if(number < 10) number  = 1 + number;
    return  {
        title: "Name " + number,
        description:  lorem.generateWords(number),
        imgUrl: `https://picsum.photos/id/${orgNum}/200`,
        flip: false,
    }
    
}

const GetCard = (number) => {
    const Obj = baseObj(number);
    return <Card id="Card" {...Obj} />
}

let cards = []
for (let index = 1; index < 50; index++) {
    const ran  =index - Math.floor(Math.random(1,50));
     cards.push(GetCard(ran))
}

export const Basic = () => <Masonry id="Masonry"    basewidth= {250}>
    {cards}
</Masonry>;

// export const Size = () => (
//   <Card id="Card" size="200" value={"http://google.com"} />
// );

// export const Colorful = () => (
//   <Card
//     id="QRGen"
//     size="150"
//     foreground="red"
//     background="yellow"
//     value={"http://google.com"}
//   />
// );
