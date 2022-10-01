import React, { Fragment } from "react";
import "../styles/style-component/text-title-box-products.css";

const TextTitleBoxProducts = (props) => { 


  return <Fragment>
  <p className="textBoxW" style={{ fontWeight: "bold" }} >{props.title}</p>
  <p className="textBoxW">{props.text}</p></Fragment>;
};

export default TextTitleBoxProducts;
