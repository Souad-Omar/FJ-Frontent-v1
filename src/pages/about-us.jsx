import React, { Fragment } from "react";
import BasicHeader from "../components/basic-header";
import AboutUsImg from "../assets/AboutUsImg.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import TextBoxes from "../components/text-boxes";
import TextTitle from "../components/title-type";
import AboutUsVissionImg from "../assets/AboutUsVissionImg.jpg";

const paragraphs = [
  {
    style: "paragraphStyle1",
    text: "Today, FJ Group boasts a group of leading enterprises that have have interest in several diversified strategic business segments across the region, while upholding the same values and principles that the flagship entity was founded and built upon.",
  },
  {
    style: "paragraphStyle1",
    text: "We are relentlessly working on improving our services and expanding our portfolio of products to ensure a comprehensive coverage of the building services industry. In the meanwhile, our local manufacturing, production, and servicing capabilities have been significantly enhanced to cater to our increased market share across the MENA Region.",
  },
];
const visionParagraphs = [
  {
    style: "paragraphStyle1",
    text: "To be the preferred MEP partner in supplying products and solutions for a sustainable building industry.",
  },
];
const missionParagraphs = [
  {
    style: "paragraphStyle1",
    text: "Provide our clients competitive and premium quality equipment and services.",
  },
  {
    style: "paragraphStyle1",
    text: "Strengthen the acceptability of our brands with our clients throughout the GCC.",
  },
  {
    style: "paragraphStyle1",
    text: "Seek growth through new ideas, new products, and strong partnerships.",
  },
  {
    style: "paragraphStyle1",
    text: "Set offices and develop factories in the GCC market closer to our customer base.",
  },
  {
    style: "paragraphStyle1",
    text: "To recruit, train and retain the best talent in the industry.",
  },
  {
    style: "paragraphStyle1",
    text: "Continuously improve and review our business processes.",
  },
];
const characyerParagraph = [
  {
    style: "paragraphStyle1",
    text: "We are respectful, candid, positive, and fair to all stakeholders.",
  },
];
const continousImrovemenParagraph = [
  {
    style: "paragraphStyle1",
    text: "We embrace a culture of continuously improving our products, our processes and ourselves.",
  },
];
const partnershipParagraph = [
  {
    style: "paragraphStyle1",
    text: "We strive to achieve our common goals through interdependency and collaboration.",
  },
];
const commitmentParagraph = [
  {
    style: "paragraphStyle1",
    text: "We take ownership of achieving our mission to the complete satisfaction of all our stakeholders.",
  },
];
const character = [
  {
    style: "1",
    text: "CHARACTER",
  },
];
const continousImrovemen = [
  {
    style: "1",
    text: "CONTINOUS",
  },{style: "1",
  text: "IMPROVEMENT",}
];
const partnership = [
  {
    style: "1",
    text: "PARTNERSHIP",
  },
];
const commitment = [
  {
    style: "1",
    text: "COMMITMENT",
  },
];
const vision = [
  {
    style: "1",
    text: "VISION",
  },
];
const mission = [
  {
    style: "1",
    text: "MISSION",
  },
];
const ourCoreValue = [
  {
    style: "1",
    text: "OUR CORE",
  },
  {
    style: "1",
    text: "VALUES",
  },
];
const AboutUs = () => {
  return (
    <Fragment>
      <BasicHeader backgroundImage={AboutUsImg} headerTitle={["ABOUT US"]} />
      <Container>
        <Row>
          <Col></Col>
          <Col sm={9} lg={10}>
            <br />
            <br />
            <TextBoxes textParagraph={paragraphs} />
            <br />
            <br />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col lg={6}>
            <br />
            <br />
            <TextTitle textTitle={vision} />
            <TextBoxes textParagraph={visionParagraphs} />
            <img
                style={{width: '100%',  height: '70%',marginLeft: '0px'            }}                
                src={AboutUsVissionImg}
                alt="About Us Vission Img"
              />
          </Col>
          <Col lg={6}>
            <br />
            <br />
            <TextTitle textTitle={mission} />
            <TextBoxes textParagraph={missionParagraphs} />
          </Col>
        </Row>
        <Row>
          <Col>
          <br />
            <br />
            <br /><br />
            <br />
            <br />
            <br /> <TextTitle textTitle={ourCoreValue} />
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <TextTitle textTitle={character} />
            <TextBoxes textParagraph={characyerParagraph} />
          </Col>
          <Col lg={3}>
            <TextTitle textTitle={continousImrovemen} />
            <TextBoxes textParagraph={continousImrovemenParagraph} />
          </Col>
          <Col lg={3}>
            <TextTitle textTitle={partnership} />
            <TextBoxes textParagraph={partnershipParagraph} />
          </Col>
          <Col lg={3}>
            <TextTitle textTitle={commitment} />
            <TextBoxes textParagraph={commitmentParagraph} />
          </Col>
        </Row>
      </Container>
            <br />
            <br />
            <br />
      <Footer />
    </Fragment>
  );
};
export default AboutUs;
