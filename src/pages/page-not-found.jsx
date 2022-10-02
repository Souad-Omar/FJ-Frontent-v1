import React, { Fragment } from "react";
import BasicHeader from "../components/basic-header";
import AboutUsImg from "../assets/AboutUsImg.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import TextBoxes from "../components/text-boxes";

const paragraphs = [
  {
    style: "paragraphStyle1",
    text: "404 PAGE NOT FOUND",
  },
  {
    style: "paragraph2",
    text: "It seems that page you are looking for no longer exists.",
  },{
    style: "paragraph2",
    text: "Please go to homepage",
  },
];
const  PageNotFound = () => {
  return (
    <Fragment>
      <BasicHeader backgroundImage={AboutUsImg} headerTitle={["404"]} />
      <Container>
        <Row>
          <Col></Col>
          <Col sm={9} lg={10}><br />
            <br /><br />

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
      <Footer />
    </Fragment>
  );
};
export default  PageNotFound;
