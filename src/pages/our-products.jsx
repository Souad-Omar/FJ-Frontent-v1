import React, { Fragment } from "react";
import BasicHeader2 from "../components/basic-header2";
import OurProductsHeader from "../assets/OurProductsHeader.jpg";
import OurProductsMain1 from "../assets/OurProductsMain1.jpg";
import OurProductsMain2 from "../assets/OurProductsMain2.jpg";
import OurProductsMain3 from "../assets/OurProductsMain3.jpg";
import OurProductsMain4 from "../assets/OurProductsMain4.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/page-info.css";
 import TextTitleBox from "../components/text-title-box";
 import ExploreMoreLink from './../components/explore-more copy';

const info = [
  {
    id: "1",
    title: "MECHANICAL",
    text: "Through strong relationships with our principals and partners, our teams have fashioned prominent innovations and breakthroughs.",
    url: "/MechanicalMain",
    char: "M",
  },
  {
    id: "2",
    title: "ELECTRICAL",
    text: "We have been persistent in serving the building services industry with dedication, commitment, and perseverance.",
    url: "/ElectricalMain",
    char: "E",
  },
  {
    id: "3",
    title: "PLUMPING",
    text: "We provide turnkey solutions for steam, water-heating and plumbing systems from design all the way to completion.",

    url: "/PlumbingMain",
    char: "P",
  },
  {
    id: "4",
    title: "SERVICES",
    text: "We deliver high quality mechanical, electrical and plumbing equipment with excellent service back-up and workshop facilities.  ",

    url: "/ServicesMain",
    char: "S",
  },
];

const title1 =
  "With laurels and numerous commercial touchpoints and projects accomplished in the building services industry, FJ Group’s strive continues to be in strategic partnerships and leading in all fronts in regard to MEP.";
const text1 =
  "Synonymous with the best in the MEP Industry since its inception in 1988, we at FJ Group specialize in the engineering, manufacturing, and trading of products and systems in the electrical and mechanical fields related to the building services industry.  FJ Group supports each stage of the process through pre-production, meticulous planning, on-going collaboration, and professional & timely implementation.";
const OurProducts = () => {
  return (
    <Fragment>
      <BasicHeader2
        backgroundImage={OurProductsHeader}
        headerTitle={"OUR PRODUCTS"}
      />
      <div
        className={"division"}
        style={{
          backgroundImage: `url(${OurProductsMain1})`,
          fontFamily: "Montserrat",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col lg={3}>
              {" "}
              <p className="MEPSMainPageStyle">M</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p style={{ fontSize: "45px" }}>MECHANICAL</p>
              <p style={{ fontSize: "20px" }}>{info[0].text}</p>
              <ExploreMoreLink buutonText="EXPLORE MORE" link={info[0].url}/>
            </Col>
            <Col lg={9}>
              {" "}
              <br />
            </Col>
          </Row>{" "}
        </Container>
      </div>
      <div
        className={"division"}
        style={{
          backgroundImage: `url(${OurProductsMain2})`,
          fontFamily: "Montserrat",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col lg={9}></Col>
            <Col lg={3}>
            <p className="MEPSMainPageStyle">E</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p style={{ fontSize: "45px" }}>ELECTRICAL</p>
              <p style={{ fontSize: "20px" }}>{info[1].text}</p>
              <ExploreMoreLink buutonText="EXPLORE MORE" link={info[1].url}/>

            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={"division"}
        style={{
          backgroundImage: `url(${OurProductsMain3})`,
          fontFamily: "Montserrat",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col lg={3}>
              <br /><p className="MEPSMainPageStyle">P</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p style={{ fontSize: "45px" }}>PLUMBING</p>
              <p style={{ fontSize: "20px" }}>{info[2].text}</p>
              <ExploreMoreLink buutonText="EXPLORE MORE" link={info[2].url}/>

            </Col>
            <Col lg={9}>
              {" "}
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={"division"}
        style={{
          backgroundImage: `url(${OurProductsMain4})`,
          fontFamily: "Montserrat",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col lg={9}></Col>
            <Col lg={3}>
              {" "}
              <br /><p className="MEPSMainPageStyle">S</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p style={{ fontSize: "45px" }}>SERVICES</p>
              <p style={{ fontSize: "20px" }}>{info[3].text}</p>
              <ExploreMoreLink buutonText="EXPLORE MORE" link={info[3].url}/>

            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container style={{ maxWidth: "2040px" }}>
        <Row>
          <Col lg={3}>
            <TextTitleBox title={title1} />
          </Col>
          <Col></Col>
          <Col lg={8}>
            <TextTitleBox text={text1} />
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
export default OurProducts;
