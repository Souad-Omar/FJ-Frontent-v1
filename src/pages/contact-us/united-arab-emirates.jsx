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
import MutliplastDubaillcLogo from "../../assets/Logos/MultiplastDubailogo.PNG";
import FJGroupMain from "../../assets/Logos/FJGroupMain.png";
import FJENGINEERINGTRADING from "../../assets/Logos/FJENGINEERINGTRADING.png";
import FJEnergy from "../../assets/Logos/FJEnergy.jpg";
import FJCareLogo from "../../assets/Logos/FJCareLogo.jpg";
import EuroclimaLogo from "../../assets/Logos/EuroclimaLogo.png";
import DCServe from "../../assets/Logos/DCServe.png";
import AlphaDuctsLogo from "../../assets/Logos/AlphaDuctsLogo.png";

import FlagOfUnitedArabEmirates from "../../assets/ContactUs/FlagOfUnitedArabEmirates.jpg";
import TextTitleBox from "../../components/text-title-box";
import ExploreMoreLink from "../../components/explore-more copy";
import { Link } from "react-router-dom";

import {useEffect, useState} from 'react';
import "../../styles/style-component/accreditations.css";
import "../../styles/style-component/contact-us.css";
import ArrowArray from "../../components/arrowArray";
const UnitedArabEmirates = () => {
 
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(1);
  const arrayData = [<> <Link to="/ContactUsDetailsPage/UnitedArabEmirates/1">

  <img
    style={{ padding: '20px 10px'}}
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
      style={{ padding: '20px 10px', filter: "grayscale(100%)", opacity: "0.5" }}

    src={FlagOfIndia}
    alt=""
  /></Link></>,];


  const arrayLogoData = [
    <>
    <Link to="/ContactUsDetailsPage/UnitedArabEmirates/1">
  
  <img
  style={{ height:"150px"}}
  src={MutliplastDubaillcLogo}
    alt=""
  /></Link>
  
  
    </>,<>
  <Link to="/ContactUsDetailsPage/UnitedArabEmirates/2">

<img
    style={{ height:"150px"}}
  src={FJCareLogo}
  alt=""
/></Link>


  </>,<>
  <Link to="/ContactUsDetailsPage/UnitedArabEmirates/3">

<img
    style={{ height:"150px"}}
  src={MutliplastDubaillcLogo}
  alt=""
/></Link>


  </>,<>
  <Link to="/ContactUsDetailsPage/UnitedArabEmirates/4">

<img
    style={{ height:"100px"}}
  src={FJEnergy}
  alt=""
/></Link>


  </>,<>
  <Link to="/ContactUsDetailsPage/UnitedArabEmirates/5">

<img
    style={{ height:"150px"}}
  src={DCServe}
  alt=""
/></Link>


  </>,<>
  <Link to="/ContactUsDetailsPage/UnitedArabEmirates/6">

<img
    style={{ height:"150px"}}
  src={EuroclimaLogo}
  alt=""
/></Link>


  </>,<>
  <Link to="/ContactUsDetailsPage/UnitedArabEmirates/7">

<img
    style={{ height:"100px"}}
  src={FJENGINEERINGTRADING}
  alt=""
/></Link>


  </>,<>
  <Link to="/ContactUsDetailsPage/UnitedArabEmirates/8">

<img
  style={{ padding: '20px 10px'}}
  src={FJGroupMain}
  alt=""
/></Link>


  </>,];
  function arrowArrayRight(){
    setState((prevState)=>{
         return prevState=prevState >=arrayData.length ? 1: prevState+1;

    });}
    function arrowArrayLeft(){
      setState((prevState)=>{
           return prevState=prevState <= 1 ? arrayData.length-1: state-1;
  
      });}function arrowArrayRight2(){
        setState2((prevState)=>{
             return prevState=prevState >=arrayLogoData.length ? 1: prevState+1;
    
        });}
        function arrowArrayLeft2(){
          setState2((prevState)=>{
               return prevState=prevState <= 1 ? arrayLogoData.length-1: state2-1;
      
          });}
      const contactUs = [
        {
          id: 1,
          logo: MutliplastDubaillcLogo,
          text: "Alpha Ducts LLC Jebel Ali Industrial Area",
          fax: "P.O. Box 336769  ",
          address: "Dubai, UAE  ",
          tel: "T: +9714 272 4715  ",
          email: "E: info@alphaducts.com  ",
          map,
        },
        {
          id: 2,
          logo: FJCareLogo,
          text: "FJCare Technical Services LLC Tecom, DAMAC Smart Heights",
          fax: "P.O. Box. 113824 Dubai, UAE      ",
          address: "Barsha Heights, 8th Floor      ",
          tel: "T: +9714 258 2640      ",
          email: "E: enquiries@fjcare.com      ",
          map,
        },
        {
          id: 3,
          logo: MutliplastDubaillcLogo,
          text: "MULTIPLAST DUBAI L.L.C.      ",
          fax: "P.O. Box: 128132, Dubai, UAE      ",
          address: "4c Sana’a Street, Al Aweer Industrial Area      ",
          tel: "Tel: +9714 333 8666      ",
          email: "Email: info@multiplastdubai.ae      ",
          map,
        },
        {
          id: 4,
          logo: FJEnergy,
          text: "Future Journey Energy Solutions LLC Faisal Jassim Trading, (Main Branch)",
          fax: "P.O. Box: 1871, Dubai, UAE      ",
          address: "Dubai Investment Park-1, Plot: 598-1152      ",
          tel: "T: +9714 810 5105      ",
          email: "E: info@fjenergysolutions.com      ",
          map,
        },
        {
          id: 5,
          logo: DCServe,
          text: "DCServe Equipment Trading LLC Faisal Jassim Trading, (Main Branch)",
          fax: "P.O. Box: 1871, Dubai, UAE      ",
          address: "Dubai Investment Park-1, Plot: 598-1152      ",
          tel: "T: +9714 810 5105      ",
          email: "E: dcserve@fjtco.com      ",
          map,
        },
        {
          id: 6,
          logo: EuroclimaLogo,
          text: "Euroclima Middle East Central Air Conditioning Equipment Manufacturing L.L.C",
          fax: "P.O. Box: 119870, Dubai Investment Park 1      ",
          address: "Dubai, UAE      ",
          tel: "T: +9714 802 4000      ",
          email: "E: eumeinfo@euroclima.com      ",
          map,
        },
        {
          id: 7,
          logo: FJENGINEERINGTRADING,
          text: "Faisal Jassim Trading Co. LLC      ",
          fax: "P.O. Box: 106368, Abu Dhabi, UAE      ",
          address: "Al Nasr Street, Al Hosn Tower, Office 202      ",
          tel: "T: +9712 6219 772      ",
          email: "E: fjtauh@emirates.net.ae      ",
          map,
        },
        {
          id: 8,
          logo: FJGroupMain,
          text: "Faisal Jassim Trading Co. LLC      ",
          fax: "P.O. Box: 1871, Dubai, UAE      ",
          address: "Dubai Investment Park-1, Plot: 598-1152      ",
          tel: "T: +9714 810 5105      ",
          email: "E: fjtrdg@emirates.net.ae      ",
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

<div className="bodyContentTextsLogo">

          <Container>
<Row style={{ marginTop:'150px'}}>
    <Col> 
      <ArrowArray  arrowArrayLeft={arrowArrayLeft2} arrowArrayRight={arrowArrayRight2}/>
    </Col> <Col>
    </Col>
    <Col> 
      <ArrowArray directions={"."} arrowArrayLeft={arrowArrayLeft2} arrowArrayRight={arrowArrayRight2}/>
    </Col>
  </Row> 
  <Row className="flagRow">
    <Col    className="cerificate11"
>{state2 >= arrayLogoData.length ? arrayLogoData[0]: arrayLogoData[state2]}
    </Col>
    <Col   className="cerificate22"
>{arrayLogoData[state2-1]}
    </Col>
    <Col   className="cerificate33">
    {state2 <= 1 ? arrayLogoData[arrayLogoData.length-1]: arrayLogoData[state2-2]}
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
      <BasicHeader backgroundImage={AboutUsImg} headerTitle={["CONTACT US","UnitedArabEmirates"]} />
 
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
export default UnitedArabEmirates;
