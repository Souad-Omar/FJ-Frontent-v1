import React, { Fragment } from "react";
import BasicHeader2 from "../components/basic-header2";
import newsHeader from "../assets/newsHeader.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import TextBoxes from "../components/text-boxes";
import "../styles/style-component/basic-header.css";
import TextTitleBox from "../components/text-title-box";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";

const newsData = [
  {
    title: "FJ GROUP - IFTAR EVENING ",
    city: "DUBAI",
    style: "paragraphStyle1",
    text: [
      "FJ Group conducted an exclusive iftar evening to commemorate the holy month for all its partners & associates on the 20 April 2022 at The Address Hotel, Fountain Views in Dubai, UAE.     ",
      "Mr. Raphael Khlat (FJ Group President) was honored at the special event with a Certificate of Appreciation, signed by the Corporation’s Partners & Associates, and another as a token of goodwill by all the employees at FJ Group.",
    ],
    imges: [news1],
  },
  {
    title: "FJ GROUP- IFTAR EVENING ",
    city: "ABU DHABI",
    style: "paragraphStyle1",
    text: [
      "FJ Group conducted an exclusive iftar evening to commemorate the holy month for all its partners & associates on the 18 April 2022 at the prestigious Emirates Palace in Abu Dhabi, UAE.     ",
      "The event was in honor of the holy month, and was attended by a number of prominent dignitaries, partners and associates of FJ Group in the Capital. ",
    ],
    imges: [news2],
  },
];
const News = () => {
  const news = newsData.map(({ title, city, style, text, imges }, idx) => {
    return (
      <>
        <Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col>
              <p className="pBlack">
                <span style={{ fontWeight: "bold" }}>{title}</span>
                {city}
              </p>
              <br />
              {text.map((el) => {
                return <TextTitleBox className="" text={el} />;
              })}
            </Col>
            <Col>
              {imges.map((el) => {
                return (
                  <img
                    style={{ width: "80%", height: "80%" }}
                    src={el}
                    alt={title}
                  />
                );
              })}
            </Col>
          </Row>
          <hr />
        </Container>
      </>
    );
  });
  return (
    <Fragment>
      <BasicHeader2 backgroundImage={newsHeader} headerTitle={"ABOUT US"} />
      <Container>
        <Row>
          <Col></Col>
          <Col sm={9} lg={10}>
            <br />
            <br />
            <TextBoxes textParagraph={news} />
            <br />
            <br />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      {news}
      <br />
      <br />
      <br />
      <Footer />
    </Fragment>
  );
};
export default News;
