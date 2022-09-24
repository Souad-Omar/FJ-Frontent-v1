import React, { Fragment } from "react";
 import { Col, Row, Container } from "react-bootstrap";
import Navbar from "./navbar";
import QuickSearsh from "./quick-search";
import SocialIcons from "./social-icons";
import FJWhiteLogo from"../assets/FJWhiteLogo.png";
 import "../styles/style-component/custom-header.css";

const CustomHeader = (props) => {
  
  return (
    <Fragment>
        <div
        className="headerImageSlider"
        style={{
          backgroundImage: `url(${props.backgroundImage})`
        }}
      >
<div className="charHeader">
        <div className="headerSize">
          <div className="MPESHeaderChar">

            {props.charHeader}          </div>
          </div> </div>
          <div className="iconsMEPSMain">

          <QuickSearsh />
            <SocialIcons />
          </div>
          <div className="header"> 
             <Navbar />
             <div id="header">

             <img className="logoImg" src={FJWhiteLogo} alt="This is FJ logo white" />
             <br />
              <br />
             <p className="p00">{props.headerTitle}</p>
 </div>
          </div>
      
      </div>
    </Fragment>
  );
};

export default CustomHeader;
