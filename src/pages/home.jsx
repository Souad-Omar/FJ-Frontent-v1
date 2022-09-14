import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css ";
import ImageSliderHeader from "../components/image-slider-header";
import "../styles/style-component/image-slider-header.css";
import TextBoxes from "../components/text-boxes";
import TextTitle from "../components/title-type";
import Arrow from './../components/arrow';
import { Button } from 'react-bootstrap';

const paragraphs = [
  {
    style: "paragraphStyle1",
    text: "With laurels and numerous commercial touchpoints and projects accomplished in the building services industry, FJ Group’s strive continues to be in strategic partnerships and leading in all fronts in regard to MEP.",
  },
  {
    style: "",
    text: "Synonymous with the best in the MEP Industry since its inception in 1988, we at FJ Group specialize in the engineering, manufacturing, and trading of products and systems in the electrical and mechanical fields related to the building services industry.  FJ Group supports each stage of the process through pre-production, meticulous planning, on-going collaboration, and professional & timely implementation.   ",
  },
  {
    style: "",
    text: "Today, and as a market leader, we have earned a reputation for expertise and excellence, employing in excess of 1,000 qualified staff within facilities exceeding 35,000 m2. As we continue to focus on our dedicated specialization, we have ensured that we bring in the world’s best manufacturers to the Region to operate and deliver MEP solutions across many divergent sectors and offer full turnkey solutions.",
  },
  {
    style: "",
    text: "In fact, we are exceptionally proud to be UAE-based and serving the region and the world from a country we call home, and since the very beginning, we have been persistent in serving the building services industry locally and regionally with dedication and commitment. As our organization continues to expand and grow, we continue to be driven by a robust foundation, a vivid vision, commitment, and a determined promise: to strive to be better, serve better and maintain the level of excellence FJ Group has come to be synonymous with.  ",
  },
];
const titleMessage = [
  {
    style: "",
    text: "MESSAGE OF THE",
  },
  {
    style: "",
    text: "PRESIDENT",
  },
];
const message = [
  {
    style: "",
    text: "At FJ Group, and as the MEP supplier of choice to many in the industry, I feel privileged and proud of our hard-earned legacy. It transcends credibility, experience and a feeling of strength. But one may argue if that is indeed enough.    ",
  },
  {
    style: "",
    text: "In a time where change is constant, where dynamism is key and innovation challenging us daily to cope, we are constantly reminded to realign our compass and sharpen our minds. The lower cost of renewable energies coupled with a new level of oil pricing has to date imposed new economic realities. The large international companies, hungry for ...growth and armed with new technologies, are expanding to new territories hence competing in our traditional businesses. Meanwhile, the demanding developer, imposing stricter specifications coupled with tough financial conditions is on the end of the spectrum always attempting to extract maximum value out of their investment.  Those are some new dynamics, that no matter how immune you think you are will put you and your corporation under the scope of a new reality, imposing constant vigilance, and a perpetual watchful eye on what’s around the corner from an expanding regional base to an environment of decreasing budgets armed with stricter controls and more deliverables.    ",
  },{
    style: "",
    text: "Against this challenging backdrop of various variables, FJ Group has and is more than ever geared to face the demands of tomorrow. In fact, we have always been putting knowledge, initiatives, sustainability and partnerships at the core of our beliefs.  And it is exactly those beliefs that push us to invest constantly in our products, building our brands, adding local value to offer a clear differentiator in terms of reliability, competiveness and excellent service.    ",
  },{
    style: "",
    text: "At FJ Group, we have set a clear mindset to lead as a preferred partner in the MEP industry. Strengthened by our presence in the UAE and inspired by its visionary leaders, we are keen to expand this partnership to the rest of the MENA Region. As we have made leaps of progress, we’re humbled to remind ourselves that the road is long, and tortuous still, and we strive on heedlessly.    ",
  },{
    style: "",
    text: "This is our steadfast purpose. It is bold and it is clear. It takes roots in the strength of our many time-tested partnerships and the trust of our numerous customers that have – together – helped us build our robust foundations, and it is in our DNA to pursue our high ambitions, externally, but more importantly internally!     ",
  },{
    style: "",
    text: "I’m reminded by what Henry Ford once said: “Coming together is a beginning, staying together is progress, and working together is success.\"  And it is with these words that I applaud our exceptional and dedicated teams at FJ Group.  Indeed, there is no success worth praising nor pride worth celebrating without acknowledging their consistent efforts matched by their unwavering commitment. The future only looks brighter due to them and because of them!     ",
  },{
    style: "",
    text: "Raphael Khlat   ",
  },{
    style: "",
    text: "President",
  }
];
const brands = [
  {
    style: "",
    text: "BRANDS",
  },
  {
    style: "",
    text: "& REPRESENTATIONS",
  },
];
const Home = () => {
  return (
    <Button as="a" variant="primary">
    Button as link
  </Button>
  );
};

export default Home;
