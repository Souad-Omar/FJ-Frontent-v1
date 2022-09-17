import React, { Fragment } from "react";
import ImageSliderHeader from "../components/image-slider-header";
import "../styles/style-component/image-slider-header.css";
import "../styles/style-pages/home.css";
import TextBoxes from "../components/text-boxes";
import TextTitle from "../components/title-type";
import Arrow from "./../components/arrow";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/footer";
import RaphaelKhlatPresidentImage from "../assets/RaphaelKhlatPresidentImage.jpg";
import RaphaelKhlatPresidentSmallImage from "../assets/RaphaelKhlatPresidentSmallImage.jpg";
import ExploreMore from "../components/explore-more";

const paragraphs = [
  {
    id: "1",
    style: "paragraphStyle1",
    text: "With laurels and numerous commercial touchpoints and projects accomplished in the building services industry, FJ Group’s strive continues to be in strategic partnerships and leading in all fronts in regard to MEP.",
  },
  {
    id: "2",
    style: "paragraphStyle1",
    text: "Synonymous with the best in the MEP Industry since its inception in 1988, we at FJ Group specialize in the engineering, manufacturing, and trading of products and systems in the electrical and mechanical fields related to the building services industry.  FJ Group supports each stage of the process through pre-production, meticulous planning, on-going collaboration, and professional & timely implementation.   ",
  },
  {
    id: "3",
    style: "paragraphStyle1",
    text: "Today, and as a market leader, we have earned a reputation for expertise and excellence, employing in excess of 1,000 qualified staff within facilities exceeding 35,000 m2. As we continue to focus on our dedicated specialization, we have ensured that we bring in the world’s best manufacturers to the Region to operate and deliver MEP solutions across many divergent sectors and offer full turnkey solutions.",
  },
  {
    id: "4",

    style: "paragraphStyle1",
    text: "In fact, we are exceptionally proud to be UAE-based and serving the region and the world from a country we call home, and since the very beginning, we have been persistent in serving the building services industry locally and regionally with dedication and commitment. As our organization continues to expand and grow, we continue to be driven by a robust foundation, a vivid vision, commitment, and a determined promise: to strive to be better, serve better and maintain the level of excellence FJ Group has come to be synonymous with.  ",
  },
];
const titleMessage = [
  {
    id: "5",

    style: "1",
    text: "MESSAGE OF THE",
  },
  {
    id: "6",

    style: "1",
    text: "PRESIDENT",
  },
];
const messageLess = [
  {
    id: "7",

    style: "paragraphStyle1",
    text: "At FJ Group, and as the MEP supplier of choice to many in the industry, I feel privileged and proud of our hard-earned legacy. It transcends credibility, experience and a feeling of strength. But one may argue if that is indeed enough.    ",
  },
  {
    id: "8",

    style: "paragraphStyle1",
    text: "In a time where change is constant, where dynamism is key and innovation challenging us daily to cope, we are constantly reminded to realign our compass and sharpen our minds. The lower cost of renewable energies coupled with a new level of oil pricing has to date imposed new economic realities. The large international companies, hungry for ...growth and armed with new technologies, are expanding to new territories hence competing in our traditional businesses. Meanwhile, the demanding developer, imposing stricter specifications coupled with tough financial conditions is on the end of the spectrum always attempting to extract maximum value out of their investment...",
  },
];
const messageMore = [
  {
    id: "9",

    style: "paragraphStyle1",
    text: "At FJ Group, and as the MEP supplier of choice to many in the industry, I feel privileged and proud of our hard-earned legacy. It transcends credibility, experience and a feeling of strength. But one may argue if that is indeed enough.    ",
  },
  {
    id: "10",

    style: "paragraphStyle1",
    text: "In a time where change is constant, where dynamism is key and innovation challenging us daily to cope, we are constantly reminded to realign our compass and sharpen our minds. The lower cost of renewable energies coupled with a new level of oil pricing has to date imposed new economic realities. The large international companies, hungry for ...growth and armed with new technologies, are expanding to new territories hence competing in our traditional businesses. Meanwhile, the demanding developer, imposing stricter specifications coupled with tough financial conditions is on the end of the spectrum always attempting to extract maximum value out of their investment.  Those are some new dynamics, that no matter how immune you think you are will put you and your corporation under the scope of a new reality, imposing constant vigilance, and a perpetual watchful eye on what’s around the corner from an expanding regional base to an environment of decreasing budgets armed with stricter controls and more deliverables.    ",
  },
  {
    id: "11",

    style: "paragraphStyle1",
    text: "Against this challenging backdrop of various variables, FJ Group has and is more than ever geared to face the demands of tomorrow. In fact, we have always been putting knowledge, initiatives, sustainability and partnerships at the core of our beliefs.  And it is exactly those beliefs that push us to invest constantly in our products, building our brands, adding local value to offer a clear differentiator in terms of reliability, competiveness and excellent service.    ",
  },
  {
    id: "12",

    style: "paragraphStyle1",
    text: "At FJ Group, we have set a clear mindset to lead as a preferred partner in the MEP industry. Strengthened by our presence in the UAE and inspired by its visionary leaders, we are keen to expand this partnership to the rest of the MENA Region. As we have made leaps of progress, we’re humbled to remind ourselves that the road is long, and tortuous still, and we strive on heedlessly.    ",
  },
  {
    id: "13",

    style: "paragraphStyle1",
    text: "This is our steadfast purpose. It is bold and it is clear. It takes roots in the strength of our many time-tested partnerships and the trust of our numerous customers that have – together – helped us build our robust foundations, and it is in our DNA to pursue our high ambitions, externally, but more importantly internally!     ",
  },
  {
    id: "14",

    style: "paragraphStyle1",
    text: 'I’m reminded by what Henry Ford once said: “Coming together is a beginning, staying together is progress, and working together is success."  And it is with these words that I applaud our exceptional and dedicated teams at FJ Group.  Indeed, there is no success worth praising nor pride worth celebrating without acknowledging their consistent efforts matched by their unwavering commitment. The future only looks brighter due to them and because of them!     ',
  },
  {
    id: "15",

    style: "paragraphStyle1",
    text: "Raphael Khlat",
  },
  {
    id: "16",

    style: "paragraphStyle1",
    text: "President",
  },
];
const brands = [
  {
    id: "17",

    style: "1",
    text: "BRANDS",
  },
  {
    id: "18",

    style: "1",
    text: "& REPRESENTATIONS",
  },
];
const Home = () => {
  return (
    <Fragment>
      <ImageSliderHeader />
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
          <Col lg={4}></Col>
          <Col lg={4}>
            <br />
            <br />
            <TextTitle textTitle={titleMessage} />
          </Col>
          <Col lg={4}></Col>
        </Row>

        <div id="presidentMessageLess">
          <Row>
            <Col lg={6}>
              <TextBoxes textParagraph={messageLess} />
              <div style={{ marginLeft: "35%" }}>
                <ExploreMore
                  div1="presidentMessageLess"
                  div2="presidentMessagMore"
                  buutonText="EXPLORE MORE"
                />
              </div>
              <br />
              <br />
            </Col>
            <Col lg={6}>
              <img
                className="PresidentImg"
                src={RaphaelKhlatPresidentSmallImage}
                alt="Raphael Khlat President"
              />
            </Col>
          </Row>
        </div>
        <div id="presidentMessagMore" style={{ display: "none" }}>
          <Row>
            <Col lg={6}>
              <TextBoxes textParagraph={messageMore} />
              <div style={{ marginLeft: "38%" }}>
                <ExploreMore
                  div1="presidentMessageLess"
                  div2="presidentMessagMore"
                  buutonText="SHOW LESS"
                />
              </div>
              <br />
              <br />
            </Col>
            <Col lg={6}>
              <img
                className="PresidentImg"
                src={RaphaelKhlatPresidentImage}
                alt="Raphael Khlat President"
              />
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <TextTitle textTitle={brands} />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Home;
