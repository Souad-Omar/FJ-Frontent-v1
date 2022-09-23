import React, { Fragment } from "react";
import BasicHeader from "../components/basic-header";
import AboutUsImg from "../assets/AboutUsImg.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import TextBoxes from "../components/text-boxes";

const paragraphs = [
  {
    style: "paragraphStyle1",
    text: "Thank you for contacting us.",
  },
  {
    style: "paragraph2",
    text: "We appreciate that you've taken time to write us.",
  },{
    style: "paragraph2",
    text: "We'll get back to you very soon.",
  },
];
const ContactUsThankYou = () => {
  return (
    <Fragment>
      <BasicHeader backgroundImage={AboutUsImg} headerTitle={["ABOUT US"]} />
      <Container>
        <Row>
          <Col></Col>
          <Col sm={9} lg={10}><br />
            <br /><br />
            <br />
          <svg style={{marginLeft:"45%"}} xmlns="http://www.w3.org/2000/svg" width="125.191" height="98.85" viewBox="0 0 125.191 98.85">
  <g id="Group_730" data-name="Group 730" transform="translate(-709.942 -603.331)">
    <path id="Path_2225" data-name="Path 2225" d="M9.052,1.291l92.1,8.6c4.826.451,9.181,4.053,9.726,8.046l.835,6.117c.545,3.993-2.926,6.864-7.752,6.413l-92.1-8.6c-4.826-.451-9.181-4.053-9.726-8.046L1.3,7.7C.755,3.711,4.226.84,9.052,1.291Z" transform="translate(734.524 681.482) rotate(-45)" fill="#1aba7b"/>
    <rect id="Rectangle_641" data-name="Rectangle 641" width="56.846" height="16.206" rx="8.103" transform="translate(748.711 694.331) rotate(-133)" fill="#1aba7b"/>
  </g>
</svg>

            <br />
            <br />
            <TextBoxes textParagraph={paragraphs} />
            <br />
            <br />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
          <br />
            <br />
            <br /><br />
            <br />
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
export default ContactUsThankYou;
