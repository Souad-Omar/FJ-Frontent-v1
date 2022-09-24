import React, { Fragment } from "react";
import "../styles/style-component/basic-header.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "./navbar";
import QuickSearsh from "./quick-search";
import SocialIcons from "./social-icons";
import FJWhiteLogo from"../assets/FJWhiteLogo.png";

const HomeHeader = (props) => {
  
  return (
    <Fragment>
      
        <div
        className="headerImageSlider"
        style={{
          backgroundImage: `url(${props.backgroundImage})`
        }}
      >
<div className="iconsHeader">
        <div className="headerSize">
          
          <QuickSearsh />
            <SocialIcons />
          </div> </div>
          <div className="header">
 
             
             <Navbar />
             <div id="header">

             <img className="logoImg" src={FJWhiteLogo} alt="This is FJ logo white" />
             <br /><br /><br />
            <p className="p00">STRONG <span style={{fontWeight: 'bold'}}>FOUNDATIONS</span></p>
            <p className="p00">HIGH <span style={{fontWeight: 'bold'}}>AMBITIONS</span></p>
             <p className="p2" >THE REFERENCE POINT IN <span style={{fontWeight: 'bold'}}>MEP</span></p>
             </div>
       
          </div>
      
      </div>
    </Fragment>
  );
};

export default HomeHeader;
