import React, { Fragment } from "react";
import BasicHeader2 from "../components/basic-header2";
import PLUMPING from "../assets/PLUMPING.jpg";
import P1 from "../assets/P1.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/page-info.css";
import "../styles/style-component/miniDrobdownList.css";
import MiniDrobdownList from "../components/miniDrobdownList";
import PLUMBINGProductsSolutions from "../assets/p/PLUMBINGProducts&Solutions.png"
import TextBoxes from "../components/text-boxes";

const MInfo = [
    {
      id: "",
  
      style: "paragraphStyle1",
      text: "We are constantly working on improving our diverse services through our rich portfolio that encompasses anything and everything having to do with the MEP industry.  With that in mind, and what’s integral to FJ Group is providing turnkey solutions for steam, water-heating and plumbing systems from supporting clients with design, supply, installation, testing, commissioning, training, and after-sales services. FJ Group is partnered with globally renowned brands who are the pioneers in this field and are capable of providing customized engineering solutions for residential, commercial and industrial water heating and plumbing applications.",
    },
  ];

const PLUMBINGProductsSolutionsinfo = [
    {
        ELECTRICALImg: PLUMBINGProductsSolutions,
        ELECTRICALTitle: "PLUMBING Products & Solutions",
        list: "FJ Energy ",
        url: "/PlumbingSubPages/1",
      },{
        ELECTRICALImg: PLUMBINGProductsSolutions,
        ELECTRICALTitle: "PLUMBING Products & Solutions",
        list: "RADIANT ECO Solution",
        url: "/PlumbingSubPages/2",
      },{
        ELECTRICALImg: PLUMBINGProductsSolutions,
        ELECTRICALTitle: "PLUMBING Products & Solutions",
        list: "LACAZE ENERGIES ",
        url: "/PlumbingSubPages/3",
      },{
        ELECTRICALImg: PLUMBINGProductsSolutions,
        ELECTRICALTitle: "PLUMBING Products & Solutions",
        list: "GLEN DIMPLEX",
        url: "/PlumbingSubPages/4",
      },{
        ELECTRICALImg: PLUMBINGProductsSolutions,
        ELECTRICALTitle: "PLUMBING Products & Solutions",
        list: "UPNOR",
        url: "/PlumbingSubPages/5",
      },{
        ELECTRICALImg: PLUMBINGProductsSolutions,
        ELECTRICALTitle: "PLUMBING Products & Solutions",
        list: "GF JRG",
        url: "/PlumbingSubPages/6",
      },{
        ELECTRICALImg: PLUMBINGProductsSolutions,
        ELECTRICALTitle: "PLUMBING Products & Solutions",
        list: "HONEYWELL HOME",
        url: "/PlumbingSubPages/7",
      },{
        ELECTRICALImg: PLUMBINGProductsSolutions,
        ELECTRICALTitle: "PLUMBING Products & Solutions",
        list: "CLEAVER BROOKS",
        url: "/PlumbingSubPages/8",
      },{
        ELECTRICALImg: PLUMBINGProductsSolutions,
        ELECTRICALTitle: "PLUMBING Products & Solutions",
        list: "CAMUS HYDRONICS LTD",
        url: "/PlumbingSubPages/9",
      },{
        ELECTRICALImg: PLUMBINGProductsSolutions,
        ELECTRICALTitle: "PLUMBING Products & Solutions",
        list: "SOLINOX ",
        url: "/PlumbingSubPages/9",
      },
  ];

const PlumbingMain = () => {
  return (
    <Fragment>
      <BasicHeader2 backgroundImage={PLUMPING} headerTitle={"PLUMPING"} />
      <div className={"MEPSPage"} style={{ backgroundImage: `url(${P1})` }}>
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
        <Row><Col></Col>
        <Col></Col>
          <Col style={{ display: "inline" }}>
            <div className="dropdown">
              <img className="Products" src={PLUMBINGProductsSolutions} alt="" />
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
                {PLUMBINGProductsSolutionsinfo[0].ELECTRICALTitle}
              </p>
              <div className="dropdown-content">
                <MiniDrobdownList miniList={PLUMBINGProductsSolutionsinfo} />
              </div>
            </div>
            <Col></Col>
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
export default PlumbingMain;
