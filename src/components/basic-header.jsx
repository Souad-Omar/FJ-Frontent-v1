import React, { Fragment } from "react";
import "../styles/style-component/basic-header.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "./navbar";
import QuickSearsh from "./quick-search";
import SocialIcons from "./social-icons";
import FJWhiteLogo from"../assets/FJWhiteLogo.png";

const BasicHeader = (props) => {
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

             <img className="logoImg" src={FJWhiteLogo} alt="This is FJ logo white" />
             <br />
              <br />
              {props.headerTitle.map((text) => (<>
              <p className="p00">{text}</p>
              </>
                  ))}
 
          </div>
      
      </div>
    </Fragment>
  );
};

export default BasicHeader;
