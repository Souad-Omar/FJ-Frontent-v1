import React, { Fragment } from "react";
import "../styles/style-component/text-title-box.css";

const TextTitleBox = (props) => { 


  return <Fragment>
  <p className="textBox" style={{ fontWeight: "bold" }} >{props.title}</p>
  <p className="textBox">{props.text}</p></Fragment>;
};

export default TextTitleBox;
