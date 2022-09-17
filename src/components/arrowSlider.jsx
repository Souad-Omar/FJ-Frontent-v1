import React, { Fragment } from "react";
import "../styles/style-component/arrow.css";
const ArrowSlider = ({ props }) => {
  const curent = props.brandsLogo.length/2;
  const next = curent < props.brandsLogo.length ? curent + 1 : 0;
  const previous = curent - 1 < 0 ?  props.brandsLogo.length -1 : curent - 1;
  return <Fragment><p>A</p></Fragment>;
};

export default ArrowSlider;
