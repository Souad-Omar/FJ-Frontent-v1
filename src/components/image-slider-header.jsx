import React, { Fragment } from "react";
import "../styles/style-component/image-slider-header.css";
import HomeHeader from "./home-header";
import HeaderImg1 from "../assets/HeaderImg1.jpg";
import HeaderImg2 from "../assets/HeaderImg2.jpg";
import HeaderImg3 from "../assets/HeaderImg3.jpg";
import ImageSlider1 from "../assets/ImageSlider1.png";
import ImageSlider2 from "../assets/ImageSlider2.png";
import ImageSlider3 from "../assets/ImageSlider3.png";

const imageArray = [HeaderImg1, HeaderImg2, HeaderImg3];
const ImageSliderArray = [ImageSlider1, ImageSlider2, ImageSlider3];

const ImageSliderHeader = () => {
  return (
    <Fragment>
      <div
        className="headerImageSlider"
        style={{
          backgroundImage: `url(${imageArray[0]})`,
        }}
      >
        <HomeHeader />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />      </div>
      <br />
    </Fragment>
  );
};

export default ImageSliderHeader;
