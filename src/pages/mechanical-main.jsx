import React, { Fragment } from "react";
import BasicHeader2 from "../components/basic-header2";
import Mechanical from "../assets/Mechanical.jpg";
import M1 from "../assets/M1.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/page-info.css";
import TextBoxes from "../components/text-boxes";
import "../styles/style-component/miniDrobdownList.css";
import VentilationEquipment from "../assets/Mechanical/VentilationEquipment.png";
import Pumps from "../assets/Mechanical/Pumps.png";
import AIRHANDLING from "../assets/Mechanical/AIRHANDLING.png";
import AIRCONDITIONINGEquipment from "../assets/Mechanical/AIRCONDITIONINGEquipment.png";
import DISTRICTCOOLINGEQUIPMENT from "../assets/Mechanical/DISTRICTCOOLINGEQUIPMENT.png";
import DuctingInsulation from "../assets/Mechanical/DuctingInsulation.png";
import AirDISTRIBUTION from "../assets/Mechanical/AirDISTRIBUTION.png";
import MiniDrobdownList from "../components/miniDrobdownList";

const MInfo = [
  {
    id: "",

    style: "paragraphStyle1",
    text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
  },
];

const miniListVentilationEquipment = [
  {
    mechanicalImg: VentilationEquipment,
    mechanicalTitle: "VENTILATION EQUIPMENT",
    list: "POLLRICH",
    url: "/MechanicalSubPages/83",
  },
  {
    mechanicalImg: VentilationEquipment,
    mechanicalTitle: "VENTILATION EQUIPMENT",
    list: "GREENHECK",
    url: "/MechanicalSubPages/82",
  },
  {
    mechanicalImg: VentilationEquipment,
    mechanicalTitle: "VENTILATION EQUIPMENT",
    list: "Flowtech Division ",
    url: "/MechanicalSubPages/81",
  },
];

const miniListAIRCONDITIONINGEquipment = [
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "HVAC SYSTEM DESIGN AND INSTALLTION",
    url: "/MechanicalSubPages/11",
  },
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "HVAC PARTS & ACCESSORIES",
    url: "/MechanicalSubPages/12",
  },
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "SERVICE SOLUTIONS",
    url: "/MechanicalSubPages/13",
  },
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "FJCARE ",
    url: "/MechanicalSubPages/14",
  },
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "JOHNSON CONTROLS (YORK VRF & MINI SPLIT SYSTEMS)",
    url: "/MechanicalSubPages/15",
  },
  {
    mechanicalImg: AIRCONDITIONINGEquipment,
    mechanicalTitle: "AIR CONDITIONING EQUIPMENT ",
    list: "SAMSUNG (VRF & MINI SPLIT SYSTEMS)",
    url: "/MechanicalSubPages/16",
  },
];

const miniListAIRHANDLING = [
  {
    mechanicalImg: AIRHANDLING,
    mechanicalTitle: "AIR HANDLING UNITS & FAN COIL UNITS",
    list: "Euroclima",
    url: "/MechanicalSubPages/71",
  },
];

const miniListPumps = [
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "AFTER SALES SERVICE & MAINTENANCE",
    url: "/MechanicalSubPages/011",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "PRODUCTION PLANNING & CONTROL",
    url: "/MechanicalSubPages/010",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "QUALITY ASSURANCE & CONTROL",
    url: "/MechanicalSubPages/009",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "xylem",
    url: "/MechanicalSubPages/008",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "flygt",
    url: "/MechanicalSubPages/007",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "Wedeco",
    url: "/MechanicalSubPages/006",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "A-C FIRE PUMP",
    url: "/MechanicalSubPages/005",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "BELL & GOSSETT",
    url: "/MechanicalSubPages/004",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "GOULDS",
    url: "/MechanicalSubPages/003",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "AQUAFLOW",
    url: "/MechanicalSubPages/002",
  },
  {
    mechanicalImg: Pumps,
    mechanicalTitle: "PUMPS & SYSTEMS",
    list: "REFLEX",
    url: "/MechanicalSubPages/001",
  },
];

const miniListAirDISTRIBUTION = [
  {
    mechanicalImg: AirDISTRIBUTION,
    mechanicalTitle: "AIR DISTRIBUTION",
    list: "FLOWTECH",
    url: "/MechanicalSubPages/41",
  },
];

const miniListDuctingInsulation = [
  {
    mechanicalImg: DuctingInsulation,
    mechanicalTitle: "DUCTING & INSULATION PRODUCTS",
    list: "FLOWTECH",
    url: "/MechanicalSubPages/31",
  },
  {
    mechanicalImg: DuctingInsulation,
    mechanicalTitle: "DUCTING & INSULATION PRODUCTS",
    list: "ARMACELL",
    url: "/MechanicalSubPages/32",
  },
  {
    mechanicalImg: DuctingInsulation,
    mechanicalTitle: "DUCTING & INSULATION PRODUCTS",
    list: "PRODUCTION, PLANNING & CONTROL",
    url: "/MechanicalSubPages/33",
  },
  {
    mechanicalImg: DuctingInsulation,
    mechanicalTitle: "DUCTING & INSULATION PRODUCTS",
    list: "OUR SERVICE TEAM",
    url: "/MechanicalSubPages/34",
  },
];

const miniListDISTRICTCOOLINGEQUIPMENT = [
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "DCSERVE",
    url: "/MechanicalSubPages/51",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "PAHARPUR",
    url: "/MechanicalSubPages/52",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "MARLEY SPX",
    url: "/MechanicalSubPages/53",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "HAWLE",
    url: "/MechanicalSubPages/54",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "OZKAN",
    url: "/MechanicalSubPages/55",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "NOVA SIRIA",
    url: "/MechanicalSubPages/56",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "FLAMCO",
    url: "/MechanicalSubPages/57",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "GWS",
    url: "/MechanicalSubPages/58",
  },
  {
    mechanicalImg: DISTRICTCOOLINGEQUIPMENT,
    mechanicalTitle: "DISTRICT COOLING EQUIPMENT",
    list: "BRANNAN",
    url: "/MechanicalSubPages/59",
  },
];
const MechanicalMain = () => {
  return (
    <Fragment>
      <BasicHeader2 backgroundImage={Mechanical} headerTitle={"MECHANICAL"} />
      <div className={"MEPSPage"} style={{ backgroundImage: `url(${M1})` }}>
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col></Col>
            <Col lg={8}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <TextBoxes textParagraph={MInfo} />
            </Col>
          </Row>
        </Container>
      </div>
      <Container style={{ maxWidth: "3040px" }}>
        <Row>
          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={VentilationEquipment} alt="" />
              <br />
              <br />
              <br />
              <p
                style={{
                  textAlign: "justify",
                  textAlignLast: "center",
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
            </div>
          </Col>
          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={Pumps} alt="" />
              <br />
              <br />
              <br />
              <p
                style={{
                  textAlign: "justify",
                  textAlignLast: "center",
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
            </div>
          </Col>
          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={AIRCONDITIONINGEquipment} alt="" />
              <br />
              <br />
              <br />
              <p
                style={{
                  textAlign: "justify",
                  textAlignLast: "center",
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
            </div>
          </Col>
          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={AIRHANDLING} alt="" />
              <br />
              <br />
              <br />
              <p
                style={{
                  textAlign: "justify",
                  textAlignLast: "center",
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
            </div>
          </Col>

          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={AirDISTRIBUTION} alt="" />
              <br />
              <br />
              <br />
              <p
                style={{
                  textAlign: "justify",
                  textAlignLast: "center",
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
            </div>
          </Col>
          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={DISTRICTCOOLINGEQUIPMENT} alt="" />
              <br />
              <br />
              <br />
              <p
                style={{
                  textAlign: "justify",
                  textAlignLast: "center",
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
            </div>
          </Col>
          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={DuctingInsulation} alt="" />
              <br />
              <br />
              <br />
              <p
                style={{
                  textAlign: "justify",
                  textAlignLast: "center",
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
            </div>
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
