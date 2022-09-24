import React, { Fragment } from "react";
import "../styles/style-component/ME.css";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MEPDinfo = [
  { id: 1, url: "/MechanicalMain", char: "M", title: "MECHANICAL" },
  { id: 2, url: "/ElectricalMain", char: "E", title: "ELECTRICAL" },
  { id: 3, url: "/PlumbingMain", char: "P", title: "PLUMPING" },
  { id: 4, url: "/ServicesMain", char: "S", title: "SERVICES" },
];
const ME = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <div className="MEPSDiv">
              {MEPDinfo.map((MEPDInfo) => (
                <div className="MEPSStyle">
                  <Link
                    to={MEPDInfo.url}
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    style={{ textDecoration: "inherit" }}
                  >
                    <p className="MPESChar">{MEPDInfo.char}</p>
                    <p className="titleLink">{MEPDInfo.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ME;
