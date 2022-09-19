import React, { Fragment } from "react";
import TextTitleBox from "../components/text-title-box";
import "../styles/style-component/text-boxes.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/footer";

import PLUMPING from "../assets/PLUMPING.jpg";
import PumpsProduct1 from "../assets/s/PumpsProduct1.png";
import PumpsProduct2 from "../assets/s/PumpsProduct2.png";
import PumpsProduct3 from "../assets/s/PumpsProduct3.png";
import FJENERGYProduct3 from "../assets/s/FJENERGYProduct3.png";
import FJENERGYProduct2 from "../assets/s/FJENERGYProduct2.png";
import FJENERGYProduct1 from "../assets/s/FJENERGYProduct1.png";
import FJENERGYlogo from "../assets/s/FJENERGYlogo.png";
import DCServeProduct1 from "../assets/s/DCServeProduct1.png";
import DCServeProduct2 from "../assets/s/DCServeProduct2.png";
import DCServeProduct3 from "../assets/s/DCServeProduct3.png";
import Solinoxlogo from "../assets/p/Solinoxlogo.png";
import CAMUSHydronicslogo from "../assets/p/CAMUSHydronicslogo.png";
import CleaverBrookslogo from "../assets/p/CleaverBrookslogo.png";
import Honeywelllogo from "../assets/p/Honeywelllogo.png";
import GFJRGlogo from "../assets/p/GFJRGlogo.png";
import UPNORlogo from "../assets/p/UPNORlogo.png";
import DimplexNorthAmericaLimitedlogo from "../assets/p/DimplexNorthAmericaLimitedlogo.png";
import LacazeEnergieslogo from "../assets/p/LacazeEnergieslogo.png";
import FUTUREJOURNEYEnergylogo from "../assets/p/FUTUREJOURNEYEnergylogo.png";
import Radiantlogo from "../assets/p/Radiantlogo.png";

import BasicHeader2 from "./../components/basic-header2";
import Arrow from "../components/arrow";

const PlumbingSubPages = ({}) => {
  const MechanicalSub = [
    {
      id: 1,mecanicalDivisionName:"PLUMBINGProducts&Solutions",
      logo:FUTUREJOURNEYEnergylogo,
      
      
      text: [
"FUTURE JOURNEY Energy is an integral part of FJ Group, providing turnkey solutions for steam, water-heating and plumbing systems. It’s partnered with globally renowned brands, who are the pioneers in this field and are capable of providing customized engineering solutions for residential, commercial and industrial water heating and plumbing applications. FJ Energy is a turnkey solutions provider by offering support to clients with design, supply, installation, testing, commissioning, training, and after-sales services through a dedicated team led by qualified and experienced engineers with: -Expert solutions in selection and sizing of equipment based on applications -Bespoke designs for unique requirements -Highly trained and experienced technicians for efficient after-sales services -Extensive list of installations across GCC conforms the product quality, reliability and competitive pricing FJ Energy provides solutions towards: -Renewable Energy -Steam & Hot Water -Plumbing Solutions -After Market Support & Services Renewable Energy Solutions include: -PV Solutions (Photovoltaic Systems) -Solar Water Heating Solutions -Heat Pumps Steam & Hot Water solutions include: -Packaged Boiler Solutions (steam & hot water) -Condensing Boiler Solutions -Instantaneous Tank-less Gas Water Heaters -Boiler Chimney Systems -Storage and Heating Solutions -Precision Cooling Systems Plumbing Solutions include: -Radiant Heating and Cooling Systems -Pex Pipe Systems -Pex Pipe System, Gun Metal Fittings -PRVs and Valves Solutions AFTER MARKET SUPPORT & SERVICES We are committed to deliver high quality Plumbing equipment with its services in a timely manner to the agreed specifications. We understand the importance of having excellent service backup. We have ensured that our technicians are experienced and well equipped with tools to execute quality work. We keep adequate spares, enabling us to attend to after sales service and guarantee the quality of our supplied equipment. We are also committed to continuously measure, review and improve our working and quality objectives to maximize our customers satisfaction, with optimal utilization of resources."
      ], products: [],
    },
    {
      id: 2,
      mecanicalDivisionName:"PLUMBINGProducts&Solutions",
logo:LacazeEnergieslogo,

      text: [
"DOMESTIC WATER HEATING SOLUTIONS For more than 60 years, Lacaze Energies is a specialist in the field of hot water production for domestic and heating applications and benefits from the combined experience of an industrial group.- It offers solutions for energy optimization in the service and manufacturing sectors. Its expertise is acquired over the last 60 years in designing and building systems for producing domestic hot water (DHW), Low Temperature Hot Water (LTHW), as well as in Chilled Water storage for the service and manufacturing sectors. - Developed as complete systems, each of the products integrates the best combination of components and materials to ensure 100% satisfaction in terms of performance, cost- effectiveness and reliability. Innovation is at the heart of the business. Lacaze Energies continues to develop and offer the most efficient materials in line with market demands, new thermal regulations (such as the RT2012) and environmental issues (Optimization of the production and consumption of hot water, technological developments linked to renewable energies, etc.) thereby together we offer best support to our stakeholders. A special high performance epoxy resin (RC Coating) has been developed by Lacaze Energies, in collaboration with a leading European specialist in the field and is the only inner lining for industrial tanks in France to benefits from an A.C.S. (Health Conformity Attestation). It is a WRAS approved material (BS6920)"
      ], 
    },

    {
      id: 3,
      mecanicalDivisionName:"PLUMBINGProducts&Solutions", 
logo:DimplexNorthAmericaLimitedlogo,

      text: [
"Dimplex North America Limited is the world leader in electric heating, offering a wide range of residential, commercial and industrial products. The Company’s commitment to innovation has fostered outstanding product development and design excellence. Dimplex Heat Pumps are being implemented in buildings in increasing numbers for heating and domestic hot water preparation. This is because the future belongs to environmentally-friendly heating systems. Heat pumps have extremely low operating costs because they draw the majority of the required energy from the environment and are not dependent on oil or gas for operation. Water-to-water and air to water heat pumps extract the required heat from the tempered ground water, chiller or ambient air. A highly effective heat pump heating system can be achieved by Dimplex Heat Pumps."      ],

      products: [PumpsProduct1.png, PumpsProduct2.png, PumpsProduct3.png],
    },

    {
      id: 4,
      mecanicalDivisionName: "HVACPARTS&ACCESSORIES",
      logo: UPNORlogo,
      text: [
"UPNOR  is a leading international provider of systems and solutions for safe drinking water delivery, energy-efficient radiant heating & cooling, and reliable infrastructure.  We serve a variety of building markets, including residential, commercial, and industrial and civil engineering. We have over 4,000 Uponorians in 30 countries around the world. Our head office is in Vantaa, Finland."      ],

      products: [
        FJENERGYProduct1.png,
        FJENERGYProduct2.png,
        FJENERGYProduct3.png,
      ],
    },
    {
      id: 5,
      mecanicalDivisionName:"PLUMBINGProducts&Solutions",
logo:Radiantlogo,

      text: [
"Radiant cooling systems are hydronic water systems that cool the air using circular water running in pipes embedded in the floors, ceilings or wall construction of buildings. A Radiant cooling system operates at warmer temperatures than traditional all air-cooling systems. Typically, the circulating water only needs to be 6-8 deg C below the desired indoor air temperature. Once absorbed by the actively cooled surface, heat is removed by water flowing through a hydronic circuit, replacing the warmed water with cooler water.  Radiant cooling is most effective at removing direct solar and sensible heat gains. Uponor provides a complete one stop solution of the embedded system together with the necessary room and water control mitigating the risk of condensation in hot and humid climates Incorporating a Radiant cooling system reduces the size of the supplementary ventilation system therefore providing significant energy savings, greater levels of thermal & sound comfort and lower lifecycle costs for the building owner."      ],

      products: [DCServeProduct1.png, DCServeProduct2.png, DCServeProduct3.png],
    },
    {
      id: 6,
      mecanicalDivisionName:"PLUMBINGProducts&Solutions",
      logo:GFJRGlogo,
      text: [
"GF JRG Piping System is a specialist in the distribution of cold and hot water in residential, industrial and commercial buildings, hospitals and hotels to remedy the problems of corrosion, scale, maintenance and installation difficulties in conventional plumbing. JRG has developed a system, which has revolutionized domestic water services.- GF JRG: Cross linked polyethylene pipe-in-pipe system and gun metal valves and fittings. - GF JRG MT: Multilayer system ideal for water distribution, riser for houses as well as for large buildings. - Products are WRAS approved."      ],

      products: [],
    },
    {
      id: 7,
      mecanicalDivisionName:"PLUMBINGProducts&Solutions",
      logo:Honeywelllogo,
      
      text: [
"Honeywell Braukmann PRVs and Valves Solutions:  Honeywell Braukmann is a world leader in providing water control solutions for applications in domestic and commercial buildings. Honeywell valves are available in bronze, brass and cast iron construction of premium quality, are well known for accuracy and reliability."      ],

      products: [],
    },
    {
      id: 8,
      mecanicalDivisionName:"PLUMBINGProducts&Solutions",
      logo:CleaverBrookslogo,
      
      text: [
"Only Cleaver-Brooks can offer complete boiler systems, from fuel inlet to stack outlet that are completely designed, engineered, manufactured and integrated by one company. If you’re looking for the best-quality boiler systems with the lowest emissions and highest efficiencies, you’re looking for Cleaver-Brooks. Through a commitment to research and development and a sound acquisition strategy since 1929, today the company is the sole provider of integrated boiler room solutions and is a leading manufacturer of boiler room equipment across all commercial, institutional and industrial markets.  At our dedicated product development center, we continue to develop breakthrough emissions and efficiency technologies for tomorrow’s boilers and burners. Cleaver Brooks the world’s leading manufacturer of packaged high pressure and low-pressure commercial and industrial boilers and boiler room systems, for applications ranging from process industries through hospitals and hotel sectors. Packaged boilers are approved by Underwriters Laboratory and are built to comply with Factory Mutual and ASME Boiler Code. High efficiency low emission solutions for steam and hot water generation. - Boilers: Fire Tube , Water Tube, Condensing and Electric - Burners: Compatible for oil, gas and alternative fuels - Controls: Compatible for all types of communications protocols - Heat Recovery: For better efficiency and sustainability"      ],

      products: [],
    },
    {
      id: 9,
      mecanicalDivisionName:"PLUMBINGProducts&Solutions",
      logo:CAMUSHydronicslogo,
      
      text: [
"CAMUS® Hydronics Ltd. is a manufacturer of an extensive line of gas fired high efficiency copper tube and stainless steel boilers for residential, light commercial, commercial and industrial applications. It operates out of a modern manufacturing facility complete with a state of the art testing lab, engineering department, manufacturing and assembly lines, warehouse and parts depot. With over 75 years of collective experience, the CAMUS® design team of engineers, service and management staff is equipped to lead the way with innovative designs and leading edge technology. CAMUS® Hydronics Ltd. is a service oriented company providing new and better solutions to the challenges and needs of our industry and marketplace."      ],

      products: [],
    },
    {
      id: 10,
      mecanicalDivisionName:"PLUMBINGProducts&Solutions",
      logo:Solinoxlogo,
      
      text: [
"CHIMNEY SOLUTION Solinox is situated in Turkey, and is a leading manufacturer in the region. Products include: - Stainless Steel Flues/Chimney Pipes / Exhaust Systems (CE, MPA and TUV certified). - Linen and Garbage Chute Systems. - Ventilation and Kitchen Ducts. What Solinox can also further provide your firm with:- Technical Assistance from our professional engineers team with AutoCad / Solidwork drawings for your mechanical projects. - Calculations for an optimum diameter for Exhaust Flues for the Heating Appliances."      ],

      products: [],
    },
    {
      id: 11,
      mecanicalDivisionName:"PLUMBINGProducts&Solutions",
logo:Solinoxlogo,

      text: [
"Solinox is situated in Turkey, and is a leading manufacturer in the region. Products include: 	Stainless Steel Flues/Chimney Pipes / Exhaust Systems (CE, MPA and TUV certified). 	Linen and Garbage Chute Systems. 	Ventilation and Kitchen Ducts. What Solinox can also further provide your firm with: 	Technical Assistance from our professional engineers team with AutoCad / Solidwork drawings for your mechanical projects. 	Calculations for an optimum diameter for Exhaust Flues for the Heating Appliances."      ],

      products: [],
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
            <BasicHeader2 backgroundImage={PLUMPING} headerTitle={"PLUMPING"} />

            <Container>
              <Row>
                <Col>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <Arrow link={"/PlumbingSubPages/" + previous} />
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
                  <Arrow directions={"."} link={"/PlumbingSubPages/" + next} />
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

export default PlumbingSubPages;
