import React, { Fragment } from "react";
import TextTitleBox from "../components/text-title-box";
import "../styles/style-component/text-boxes.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/footer";

import ELECTRICAL from "../assets/ELECTRICAL.jpg";
import MutliplastDubaillcLogo from "../assets/Logos/MultiplastDubailogo.PNG";
import ELECTRICALSWITCHGEARCONTROLS from "../assets/e/ELECTRICALSWITCHGEAR&CONTROLS.jpg";
import PowerBarlogo from "../assets/e/PowerBarlogo.png";
import BUSBARPOWERBARGULFVERTIV1 from "../assets/e/BUSBARPOWERBARGULF&VERTIV.jpg";
import ELECTRICALSWITCHGEARCONTROLS1 from "../assets/e/ELECTRICALSWITCHGEAR&CONTROLS.jpg";
import PVCELECTRICALCONDUITACCESSORIES1 from "../assets/e/PVCELECTRICALCONDUIT&ACCESSORIES.jpg";

import BasicHeader from "../components/basic-header";
import Arrow from "../components/arrow";
import CustomSubHeader2 from "../components/custom-sub-header2";

const ElectricalSubPages = ({}) => {

  const MechanicalSub=[
    {
    id:1,
    mecanicalDivisionName:" BUSBARPOWERBARGULF&VERTIV ",
logo: PowerBarlogo,
factoryImage:BUSBARPOWERBARGULFVERTIV1,
    factoryText:[
      {
        id: "",
    
        style: "paragraph3",
        text: "FJ Group specializes in the engineering, manufacturing, and trading of products and systems, in the electrical and mechanical fields related to the building services industry. Today, we have earned a respected reputation of expertise and excellence, employing in excess of 1,000 qualified staff with facilities exceeding 25,000 m2. Our organization continues to expand and grow, driven by our vision, as we invest into our diverse specializations in the MEP industry, we have ensured that we bring in the world’s best manufacturers to the Region. Today, we are a group of enterprises having interest in several diversified strategic business segments across the region while upholding the same values and principles of our flagship entity.  Below is a listing of our product-lines in the electrical sector.",
      },
    ],
    factoryTitle:[
      {
        style: "1",
        text: "BUSBAR - POWERBAR GULF &- VERTIV",
      },
    ],
    text:["Established in 2011, Busbar Division is an integral part of FJ Group, which has been appointed as the authauthorized distributor of Powerbar Gulf–Vertiv to carry out the duties for the marketing, promoting and the coordination with the contractors, consultants, and clients regarding the Busbar products.PowerBar Gulf – Vertiv who are part of the E&I Engineering - Vertiv Group located in Ireland With over 30 years experience in delivering high quality integrated power solutions. The team are experts in providing technical services, project management services and unrivalled customer support for every client project.In 2009, following extensive research and development, E&I Engineering - Vertiv opened a new manufacturing facility in UAE. Powerbar Gulf - Vertiv currently has more than 600 employees working to serve the high-rise growth in the Middle East and Far East markets. Powerbar Gulf - Vertiv designs and manufactures a range of busbar trunking products, electrical conductors that provide an alternative to the use of electrical cabling for the transmission of electric current within commercial and high-rise properties. - PowerBar s Busbar Trunking Systems can manage the power supply in utility buildings and work particularly well in tower block constructions. - PowerBar s Busbar Trunking Systems is a patented range of busbar trunking utilized within building and industrial applications to deliver power to electrical loads. - The development of E&I Engineering s powerbar range complements the switchgear range to provide a complete power distribution solution. Clients can deal with us for all of their power distribution needs. - PowerBar products are built with patented processes that make it the most reliable form of busbar trunking in the market. The PowerBar range offers power distribution solutions from 160A up to 6600A with Ingress protection options available up to IP68. - The PowerBar range includes High PowerBar (HPB), Medium Powerbar (MPB), Cast Resin Powerbar (CRPB) and Intelligent Medium Powerbar (iMPB)."],
     
    },{
      id:2,
      mecanicalDivisionName:" ELECTRICALSWITCHGEAR&CONTROLS ",
logo: ELECTRICALSWITCHGEARCONTROLS,
factoryImage:ELECTRICALSWITCHGEARCONTROLS1,
        factoryText:[
          {
            id: "",
        
            style: "paragraph3",
            text: "FJ Group specializes in the engineering, manufacturing, and trading of products and systems, in the electrical and mechanical fields related to the building services industry. Today, we have earned a respected reputation of expertise and excellence, employing in excess of 1,000 qualified staff with facilities exceeding 25,000 m2. Our organization continues to expand and grow, driven by our vision, as we invest into our diverse specializations in the MEP industry, we have ensured that we bring in the world’s best manufacturers to the Region. Today, we are a group of enterprises having interest in several diversified strategic business segments across the region while upholding the same values and principles of our flagship entity.  Below is a listing of our product-lines in the electrical sector.",
          },
        ],
        factoryTitle:[
          {
            style: "1",
            text: "ELECTRICAL SWITCHGEAR & CONTROLS",
          },
        ],
      text:["Customer service excellence has always been one of the critical competitive advantages for our business. Our experienced and dedicated service team is capable of attending and troubleshooting any critical issues efficiently. Our dedicated after-sales team in each region is capable of providing ‘rapid responses’ support to the clients. Our team is equipped with modern tools to conduct SAT and have the expertise to provide effective support to ensure timely hand over."],
       
      },{
        id:3,
        mecanicalDivisionName:" ELECTRICALSWITCHGEAR&CONTROLS ",
logo: ELECTRICALSWITCHGEARCONTROLS,

        text:["We have a well laid out, fully air conditioned, dust-free manufacturing facility having a shop floor area of 4,000 sqm and employees more than 200 skilled workers. Our sophisticated production facility incorporates pneumatic lines along with the required tools, fabrication machines, hand tools and other related machineries. Our team consists of well experienced designers and engineers capable of providing highly engineered and meticulously assembled electric switchgear and control panels. We use advanced software to assist the engineers in all the design aspects. The production line technicians are divided into several teams headed by team leaders, while the entire activity is coordinated by the production supervisor. Our efficient inventory management assists faster production output, as we keep large stock of components and consumables in our inventory. We define and control the sequence of LV Switchgear assembly, which includes the interface activities and the different activities leading to testing of the panels, in compliance with project specifications and final approved drawings. Our manufacturing process is in accordance with  ISO 9001:2008 quality standard.  We inspect the incoming materials at the receiving point to confirm the standards and specifications are complied. The stages of inspections and surveillance are in accordance with Inspection and Test Plans (ITP) to assure the quality of work as per the specification and installation procedures. The foolproof quality control system setup by the production supervisor and quality control engineers ensure top quality panels.  The testing of the panels is done with the latest and periodically calibrated testing tools and equipment."],
        factoryImage:ELECTRICALSWITCHGEARCONTROLS1,
        factoryText:[
          {
            id: "",
        
            style: "paragraph3",
            text: "FJ Group specializes in the engineering, manufacturing, and trading of products and systems, in the electrical and mechanical fields related to the building services industry. Today, we have earned a respected reputation of expertise and excellence, employing in excess of 1,000 qualified staff with facilities exceeding 25,000 m2. Our organization continues to expand and grow, driven by our vision, as we invest into our diverse specializations in the MEP industry, we have ensured that we bring in the world’s best manufacturers to the Region. Today, we are a group of enterprises having interest in several diversified strategic business segments across the region while upholding the same values and principles of our flagship entity.  Below is a listing of our product-lines in the electrical sector.",
          },
        ],
        factoryTitle:[
          {
            style: "1",
            text: "ELECTRICAL SWITCHGEAR & CONTROLS",
          },
        ],
        },{
          id:4,
          mecanicalDivisionName:" ELECTRICALSWITCHGEAR&CONTROLS ",
mecanicalDivisionImg: ELECTRICALSWITCHGEARCONTROLS,

          text:["- Main Distribution Boards (MDB) upto 4000A - Sub Main Distribution Boards (SMDB) upto 1600A - Final Distribution Boards (FDB) - Synchronizing Panels - Motor Control Centres (MCCs) - Control Panels - Drawout Type Motor Control Centres - Power Factor Correction Panels (Capacitor Banks) - Automatic Transfer Switches (ATS) and Changeover Panels - Variable Frequency Drives (VFDs), Soft Starters and Thyristor Panels - Power Monitoring and Management Systems (PMMS) - Active Harmonic Filters (AHF) - Sewage Treatment Plants Motor Control Centres"],
          factoryImage:ELECTRICALSWITCHGEARCONTROLS1,
          factoryText:[
            {
              id: "",
          
              style: "paragraph3",
              text: "FJ Group specializes in the engineering, manufacturing, and trading of products and systems, in the electrical and mechanical fields related to the building services industry. Today, we have earned a respected reputation of expertise and excellence, employing in excess of 1,000 qualified staff with facilities exceeding 25,000 m2. Our organization continues to expand and grow, driven by our vision, as we invest into our diverse specializations in the MEP industry, we have ensured that we bring in the world’s best manufacturers to the Region. Today, we are a group of enterprises having interest in several diversified strategic business segments across the region while upholding the same values and principles of our flagship entity.  Below is a listing of our product-lines in the electrical sector.",
            },
          ],
          factoryTitle:[
            {
              style: "1",
              text: "ELECTRICAL SWITCHGEAR & CONTROLS",
            },
          ],
          },{
            id:5,
            mecanicalDivisionName:" ELECTRICALSWITCHGEAR&CONTROLS ",
            mecanicalDivisionImg: ELECTRICALSWITCHGEARCONTROLS,
            
            text:["Promaster brand electric switchgear division is an affiliated entity of FJ GROUP has evolved as a result of our 30 years experience in the design and manufacturing of low voltage power distribution system. We at FJ GROUP take big pride in the huge efforts that went into the development of Promaster, incorporating the latest technologies and complying with the world’s most stringent testing certificates.Today, Promaster offers one of the broadest portfolio in the gulf market, covering all applications in the industrial, water treatment, residential and commercial building sectorPromaster has a reputation for producing quality panels, a know-how earned through many years of experience, backed with sound engineering methodology.Promaster panels are full type tested in accordance with IEC 61439-2 by the following international certifying authorities: - ASTA: Promaster system with ABB Breaker full type tested on ratings from 2500A through 4000A. - KEMA: Promaster system with ABB Breaker full type tested on ratings from 250A through 1600A. -UL Type: Promaster system capacitor bank full type tested on ratings from 25KVAR through 450KVAR. - ASTA: ARC test on Promaster system. - KA Testing Facility: Mechanical impact (IK10) test on Promaster system.Promaster electric switchgear systems and control panels are approved by the UAE authorities in the following jurisdiction: - ADWEA (Abu Dhabi Water and Electricity Authorities) - ADDC (Abu Dhabi Distribution Company) -DEWA (Dubai Electricity and Water Authority) - ASTA: ARC test on Promaster system. - SEWA ( Sharjah Electricity and Water Authority)"],
            factoryImage:ELECTRICALSWITCHGEARCONTROLS1,
            factoryText:[
              {
                id: "",
            
                style: "paragraph3",
                text: "FJ Group specializes in the engineering, manufacturing, and trading of products and systems, in the electrical and mechanical fields related to the building services industry. Today, we have earned a respected reputation of expertise and excellence, employing in excess of 1,000 qualified staff with facilities exceeding 25,000 m2. Our organization continues to expand and grow, driven by our vision, as we invest into our diverse specializations in the MEP industry, we have ensured that we bring in the world’s best manufacturers to the Region. Today, we are a group of enterprises having interest in several diversified strategic business segments across the region while upholding the same values and principles of our flagship entity.  Below is a listing of our product-lines in the electrical sector.",
              },
            ],
            factoryTitle:[
              {
                style: "1",
                text: "ELECTRICAL SWITCHGEAR & CONTROLS",
              },
            ],
            },{
              id:6,
              mecanicalDivisionName:" ELECTRICALSWITCHGEAR&CONTROLS ",
              factoryImage:ELECTRICALSWITCHGEARCONTROLS1,

              text:["FJ GROUP Switchgear Division is also engaged in the design, Engineering, testing, and the commissioning of Automation & control panels. We are specialized automation solution provider with PLC, SCADA, RTU, HMI, DCS systems from leading manufacturers and we are specialized in getting assembly, tested and commissioned as per end user requirements.- PLC, RTU, HMI and SCADA -Reputed Brands. - Field Instruments. - MCC-Motor control centre ( Form-IV, ASTA type tested, IEC61439).- Authorized system Integrator certificates from leading Automation product Manufacturers. - Specialized value automation provider for Water, Waste water, District Cooling plant, HVAC, Power & Energy, Infrastructure, Buildings, Oil & Gas, Metal, Cement and other industries. - Rugged system design for RTUs, Safety & Normal PLC & HMI applications. - Revamping & Emergency shutdown services at plants. - Migration of Obsolete PLC’s & HMIs. - Self-Engineered, Tested & Assembled Panels. - Around 120 Trained and experienced Engineers and Technicians. - State of Art Factory facility in an Area of 4,000m². - Complete pneumatic lines in the assembly section & Air conditioned FAT Area. - Trained & dedicated design, engineering, testing & commissioning team. - Dedicated Post commissioning site services & support."],
              factoryImage:ELECTRICALSWITCHGEARCONTROLS1,
              factoryText:[
                {
                  id: "",
              
                  style: "paragraph3",
                  text: "FJ Group specializes in the engineering, manufacturing, and trading of products and systems, in the electrical and mechanical fields related to the building services industry. Today, we have earned a respected reputation of expertise and excellence, employing in excess of 1,000 qualified staff with facilities exceeding 25,000 m2. Our organization continues to expand and grow, driven by our vision, as we invest into our diverse specializations in the MEP industry, we have ensured that we bring in the world’s best manufacturers to the Region. Today, we are a group of enterprises having interest in several diversified strategic business segments across the region while upholding the same values and principles of our flagship entity.  Below is a listing of our product-lines in the electrical sector.",
                },
              ],
              factoryTitle:[
                {
                  style: "1",
                  text: "ELECTRICAL SWITCHGEAR & CONTROLS",
                },
              ],
              },{
                id:7,
                mecanicalDivisionName:" PVCELECTRICALCONDUIT&ACCESSORIES ",
logo: MutliplastDubaillcLogo,

                text:["Multiplast Dubai LLC was established in the United Arab Emirates and located in Al Aweer Industrial Area, Dubai, on a land area of 100,000 sq. ft. It has a contemporary designed edifice, and it boasts of the latest and most technologically advanced machineries available in the market today. Multiplast Dubai LLC is a manufacturing company that produces superior quality products which complies with the requirement of international standards. It also focuses on developing a wide-range of electrical fittings and lightings using only the highest standard of uPVC raw materials. On top of this, it has qualified and dedicated staff which ensures that product quality and services are well-maintained. Products of Multiplast Dubai L.L.C. complies with the Saudi & Gulf standards and they are tested by Saudi Arabian Standards Organization general laboratory department and certified by SASO quality mark. The products of Multiplast Dubai LLC which are signed with Intek verification are vigorously tested and certified as type test by the Intek Laboratory in Italy. Meanwhile its products follow the European and British standards: (BS EN 61386-21-25 & IEC 60423 & UL 746).- Rigid Conduit System - Pliable Conduit– Corrugated - Mounting Boxes for Conduit Systems - Circular Junction Boxes for Conduits Systems - Accessories and Fittings for Conduit Systems- Rigid Conduit System and socketed pipe (LSF) - Pliable Conduit– Corrugated (LSF) - Mounting Boxes for Conduit Systems (LSF) - Circular Junction Boxes for Conduits Systems (LSF) - Accessories and Fittings for Conduit Systems (LSF)- Adaptable Boxes - Adaptable Boxes with Transparent Lid - Junction Boxes with Smooth Walls - Junction Boxes with Cable Glands- Rigid Conduit Systems / Rigid Socketed Conduit Systems, (2.9 meters long) - Pliable Conduit – Corrugated, Pliable Conduit Adaptor - Mounting Boxes for Conduit Systems, (filled with 3.5mm Brass Inserts) - Circular Junction Boxes for Conduits Systems, (fitted with 4mm Brass Inserts) - Accessories and fittings for Conduit Systems - Adaptable Boxes, (fitted with 4mm & 5mm Brass Inserts) - Adaptable Boxes with Transparent Lid, (fitted with 4mm & 5mm Brass Inserts) - Junction Boxes with Smooth Walls, (fitted with 4mm & 5mm Brass Inserts) - Junction Boxes with Cable Glands, (fitted with 4mm & 5mm Brass Inserts)"],
                factoryImage:PVCELECTRICALCONDUITACCESSORIES1,
                factoryText:[
                  {
                    id: "",
                
                    style: "paragraph3",
                    text: "FJ Group specializes in the engineering, manufacturing, and trading of products and systems, in the electrical and mechanical fields related to the building services industry. Today, we have earned a respected reputation of expertise and excellence, employing in excess of 1,000 qualified staff with facilities exceeding 25,000 m2. Our organization continues to expand and grow, driven by our vision, as we invest into our diverse specializations in the MEP industry, we have ensured that we bring in the world’s best manufacturers to the Region. Today, we are a group of enterprises having interest in several diversified strategic business segments across the region while upholding the same values and principles of our flagship entity.  Below is a listing of our product-lines in the electrical sector.",
                  },
                ],
                factoryTitle:[
                  {
                    style: "1",
                    text: "PVCELECTRI CALCONDUIT & ACCESSORIES",
                  },
                ],
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
              backgroundImage={ELECTRICAL}
              headerTitle={["ELECTRICAL"]}
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

                  <Arrow link={"/ElectricalSubPages/" + previous} />
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
                    link={"/ElectricalSubPages/" + next}
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

export default ElectricalSubPages;
