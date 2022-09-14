import React, { Fragment } from "react";
import "../styles/style-component/MEPS.css";
import { Col, Row, Container } from "react-bootstrap";

const MEPS = () => {
  return (
    <Fragment>
<Container style={{maxWidth: '1040px'}}><Row><Col>

<div className="MEPSStyle">
            <p  className="MPESChar">M</p>
            <p className="titleLink"> MECHANICAL</p>
        </div> 
        </Col><Col>
        <div className="MEPSStyle">
            <p  className="MPESChar">E</p>
            <p className="titleLink"> ELECTRICAL</p>
        </div><br />
        </Col>
        
        <Col>
        <div className="MEPSStyle">
            <p  className="MPESChar">P</p>
            <p className="titleLink"> PLUMPING</p>
        </div> <br />
        </Col><Col>
        
        <div className="MEPSStyle">
            <p  className="MPESChar">S</p>
            <p className="titleLink">SERVICES</p>
        </div>
        </Col></Row></Container>

    </Fragment>
  );
};

export default MEPS;
