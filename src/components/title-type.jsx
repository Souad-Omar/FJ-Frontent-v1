import React, { Fragment } from "react";
import "../styles/style-component/title-type.css";

const TextTitle = ({ textTitle }) => {
  const textTitle1 = textTitle.map(({ style, text }, idx) => (
    <p className="title">{text}</p>
  ));
  return <Fragment>{textTitle1}</Fragment>;
};

export default TextTitle;
