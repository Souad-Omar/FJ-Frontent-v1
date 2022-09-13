import React, { Fragment } from "react";
import "../styles/style-component/text-boxes.css";

const TextBoxes = ({ textParagraph }) => {
  const paragraph = textParagraph.map(({ style, text }, idx) => (
    <p className="paragraph1">{text}</p>
  ));
  return <Fragment>{paragraph}</Fragment>;
};

export default TextBoxes;
