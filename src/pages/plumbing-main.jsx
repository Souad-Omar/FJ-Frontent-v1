import React, { Fragment } from "react";
import "../styles/style-component/image-slider-header.css";
import Arrow from "./../components/arrow";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/footer";
import RaphaelKhlatPresidentImage from "../assets/RaphaelKhlatPresidentImage.jpg";
import CustomHeader from "../components/custom-header";


const PlumbingMain = () => {
  return (
    <Fragment>
      <CustomHeader />
      <Container>
        <Row>
          <Col></Col>
          <Col sm={9} lg={10}>
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <br />
            <br />
          </Col>
          <Col lg={4}></Col>
        </Row>

        <Row>
          <Col lg={6}>
            <br />
            <br />
          </Col>
          <Col lg={6}>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default PlumbingMain;
