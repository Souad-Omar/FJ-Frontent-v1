import React, { Fragment } from "react";
import CustomHeader from "../components/custom-header";
import SERVICES from "../assets/SERVICES.jpg";
import S1 from "../assets/S1.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/page-info.css";
import "../styles/style-component/miniDrobdownList.css";
import MiniDrobdownList from "../components/miniDrobdownList";
import HVACPARTSACCESSORIES from "../assets/s/HVACPARTS&ACCESSORIES.png"
import HVACPRODUCTS from "../assets/s/HVACPRODUCTS.png"
import Pumps from "../assets/s/Pumps.png"
import SERVICESOLUTIONS from "../assets/s/SERVICESOLUTIONS.png"
import TextBoxes from "../components/text-boxes";
import CustomSubHeader from "../components/custom-sub-header";


const HVACPARTSACCESSORIESinfo = [
    {
        ELECTRICALImg: HVACPARTSACCESSORIES,
      ELECTRICALTitle: "HVACPARTS & ACCESSORIES",
      list: "HVACPARTS & ACCESSORIES",
      url: "/ServicesSubPages/7",
    },
  ];
  const Pumpsinfo = [
    {
        ELECTRICALImg: Pumps,
      ELECTRICALTitle: "Pumps",
      list: "Pumps",
      url: "/ServicesSubPages/3",
    },
  ];
  const SERVICESOLUTIONSinfo = [
    {
        ELECTRICALImg: SERVICESOLUTIONS,
      ELECTRICALTitle: "SERVICE SOLUTIONS",
      list: "SERVICE SOLUTIONS",
      url: "/ServicesSubPages/1",
    },
  ];
  const HVACPRODUCTSinfo = [
    {
      ELECTRICALImg: HVACPRODUCTS,
    ELECTRICALTitle: "HVAC PRODUCTS",
    list: "FJ ENERGY SOLUTIONS",
    url: "/ServicesSubPages/4",
  },{
    ELECTRICALImg: HVACPRODUCTS,
  ELECTRICALTitle: "HVAC PRODUCTS",
  list: "DCServe",
  url: "/ServicesSubPages/5",
},{
  ELECTRICALImg: HVACPRODUCTS,
ELECTRICALTitle: "HVAC PRODUCTS",
list: "FJCARE ",
url: "/ServicesSubPages/6",
},
  ];
  const MInfo = [
    {
      id: "",
  
      style: "paragraph3",
      text: "We are committed to deliver high quality mechanical, electrical and plumbing equipment with its services in a timely manner to the agreed specifications. We understand the importance of having excellent service backup and workshop facilities. We have also ensured that our technicians are experienced and well-equipped with tools and machinery to execute quality work, time and again. We keep adequate spares, enabling us to attend to after-sales service and guarantee the quality of our supplied equipment. We are also committed to continuously measure, review, and improve our working and quality objectives to maximize our customers’ satisfaction, with optimal utilization of resources.",
    },
  ];
  const MTitle = [
    {
      style: "1",
      text: "",
    },
  ];
const ServicesMain = () => {
  return (
    <Fragment>
      <CustomHeader backgroundImage={SERVICES} headerTitle={"SERVICES"}  charHeader={"S"} />
      <CustomSubHeader backgroundImage={SERVICES} headerTitle={"PLUMPING"}  charHeader={"P"} text={MInfo} title={MTitle}/>

      <Container style={{ maxWidth: "3040px" }}>
        <Row><Col></Col><Col></Col>
          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={HVACPARTSACCESSORIES} alt="" />
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
                {HVACPARTSACCESSORIESinfo[0].ELECTRICALTitle}
              </p>
              <div className="dropdown-content">
                <MiniDrobdownList miniList={HVACPARTSACCESSORIESinfo} />
              </div>
            </div>
          </Col>
          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={HVACPRODUCTS} alt="" />
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
                {HVACPRODUCTSinfo[0].ELECTRICALTitle}
              </p>
              <div className="dropdown-content">
                <MiniDrobdownList miniList={HVACPRODUCTSinfo} />
              </div>
            </div>
          </Col>
          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={SERVICESOLUTIONS} alt="" />
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
                {SERVICESOLUTIONSinfo[0].ELECTRICALTitle}
              </p>
              <div className="dropdown-content">
                <MiniDrobdownList miniList={SERVICESOLUTIONSinfo} />
              </div>
            </div>
          </Col><Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={Pumps} alt="" />
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
                {Pumpsinfo[0].ELECTRICALTitle}
              </p>
              <div className="dropdown-content">
                <MiniDrobdownList miniList={Pumpsinfo} />
              </div>
            </div>
          </Col><Col></Col><Col></Col>
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
export default ServicesMain;
