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

import BasicHeader2 from "./../components/basic-header2";
import Arrow from "../components/arrow";

const MechanicalSubPages = ({}) => {

  const MechanicalSub=[{
    id:1,
    mecanicalDivisionName:"SERVICESOLUTIONS",
      logo:SERVICESOLUTIONS,
    text:["FJCare provides high-end engineering services through standards for excellent maintenance and repair of the air conditioning systems.  Our service solutions include preventive and corrective maintenance, compressor rebuild and overhauling, rectification, replacement, upgrade and added value engineering services which are designed to ensure that the air conditioning system is periodically maintained to meet any site’s operational requirements while achieving high energy eﬃciency and system reliability, which in turn:"],
     
    products:[],
    },
    {
    id:2,
    mecanicalDivisionName:"HVACPRODUCTS",
      logo:HVACPARTSACCESSORIES,
    text:["The FJCare HVAC project team handles system supply, installation and commissioning of the same.  The dedicated team is experienced and capable of undertaking all types of air conditioning designs & installations. FJCare is ready to deliver an optimum system to the highest industry standards. Our engineering team will provide alternative options and advice before a final proposal is made. Our Projects Division will manage the project right from design stage, installation and through final commissioning before handing over the project to the customer. The projects’ team will supervise the execution through all stages and at the time when commissioning takes place to ensure the system is set up correctly to the building requirements and design parameters. "],
     
    products:[HVACProduct1.png,HVACProduct2.png,HVACProduct3.png],
    },
    
     
    {
    id:3,
    mecanicalDivisionName:"Pumps",
      logo:Pumps,
    text:["FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump.     FJ Group’s Pump Division provides retrofitting, replacement and after sales support for Pumps, Air separators & Expansion Tanks etc."],
     
    products:[PumpsProduct1.png,PumpsProduct2.png,PumpsProduct3.png],
    },
    
     
    {
    id:4,
    mecanicalDivisionName:"HVACPARTS&ACCESSORIES",
    logo:FJENERGYlogo,
    text:["As an integral member of FJ Group, FJ ENERGY Solutions is a solid partner, established with the conviction of providing efficient and sustainable steam & hot water solutions for domestic, commercial, industrial applications, sourcing renewable, conventional and innovative energies from solar, gas, oil & electricity.     FJ Energy provides retrofitting, replacement and after-sales support for Boilers and Solar water heating systems, Photovoltaic systems, Heat Pumps, & Precision Cooling Systems."],
     
    products:[FJENERGYProduct1.png,FJENERGYProduct2.png,FJENERGYProduct3.png],
    },
     
    {
    id:5,
    mecanicalDivisionName:"HVACPARTS&ACCESSORIES",
    logo:DCServelogo,
    text:["In the interest of district cooling providers and designers, DCServe a member of the FJ Group of companies is born out of integration of district cooling products and services under one umbrella.     DCServe provides retrofitting, replacement and after-sales support for Valves, Heat Exchangers, Cooling Towers, Air & Dirt Separators, Filtration, Pressurization Systems etc."],
     
    products:[DCServeProduct1.png,DCServeProduct2.png,DCServeProduct3.png],
    },
     
    {
    id:6,
    mecanicalDivisionName:"HVACPARTS&ACCESSORIES",
    logo:FJCareLogo,
    text:["FJCare Technical Services LLC is a ‘Total Solution Provider’ launched by FJ GROUP in 2003, who are specialists in the HVAC field and well versed to oﬀer engineering services, including but not limited to Annual Maintenance Programs, compressor overhauling, replacements, HVAC Systems installation and supply of genuine HVAC and Refrigeration spare parts.    Evolving to keep up with the changing demands of time is intrinsic to the company. A commitment to quality, process orientation, flexibility, proven methodology, ability to establish engineering teams and a good understanding of various industry standards has been the basis of our long term relationship with our reputed clients."],
     
    products:[],
    },
     
    {
    id:7,
    mecanicalDivisionName:"HVACPARTS&ACCESSORIES",
      
    text:["To reach out to its customers as a Total Solution Provider, FJCare has ventured into opening its own trading wing which comprises of genuine HVAC and refrigeration parts and accessories, representing premium products from reputed manufacturers like York, JCI and Danfoss. Our product range fits the requirement of your project, either, in the service field or for the execution of your HVAC installation projects.     We strongly believe that we can oﬀer you a prompt and professional product supply to the standard that you would expect. We always believe that, “The best part we have is your satisfaction”."],
     
    products:[],
    },
    
  ];    
  
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
            <BasicHeader2
              backgroundImage={Mechanical}
              headerTitle={"Mechanical"}
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
