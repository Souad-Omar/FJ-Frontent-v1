import React, { Fragment } from "react";
import BasicHeader from "../../components/basic-header";
import AboutUsImg from "../../assets/AboutUsImg.jpg";
import Footer from "../../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import map from "../../assets/ContactUs/map.jpg";
import FlagOfIndia from "../../assets/ContactUs/FlagOfIndia.jpg";
import FlagOfIraq from "../../assets/ContactUs/FlagOfIraq.jpg";
import FlagOfOman from "../../assets/ContactUs/FlagOfOman.jpg";
import FlagOfQatar from "../../assets/ContactUs/FlagOfQatar.jpg";
import FlagOfSouthAfrica from "../../assets/ContactUs/FlagOfSouthAfrica1.jpg";
import FlagOfSaudiArabia from "../../assets/ContactUs/FlagOfSaudiArabia.jpg";
import FlagOfUnitedArabEmirates from "../../assets/ContactUs/FlagOfUnitedArabEmirates.jpg";
import TextTitleBox from "../../components/text-title-box";
import ExploreMoreLink from "../../components/explore-more copy";
import { Link } from "react-router-dom";
import a61 from "../../assets/ContactUs/61.png";
import {useEffect, useState} from 'react';
import "../../styles/style-component/accreditations.css";
import "../../styles/style-component/contact-us.css";
import ArrowArray from "../../components/arrowArray";

const India = () => {
  
  const [state, setState] = useState(7);
  const arrayData = [<> <Link to="/ContactUsDetailsPage/UnitedArabEmirates/1">

  <img
    style={{ padding: '20px 10px', filter: "grayscale(100%)", opacity: "0.5" }}
    src={FlagOfUnitedArabEmirates}
    alt=""
  /></Link></>,<><Link to="/ContactUsDetailsPage/SaudiArabia/1">
  <img
    style={{ padding: '20px 10px', filter: "grayscale(100%)", opacity: "0.5" }}
    src={FlagOfSaudiArabia}
    alt=""
  /></Link></>,<>  <Link to="/ContactUsDetailsPage/Oman/1">

  <img
    style={{ padding: '20px 10px', filter: "grayscale(100%)", opacity: "0.5" }}
    src={FlagOfOman}
    alt=""
  /></Link></>,<> <Link to="/ContactUsDetailsPage/Iraq/1">

  <img
    style={{ padding: '20px 10px', filter: "grayscale(100%)", opacity: "0.5" }}
    src={FlagOfIraq}
    alt=""
  /></Link></>,<>  <Link to="/ContactUsDetailsPage/Qatar/1">

  <img
    style={{ padding: '20px 10px', filter: "grayscale(100%)", opacity: "0.5" }}
    src={FlagOfQatar}
    alt=""
  /></Link></>,<> <Link to="/ContactUsDetailsPage/SouthAfrica/1">

  <img
    style={{ padding: '20px 10px', filter: "grayscale(100%)", opacity: "0.5" }}
    src={FlagOfSouthAfrica}
    alt=""
  /></Link></>,<> <Link to="/ContactUsDetailsPage/India/1">

  <img
      style={{ padding: '20px 10px'}}

    src={FlagOfIndia}
    alt=""
  /></Link></>,];
  function arrowArrayRight(){
    setState((prevState)=>{
         return prevState=prevState >=arrayData.length ? 1: prevState+1;

    });}
    function arrowArrayLeft(){
      setState((prevState)=>{
           return prevState=prevState <= 1 ? arrayData.length-1: state-1;
  
      });}
  const contactUs = [
    {
      id: 1,
      logo: a61,
      text: "Raphael Khlat India Private Limited      ",
      fax: "T: +918 7921 00504      ",
      address: "Office No. 2A-3, A Wing, 2nd Floor, Indeevaram, Infopark Thrissur Campus Nalukettu Road, Koratty, Thrissur Kerala State 680308, India ",
      tel: "T: +919 9952 09950      ",
      email: "E: rkindia@fjtco.com      ",
      map,
    },
  ];
  const url = window.location.href.split("/");
  const urlPage = parseInt(url[5]);
  const details = contactUs.map(
    ({ id, logo, text, fax, address, tel, email, map }, idx) => {
      if (id === urlPage) {
        let index = contactUs.findIndex((x) => x.id === id);
        const contacts = [contactUs[index]];

        const next = index + 1 < contactUs.length ? index + 2 : 1;
        const previous = index + 1 > 1 ? index : 6;

        return (
          <>
                  <div className="bodyContentTextsLogo">

          <Container>
<Row style={{ marginTop:'150px'}}>
    <Col> 
      <ArrowArray  arrowArrayLeft={arrowArrayLeft} arrowArrayRight={arrowArrayRight}/>
    </Col> <Col>
    </Col>
    <Col> 
      <ArrowArray directions={"."} arrowArrayLeft={arrowArrayLeft} arrowArrayRight={arrowArrayRight}/>
    </Col>
  </Row> 
  <Row className="flagRow">
    <Col    className="cerificate11"
>{state >= arrayData.length ? arrayData[0]: arrayData[state]}
    </Col>
    <Col   className="cerificate22"
>{arrayData[state-1]}
    </Col>
    <Col   className="cerificate33">
    {state <= 1 ? arrayData[arrayData.length-1]: arrayData[state-2]}
    </Col>
  </Row>
</Container></div>

<div className="contactUsRow">

<div className="contactUsInfo">
  <img src={logo} alt="" />
                  <TextTitleBox title={text} />
                  <TextTitleBox title={fax} />
                  <TextTitleBox title={address} />
                  <TextTitleBox title={tel} />
                  <TextTitleBox title={email} /> 
                    <ExploreMoreLink
                      style="1"
                      buutonText="Let's Talk"
                      link={"/ContactUsForm"}
                    />
                 
</div>
<div className="contactUsMap">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.381490058951!2d55.16617039999999!3d24.9871499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f7291468c6877%3A0xa2e8a061a45d9eb8!2sFaisal%20Jassim%20Trading%20Co.%20(L.L.C.)!5e0!3m2!1sen!2slb!4v1663600650074!5m2!1sen!2slb" width="90%" height="90%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>
</div> 
          </>
        );
      }
    }
  );

  return (
    <Fragment>
      <BasicHeader backgroundImage={AboutUsImg} headerTitle={["CONTACT US","India"]} />
 
        {details}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Fragment>
  );
};
export default India;
