import React, { Fragment } from "react";
import TextTitleBox from "../components/text-title-box";
import "../styles/style-component/text-boxes.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/footer";

import Mechanical from "../assets/Mechanical.jpg";
import HVACProduct1 from "../assets/s/HVACProduct1.png";
import HVACProduct2 from "../assets/s/HVACProduct2.png";
import HVACProduct3 from "../assets/s/HVACProduct3.png";
import PumpsProduct1 from "../assets/s/PumpsProduct1.png";
import PumpsProduct2 from "../assets/s/PumpsProduct2.png";
import PumpsProduct3 from "../assets/s/PumpsProduct3.png";
import FJENERGYProduct3 from "../assets/s/FJENERGYProduct3.png";
import FJENERGYProduct2 from "../assets/s/FJENERGYProduct2.png";
import FJENERGYProduct1 from "../assets/s/FJENERGYProduct1.png";
import FJENERGYlogo from "../assets/s/FJENERGYlogo.png";
import FJCareLogo from "../assets/s/FJCarelogo.png";
import DCServelogo from "../assets/s/DCServelogo.png";
import DCServeProduct1 from "../assets/s/DCServeProduct1.png";
import DCServeProduct2 from "../assets/s/DCServeProduct2.png";
import DCServeProduct3 from "../assets/s/DCServeProduct3.png";
import Pumps from "../assets/s/Pumps.png"
import SERVICESOLUTIONS from "../assets/s/SERVICESOLUTIONS.png"
import HVACPARTSACCESSORIES from "../assets/s/HVACPARTS&ACCESSORIES.png"
import HVACPRODUCTS from "../assets/s/HVACPRODUCTS.png"

import BasicHeader from "../components/basic-header";
import Arrow from "../components/arrow";

const MechanicalSubPages = ({}) => {

  const MechanicalSub=[{  },];
      
  
  const url = window.location.href.split("/");
  const urlPage = parseInt(url[4]);
  const MechanicalSubPage = MechanicalSub.map(
    (
      {
        id,
        logo,
        factoryMainTytle,
        factoryImage,
        factoryName,
        text,
        tel,
        web,
        address,
        map,
      },
      idx
    ) => {
      if (id === urlPage) {
        let index = MechanicalSub.findIndex((x) => x.id === id);
        const factory = [MechanicalSub[index]];

        const next = index + 1 < MechanicalSub.length ? index + 2 : 1;
        const previous = index + 1 > 1 ? index : 6;

        return (
          <>
            <BasicHeader
              backgroundImage={Mechanical}
              headerTitle={["Mechanical"]}
            />

            <Container>
              <Row>
                <Col>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <Arrow link={"/ServicesSubPages/" + previous} />
                </Col>
                <Col>
                  <br />
                  <br />
                  <br />
                  <img
                    style={{ marginLeft: "8%", width: "85%", height: "auto" }}
                    src={logo}
                    alt={factoryMainTytle}
                  />
                  <br />
                  <TextTitleBox title={factoryMainTytle} />
                </Col>
                <Col>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Arrow
                    directions={"."}
                    link={"/ServicesSubPages/" + next}
                  />
                </Col>{" "}
              </Row>
             
              <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                 
                  {text.map((text) => (
                    <TextTitleBox text={text} />
                  ))}
                  <br />
                  
                  <br />
                  <br />
                  <br />
                </Col>
                <Col lg={1}></Col>
              </Row>
            </Container>
            <Footer />
          </>
        );
      }
    }
  );
  return <Fragment>{MechanicalSubPage}</Fragment>;
};

export default MechanicalSubPages;
