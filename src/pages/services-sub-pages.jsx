import React, { Fragment } from "react";
import TextTitleBox from "../components/text-title-box";
import "../styles/style-component/text-boxes.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/footer";

import SERVICES from "../assets/SERVICES.jpg";
import HVACProduct1 from "../assets/s/HVACProduct1.png";
import HVACProduct2 from "../assets/s/HVACProduct2.png";
import HVACProduct3 from "../assets/s/HVACProduct3.png";
import PumpsProduct1 from "../assets/s/PumpsProduct1.png";
import PumpsProduct2 from "../assets/s/PumpsProduct2.png";
import PumpsProduct3 from "../assets/s/PumpsProduct3.png";
import FJENERGYProduct3 from "../assets/s/FJENERGYProduct3.png";
import FJENERGYProduct2 from "../assets/s/FJENERGYProduct2.png";
import FJENERGYProduct1 from "../assets/s/FJENERGYProduct1.png";
import FJENERGYlogo from "../assets/s/FJENERGYlogo.jpg";
import FJCareLogo from "../assets/s/FJCareLogo.jpg";
import DCServelogo from "../assets/s/DCServelogo.png";
import DCServeProduct1 from "../assets/s/DCServeProduct1.png";
import DCServeProduct2 from "../assets/s/DCServeProduct2.png";
import DCServeProduct3 from "../assets/s/DCServeProduct3.png";
import Pumps from "../assets/s/Pumps.jpg"
import SERVICESOLUTIONS from "../assets/s/SERVICESOLUTIONS.jpg"
import HVACPARTSACCESSORIES from "../assets/s/HVACPARTS&ACCESSORIES.jpg"
import SERVICESOLUTIONS1 from "../assets/s/SERVICESOLUTIONS.jpg"
import HVACPRODUCTS from "../assets/s/HVACPRODUCTS.jpg"
import HVACPARTSACCESSORIES1 from "../assets/s/HVACPARTS&ACCESSORIES.jpg"
import BasicHeader from "../components/basic-header";
import Arrow from "../components/arrow";
import CustomSubHeader2 from "../components/custom-sub-header2";

const ServicesSubPages = ({}) => {

  const MechanicalSub=[{
    id:1,
    mecanicalDivisionName:"SERVICESOLUTIONS",
      logo:SERVICESOLUTIONS,
    text:["FJCare provides high-end engineering services through standards for excellent maintenance and repair of the air conditioning systems.  Our service solutions include preventive and corrective maintenance, compressor rebuild and overhauling, rectification, replacement, upgrade and added value engineering services which are designed to ensure that the air conditioning system is periodically maintained to meet any site’s operational requirements while achieving high energy eﬃciency and system reliability, which in turn:"],
    factoryImage:SERVICESOLUTIONS1,
    factoryText:[
      {
        id: "",
    
        style: "paragraph3",
        text: "We are committed to deliver high quality mechanical, electrical and plumbing equipment with its services in a timely manner to the agreed specifications. We understand the importance of having excellent service backup and workshop facilities. We have also ensured that our technicians are experienced and well-equipped with tools and machinery to execute quality work, time and again. We keep adequate spares, enabling us to attend to after-sales service and guarantee the quality of our supplied equipment. We are also committed to continuously measure, review, and improve our working and quality objectives to maximize our customers’ satisfaction, with optimal utilization of resources.",
      },
    ],
    factoryTitle:[
      {
        style: "1",
        text: "SERVICE AND SOLUTIONS",
      },
    ],
    products:[],
    },
    {
    id:2,
    mecanicalDivisionName:"HVAC PRODUCTS",
      logo:HVACPARTSACCESSORIES,
    text:["The FJCare HVAC project team handles system supply, installation and commissioning of the same.  The dedicated team is experienced and capable of undertaking all types of air conditioning designs & installations. FJCare is ready to deliver an optimum system to the highest industry standards. Our engineering team will provide alternative options and advice before a final proposal is made. Our Projects Division will manage the project right from design stage, installation and through final commissioning before handing over the project to the customer. The projects’ team will supervise the execution through all stages and at the time when commissioning takes place to ensure the system is set up correctly to the building requirements and design parameters. "],
    factoryImage:HVACPRODUCTS,
    factoryText:[
      {
        id: "",
    
        style: "paragraph3",
        text: "We are committed to deliver high quality mechanical, electrical and plumbing equipment with its services in a timely manner to the agreed specifications. We understand the importance of having excellent service backup and workshop facilities. We have also ensured that our technicians are experienced and well-equipped with tools and machinery to execute quality work, time and again. We keep adequate spares, enabling us to attend to after-sales service and guarantee the quality of our supplied equipment. We are also committed to continuously measure, review, and improve our working and quality objectives to maximize our customers’ satisfaction, with optimal utilization of resources.",
      },
    ],
    factoryTitle:[
      {
        style: "1",
        text: "HVAC PRODUCTS",
      },
    ],
    products:[HVACProduct1.png,HVACProduct2.png,HVACProduct3.png],
    },
    
     
    {
    id:3,
    mecanicalDivisionName:"Pumps",
      logo:Pumps,
    text:["FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump.     FJ Group’s Pump Division provides retrofitting, replacement and after sales support for Pumps, Air separators & Expansion Tanks etc."],
    factoryImage:Pumps,
    factoryText:[
      {
        id: "",
    
        style: "paragraph3",
        text: "We are committed to deliver high quality mechanical, electrical and plumbing equipment with its services in a timely manner to the agreed specifications. We understand the importance of having excellent service backup and workshop facilities. We have also ensured that our technicians are experienced and well-equipped with tools and machinery to execute quality work, time and again. We keep adequate spares, enabling us to attend to after-sales service and guarantee the quality of our supplied equipment. We are also committed to continuously measure, review, and improve our working and quality objectives to maximize our customers’ satisfaction, with optimal utilization of resources.",
      },
    ],
    factoryTitle:[
      {
        style: "1",
        text: "Pumps",
      },
    ],
    products:[PumpsProduct1.png,PumpsProduct2.png,PumpsProduct3.png],
    },
    
     
    {
    id:4,
    mecanicalDivisionName:"HVACPARTS&ACCESSORIES",
    logo:FJENERGYlogo,
    text:["As an integral member of FJ Group, FJ ENERGY Solutions is a solid partner, established with the conviction of providing efficient and sustainable steam & hot water solutions for domestic, commercial, industrial applications, sourcing renewable, conventional and innovative energies from solar, gas, oil & electricity.     FJ Energy provides retrofitting, replacement and after-sales support for Boilers and Solar water heating systems, Photovoltaic systems, Heat Pumps, & Precision Cooling Systems."],
    factoryImage:SERVICESOLUTIONS1,
    factoryText:[
      {
        id: "",
    
        style: "paragraph3",
        text: "We are committed to deliver high quality mechanical, electrical and plumbing equipment with its services in a timely manner to the agreed specifications. We understand the importance of having excellent service backup and workshop facilities. We have also ensured that our technicians are experienced and well-equipped with tools and machinery to execute quality work, time and again. We keep adequate spares, enabling us to attend to after-sales service and guarantee the quality of our supplied equipment. We are also committed to continuously measure, review, and improve our working and quality objectives to maximize our customers’ satisfaction, with optimal utilization of resources.",
      },
    ],
    factoryTitle:[
      {
        style: "1",
        text: "SERVICE AND SOLUTIONS",
      },
    ],
    products:[FJENERGYProduct1.png,FJENERGYProduct2.png,FJENERGYProduct3.png],
    },
     
    {
    id:5,
    mecanicalDivisionName:"HVACPARTS&ACCESSORIES",
    logo:DCServelogo,
    text:["In the interest of district cooling providers and designers, DCServe a member of the FJ Group of companies is born out of integration of district cooling products and services under one umbrella.     DCServe provides retrofitting, replacement and after-sales support for Valves, Heat Exchangers, Cooling Towers, Air & Dirt Separators, Filtration, Pressurization Systems etc."],
    factoryImage:SERVICESOLUTIONS1,
    factoryText:[
      {
        id: "",
    
        style: "paragraph3",
        text: "We are committed to deliver high quality mechanical, electrical and plumbing equipment with its services in a timely manner to the agreed specifications. We understand the importance of having excellent service backup and workshop facilities. We have also ensured that our technicians are experienced and well-equipped with tools and machinery to execute quality work, time and again. We keep adequate spares, enabling us to attend to after-sales service and guarantee the quality of our supplied equipment. We are also committed to continuously measure, review, and improve our working and quality objectives to maximize our customers’ satisfaction, with optimal utilization of resources.",
      },
    ],
    factoryTitle:[
      {
        style: "1",
        text: "SERVICE AND SOLUTIONS",
      },
    ],
    products:[DCServeProduct1.png,DCServeProduct2.png,DCServeProduct3.png],
    },
     
    {
    id:6,
    mecanicalDivisionName:"HVACPARTS&ACCESSORIES",
    logo:FJCareLogo,
    text:["FJCare Technical Services LLC is a ‘Total Solution Provider’ launched by FJ GROUP in 2003, who are specialists in the HVAC field and well versed to oﬀer engineering services, including but not limited to Annual Maintenance Programs, compressor overhauling, replacements, HVAC Systems installation and supply of genuine HVAC and Refrigeration spare parts.    Evolving to keep up with the changing demands of time is intrinsic to the company. A commitment to quality, process orientation, flexibility, proven methodology, ability to establish engineering teams and a good understanding of various industry standards has been the basis of our long term relationship with our reputed clients."],
    factoryImage:HVACPARTSACCESSORIES1,
    factoryText:[
      {
        id: "",
    
        style: "paragraph3",
        text: "We are committed to deliver high quality mechanical, electrical and plumbing equipment with its services in a timely manner to the agreed specifications. We understand the importance of having excellent service backup and workshop facilities. We have also ensured that our technicians are experienced and well-equipped with tools and machinery to execute quality work, time and again. We keep adequate spares, enabling us to attend to after-sales service and guarantee the quality of our supplied equipment. We are also committed to continuously measure, review, and improve our working and quality objectives to maximize our customers’ satisfaction, with optimal utilization of resources.",
      },
    ],
    factoryTitle:[
      {
        style: "1",
        text: "HVACPARTS & ACCESSORIES",
      },
    ],
    products:[],
    },
     
    {
    id:7,
    mecanicalDivisionName:"HVACPARTS&ACCESSORIES",
      
    text:["To reach out to its customers as a Total Solution Provider, FJCare has ventured into opening its own trading wing which comprises of genuine HVAC and refrigeration parts and accessories, representing premium products from reputed manufacturers like York, JCI and Danfoss. Our product range fits the requirement of your project, either, in the service field or for the execution of your HVAC installation projects.     We strongly believe that we can oﬀer you a prompt and professional product supply to the standard that you would expect. We always believe that, “The best part we have is your satisfaction”."],
    factoryImage:HVACPARTSACCESSORIES1,
    factoryText:[
      {
        id: "",
    
        style: "paragraph3",
        text: "We are committed to deliver high quality mechanical, electrical and plumbing equipment with its services in a timely manner to the agreed specifications. We understand the importance of having excellent service backup and workshop facilities. We have also ensured that our technicians are experienced and well-equipped with tools and machinery to execute quality work, time and again. We keep adequate spares, enabling us to attend to after-sales service and guarantee the quality of our supplied equipment. We are also committed to continuously measure, review, and improve our working and quality objectives to maximize our customers’ satisfaction, with optimal utilization of resources.",
      },
    ],
    factoryTitle:[
      {
        style: "1",
        text: "HVACPARTS & ACCESSORIES",
      },
    ],
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
        factoryText,
        factoryTitle,
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
              backgroundImage={SERVICES}
              headerTitle={["SERVICES"]}
            />
      <CustomSubHeader2 backgroundImage={factoryImage} headerTitle={"PLUMPING"}  charHeader={"P"} text={factoryText} title={factoryTitle}/>

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

export default ServicesSubPages;
