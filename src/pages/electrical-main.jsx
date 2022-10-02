import React, { Fragment } from "react";
import CustomHeader from "../components/custom-header";
import ELECTRICAL from "../assets/ELECTRICAL.jpg";
import E1 from "../assets/E1.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/page-info.css";
import "../styles/style-component/accreditations.css";

import "../styles/style-component/miniDrobdownList.css";
import MiniDrobdownList from "../components/miniDrobdownList";
import BUSBARPOWERBARGULFVERTIV from "../assets/e/BUSBARPOWERBARGULF&VERTIV.jpg"
import ELECTRICALSWITCHGEARCONTROLS from "../assets/e/ELECTRICALSWITCHGEAR&CONTROLS.jpg"
import PVCELECTRICALCONDUITACCESSORIES from "../assets/e/PVCELECTRICALCONDUIT&ACCESSORIES.jpg"
import TextBoxes from "../components/text-boxes";
import CustomSubHeader from "../components/custom-sub-header";
import ArrowArray from "../components/arrowArray";
import {useEffect, useState} from 'react';


const MInfo = [
    {
      id: "",
  
      style: "paragraph3",
      text: "FJ Group specializes in the engineering, manufacturing, and trading of products and systems, in the electrical and mechanical fields related to the building services industry. Today, we have earned a respected reputation of expertise and excellence, employing in excess of 1,000 qualified staff with facilities exceeding 25,000 m2. Our organization continues to expand and grow, driven by our vision, as we invest into our diverse specializations in the MEP industry, we have ensured that we bring in the world’s best manufacturers to the Region. Today, we are a group of enterprises having interest in several diversified strategic business segments across the region while upholding the same values and principles of our flagship entity.  Below is a listing of our product-lines in the electrical sector.",
    },
  ];
const BUSBARPOWERBARGULFVERTIVinfo = [
    {
      ELECTRICALImg: BUSBARPOWERBARGULFVERTIV,
      ELECTRICALTitle: "BUSBAR - POWERBAR GULF & VERTIV",
      list: "BUSBAR TRUNKING",
      url: "/ElectricalSubPages/1",
    },
  ];
  const ELECTRICALSWITCHGEARCONTROLSinfo = [
    {
        ELECTRICALImg: ELECTRICALSWITCHGEARCONTROLS,
      ELECTRICALTitle: "ELECTRICAL SWITCHGEAR & CONTROLS",
      list: "PROMASTER",
      url: "/ElectricalSubPages/5",
    },{
        ELECTRICALImg: ELECTRICALSWITCHGEARCONTROLS,
      ELECTRICALTitle: "ELECTRICAL SWITCHGEAR & CONTROLS",
      list: "PROMASTER AUTOMATION PANELS",
      url: "/ElectricalSubPages/6",
    },{
        ELECTRICALImg: ELECTRICALSWITCHGEARCONTROLS,
      ELECTRICALTitle: "ELECTRICAL SWITCHGEAR & CONTROLS",
      list: "SWITCHGEAR & CONTROL PANELS",
      url: "/ElectricalSubPages/4",
    },{
        ELECTRICALImg: ELECTRICALSWITCHGEARCONTROLS,
      ELECTRICALTitle: "ELECTRICAL SWITCHGEAR & CONTROLS",
      list: "PRODUCTION PLANNING & CONTROL",
      url: "/ElectricalSubPages/3",
    },{
        ELECTRICALImg: ELECTRICALSWITCHGEARCONTROLS,
      ELECTRICALTitle: "ELECTRICAL SWITCHGEAR & CONTROLS",
      list: "AFTER SALES SUPPORT",
      url: "/ElectricalSubPages/2",
    },
  ];
  const PVCELECTRICALCONDUITACCESSORIESinfo = [
    {
        ELECTRICALImg: PVCELECTRICALCONDUITACCESSORIES,
      ELECTRICALTitle: "PVCELECTRICAL CONDUIT & ACCESSORIES",
      list: "Multiplast Dubai LLC",
      url: "/ElectricalSubPages/7",
    },
  ];
  const MTitle = [
    {
      style: "1",
      text: "",
    },
  ];
const ElectricalMain = () => {

  const [state, setState] = useState(2);
  const arrayData = [<><div className="dropdown">
  <img className="Products" src={PVCELECTRICALCONDUITACCESSORIES} alt="" />
  <br />
  <br />
  <br />
  <p
    style={{
      textAlign: "justify",
      textAlign: 'center',
      fontFamily: "Montserrat",
      fontSize: "20px",
      color: "black",
      fontWeight: "light",
    }}
  >
    {PVCELECTRICALCONDUITACCESSORIESinfo[0].ELECTRICALTitle}
  </p>
  <div className="dropdown-content">
    <MiniDrobdownList miniList={PVCELECTRICALCONDUITACCESSORIESinfo} />
  </div>
</div></>,
<><div className="dropdown">
              <img className="Products" src={ELECTRICALSWITCHGEARCONTROLS} alt="" />
              <br />
              <br />
              <br />
              <p
                style={{
                  textAlign: "justify",
                  textAlign: 'center',
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "light",
                }}
              >
                {ELECTRICALSWITCHGEARCONTROLSinfo[0].ELECTRICALTitle}
              </p>
              <div className="dropdown-content">
                <MiniDrobdownList miniList={ELECTRICALSWITCHGEARCONTROLSinfo} />
              </div>
            </div>
</>,
<><div className="dropdown">
              <img className="Products" src={BUSBARPOWERBARGULFVERTIV} alt="" />
              <br />
              <br />
              <br />
              <p
                style={{
                  textAlign: "justify",
                  textAlign: 'center',
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "light",
                }}
              >
                {BUSBARPOWERBARGULFVERTIVinfo[0].ELECTRICALTitle}
              </p>
              <div className="dropdown-content">
                <MiniDrobdownList miniList={BUSBARPOWERBARGULFVERTIVinfo} />
              </div>
            </div>
</>

];
  function arrowArrayRight(){
    setState((prevState)=>{
         return prevState=prevState >=arrayData.length ? 1: prevState+1;

    });}
    function arrowArrayLeft(){
      setState((prevState)=>{
           return prevState=prevState <= 1 ? arrayData.length-1: state-1;
  
      });}
  return (
    <Fragment>
      <CustomHeader backgroundImage={ELECTRICAL} headerTitle={"ELECTRICAL"}  charHeader={"E"}  />
      <CustomSubHeader backgroundImage={ELECTRICAL} headerTitle={"PLUMPING"}  charHeader={"P"} text={MInfo} title={MTitle}/>

     




      
<Container>
<Row style={{ marginTop:'350px'}}>
    <Col> 
      <ArrowArray  arrowArrayLeft={arrowArrayLeft} arrowArrayRight={arrowArrayRight}/>
    </Col> <Col>
    <Col> 
      <ArrowArray directions={"."} arrowArrayLeft={arrowArrayLeft} arrowArrayRight={arrowArrayRight}/>
    </Col>
    </Col>
  </Row> 
  <Row className="productRow">
    <Col lg={4}     className="cerificate11"
>{state >= arrayData.length ? arrayData[0]: arrayData[state]}
    </Col>
    <Col lg={4}    className="cerificate22"
>{arrayData[state-1]}
    </Col>
    <Col lg={4}     className="cerificate33">
    {state <= 1 ? arrayData[arrayData.length-1]: arrayData[state-2]}
    </Col>
  </Row>
</Container>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Fragment>
  );
};
export default ElectricalMain;
