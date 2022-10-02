import React, { Fragment } from "react";
import BasicHeader from "../components/basic-header";
import AboutUsImg from "../assets/AboutUsImg.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import TextBoxes from "../components/text-boxes";
import TextTitle from "../components/title-type";
import AboutUsVissionImg from "../assets/AboutUsVissionImg.jpg";
import TextTitleBox from "../components/text-title-box";

const paragraphs = [
  {
    style: "paragraph3",
    text: "Today, FJ Group boasts a group of leading enterprises that have have interest in several diversified strategic business segments across the region, while upholding the same values and principles that the flagship entity was founded and built upon.",
  },
  {
    style: "paragraph3",
    text: "We are relentlessly working on improving our services and expanding our portfolio of products to ensure a comprehensive coverage of the building services industry. In the meanwhile, our local manufacturing, production, and servicing capabilities have been significantly enhanced to cater to our increased market share across the MENA Region.",
  },
];
const visionParagraphs = [
  {
    style: "paragraph2",
    text: "To be the preferred MEP partner in supplying products and solutions for a sustainable building industry.",
  },
];
const missionParagraphs = [
  {
    style: "paragraph2",
    text: "Provide our clients competitive and premium quality equipment and services.",
  },
  {
    style: "paragraph2",
    text: "Strengthen the acceptability of our brands with our clients throughout the GCC.",
  },
  {
    style: "paragraph2",
    text: "Seek growth through new ideas, new products, and strong partnerships.",
  },
  {
    style: "paragraph2",
    text: "Set offices and develop factories in the GCC market closer to our customer base.",
  },
  {
    style: "paragraph2",
    text: "To recruit, train and retain the best talent in the industry.",
  },
  {
    style: "paragraph2",
    text: "Continuously improve and review our business processes.",
  },
];
const characyerParagraph = [
  {
    style: "paragraph2",
    text: "We are respectful, candid, positive, and fair to all stakeholders.",
  },
];
const continousImrovemenParagraph = [
  {
    style: "paragraph2",
    text: "We embrace a culture of continuously improving our products, our processes and ourselves.",
  },
];
const partnershipParagraph = [
  {
    style: "paragraph2",
    text: "We strive to achieve our common goals through interdependency and collaboration.",
  },
];
const commitmentParagraph = [
  {
    style: "paragraph2",
    text: "We take ownership of achieving our mission to the complete satisfaction of all our stakeholders.",
  },
];
const character = [
  {
    style: "3",    text: "CHARACTER",
  },
];
const continousImrovemen = [
  {
    style: "3",    text: "CONTINUOUS",
  },{style: "3",
  text: "IMPROVEMENT",}
];
const partnership = [
  {
    style: "3",    text: "PARTNERSHIP",
  },
];
const commitment = [
  {
    style: "3",    text: "COMMITMENT",
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
      <Container style={{ maxWidth: "100%" }}>
        <Row style={{backgroundColor:"#F7F9FA"}}>
          <Col></Col>
          <Col sm={9} lg={6} style={{padding:'8% 20px 8% 20px'}} >
             <TextBoxes textParagraph={paragraphs} />
           </Col>
          <Col></Col>
        </Row></Container>
      <div className="bodyContentTexts">
      <Container style={{ maxWidth: "100%" }}>
        
        <Row>
          <Col lg={6} style={{padding:'0px 7%'}}>
             <TextTitle textTitle={vision} />
            <TextBoxes textParagraph={visionParagraphs} />
            <img
                style={{width: '100%',  height: '70%',marginLeft: '0px'            }}                
                src={AboutUsVissionImg}
                alt="About Us Vission Img"
              />
          </Col>
          <Col lg={6} style={{padding:'0px 2%'}}>
             <TextTitle textTitle={mission} />
            <TextBoxes textParagraph={missionParagraphs} />
          </Col>
        </Row><div style={{padding:"4%"}}></div>
        <Row>
          <Col> 
            <br /> <TextTitle textTitle={ourCoreValue} /> <br /><br />
          </Col>
        </Row>
        <Row>
          <Col lg={3} style={{padding:'0px 2%'}}>
            <TextTitle textTitle={character} /><br />
            <TextBoxes textParagraph={characyerParagraph} /><br />
          </Col>
          <Col lg={3} style={{padding:'0px 2%'}}>
            <TextTitle textTitle={continousImrovemen} />
            <TextBoxes textParagraph={continousImrovemenParagraph} /><br />
          </Col>
          <Col lg={3} style={{padding:'0px 2%'}}>
            <TextTitle textTitle={partnership} /><br />
            <TextBoxes textParagraph={partnershipParagraph} /><br />
          </Col>
          <Col lg={3} style={{padding:'0px 2%'}}>
            <TextTitle textTitle={commitment} /><br />
            <TextBoxes textParagraph={commitmentParagraph} /><br />
          </Col>
        </Row>
      </Container></div>
      <Footer />
    </Fragment>
  );
};
export default AboutUs;
