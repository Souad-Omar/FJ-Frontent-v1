import React, { Fragment } from "react";
import BasicHeader from "../components/basic-header";
import OurProudDivisionsImg from "../assets/OurProudDivisionsImg.png";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-pages/our-proud-divisions.css";
import TextBoxes from "../components/text-boxes";
import TextTitle from "../components/title-type";
import FlagOfIndia from "../assets/ContactUs/FlagOfIndia.jpg";
import FlagOfIraq from "../assets/ContactUs/FlagOfIraq.jpg";
import FlagOfOman from "../assets/ContactUs/FlagOfOman.jpg";
import FlagOfQatar from "../assets/ContactUs/FlagOfQatar.jpg";
import FlagOfSaudiArabia from "../assets/ContactUs/FlagOfSaudiArabia.jpg";
import FlagOfUnitedArabEmirates from "../assets/ContactUs/FlagOfUnitedArabEmirates.jpg";
import a11 from "../assets/ContactUs/11.png";
import AquafloLogo from "../assets/Logos/AquafloLogo.png";
import FJCareLogo from "../assets/Logos/FJCareLogo.png";
import EuroclimaLogo from "../assets/Logos/EuroclimaLogo.png";
import FJEnergy from "../assets/Logos/FJEnergy.png";
import DCServe from "../assets/Logos/DCServe.png";
import MutliplastDubaillcLogo from "../assets/Logos/MutliplastDubaillcLogo.png";
import AlphaDuctsLogo from "../assets/Logos/AlphaDuctsLogo.png";
import FJENGINEERINGTRADING from "../assets/Logos/FJENGINEERINGTRADING.png";
import FJGroupMain from "../assets/Logos/FJGroupMain.png";
import ProMasterLogo from "../assets/Logos/ProMasterLogo.png";

import a21 from "../assets/ContactUs/21.png";
import a31 from "../assets/ContactUs/31.png";
import a41 from "../assets/ContactUs/41.png";
import a51 from "../assets/ContactUs/51.png";
import a52 from "../assets/ContactUs/52.png";
import a61 from "../assets/ContactUs/61.png";
import { Link } from "react-router-dom";
import ArrowArray from "../components/arrowArray";
import {useEffect, useState} from 'react';

const OurProudDivisions = () => {

  const [state, setState] = useState(2);
  const brandsLogo = 
  [FJGroupMain,ProMasterLogo,FJCareLogo,FJGroupMain,FJENGINEERINGTRADING,AlphaDuctsLogo,MutliplastDubaillcLogo,DCServe,FJEnergy,EuroclimaLogo,AquafloLogo
   ];
    function arrowArrayLeft(){
      setState((prevState)=>{
           return prevState=prevState <= 1 ? brandsLogo.length-1: state-1;
  
      });}


  return (
    <Fragment>
      <BasicHeader
        backgroundImage={OurProudDivisionsImg}
        headerTitle={["OUR", "PROUD DIVISIONS"]}
      />

  <div className="bodyContentTexts">

      <div style={{ padding:'20px' }} className="divisionLogoRow1" >

        <div  style={{ width: "20%" }}>
          <img className="flag" src={FlagOfUnitedArabEmirates} alt="" />
</div>
          <div className="vl" style={{ width: "5%" }}></div>
        <div  style={{ width: "60%" }}>
        <div className="divisionLogoRow">
          <div className="divisionLogoCol">
            <img className="divisionLogo"     src={state >= brandsLogo.length ? brandsLogo[0]: brandsLogo[state]}
 alt="" />
          </div>
          <div  className="divisionLogoCol" style={{ width: "20%" }}>
            <img className="divisionLogo"     src={brandsLogo[state-1]}
 alt="" />
          </div>
          <div className="divisionLogoCol">
            <img className="divisionLogo"     src={state <= 1 ? brandsLogo[brandsLogo.length-1]: brandsLogo[state-2]}
 alt="" />
          </div>
          </div>
        </div>   
           </div>

        <Container>
        <Row className="arrowLogos">
    <Col> 
    </Col> <Col>
    </Col>
    <Col> 
    <ArrowArray  directions={"."} arrowArrayLeft={arrowArrayLeft}/>
    </Col>
  </Row> 
   
        </Container>
        <div style={{ padding:'20px' }} className="divisionLogoRow1" >

<div  style={{ width: "20%" }}>
  <img className="flag" src={FlagOfSaudiArabia} alt="" />
</div>
  <div className="vl" style={{ width: "5%" }}></div>
<div  style={{ width: "60%" }}>
<div className="divisionLogoRow">
  <div className="divisionLogoCol">
    <img className="divisionLogo" src={a21} alt="" />
  </div>
  <div  className="divisionLogoCol" style={{ width: "20%" }}>
  </div>
  <div className="divisionLogoCol">
   </div>
  </div>
</div>   
   </div>
   <div style={{ padding:'20px' }} className="divisionLogoRow1" >

<div  style={{ width: "20%" }}>
  <img className="flag" src={FlagOfOman} alt="" />
</div>
  <div className="vl" style={{ width: "5%" }}></div>
<div  style={{ width: "60%" }}>
<div className="divisionLogoRow">
  <div className="divisionLogoCol">
    <img className="divisionLogo" src={a31} alt="" />
  </div>
  <div  className="divisionLogoCol" style={{ width: "20%" }}>
   </div>
  <div className="divisionLogoCol">
   </div>
  </div>
</div>   
   </div>


        <div style={{ padding:'20px' }} className="divisionLogoRow1" >

<div  style={{ width: "20%" }}>
  <img className="flag" src={FlagOfIraq} alt="" />
</div>
  <div className="vl" style={{ width: "5%" }}></div>
<div  style={{ width: "60%" }}>
<div className="divisionLogoRow">
  <div className="divisionLogoCol">
    <img className="divisionLogo" src={a41} alt="" />
  </div>
  <div  className="divisionLogoCol" style={{ width: "20%" }}>
   </div>
  <div className="divisionLogoCol">
   </div>
  </div>
</div>   
   </div>


        <div style={{ padding:'20px' }} className="divisionLogoRow1" >

<div  style={{ width: "20%" }}>
  <img className="flag" src={FlagOfQatar} alt="" />
</div>
  <div className="vl" style={{ width: "5%" }}></div>
<div  style={{ width: "60%" }}>
<div className="divisionLogoRow">
  <div className="divisionLogoCol">
    <img className="divisionLogo" src={a51} alt="" />
  </div>
  <div  className="divisionLogoCol" style={{ width: "20%" }}>
    <img className="divisionLogo" src={a52} alt="" />
  </div>
  <div className="divisionLogoCol">
  </div>
  </div>
</div>   
   </div>

        <div style={{ padding:'20px' }} className="divisionLogoRow1" >

<div  style={{ width: "20%" }}>
  <img className="flag" src={FlagOfIndia} alt="" />
</div>
  <div className="vl" style={{ width: "5%" }}></div>
<div  style={{ width: "60%" }}>
<div className="divisionLogoRow">
  <div className="divisionLogoCol">
    <img className="divisionLogo" src={a61} alt="" />
  </div>
  <div  className="divisionLogoCol" style={{ width: "20%" }}>
  </div>
  <div className="divisionLogoCol">
  </div>
  </div>
</div>   
   </div>

      </div>

      <Footer />
    </Fragment>
  );
};
export default OurProudDivisions;
