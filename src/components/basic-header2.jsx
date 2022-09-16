import React, { Fragment } from "react";
import "../styles/style-component/basic-header.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "./navbar";
import QuickSearsh from "./quick-search";
import SocialIcons from "./social-icons";
import FJWhiteLogo from"../assets/FJWhiteLogo.png";

const BasicHeader2 = (props) => {
  return (
    <Fragment>
        <div
        className="headerImageSlider"
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      >

        <br />
        <Container style={{maxWidth: '3040px'}}><Row>
        <Col lg={1}>
        </Col>
        <Col lg={1}>
        <QuickSearsh />
            <SocialIcons />
        </Col>
        <Col lg={9}>
            <Navbar />
            <br />
            <img src={FJWhiteLogo} alt="This is FJ logo white" />
            <br />
            <br />
            <br />
            <br />
            <p className="p0">{props.headerTitle}</p>
            <br />
            <br />
            <br />
            <br /><br />
            <br />
            <br />
            <br /><br />
            <br />
            <br />
            <br />
           </Col>
        </Row></Container>
      
      </div>
    </Fragment>
  );
};

export default BasicHeader2;
