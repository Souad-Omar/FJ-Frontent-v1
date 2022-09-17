import React, { Fragment } from "react";
import BasicHeader2 from "../components/basic-header2";
import OurProductsHeader from "../assets/OurProductsHeader.jpg";
import OurProductsMain1 from "../assets/OurProductsMain1.jpg";
import OurProductsMain2 from "../assets/OurProductsMain2.jpg";
import OurProductsMain3 from "../assets/OurProductsMain3.jpg";
import OurProductsMain4 from "../assets/OurProductsMain4.jpg";
import M1 from "../assets/M1.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/page-info.css";
import TextBoxes from "../components/text-boxes";
import "../styles/style-component/miniDrobdownList.css";

const OurProudDivisions = () => {
  return (
    <Fragment>
      <BasicHeader2 backgroundImage={OurProductsHeader} headerTitle={"OUR PRODUCTS"} />
      
      <br />
      <br />
      <br />
      <Footer />
    </Fragment>
  );
};
export default OurProudDivisions;
