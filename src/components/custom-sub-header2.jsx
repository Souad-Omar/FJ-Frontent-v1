import React, { Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "./navbar";
import QuickSearsh from "./quick-search";
import SocialIcons from "./social-icons";
import FJWhiteLogo from "../assets/FJWhiteLogo.png";
import "../styles/style-component/custom-sub-header2.css";
import TextBoxes from "./text-boxes";
import TextTitle from "./title-type";

const CustomSubHeader2 = (props) => {
    
  return (
    <Fragment>
   

      








      <div className="subHeader">
      <div
        className="subDataHeader2"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
      </div><div
        className="subDataHeader2Color"
      ><div className="subMPESHeaderChar">

            A         </div>
      </div>
        <div
          className="textDivSubHeader"
        >
          <div className="subHeaderSize">

          </div>
          <div className="textSubPage">
          <TextTitle textTitle={props.title} />

            <TextBoxes textParagraph={props.text} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomSubHeader2;
