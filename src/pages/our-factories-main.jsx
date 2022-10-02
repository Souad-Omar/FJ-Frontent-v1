import React, { Fragment } from "react";
import BasicHeader from "../components/basic-header";
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

 import OurFactoryLogo1 from "../assets/Logos/EuroclimaLogo.png";
 import OurFactoryLogo2 from "../assets/Logos/AlphaDuctsLogo.png";
 import OurFactoryLogo3 from "../assets/Logos/MultiplastDubailogo.PNG";
 import OurFactoryLogo4 from "../assets/Logos/ProMasterLogo.png";
 import OurFactoryLogo5 from "../assets/Logos/FlowTechLogo.png";
 import OurFactoryLogo6 from "../assets/Logos/PumbsLogo.png";
import DivSubHeader from "../components/div-sub-header";
const info = [
  {
    logo: OurFactoryLogo1,
    id: "1",
    title: "Euroclima Middle East",
    text: "Euroclima has been a market and technology leader in the production and worldwide distribution...",
    url: "/OurFactoriesSupPages/1",
    backgroundDivImage:ourFactory1,
    factoryMainTytle:"Euroclima Middle East",style:'1'
  },
  {
    logo: OurFactoryLogo3,
    id: "2",
    title: "Multiplast Dubai LLC",
    text: "Manufacturing Company That Produces Superior Quality Products That Comply With...",
    url: "/OurFactoriesSupPages/3",
    backgroundDivImage:ourFactory2,
    factoryMainTytle:"Euroclima Middle East",style:'2'
  },
  {
    logo: OurFactoryLogo2,
    id: "3",
    title: "Alpha Ducts LLC",
    text: "Alpha ducts llc is one of the highly advanced and modernized manufacturers of polyisocyanurate... and phenolic insulation panels",
    url: "/OurFactoriesSupPages/2",
        backgroundDivImage:ourFactory3,

    factoryMainTytle:"Euroclima Middle East",style:'1'
  },
  {
    logo: OurFactoryLogo5,
    id: "4",
    title: "FLOWTECH LLC (warehouse & service centre)",
    text: "Our layout of separate production lines for air terminal and air control devices equipped with state-of-the-art tools... ",
    url: "/OurFactoriesSupPages/5",
        backgroundDivImage:ourFactory4,

    factoryMainTytle:"Euroclima Middle East",
    style:'2'
  }, {
    logo: OurFactoryLogo4,
    id: "5",
    title: "PROMASTER  (production planning & control)",
    text: " our sophisticated production facility incorporates pneumatic lines along with the required tools, fabrication machines,...",
    url: "/OurFactoriesSupPages/4",
        backgroundDivImage:ourFactory5,

    factoryMainTytle:"Euroclima Middle East",style:'1'
  }, {
    logo: OurFactoryLogo6,
    id: "6",
    title: "PUMPS",
    text: "FJ group represents globally renowned brands from xylem inc, a world leader in providing innovative pumping solutions...",
    url: "/OurFactoriesSupPages/6",
        backgroundDivImage:ourFactory6,

    factoryMainTytle:"Euroclima Middle East",style:'2'
  },
];
const MTitle = [
  {
    style: "1",
    text: "",
  },
];
const MInfo = [
  {
    id: "",

    style: "paragraphStyle1",
    text: "We are constantly working on improving our diverse services through our rich portfolio that encompasses anything and everything having to do with the MEP industry. With that in mind, and what’s integral to FJ Group is providing turnkey solutions for steam, water-heating and plumbing systems from supporting clients with design, supply, installation, testing, commissioning, training, and after-sales services. FJ Group is partnered with globally renowned brands who are the pioneers in this field and are capable of providing customized engineering solutions for residential, commercial and industrial water heating and plumbing applications.",
  },
];
const title1 =
  "With laurels and numerous commercial touchpoints and projects accomplished in the building services industry, FJ Group’s strive continues to be in strategic partnerships and leading in all fronts in regard to MEP.";
const text1 =
  "Synonymous with the best in the MEP Industry since its inception in 1988, we at FJ Group specialize in the engineering, manufacturing, and trading of products and systems in the electrical and mechanical fields related to the building services industry.  FJ Group supports each stage of the process through pre-production, meticulous planning, on-going collaboration, and professional & timely implementation.";
const OurFactoriesMain = () => {
  return (
    <Fragment>
      <BasicHeader
        backgroundImage={OurFactoryImg}
        headerTitle={["OUR", "FACTORIES"]}
      /> 
      <div
        style={{       
          textAlign: "center",
        }}
      > 

        <DivSubHeader divProps={info}/>
      </div>
      <Footer />
    </Fragment>
  );
};
export default OurFactoriesMain;
