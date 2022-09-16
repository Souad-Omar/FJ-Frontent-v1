import React, { Fragment } from "react";
import "../styles/style-component/basic-header.css";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "./navbar";
import QuickSearsh from "./quick-search";
import SocialIcons from "./social-icons";
import FJWhiteLogo from"../assets/FJWhiteLogo.png";

const BasicHeader = () => {
  return (
    <Fragment>
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
            <p className="p0">STRONG <span style={{fontWeight: 'bold'}}>FOUNDATIONS</span></p>
            <p className="p0">HIGH <span style={{fontWeight: 'bold'}}>AMBITIONS</span></p>
            <br />
            <p className="p2" >THE REFERENCE POINT IN <span style={{fontWeight: 'bold'}}>MEP</span></p>
        </Col>
        </Row></Container>
      
    </Fragment>
  );
};

export default BasicHeader;
