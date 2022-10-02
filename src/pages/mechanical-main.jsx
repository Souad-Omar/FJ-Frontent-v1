import React, { Fragment } from "react";
import CustomHeader from "../components/custom-header";
import Mechanical from "../assets/Mechanical.jpg";
import M1 from "../assets/M1.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/page-info.css";
import TextBoxes from "../components/text-boxes";
import "../styles/style-component/miniDrobdownList.css";
import VentilationEquipment from "../assets/m/VENTILATIONEquipment.jpg";
import Pumps from "../assets/m/PumpSSYSTEMS.jpg";
import AIRHANDLING from "../assets/m/AIRHANDLINGUNITSFANCOILUNITS.jpg";
import AIRCONDITIONINGEquipment from "../assets/m/AIRCONDITIONINGEquipment.jpg";
import DISTRICTCOOLINGEQUIPMENT from "../assets/m/DISTRICTCOOLINGEQUIPMENT.jpg";
import DuctingInsulation from "../assets/m/DuctingInsulationProducts.jpg";
import AirDISTRIBUTION from "../assets/m/AIRDISTRIBUTION.jpg";
import MiniDrobdownList from "../components/miniDrobdownList";
import ELECTRICAL from "../assets/Mechanical.jpg";
import CustomSubHeader from "../components/custom-sub-header";
import {useEffect, useState} from 'react';
import "../styles/style-component/accreditations.css";
import ArrowArray from "../components/arrowArray";

const MInfo = [
  {
    id: "",

    style: "paragraph3",
    text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
  },
];

const miniListVentilationEquipment = [
  {
    mechanicalImg: VentilationEquipment,
    mechanicalTitle: "VENTILATION EQUIPMENT",
    list: "POLLRICH",
    url: "/MechanicalSubPages/8",
  },
  {
    mechanicalImg: VentilationEquipment,
    mechanicalTitle: "VENTILATION EQUIPMENT",
    list: "GREENHECK",
    url: "/MechanicalSubPages/7",
  },
  {
    mechanicalImg: VentilationEquipment,
    mechanicalTitle: "VENTILATION EQUIPMENT",
    list: "Flowtech Division ",
    url: "/MechanicalSubPages/6",
  },
];

const miniListAIRCONDITIONINGEquipment = [
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "HVAC SYSTEM DESIGN AND INSTALLTION",
    url: "/MechanicalSubPages/48",
  },
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "HVAC PARTS & ACCESSORIES",
    url: "/MechanicalSubPages/47",
  },
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "SERVICE SOLUTIONS",
    url: "/MechanicalSubPages/46",
  },
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "FJCARE ",
    url: "/MechanicalSubPages/45",
  },
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "JOHNSON CONTROLS (YORK VRF & MINI SPLIT SYSTEMS)",
    url: "/MechanicalSubPages/16",
  },
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "SAMSUNG (VRF & MINI SPLIT SYSTEMS)",
    url: "/MechanicalSubPages/15",
  },
];

const miniListAIRHANDLING = [
  {
    mechanicalImg: AIRHANDLING,
    mechanicalTitle: "AIR HANDLING UNITS & FAN COIL UNITS",
    list: "Euroclima",
    url: "/MechanicalSubPages/14",
  },
];

const miniListPumps = [
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "AFTER SALES SERVICE & MAINTENANCE",
    url: "/MechanicalSubPages/19",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "PRODUCTION PLANNING & CONTROL",
    url: "/MechanicalSubPages/25",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "QUALITY ASSURANCE & CONTROL",
    url: "/MechanicalSubPages/20",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "xylem",
    url: "/MechanicalSubPages/23",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "flygt",
    url: "/MechanicalSubPages/22",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "Wedeco",
    url: "/MechanicalSubPages/21",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "A-C FIRE PUMP",
    url: "",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "BELL & GOSSETT",
    url: "/MechanicalSubPages/4",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "GOULDS",
    url: "/MechanicalSubPages/3",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "AQUAFLOW",
    url: "/MechanicalSubPages/2",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "REFLEX",
    url: "/MechanicalSubPages/1",
  },
];

const miniListAirDISTRIBUTION = [
  {
    mechanicalImg: AirDISTRIBUTION,
    mechanicalTitle: "AIR DISTRIBUTION",
    list: "FLOWTECH",
    url: "/MechanicalSubPages/9",
  },
];

const miniListDuctingInsulation = [
  
  {
    mechanicalImg: DuctingInsulation,
    mechanicalTitle: "DUCTING & INSULATION PRODUCTS",
    list: "ARMACELL",
    url: "/MechanicalSubPages/17",
  },
  {
    mechanicalImg: DuctingInsulation,
    mechanicalTitle: "DUCTING & INSULATION PRODUCTS",
    list: "PRODUCTION, PLANNING & CONTROL",
    url: "/MechanicalSubPages/25",
  },
  {
    mechanicalImg: DuctingInsulation,
    mechanicalTitle: "DUCTING & INSULATION PRODUCTS",
    list: "OUR SERVICE TEAM",
    url: "/MechanicalSubPages/26",
  },
];

const miniListDISTRICTCOOLINGEQUIPMENT = [
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "DCSERVE",
    url: "/MechanicalSubPages/10",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "PAHARPUR",
    url: "/MechanicalSubPages/43",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "MARLEY SPX",
    url: "/MechanicalSubPages/11",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "HAWLE",
    url: "/MechanicalSubPages/38",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "OZKAN",
    url: "/MechanicalSubPages/42",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "NOVA SIRIA",
    url: "/MechanicalSubPages/41",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "FLAMCO",
    url: "/MechanicalSubPages/34",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "GWS",
    url: "",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "BRANNAN",
    url: "/MechanicalSubPages/31",
  },
];
const MTitle = [
  {
    style: "1",
    text: "",
  },
];
const MechanicalMain = () => {



  const [state, setState] = useState(2);
  const arrayData = [<><div className="dropdown">
  <img className="Products" src={VentilationEquipment} alt="" />
  <br />
  <br />
  <br />
  <p
    style={{
       
      textAlign: 'center',
      fontFamily: "Montserrat",
      fontSize: "20px",
      color: "black",
      fontWeight: "light",
    }}
  >
    {miniListVentilationEquipment[0].mechanicalTitle}
  </p>
  <div className="dropdown-content">
    <MiniDrobdownList miniList={miniListVentilationEquipment} />
  </div>
</div></>,<><div className="dropdown">
  <img className="Products" src={Pumps} alt="" />
  <br />
  <br />
  <br />
  <p
    style={{
       
      textAlign: 'center',
      fontFamily: "Montserrat",
      fontSize: "20px",
      color: "black",
      fontWeight: "light",
    }}
  >
    {miniListPumps[0].mechanicalTitle}
  </p>
  <div className="dropdown-content">
    <MiniDrobdownList miniList={miniListPumps} />
  </div>
</div></>,<><div className="dropdown">
  <img className="Products" src={AIRCONDITIONINGEquipment} alt="" />
  <br />
  <br />
  <br />
  <p
    style={{
       
      textAlign: 'center',
      fontFamily: "Montserrat",
      fontSize: "20px",
      color: "black",
      fontWeight: "light",
    }}
  >
    {miniListAIRCONDITIONINGEquipment[0].mechanicalTitle}
  </p>
  <div className="dropdown-content">
    <MiniDrobdownList miniList={miniListAIRCONDITIONINGEquipment} />
  </div>
</div></>,<><div className="dropdown">
  <img className="Products" src={AIRHANDLING} alt="" />
  <br />
  <br />
  <br />
  <p
    style={{
       
      textAlign: 'center',
      fontFamily: "Montserrat",
      fontSize: "20px",
      color: "black",
      fontWeight: "light",
    }}
  >
    {miniListAIRHANDLING[0].mechanicalTitle}
  </p>
  <div className="dropdown-content">
    <MiniDrobdownList miniList={miniListAIRHANDLING} />
  </div>
</div></>,<><div className="dropdown">
  <img className="Products" src={AirDISTRIBUTION} alt="" />
  <br />
  <br />
  <br />
  <p
    style={{
       
      textAlign: 'center',
      fontFamily: "Montserrat",
      fontSize: "20px",
      color: "black",
      fontWeight: "light",
    }}
  >
    {miniListAirDISTRIBUTION[0].mechanicalTitle}
  </p>
  <div className="dropdown-content">
    <MiniDrobdownList miniList={miniListAirDISTRIBUTION} />
  </div>
</div></>,<><div className="dropdown">
  <img className="Products" src={DISTRICTCOOLINGEQUIPMENT} alt="" />
  <br />
  <br />
  <br />
  <p
    style={{
       
      textAlign: 'center',
      fontFamily: "Montserrat",
      fontSize: "20px",
      color: "black",
      fontWeight: "light",
    }}
  >
    {miniListDISTRICTCOOLINGEQUIPMENT[0].mechanicalTitle}
  </p>
  <div className="dropdown-content">
    <MiniDrobdownList miniList={miniListDISTRICTCOOLINGEQUIPMENT} />
  </div>
</div></>,<> <div className="dropdown">
  <img className="Products" src={DuctingInsulation} alt="" />
  <br />
  <br />
  <br />
  <p
    style={{
       
      textAlign: 'center',
      fontFamily: "Montserrat",
      fontSize: "20px",
      color: "black",
      fontWeight: "light",
    }}
  >
    {miniListDuctingInsulation[0].mechanicalTitle}
  </p>
  <div className="dropdown-content">
    <MiniDrobdownList miniList={miniListDuctingInsulation} />
  </div>
</div></>,];
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
      <CustomHeader backgroundImage={ELECTRICAL} headerTitle={"MECHANICAL" }  charHeader={"M"} />
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
export default MechanicalMain;
