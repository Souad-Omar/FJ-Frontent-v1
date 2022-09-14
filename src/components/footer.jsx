import React, { Fragment } from "react";
import "../styles/style-component/footer.css";
import { Col, Row, Container } from "react-bootstrap";
import MEPS from "./MEPS";
import FJLogo from "../assets/FJLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <MEPS />
            </Col>
          </Row>        </Container>
          <br />                <br /><br />
          <Container style={{maxWidth: '2040px'}}>
          <Row>
            <Col lg={1}>
              <img style={{width:"174px", height:"90px"}} src={FJLogo} alt="this is car image" />
            </Col><Col lg={7}></Col>
            <Col>
            <br />   <br />  
            <Link to="" className={"navbarFooter"}>Home</Link>
        <Link to="/AboutUs" className={"navbarFooter"}>About us</Link>
        <Link to="/OurProudDivisions" className={"navbarFooter"}>Divisions</Link>
        <Link to="/OurProducts" className={"navbarFooter"}>Products</Link>
        <Link to="/OurFactoriesMain" className={"navbarFooter"}>Factories</Link>
        <Link to="/News" className={"navbarFooter"}>News</Link>
        <Link to="/Accreditations" className={"navbarFooter"}>Accreditations</Link>
        <Link to="/ContactUsDetailsPage" className={"navbarFooter"}>Contact us</Link>

            </Col>
          </Row><br /><br />
          <Row><Col lg={4}><p className="footerText">Strong Foundations - High Ambitions </p></Col><Col lg={8}><p style={{textAlign:'right'}} className="footerText">Copyright©Papillon Communications, 2022. All rights reserved</p></Col></Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Footer;
