import React, { Fragment } from "react";
import TextTitleBox from "../components/text-title-box";
import "../styles/style-component/text-boxes.css";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/footer";

import ACCREDITATIONSImg from "../assets/ACCREDITATIONS.jpg";
import Environment from "../assets/Environment.png";
import Safety from "../assets/Safety.png";
import Health from "../assets/Health.png";
import QUALITY from "../assets/QUALITY.png";
import BasicHeader2 from "./../components/basic-header2";

const Accreditations = ({}) => {
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
      <BasicHeader2
        backgroundImage={ACCREDITATIONSImg}
        headerTitle={"ACCREDITATIONS"}
      />
      <br /><br /><br /><br />
      <Container style={{ maxWidth: "1540px" }}>
        <Row>
          <Col>
            <img
              style={{ marginLeft: "0%", width: "auto", height: "auto" }}
              src={QUALITY}
              alt={"QUALITY"}
            />{" "}
          </Col>

          <Col>
            <img
              style={{ marginLeft: "0%", width: "auto", height: "auto" }}
              src={Health}
              alt={"Health"}
            />{" "}
          </Col>
          <Col>
            <img
              style={{ marginLeft: "0%", width: "auto", height: "auto" }}
              src={Safety}
              alt={"Safety"}
            />{" "}
          </Col>
          <Col>
            <img
              style={{ marginLeft: "0%", width: "auto", height: "auto" }}
              src={Environment}
              alt={"Environment"}
            />{" "}
          </Col>
        </Row>
      </Container>      <Container style={{ maxWidth: "1110px" }}>
<Row><Col>
      <br /><br /><br />
      <TextTitleBox title="At FJ Group, we offer the full spectrum of engineering support and are the one-stop solution for all the requirements of MEP products and systems. " /><br /><br /><br />
      <TextTitleBox title="We support our stakeholders right from the concept and design stage to the project execution. In equal measure, we frequently conduct CPDs and technical presentations on various topics with the support of our principals to enhance these initiatives and go the extra mile to make sure your requirements are met.  With that in mind, here are the respective tiers that lead to our respective accreditations." />
      <br /><br /><br /><TextTitleBox title="QUALITY" />
      <TextTitleBox text="We are committed to maintaining high quality products and services, protecting and improving the environment, and ensuring employee health and safety.  At FJ Group, we believe that the relentless pursuit of quality and continuous improvement is the only long-term route to success.  This is affirmed through the periodic review of our management policies and objectives as they relate to our operations." />
      <TextTitleBox text="Our Quality system is as per ISO 9001:2015 international standards and certified by Gabriel Registrar. We conduct routine internal and external Quality Audits to ensure that our Quality Management System is strictly followed, respected and updated." />


      <TextTitleBox title="HEALTH, SAFETY & ENVIRONMENT" />
      <TextTitleBox text="FJ Group incorporates Health, Safety and Environmental (HSE) measures under the form of a mutual objective for the management and employees at all levels and is indeed considered to be a shared responsibility and a duty for each and every one to uphold under the flagship of the Company." />
      <TextTitleBox text="FJ Group has implemented the health, safety, and environment management system at all the facilities that were developed to conform to the ISO 14001:2015 Standard for Environmental Management, as well as to the OHSAS 18001:2007 standards for Occupational Health and Safety. " />

      <TextTitleBox title="HSE System Certified by Gabriel Registrar" />
      <TextTitleBox text="Safety responsibilities are clearly defined in employees’ job descriptions, and measured regularly and independently, with rewards for outstanding performance.  FJ Group is committed to building a culture of accountability and a safer work environment for employees, staff, and personnel." />

      </Col></Row></Container>
      <br />
      <Footer />
    </Fragment>
  );
};

export default Accreditations;
