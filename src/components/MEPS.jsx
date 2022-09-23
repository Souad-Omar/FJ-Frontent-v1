import React, { Fragment } from "react";
import "../styles/style-component/MEPS.css";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MEPS = () => {
  return (
    <Fragment>
      <Container style={{ maxWidth: "1040px" }}>
        <Row>
          <Col>
            <Link to="/MechanicalMain" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{ textDecoration: "inherit" }}>
              <div className="MEPSStyle">
                <p className="MPESChar">M</p>
                <p className="titleLink"> MECHANICAL</p>
              </div>
            </Link>
          </Col>
          <Col>
            <Link to="/ElectricalMain" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{ textDecoration: "inherit" }}>
              <div className="MEPSStyle">
                <p className="MPESChar">E</p>
                <p className="titleLink"> ELECTRICAL</p>
              </div>
            </Link>

            <br />
          </Col>

          <Col>
            {" "}
            <Link to="/PlumbingMain" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{ textDecoration: "inherit" }}>
              <div className="MEPSStyle">
                <p className="MPESChar">P</p>
                <p className="titleLink"> PLUMPING</p>
              </div>
            </Link>
            <br />
          </Col>
          <Col>
            {" "}
            <Link to="/ServicesMain" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{ textDecoration: "inherit" }}>
              <div className="MEPSStyle">
                <p className="MPESChar">S</p>
                <p className="titleLink">SERVICES</p>
              </div>{" "}
            </Link>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default MEPS;
