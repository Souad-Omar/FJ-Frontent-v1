import React, { Fragment } from "react";
import BasicHeader from "../components/basic-header";
import OurProductsHeader from "../assets/OurProductsHeader.jpg";
import OurProductsMain1 from "../assets/Mechanical.jpg";
import OurProductsMain2 from "../assets/ELECTRICAL.jpg";
import OurProductsMain3 from "../assets/PLUMPING.jpg";
import OurProductsMain4 from "../assets/SERVICES.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/page-info.css";
 import TextTitleBox from "../components/text-title-box";
 import ExploreMoreLink from './../components/explore-more copy';
import ProductsSubHeader from "../components/products-sub-header";

const info = [
  {
    id: "1",    backgroundDivImage:OurProductsMain1,
    title: "MECHANICAL",
    text: "Through strong relationships with our principals and partners, our teams have fashioned prominent innovations and breakthroughs.",
    url: "/MechanicalMain",
    char: "M",style:'1'
  },
  {
    id: "2",    backgroundDivImage:OurProductsMain2,
    title: "ELECTRICAL",
    text: "We have been persistent in serving the building services industry with dedication, commitment, and perseverance.",
    url: "/ElectricalMain",
    char: "E",style:'2'
  },
  {
    id: "3",    backgroundDivImage:OurProductsMain3,
    title: "PLUMPING",
    text: "We provide turnkey solutions for steam, water-heating and plumbing systems from design all the way to completion.",

    url: "/PlumbingMain",
    char: "P",style:'1'
  },
  {
    id: "4",    backgroundDivImage:OurProductsMain4,
    title: "SERVICES",
    text: "We deliver high quality mechanical, electrical and plumbing equipment with excellent service back-up and workshop facilities.  ",

    url: "/ServicesMain",
    char: "S",style:'2'
  },
];

const title1 =
  "With laurels and numerous commercial touchpoints and projects accomplished in the building services industry, FJ Group’s strive continues to be in strategic partnerships and leading in all fronts in regard to MEP.";
const text1 =
  "Synonymous with the best in the MEP Industry since its inception in 1988, we at FJ Group specialize in the engineering, manufacturing, and trading of products and systems in the electrical and mechanical fields related to the building services industry.  FJ Group supports each stage of the process through pre-production, meticulous planning, on-going collaboration, and professional & timely implementation.";
const OurProducts = () => {
  return (
    <Fragment>
      <BasicHeader
        backgroundImage={OurProductsHeader}
        headerTitle={["OUR","PRODUCTS"]}
      />
      
      <div
        style={{       
          textAlign: "center",
        }}
      > 
      <ProductsSubHeader productsProps={info} /></div>

      <br />
      <br />
      <br />
      <br />
      <Container style={{ maxWidth: "1740px" }}>
        <Row>
          <Col lg={4}>
            <TextTitleBox title={title1} />
          </Col>
          <Col></Col>
          <Col lg={7}>
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
