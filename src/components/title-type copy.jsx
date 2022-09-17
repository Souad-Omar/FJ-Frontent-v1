import React, { Fragment } from "react";
import "../styles/style-component/title-type.css";

const TextTitle = ({ textTitle }) => {
  const textTitle1 = textTitle.map(({ style, text }, idx) => {
    if (style==='1'){
      return (
          <p className="title">{text}</p>
      ) 
    }
    else if (style==='2'){
      return (
          <p >{text}</p>
      ) }
});

  return <Fragment>{textTitle1}</Fragment>;
};

export default TextTitle;
