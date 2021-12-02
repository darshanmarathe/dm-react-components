import React from "react";

import Card from "./Card";

export default {
  title: "Baisc/Cards",
  component: Card,
};

const baseObj = {
  title: "Darshan Marathe",
  description: "Darshan Marathe is a software engineer at heart.",
  imgUrl: "https://picsum.photos/id/1/200",
  flip: false,
}

export const Basic = () => <Card id="Card" {...baseObj} />;

export const WithChildren = () => (
  <Card id="Card" {...baseObj} >
    <div style={{ textAlign: 'center' }}>
      <a href="#" style={{ margin: 10 }}><i class="fa fa-dribbble"></i></a>
      <a href="#" style={{ margin: 10 }}><i class="fa fa-twitter"></i></a>
      <a href="#" style={{ margin: 10 }}><i class="fa fa-linkedin"></i></a>
      <a href="#" style={{ margin: 10 }}><i class="fa fa-facebook"></i></a>
    </div>
  </Card>
);

export const Flipped = () => <Card id="CardF" {...baseObj} imgUrl="https://picsum.photos/id/2/200" flip={true} />;
export const FlippedChidren = () => <Card id="CardF" {...baseObj} imgUrl="https://picsum.photos/id/1001/200" flip={true} >
     <button style={{
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
        }}> child component</button>
  </Card>;
// export const Colorful = () => (
//   <Card
//     id="QRGen"
//     size="150"
//     foreground="red"
//     background="yellow"
//     value={"http://google.com"}
//   />
// );
