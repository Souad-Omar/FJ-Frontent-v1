import React, { Fragment } from "react";
import TextTitleBox from "../components/text-title-box";
import "../styles/style-component/text-boxes.css";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/footer";
import "../styles/style-component/accreditations.css";

import ACCREDITATIONSImg from "../assets/ACCREDITATIONS.jpg";
import Environment from "../assets/airConditioning.png";
import Safety from "../assets/pump.png";
import Health from "../assets/electricMeter.png";
import QUALITY from "../assets/engineer.png";
import BasicHeader from "../components/basic-header";
import ArrowArray from "../components/arrowArray";
import {useEffect, useState} from 'react';

import cerificate1 from "../assets/CerificateACCREDITATIONS/cerificate1.png";
import cerificate2 from "../assets/CerificateACCREDITATIONS/cerificate2.png";
import cerificate3 from "../assets/CerificateACCREDITATIONS/cerificate3.png";
import cerificate4 from "../assets/CerificateACCREDITATIONS/cerificate4.png";
import cerificate5 from "../assets/CerificateACCREDITATIONS/cerificate5.png";
import cerificate6 from "../assets/CerificateACCREDITATIONS/cerificate6.png";
import cerificate7 from "../assets/CerificateACCREDITATIONS/cerificate7.png";
import cerificate8 from "../assets/CerificateACCREDITATIONS/cerificate8.png";
import cerificate9 from "../assets/CerificateACCREDITATIONS/cerificate9.png";
import cerificate10 from "../assets/CerificateACCREDITATIONS/cerificate10.png";
import cerificate11 from "../assets/CerificateACCREDITATIONS/cerificate11.png";
import cerificate12 from "../assets/CerificateACCREDITATIONS/cerificate12.png";
import cerificate13 from "../assets/CerificateACCREDITATIONS/cerificate13.png";
import cerificate14 from "../assets/CerificateACCREDITATIONS/cerificate14.png";
import cerificate15 from "../assets/CerificateACCREDITATIONS/cerificate15.png";
import cerificate16 from "../assets/CerificateACCREDITATIONS/cerificate16.png";
import cerificate17 from "../assets/CerificateACCREDITATIONS/cerificate17.png";
import cerificate18 from "../assets/CerificateACCREDITATIONS/cerificate18.png";
import cerificate19 from "../assets/CerificateACCREDITATIONS/cerificate19.png";


const Accreditations = ({}) => {





  
  const [state, setState] = useState(2);
  const arrayData = [cerificate1,cerificate2,cerificate3,cerificate4,cerificate5,cerificate6,cerificate7,cerificate8,cerificate9,cerificate10,cerificate11,cerificate12,cerificate13,cerificate14,cerificate15,cerificate16,cerificate17,cerificate18,cerificate19];
  function arrowArrayRight(){
    setState((prevState)=>{
         return prevState=prevState >=arrayData.length ? 1: prevState+1;

    });}
    function arrowArrayLeft(){
      setState((prevState)=>{
           return prevState=prevState <= 1 ? arrayData.length-1: state-1;
  
      });}


      const LogoTitle =[
        {id:1,
          imageIcon:QUALITY,
          title:"QUALITY"
      
      },{id:2,
        imageIcon:Health,
        title:"HEALTH"
      
      },{id:3,
        imageIcon:Safety,
        title:"SAFETY"
      
      },{id:4,
        imageIcon:Environment,
        title:"ENVIROMENT"
      
      },
      ]
  const OurFactory = [
    {
      id: 1,
      factoryMainTytle: "AIR-CONDITIONING & AIR-HANDLING UNITS",
      factoryName: "EUROCLIMA MIDDLE EAST",
      text: [
        "Euroclima has been a market and technology leader in the production and worldwide distribution of high-quality climate control units and fan convectors.      ",
        "We develop, produce and market high-end ventilation products from simple convenient applications to solutions in hygiene, and air processing plants along with the use of highly efficient heat recovery systems.        ",
        "Euroclima is an international industrial business operating across 5 production sites in Italy, Austria, India and the United Arab Emirates with over 40,000 squared metres of production sites, as well as an extensive global distribution network with sales and service branches.      ",
      ],
      tel: "+9714 802 4000",
      web: "https://www.euroclima.com",
      address: "Dubai Investment Park 1, Dubai, UAE",
      map: "https://goo.gl/maps/kGT6urQRVMkkugD68",
    },
  ];

  return (
    <Fragment>
      <BasicHeader
        backgroundImage={ACCREDITATIONSImg}
        headerTitle={["ACCREDITATIONS"]}
      />
      <div className="bodyContentTexts">

      <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
              {LogoTitle.map((LogoTitle) => (
                <div className="LogoTitleDiv"  >
              <img src={LogoTitle.imageIcon} className="backgroungimg"/>
                
                  <p className="LogoTitle">{LogoTitle.title}</p>
          </div>
              ))}
          </Col>
          <Col lg={1}></Col>
        </Row>


      <Container style={{ maxWidth: "1110px" }}>
<Row><Col>
      <TextTitleBox title="At FJ Group, we offer the full spectrum of engineering support and are the one-stop solution for all the requirements of MEP products and systems. " /><br />
      <TextTitleBox title="We support our stakeholders right from the concept and design stage to the project execution. In equal measure, we frequently conduct CPDs and technical presentations on various topics with the support of our principals to enhance these initiatives and go the extra mile to make sure your requirements are met.  With that in mind, here are the respective tiers that lead to our respective accreditations." />
      <br /> <TextTitleBox title="QUALITY" />
      <TextTitleBox text="We are committed to maintaining high quality products and services, protecting and improving the environment, and ensuring employee health and safety.  At FJ Group, we believe that the relentless pursuit of quality and continuous improvement is the only long-term route to success.  This is affirmed through the periodic review of our management policies and objectives as they relate to our operations." />
      <TextTitleBox text="Our Quality system is as per ISO 9001:2015 international standards and certified by Gabriel Registrar. We conduct routine internal and external Quality Audits to ensure that our Quality Management System is strictly followed, respected and updated." />

      <br />
      <TextTitleBox title="HEALTH, SAFETY & ENVIRONMENT" />
      <TextTitleBox text="FJ Group incorporates Health, Safety and Environmental (HSE) measures under the form of a mutual objective for the management and employees at all levels and is indeed considered to be a shared responsibility and a duty for each and every one to uphold under the flagship of the Company." />
      <TextTitleBox text="FJ Group has implemented the health, safety, and environment management system at all the facilities that were developed to conform to the ISO 14001:2015 Standard for Environmental Management, as well as to the OHSAS 18001:2007 standards for Occupational Health and Safety. " />
      <br />
      <TextTitleBox title="HSE System Certified by Gabriel Registrar" />
      <TextTitleBox text="Safety responsibilities are clearly defined in employees’ job descriptions, and measured regularly and independently, with rewards for outstanding performance.  FJ Group is committed to building a culture of accountability and a safer work environment for employees, staff, and personnel." />

      </Col></Row></Container> 

<Container>
<Row style={{ marginTop:'350px'}}>
    <Col> 
      <ArrowArray  arrowArrayLeft={arrowArrayLeft} arrowArrayRight={arrowArrayRight}/>
    </Col> <Col>
    </Col>
    <Col> 
      <ArrowArray directions={"."} arrowArrayLeft={arrowArrayLeft} arrowArrayRight={arrowArrayRight}/>
    </Col>
  </Row> 
  <Row className="cerificateRow">
    <Col lg={4} >
    <img
    className="cerificate1"
    src={state >= arrayData.length ? arrayData[0]: arrayData[state]}
            />
    </Col>
    <Col lg={4}>
    <img
    className="cerificate2"
    src={arrayData[state-1]}
            />
    </Col>
    <Col lg={4}>
    <img
    className="cerificate3"
    src={state <= 1 ? arrayData[arrayData.length-1]: arrayData[state-2]}
            />
    </Col>
  </Row>
</Container>
</div>
       <Footer />
    </Fragment>
  );
};

export default Accreditations;
