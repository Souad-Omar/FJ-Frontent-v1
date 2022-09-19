import React, { Fragment } from "react";
import TextTitleBox from "../components/text-title-box";
import "../styles/style-component/text-boxes.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/footer";

import OurFactoryImg from "../assets/OurFactoryImg.jpg";
import OurFactory1 from "../assets/OurFactory1.jpg";
import OurFactory2 from "../assets/OurFactory2.jpg";
import OurFactory3 from "../assets/OurFactory3.jpg";
import OurFactory4 from "../assets/OurFactory4.jpg";
import OurFactory5 from "../assets/OurFactory5.jpg";
import OurFactory6 from "../assets/OurFactory6.jpg";
import OurFactoryLogo1 from "../assets/OurFactoryLogo1.png";
import OurFactoryLogo2 from "../assets/OurFactoryLogo2.png";
import OurFactoryLogo3 from "../assets/OurFactoryLogo3.png";
import OurFactoryLogo4 from "../assets/OurFactoryLogo4.png";
import OurFactoryLogo5 from "../assets/OurFactoryLogo5.png";
import OurFactoryLogo6 from "../assets/OurFactoryLogo6.png";
import BasicHeader2 from "./../components/basic-header2";
import Arrow from "../components/arrow";

const ElectricalSubPages = ({}) => {
  const OurFactory = [
    {
      id: 1,
      logo: OurFactoryLogo1,
      factoryMainTytle: "AIR-CONDITIONING & AIR-HANDLING UNITS",
      factoryImage: OurFactory1,
      factoryName: "EUROCLIMA MIDDLE EAST",
      text: [
        "Euroclima has been a market and technology leader in the production and worldwide distribution of high-quality climate control units and fan convectors.      ",
        "We develop, produce and market high-end ventilation products from simple convenient applications to solutions in hygiene, and air processing plants along with the use of highly efficient heat recovery systems.        ",
        "Euroclima is an international industrial business operating across 5 production sites in Italy, Austria, India and the United Arab Emirates with over 40,000 squared metres of production sites, as well as an extensive global distribution network with sales and service branches.      ",
      ],
      tel: "+9714 802 4000",
      web: "https://www.euroclima.com",
      address: "Dubai Investment Park 1, Dubai, UAE",
      map: "https://goo.gl/maps/kGT6urQRVMkkugD68",
    },
    {
      id: 2,
      logo: OurFactoryLogo2,
      factoryMainTytle: "INSULATION PANELS & PRE-INSULATED AIR DUCT SYSTEMS  ",
      factoryImage: OurFactory2,
      factoryName: "ALPHA DUCTS LLC",
      text: [
        "ALPHA DUCTS LLC is one of the highly advanced and modernized manufacturers of polyisocyanurate and phenolic insulation panels, pre-insulated air duct systems and accessories in the Middle east and GCC Region.      ",
        "Established in 2004 as a small manufacturing facility, Alpha Ducts LLC was upgraded in 2005 to a huge capacity manufacturing facility. It presently boasts fully automated machineries and qualified technicians boasting the highest production capacity among all other insulation foam panels manufacturers in the United Arab Emirates.      ",
      ],
      tel: "+9714 272 4715",
      web: "http://alphaducts.com",
      address: "X4PM+CFV, Mina Jebel Ali, Jebel Ali Industrial, Dubai, UAE",
      map: "https://goo.gl/maps/UMkeQ5MR3Bcyxuv6A",
    },
    {
      id: 3,
      logo: OurFactoryLogo3,
      factoryMainTytle: "PVC ELECTRICAL CONDUIT & ACCESSORIES",
      factoryImage: OurFactory3,
      factoryName: "MULTIPLAST DUBAI LLC",
      text: [
        "Multiplast Dubai LLC was established in United Arab Emirates and was founded on a land area of 100,000 sq.ft. in Ras Al Khor, Dubai. It presently boasts the latest and most technologically advanced machineries available in the market today.      ",
        "Multiplast Dubai LLC is a manufacturing company that produces superior quality products that comply with international standards, focusing on developing a wide-range of electrical fittings and lightings using only the highest caliber of PVC raw materials.  Its products follow the European and British standards, as well as boasting international accreditations.      ",
      ],
      tel: "+9714 333 8666",
      web: "",
      address: "25A Street, Ras Al Khor Industrial Area 2, Dubai, UAE",
      map: "https://goo.gl/maps/WSvcabw33qNpmY217",
    },
    {
      id: 4,
      logo: OurFactoryLogo4,
      factoryMainTytle: "ELECTRICAL SWITCHGEAR",
      factoryImage: OurFactory4,
      factoryName: "PROMASTER (Production Planning & Control)",
      text: [
        "We have a well laid out, fully air conditioned, dust-free manufacturing facility boasting a shop floor area of 4,000 sqm and employees more than 200 skilled workers. Our sophisticated production facility incorporates pneumatic lines along with the required tools, fabrication machines, hand tools and other related machineries.      ",
        "Our team consists of well experienced designers and engineers capable of providing highly engineered and meticulously assembled electric switchgear and control panels. We use advanced software to assist the engineers in all the design aspects.      ",
      ],
      tel: "+9714 810 5105",
      web: "",
      address:
        "Faisal Jassim Trading Co, Dubai Investment Park-1, Plot: 598-1152, Dubai, UAE",
      map: "https://www.google.com/maps/place....",
    },
    {
      id: 5,
      logo: OurFactoryLogo5,
      factoryMainTytle: "Air Distribution Specialist",
      factoryImage: OurFactory5,
      factoryName: "FLOWTECH LLC (Warehouse & Service Centre)",
      text: [
        "Flowtech production facility consists of nearly 6,000 square meter of dedicated manufacturing space and has more than 260 qualified employees, has been at the forefront of manufacturing air distribution specialties for over 17 years.       ",
        "Our layout of separate production lines for air terminal and air control devices equipped with state-of-the-art tools and machineries are based on creating an effective and efficient work flow and high standard production.  Meanwhile, our in-house powder coating plant has the flexibility to offer our customers standard or special coating as per the project needs.       ",
      ],
      tel: "+9714 810 5105",
      web: "",
      address: "X4PC+3WW - Mina Jebel Ali - Jebel Ali Industrial – Dubai, UAE",
      map: "https://www.google.com/maps/place/FLOWTECH+LLC...",
    },
    {
      id: 6,
      logo: OurFactoryLogo6,
      factoryMainTytle: "Pumps & Systems",
      factoryImage: OurFactory6,
      factoryName: "PUMPS (factory)",
      text: [
        "FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire Pump.       ",
        "Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from an extensive portfolio and solutions for unique applications has allowed us to be at the forefront in the water pumping industry.      ",
      ],
      tel: "+9714 810 5105",
      web: "",
      address:
        "Faisal Jassim Trading Co, Dubai Investment Park-1, Plot: 598-1152, Dubai, UAE",
      map: "https://www.google.com/maps/place/faisal+jassim+trading...",
    },
  ];

  
  const url = window.location.href.split("/");
  const urlPage = parseInt(url[4]);
  const OurFactoryPage = OurFactory.map(
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
        let index = OurFactory.findIndex((x) => x.id === id);
        const factory = [OurFactory[index]];

        const next = index + 1 < OurFactory.length ? index + 2 : 1;
        const previous = index + 1 > 1 ? index : 6;

        return (
          <>
            <BasicHeader2
              backgroundImage={OurFactoryImg}
              headerTitle={"OUR FACTORIES"}
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

                  <Arrow link={"/ElectricalSubPages/" + previous} />
                </Col>
                <Col>
                  <br />
                  <br />
                  <br />
                  <img
                    style={{ marginLeft: "8%", width: "85%", height: "70%" }}
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
                    link={"/ElectricalSubPages/" + next}
                  />
                </Col>{" "}
              </Row>
              <Row>
                <Col>
                  <br />
                  <br />
                  <br />
                  <img
                    style={{ marginLeft: "0%", width: "100%", height: "100%" }}
                    src={factoryImage}
                    alt={factoryMainTytle}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <TextTitleBox title={factoryName} />
                  <br />
                  {text.map((text) => (
                    <TextTitleBox text={text} />
                  ))}
                  <br />
                  <br />
                  <TextTitleBox title="CONTACT INFO" />
                  <br />
                  <TextTitleBox title="TEL" />
                  <TextTitleBox text={tel} />
                  <br />
                  <TextTitleBox title="WEB" />
                  <TextTitleBox text={web} />
                  <br />
                  <TextTitleBox title="ADDRESS" />
                  <TextTitleBox text={address} />
                  <br />
                  <TextTitleBox title="MAP" />
                  <TextTitleBox text={map} />
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
  return <Fragment>{OurFactoryPage}</Fragment>;
};

export default ElectricalSubPages;
