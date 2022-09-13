import React, { Fragment } from "react";
import "../styles/style-component/image-slider-header.css";
import BasicHeader from "./basic-header";
import HeaderImg1 from "../assets/HeaderImg1.jpg";
import HeaderImg2 from "../assets/HeaderImg2.jpg";
import HeaderImg3 from "../assets/HeaderImg3.jpg";
import ImageSlider1 from "../assets/ImageSlider1.png";
import ImageSlider2 from "../assets/ImageSlider2.png";
import ImageSlider3 from "../assets/ImageSlider3.png";
import TextBoxes from "./text-boxes";

const imageArray = [HeaderImg1, HeaderImg2, HeaderImg3];
const ImageSliderArray = [ImageSlider1, ImageSlider2, ImageSlider3];
const paragraphs =[{ 
  style:"paragraphStyle1",
  text:"With laurels and numerous commercial touchpoints and projects accomplished in the building services industry, FJ Group’s strive continues to be in strategic partnerships and leading in all fronts in regard to MEP."
},{
  style:"",
  text:"Synonymous with the best in the MEP Industry since its inception in 1988, we at FJ Group specialize in the engineering, manufacturing, and trading of products and systems in the electrical and mechanical fields related to the building services industry.  FJ Group supports each stage of the process through pre-production, meticulous planning, on-going collaboration, and professional & timely implementation.   "
},{
  style:"",
  text:"Today, and as a market leader, we have earned a reputation for expertise and excellence, employing in excess of 1,000 qualified staff within facilities exceeding 35,000 m2. As we continue to focus on our dedicated specialization, we have ensured that we bring in the world’s best manufacturers to the Region to operate and deliver MEP solutions across many divergent sectors and offer full turnkey solutions."
},{
  style:"",
  text:"In fact, we are exceptionally proud to be UAE-based and serving the region and the world from a country we call home, and since the very beginning, we have been persistent in serving the building services industry locally and regionally with dedication and commitment. As our organization continues to expand and grow, we continue to be driven by a robust foundation, a vivid vision, commitment, and a determined promise: to strive to be better, serve better and maintain the level of excellence FJ Group has come to be synonymous with.  "
},
]
const ImageSliderHeader = () => {
  return (
    <Fragment>
      <div
        className="headerImageSlider"
        style={{
          backgroundImage: `url(${imageArray[0]})`,
        }}
      >
        <BasicHeader />
        <img className="imageSlider" src={ImageSliderArray[2]} />
      </div>
      <br />
      <br />
      <br />



      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
<TextBoxes textParagraph={paragraphs} />
 
          
        </div>
        <div className="col-3"></div>
      </div>

    </Fragment>
  );
};

export default ImageSliderHeader;
