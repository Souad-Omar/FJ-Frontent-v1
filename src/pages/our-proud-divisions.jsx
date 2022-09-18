import React, { Fragment } from "react";
import BasicHeader2 from "../components/basic-header2";
import OurProudDivisionsImg from "../assets/OurProudDivisionsImg.png";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import TextBoxes from "../components/text-boxes";
import TextTitle from "../components/title-type";
import FlagOfIndia from "../assets/ContactUs/FlagOfIndia.jpg";
import FlagOfIraq from "../assets/ContactUs/FlagOfIraq.jpg";
import FlagOfOman from "../assets/ContactUs/FlagOfOman.jpg";
import FlagOfQatar from "../assets/ContactUs/FlagOfQatar.jpg";
import FlagOfSaudiArabia from "../assets/ContactUs/FlagOfSaudiArabia.jpg";
import FlagOfUnitedArabEmirates from "../assets/ContactUs/FlagOfUnitedArabEmirates.jpg";
import a11 from "../assets/ContactUs/11.png";
import a12 from "../assets/ContactUs/12.png";
import a13 from "../assets/ContactUs/13.png";
import a21 from "../assets/ContactUs/21.png";
import a31 from "../assets/ContactUs/31.png";
import a41 from "../assets/ContactUs/41.png";
import a51 from "../assets/ContactUs/51.png";
import a52 from "../assets/ContactUs/52.png";
import a61 from "../assets/ContactUs/61.png";
import { Link } from "react-router-dom";

const OurProudDivisions = () => {
  return (
    <Fragment>
      <BasicHeader2 backgroundImage={OurProudDivisionsImg} headerTitle={"OUR PROUD DIVISIONS"} />
      
      <br />
            <br />
            <br />
            <Container style={{ maxWidth: "2040px" }}>
            <Row><Col lg={3}>  
                   <img src={FlagOfUnitedArabEmirates} alt="" />
              </Col><Col><img src={a11} alt="" /></Col><Col><img src={a12} alt="" /></Col><Col><img src={a13} alt="" /></Col></Row> <br />
            <br />
            <br />
            <Row><Col lg={3}><img src={FlagOfSaudiArabia} alt="" /></Col><Col><img src={a21} alt="" /></Col><Col></Col><Col></Col></Row> <br />
            <br />
            <br />
            <Row><Col lg={3}><img src={FlagOfOman} alt="" /></Col><Col><img src={a41} alt="" /></Col><Col></Col><Col></Col></Row> <br />
            <br />
            <br />
            <Row><Col lg={3}><img src={FlagOfIraq} alt="" /></Col><Col><img src={a41} alt="" /></Col><Col></Col><Col></Col></Row> <br />
            <br />
            <br />
            <Row><Col lg={3}><img src={FlagOfQatar} alt="" /></Col><Col><img src={a51} alt="" /></Col><Col><img src={a52} alt="" /></Col><Col></Col></Row> <br />
            <br />
            <br />
            <Row><Col lg={3}><img src={FlagOfIndia} alt="" /></Col><Col><img src={a61} alt="" /></Col><Col></Col><Col></Col></Row> <br />
            <br />
            <br />
            
            
            </Container>
            <br />
            <br />
            <br />
      <Footer />
    </Fragment>
  );
};
export default OurProudDivisions;
