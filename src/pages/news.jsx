import React, { Fragment } from "react";
import BasicHeader from "../components/basic-header";
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
    title: "FJ GROUP- IFTAR EVENING",
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
        <Container>
          <Row>
            <Col style={{margin:"0px 0px 0px 5%"}}>
              <p style={{padding:"5% 0px 0px 0px", textAlign:'center'}} className="pBlack">
                <span style={{ fontWeight: "bold" }}>{title}</span><br />
                {city}
              </p>
               {text.map((el) => {
                return <TextTitleBox className="" text={el} />;
              })}
            </Col>
            <Col>
              {imges.map((el) => {
                return (
                  <img
                    style={{margin:"0px 0px 0px 20%", padding:"5% 0px 50px 0px", width: "70%", height: "auto" }}
                    src={el}
                    alt={title}
                  />
                );
              })}
            </Col>
          </Row>
          <hr />
        </Container>
     );
  });
  return (
    <Fragment>
      <BasicHeader backgroundImage={newsHeader} headerTitle={["News"]} />
      <Container>
        <Row>
          <Col></Col>
          <Col sm={9} lg={10}> 
            <TextBoxes textParagraph={news} /> 
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <div className="bodyContent">
      {news} 

      </div>
      <Footer />
    </Fragment>
  );
};
export default News;
