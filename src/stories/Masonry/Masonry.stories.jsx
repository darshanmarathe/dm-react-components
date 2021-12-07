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



function baseObj(number , filp) {
    const orgNum = number;
    if (number < 10) number = 1 + number;
    return {
        title: "Name " + number,
        description: lorem.generateWords(number),
        imgUrl: `https://picsum.photos/id/${orgNum}/100`,
        flip: filp
    }

}

const GetCard = (number, filp = false) => {
    const Obj = baseObj(number , filp);
    return <Card id="Card" {...Obj}>
        <button className="btnBottm" style={{
            border: "none",
            outline: 0,
            display: "inline-block",
            padding: "8px",
            color: "white",
            backgroundColor: "#000",
            textAlign: "center",
            cursor: "pointer",
            width: "100%",
            fontSize: "18px",
            marginBottom: "10px",
        }}> Call me</button>
    </Card>
}

let cards = []
for (let index = 1; index < 50; index++) {
    const ran = index - Math.floor(Math.random(1, 50));
    cards.push(GetCard(ran))
}


// let cardsflipped = []
// for (let index = 1; index < 50; index++) {
//     const ran = index - Math.floor(Math.random(1, 50));
//     cardsflipped.push(GetCard(ran ,true))
// }

export const Basic = () => <Masonry id="Masonry" baseWidth={250}>
    {cards}
</Masonry>;


// export const BasicCardFlipped = () => <Masonry id="Masonry" baseWidth={250}>
//     {cardsflipped}
// </Masonry>;


export const Minified = () => <Masonry id="Masonry" minify={true}>
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
