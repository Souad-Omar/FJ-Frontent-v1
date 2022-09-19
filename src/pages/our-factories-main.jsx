import React, { Fragment } from "react";
import BasicHeader2 from "../components/basic-header2";
import OurFactoryImg from "../assets/OurFactoryImg.jpg";
import ourFactory1 from "../assets/ourFactoryMain/ourFactory1.jpg";
import ourFactory2 from "../assets/ourFactoryMain/ourFactory2.jpg";
import ourFactory3 from "../assets/ourFactoryMain/ourFactory3.jpg";
import ourFactory4 from "../assets/ourFactoryMain/ourFactory4.jpg";
import ourFactory5 from "../assets/ourFactoryMain/ourFactory5.jpg";
import ourFactory6 from "../assets/ourFactoryMain/ourFactory6.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/page-info.css";
 import TextTitleBox from "../components/text-title-box";
 import ExploreMoreLink from './../components/explore-more copy';

 import OurFactoryLogo1 from "../assets/OurFactoryLogo1.png";
 import OurFactoryLogo2 from "../assets/OurFactoryLogo2.png";
 import OurFactoryLogo3 from "../assets/OurFactoryLogo3.png";
 import OurFactoryLogo4 from "../assets/OurFactoryLogo4.png";
 import OurFactoryLogo5 from "../assets/OurFactoryLogo5.png";
 import OurFactoryLogo6 from "../assets/OurFactoryLogo6.png";
const info = [
  {
    logo: OurFactoryLogo1,
    id: "1",
    title: "Euroclima Middle East",
    text: "Euroclima has been a market and technology leader in the production and worldwide distribution...",
    url: "/OurFactoriesSupPages/1",
  },
  {
    logo: OurFactoryLogo3,
    id: "2",
    title: "Multiplast Dubai LLC",
    text: "Manufacturing Company That Produces Superior Quality Products That Comply With...",
    url: "/OurFactoriesSupPages/3",
  },
  {
    logo: OurFactoryLogo2,
    id: "3",
    title: "Alpha Ducts LLC",
    text: "Alpha ducts llc is one of the highly advanced and modernized manufacturers of polyisocyanurate... and phenolic insulation panels",
    url: "/OurFactoriesSupPages/2",
  },
  {
    logo: OurFactoryLogo5,
    id: "4",
    title: "FLOWTECH LLC (warehouse & service centre)",
    text: "Our layout of separate production lines for air terminal and air control devices equipped with state-of-the-art tools and machineries... ",
    url: "/OurFactoriesSupPages/5",
  }, {
    logo: OurFactoryLogo4,
    id: "5",
    title: "PROMASTER  (production planning & control)",
    text: " our sophisticated production facility incorporates pneumatic lines along with the required tools, fabrication machines,...",
    url: "/OurFactoriesSupPages/4",
  }, {
    logo: OurFactoryLogo6,
    id: "6",
    title: "PUMPS",
    text: "FJ group represents globally renowned brands from xylem inc, a world leader in providing innovative pumping solutions...",
    url: "/OurFactoriesSupPages/6",
  },
];

const title1 =
  "With laurels and numerous commercial touchpoints and projects accomplished in the building services industry, FJ Group’s strive continues to be in strategic partnerships and leading in all fronts in regard to MEP.";
const text1 =
  "Synonymous with the best in the MEP Industry since its inception in 1988, we at FJ Group specialize in the engineering, manufacturing, and trading of products and systems in the electrical and mechanical fields related to the building services industry.  FJ Group supports each stage of the process through pre-production, meticulous planning, on-going collaboration, and professional & timely implementation.";
const OurFactoriesMain = () => {
  return (
    <Fragment>
      <BasicHeader2
        backgroundImage={OurFactoryImg}
        headerTitle={"OUR FACTORIES"}
      />
      <div
        className={"division"}
        style={{          height:"75%",

          backgroundImage: `url(${ourFactory1})`,
          fontFamily: "Montserrat",
          color: "black",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col lg={3}> 
              <img
                    style={{ marginLeft: "0%", width: "300px", height: "200px" }}
                    src={info[0].logo}
                    alt={info[0].factoryMainTytle}
                  />     
              <p style={{ fontSize: "40px" }}>{info[0].title}</p>
              <p style={{ fontSize: "20px" }}>{info[0].text}</p>
              <ExploreMoreLink buutonText="EXPLORE MORE" link={info[0].url} style="1"/>
              <br /><br /><br /><br />
            </Col>
            <Col lg={9}>
              {" "}
              <br />
            </Col>
          </Row>{" "}
        </Container>
      </div>
      <div
        className={"division"}
        style={{          height:"75%",

          backgroundImage: `url(${ourFactory2})`,
          fontFamily: "Montserrat",
          color: "black",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col lg={9}></Col>
            <Col lg={3}> 
              <img
                    style={{ marginLeft: "0%", width: "300px", height: "200px" }}
                    src={info[1].logo}
                    alt={info[1].factoryMainTytle}
                  />   
               <p style={{ fontSize: "40px" }}>{info[1].title}</p>
              <p style={{ fontSize: "20px" }}>{info[1].text}</p>
              <ExploreMoreLink buutonText="EXPLORE MORE" link={info[1].url} style="1"/>
              <br /><br /><br /><br />

            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={"division"}
        style={{          height:"75%",

          backgroundImage: `url(${ourFactory3})`,
          fontFamily: "Montserrat",
          color: "black",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col lg={3}>
               <br />
              <img
                    style={{ marginLeft: "0%", width: "300px", height: "200px" }}
                    src={info[2].logo}
                    alt={info[2].factoryMainTytle}
                  />    
              <p style={{ fontSize: "40px" }}>{info[2].title}</p>
              <p style={{ fontSize: "20px" }}>{info[2].text}</p>
              <ExploreMoreLink buutonText="EXPLORE MORE" link={info[2].url} style="1"/>
              <br /><br /><br /><br />

            </Col>
            <Col lg={9}>
              {" "}
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={"division"}
        style={{          height:"75%",

          backgroundImage: `url(${ourFactory4})`,
          fontFamily: "Montserrat",
          color: "black",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col lg={9}></Col>
            <Col lg={3}>
              {" "}
              <br />
              <img
                    style={{ marginLeft: "0%", width: "300px", height: "200px" }}
                    src={info[3].logo}
                    alt={info[3].factoryMainTytle}
                  />   
              <p style={{ fontSize: "40px" }}>{info[3].title}</p>
              <p style={{ fontSize: "20px" }}>{info[3].text}</p>
              <ExploreMoreLink buutonText="EXPLORE MORE" link={info[3].url} style="1"/>
              <br /><br /><br /><br />

            </Col>
          </Row>
        </Container>

        
      </div><div
        className={"division"}
        style={{          height:"75%",

          backgroundImage: `url(${ourFactory5})`,
          fontFamily: "Montserrat",
          color: "black",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col lg={3}>
            <br />
              <img
                    style={{ marginLeft: "0%", width: "300px", height: "200px" }}
                    src={info[4].logo}
                    alt={info[4].factoryMainTytle}
                  />   
              <p style={{ fontSize: "40px" }}>{info[4].title}</p>
              <p style={{ fontSize: "20px" }}>{info[4].text}</p>
              <ExploreMoreLink buutonText="EXPLORE MORE" link={info[4].url} style="1"/>
              <br /><br /><br /><br />

            </Col>
            <Col lg={9}>
              {" "}
              <br />
            </Col>
          </Row>
        </Container>
      </div><div
        className={"division"}
        style={{          height:"75%",

          backgroundImage: `url(${ourFactory6})`,
          fontFamily: "Montserrat",
          color: "black",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "2040px" }}>
          <Row>
            <Col lg={9}></Col>
            <Col lg={3}>
            <br />
              <br />
              <br />
              <br />
              <img
                    style={{ marginLeft: "0%", width: "300px", height: "200px" }}
                    src={info[5].logo}
                    alt={info[5].factoryMainTytle}
                  />  
              <p style={{ fontSize: "40px" }}>{info[5].title}</p>
              <p style={{ fontSize: "20px" }}>{info[5].text}</p>
              <ExploreMoreLink buutonText="EXPLORE MORE" link={info[5].url} style="1"/>
              <br /><br /><br /><br />

            </Col>
          </Row>
        </Container>

        
      </div>
      <Footer />
    </Fragment>
  );
};
export default OurFactoriesMain;
