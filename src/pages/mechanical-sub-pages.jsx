import React, { Fragment } from "react";
import TextTitleBox from "../components/text-title-box";
import "../styles/style-component/text-boxes.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/footer";
import Mechanical from "../assets/Mechanical.jpg";
import DCServelogo from "../assets/m/DCServelogo.png";
import DCServeProduct1 from "../assets/m/DCServeProduct1.png";
import DCServeProduct2 from "../assets/m/DCServeProduct2.png";
import DCServeProduct3 from "../assets/m/DCServeProduct3.png";

import BasicHeader from "../components/basic-header";
import Arrow from "../components/arrow";
import CustomSubHeader2 from "../components/custom-sub-header2";

import ReflexWinkelmannGmbHlogo from "../assets/m/ReflexWinkelmannGmbHlogo.png";
import PumpSSYSTEMS from "../assets/m/PumpSSYSTEMS.jpg";
import AQUAFLOlogo from "../assets/m/AQUAFLOlogo.png";
import GouldsWaterTechnologylogo from "../assets/m/GouldsWaterTechnologylogo.png";
import GouldsWaterTechnologyProduct1 from "../assets/m/GouldsWaterTechnologyProduct1.png";
import GouldsWaterTechnologyProduct2 from "../assets/m/GouldsWaterTechnologyProduct2.png";
import GouldsWaterTechnologyProduct3 from "../assets/m/AFICOlogo.png";
import BellGossettlogo from "../assets/m/Bell&Gossettlogo.png";
import BellGossettProduct1 from "../assets/m/AFICOlogo.png";
import BellGossettProduct2 from "../assets/m/AFICOlogo.png";
import BellGossettProduct3 from "../assets/m/AFICOlogo.png";
import A from "../assets/m/AFICOlogo.png";
import CfirePumplogo from "../assets/m/A-CfirePumplogo.png";
import CfirePumpProduct1 from "../assets/m/AFICOlogo.png";
import CfirePumpProduct2 from "../assets/m/AFICOlogo.png";
import CfirePumpProduct3 from "../assets/m/AFICOlogo.png";
import VENTILATIONEquipment from "../assets/m/VENTILATIONEquipment.jpg";
import Greenhecklogo from "../assets/m/Greenhecklogo.png";
import Pollrichlogo from "../assets/m/Pollrichlogo.png";
import PollrichProduct1 from "../assets/m/PollrichProduct1.png";
import PollrichProduct2 from "../assets/m/AFICOlogo.png";
import AIRDISTRIBUTION from "../assets/m/AIRDISTRIBUTION.jpg";
import FlowtechAirDistributionlogo from "../assets/m/FlowtechAirDistributionlogo.png";
import DISTRICTCOOLINGEQUIPMENT from "../assets/m/DISTRICTCOOLINGEQUIPMENT.jpg";
import SPXCoolingTechnologieslogo from "../assets/m/SPXCoolingTechnologieslogo.png";
import SONDEXlogo from "../assets/m/SONDEXlogo.png";
import STFlogo from "../assets/m/STFlogo.png";
import AIRHANDLINGUNITSFANCOILUNITS from "../assets/m/AIRHANDLINGUNITSFANCOILUNITS.jpg";
import Euroclimalogo from "../assets/m/EuroclimaLogo.jpg";
import AIRCONDITIONINGEquipment from "../assets/m/AIRCONDITIONINGEquipment.jpg";
import Samsunglogo from "../assets/m/Samsunglogo.png";
import SamsungProduct1 from "../assets/m/SamsungProduct1.png";
import SamsungProduct2 from "../assets/m/SamsungProduct2.png";
import SamsungProduct3 from "../assets/m/SamsungProduct3.png";
import JohnsonControlslogo from "../assets/m/JohnsonControlslogo.png";
import AFICOlogo from "../assets/m/AFICOlogo.png";
import DuctingInsulationProducts from "../assets/m/DuctingInsulationProducts.jpg";
import VICANlogo from "../assets/m/VICANlogo.png";
import PAHARPURlogo from "../assets/m/PAHARPURlogo.png";
import oZKANlogo from "../assets/m/ÖZ-KANlogo.png";
import NOVASIRIAlogo from "../assets/m/NOVASIRIAlogo.png";
import ITAPlogo from "../assets/m/ITAPlogo.png";
import IMIHydronicEngineeringlogo from "../assets/m/IMIHydronicEngineeringlogo.png";
import HAWLElogo from "../assets/m/HAWLElogo.png";
import GOETZElogo from "../assets/m/GOETZElogo.png";
import SCHIEBELlogo from "../assets/m/SCHIEBELlogo.png";
import PUROFLUXlogo from "../assets/m/PUROFLUXlogo.png";
import FLAMCOlogo from "../assets/m/FLAMCOlogo.png";
import ARMACELLlogo from "../assets/m/ARMACELLlogo.png";
import Wedecologo from "../assets/m/Wedecologo.png";
import Flygtlogo from "../assets/m/Flygtlogo.png";
import Xylemlogo from "../assets/m/Xylemlogo.png";
import ABOvalvelogo from "../assets/m/ABOvalvelogo.png";
import AYVAZlogo from "../assets/m/AYVAZlogo.png";
import BLÜCHERlogo from "../assets/m/BLÜCHERlogo.png";
import BRANNANlogo from "../assets/m/BRANNANlogo.png";
import CRANEFluidSystemslogo from "../assets/m/CRANEFluidSystemslogo.png";
import CSAlogo from "../assets/m/CSAlogo.png";
import CustomHeader from "../components/custom-header";

const MechanicalSubPages = ({}) => {
  const MechanicalSub = [
    {
      id: 1,
      factoryImage: PumpSSYSTEMS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: "PUMPS & SYSTEMS",
        },
      ],
      mecanicalDivisionName: "PumpSSYSTEMS",
      mecanicalDivisionImg: PumpSSYSTEMS,
      logo: ReflexWinkelmannGmbHlogo,
      text: [
        {
          title: "",
          text: "Reflex Winkelmann GmbH is one of the leading international solutions providers for the development and maintenance of water-bearing systems for building and supply technology. Under its Reflex brand, the Company develops, produces, and sells not only expansion vessels, but also innovative components and holistic solutions for pressure maintenance, water make-up, degassing and water treatment, hot water storage tanks, heat exchangers, as well as hydraulic manifolds and storage components.",
          points: [],
        },
        {
          title: "Facility Standards",
          text: "AQUAFLO pump facility consists of 6000 m2 shopfloor for assembly, in-house testing and a paint shop to cater to market demands.",
          points: [],
        },
        {
          title: "Production Capability",
          text: "Our facility has the capacity to assemble and deliver a minimum of 70 booster packages and 25 chilled water pumps on a daily basis.",
          points: [],
        },
        {
          title: "Execution Standards",
          text: "Our qualified technical team works with the best available tools and machineries to comply with international quality standards. The major projects executed across GCC has been a truet example of our product quality and efficient services offered to our esteemed clients, such as:",
          points: [
            "Museum of the Future, Dubai, UAE",
            "Dubai Expo 2020 facilities, Dubai, UAE",
            "International Airports in: UAE, (Dubai  Sharjah), Qatar, Oman and Bahrain",
            "Al Ain Hospital, Al Ain, UAE",
            "Qurayyah Power Plant, Saudi Arabia",
            "Burj Khalifa and Dubai Mall, UAE",
            "St. Regis Resort, Saadiyat Island, Abu Dhabi, UAE",
            "District Cooling Plants across the UAE",
            "Villas  compounds across the UAE",
          ],
        },
      ],

      products: [],
    },

    {
      id: 2,
      factoryImage: PumpSSYSTEMS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: "PUMPS & SYSTEMS",
        },
      ],
      mecanicalDivisionName: "PumpSSYSTEMS",
      mecanicalDivisionImg: PumpSSYSTEMS,
      logo: AQUAFLOlogo,
      text: [
        {
          title: "",
          text: "AQUAFLO, the water pump division of FJ Group is engaged in providing highly engineered and innovative pumping solutions for the building service industry since 1988.  The Group represents globally renowned brands from the USA and Europe to assure quality and reliability of packaged solutions we offer. Our main principal partner is Xylem Inc.",
          points: [],
        },
        {
          title: "",
          text: "Our products and solutions are suitable for applications such as HVAC, domestic water, sewage and fire protection in the commercial as well as residential buildings.  Moreover, we take care of the equipment that we supply by providing dedicated services and retrofits to optimize the life and to upgrade efficiency of the equipment.",
          points: [],
        },
        {
          title: "",
          text: "Our flexibility in offering specific engineered products from our extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 3,
      factoryImage: PumpSSYSTEMS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: "PUMPS & SYSTEMS",
        },
      ],
      mecanicalDivisionName: "PumpSSYSTEMS",
      mecanicalDivisionImg: PumpSSYSTEMS,
      logo: GouldsWaterTechnologylogo,
      text: [
        {
          title: "",
          text: "Goulds Water Technology, (a Xylem brand), is a global manufacturer of centrifugal and turbine pumps, controllers, variable frequency drives and accessories, for chilled water, domestic, agriculture and industrial water pumping applications.",
          points: [],
        },
        {
          title: " Product line includes the following:",
          text: "",
          points: [
            "Vertical Multistage Series – e-SV",
            "End Suction Top Discharge Booster Pumps – CEA",
            "Horizontal Multistage Series – e-HM, e-MP",
            "Circulator Series – TLC, FLC",
            "End Suction Top Discharge Series – e-NSC, SH.",
          ],
        },
      ],

      products: [
        GouldsWaterTechnologyProduct1,
        GouldsWaterTechnologyProduct2,
        GouldsWaterTechnologyProduct3,
      ],
    },
    {
      id: 4,
      factoryImage: PumpSSYSTEMS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: "PUMPS & SYSTEMS",
        },
      ],
      mecanicalDivisionName: "PumpSSYSTEMS",
      mecanicalDivisionImg: PumpSSYSTEMS,
      logo: BellGossettlogo,
      text: [
        {
          title: "",
          text: "Bell  Gossett is the world leader in offering energy efficient pumps for the Heating, Ventilating, and Air Conditioning (HVAC) industry. The dedicated products are: Chilled Water Pumps, Suction Diffuser, Triple Duty valve, Air Separators, Expansion Tanks, Pump Accessories, and Hydronic specificities.",
          points: [],
        },
        {
          title: " Product Types:",
          text: "",
          points: [
            "Inline Pump Series – 80SC",
            "Capacity from 50GPM to 1500 GPM",
            "Pressure rating up to 25meters",
            "End Suction Top Discharge Series – e-1510",
            "Capacity from 50GPM to 1500 GPM",
            "Pressure rating up to 250 meters",
          ],
        },
        {
          title: "",
          text: "Vertical Split Case Double Suction Series – VSX (Horizontal Mount Vertical Split Case Double Suction Pumps) available in 3 different suction and discharge nozzle orientations:",
          points: [
            "VSX-VSH, Horizontal In-line type orientation",
            "VSX-VSCS, Side Suction Top Discharge type orientation",
            "VSX-VSC, Top Suction Top Discharge type orientation",
            "–   Flows from 500 to 28,000 GPM",
            "–   Heads from 9 to 161 meters",
          ],
        },
        {
          title: "",
          text: "Horizontal Split Case Series – HSC (Conventional Horizontal Split Case Double Suction type",
          points: [],
        },
        {
          title: "",
          text: "Double-Suction, Base-Mounted Series HSCS pumps are available in 8” through 14” sizes. Motor sizes through 1000 HP. Flows upto 12,500 GPM and heads upto 600 feet.",
          points: [],
        },
        {
          title: "",
          text: "Tangential Air Separators – ROLAIRTROL",
          points: [],
        },
        {
          title: "",
          text: "Sizes from 4” to 30”",
          points: [],
        },
        {
          title: "",
          text: "Expansion Tanks",
          points: [],
        },
        {
          title: "",
          text: " Capacity – 200 US Gallons to 15,000 US Gallons ",
          points: [],
        },
      ],

      products: [BellGossettProduct1, BellGossettProduct2, BellGossettProduct3],
    },
    {
      id: 5,
      factoryImage: PumpSSYSTEMS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: "PUMPS & SYSTEMS",
        },
      ],
      mecanicalDivisionName: "PumpSSYSTEMS",
      mecanicalDivisionImg: PumpSSYSTEMS,
      logo: A - CfirePumplogo,
      text: [
        {
          title: "",
          text: " For over 100 years, A-C fire Pump Systems has been on the forefront in developing, designing and custom building a wide range of fire pump systems that meet every fire protection need. ",
          points: [],
        },
        {
          title: "",
          text: " A-C fire Pumps are designed and built to NFPA20 Standards and the capacities are recognized by Factory Mutual (FM) and/or Underwriters Laboratory (UL). ",
          points: [],
        },
        {
          title: "",
          text: " A-C Fire pumps are supplied with electric motors, diesel engine and starter panels for both electric and engine drives along with all the necessary accessories as per the requirements of NFPA 20, which are either listed or approved by UL and FM. ",
          points: [],
        },
        {
          title: "",
          text: " A-C fire pumps are approved by local civil defense authority ",
          points: [],
        },
        {
          title: " Product Types: ",
          text: "",
          points: [],
        },
        {
          title: "End Suction Pumps (2000 Series):",
          text: "Capacity from 100GPM to 500 GPM",
          points: [],
        },
        {
          title: "",
          text: "Pressure rating :150 PSI (106 meters)",
          points: [],
        },
        {
          title:
            "Horizontal Split Case Double Suction Pumps (8100 Series, 8200 Series):",
          text: "Available in capacity from 500 GPM to 5000 GPM",
          points: [],
        },
        {
          title: "",
          text: "Pressure rating: 640 PSI (450meters)",
          points: [],
        },
        {
          title: "Vertical Turbine Pumps:",
          text: "Available in capacity from 250 GPM to 5000 GPM",
          points: [],
        },
        {
          title: "",
          text: "Pressure ratings: 50 PSI to 350 PSI.",
          points: [],
        },
        {
          title: "Fire Pump Accessories:",
          text: "Air release and casing relief valves, suction and discharge gauges, main relief valves, flow meter, reducer and increaser, and lastly: waste cone. Fuel tank and accessories, mufflers,flexible exhaust connector, batteries and cables for diesel engines.",
          points: [],
        },
      ],

      products: [
        A - CfirePumpProduct1,
        A - CfirePumpProduct2,
        A - CfirePumpProduct3,
      ],
    },
    {
      id: 6,
      factoryImage: VENTILATIONEquipment,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " VENTILATIONEquipment",
        },
      ],
      mecanicalDivisionName: "VENTILATIONEquipment",
      mecanicalDivisionImg: VENTILATIONEquipment,

      text: [
        {
          title: "",
          text: "Flowtech Division is the leading supplier of air movement and control equipment for all types of commercial, institutional, and industrial buildings in applications from comfort ventilation to manufacturing processes.",
          points: [],
        },
        {
          title: "",
          text: "FJ Group represents world-renowned brand: Greenheck Fans in offering fans, dampers, louvers, energy recovery and make-up air units, kitchen ventilation hoods as well as many related accessories and services.",
          points: [],
        },
        {
          title: "",
          text: "Flowtech supports their stakeholders by providing engineering, selection and sizing of these equipment based on applications and required specifications for:",
          points: [
            "Roof Mounted Fans",
            "Industrial Fans",
            "Inline and Ceiling Fans",
            "Sidewall Exhaust Fans",
            "Utility, Centrifugal  Radial Blowers",
            "Laboratory Exhausts",
            "Kitchen Ventilation Systems",
            "Energy Recovery",
            "Make-Up Air",
            "Kitchen Hoods",
            "Jet Fans",
            "Tunnels Fans",
          ],
        },
      ],

      products: [],
    },
    {
      id: 7,
      factoryImage: VENTILATIONEquipment,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " VENTILATIONEquipment",
        },
      ],
      mecanicalDivisionName: "VENTILATIONEquipment",
      mecanicalDivisionImg: VENTILATIONEquipment,
      logo: Greenhecklogo,
      text: [
        {
          title: "",
          text: "Greenheck offers a wide range of fan and ventilator products for commercial, institutional, industrial, laboratories and kitchen exhaust installations for supply, recirculate, filtered, process, exhaust, and gravity applications.",
          points: [],
        },
        {
          title: "",
          text: "Fans are available in either direct drive, where maintenance access is difficult, or belt drive, which allows adjustment of fan speed for system balancing.",
          points: [],
        },
        {
          title: "",
          text: "The products are AMCA certified and are UL listed for the related applications.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 8,
      factoryImage: VENTILATIONEquipment,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " VENTILATIONEquipment",
        },
      ],
      mecanicalDivisionName: "VENTILATIONEquipment",
      mecanicalDivisionImg: VENTILATIONEquipment,
      logo: Pollrichlogo,
      text: [
        {
          title: "",
          text: "Pollrich provides broad expertise to enable you to make the right selection: Cost-optimised designs from heavy duty industrial fans for special applications to series of standard ranges, compact, axial, plug and smoke extraction fans.",
          points: [],
        },
        {
          title: "",
          text: "Furthermore, Pollrich specializes in tunnel ventilation fans and jet fans which are their flagship products.",
          points: [],
        },
      ],

      products: [PollrichProduct1, PollrichProduct2],
    },
    {
      id: 9,
      factoryImage: AIRDISTRIBUTION,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR DISTRIBUTION",
        },
      ],
      mecanicalDivisionName: "AIRDISTRIBUTION",
      mecanicalDivisionImg: AIRDISTRIBUTION,
      logo: FlowtechAirDistributionlogo,
      text: [
        {
          title: "",
          text: "Flowtech Air Distribution was launched by FJ GROUP in 2000 in association with a group of specialists in the manufacturing of Air Terminals.",
          points: [],
        },
        {
          title: "",
          text: "Flowtech invested in the best machinery available in the field to build a product with international standards. We have recruited a team of experienced craftsmen with proven experience, able to manufacture standard Air Terminals, as per our range of products or special designs, as per the project requirements.",
          points: [],
        },
        {
          title: "",
          text: "We have set up our production lines to allow maximum flexibility, adapting quickly to demand changes, ensuring best delivery times with consistent good quality.",
          points: [
            "GRILLES  REGISTERS",
            "LINEAR BAR GRILLES",
            "LINEAR SLOT DIFFUSERS",
            "CEILING DIFFUSERS",
            "ROUND CEILING DIFFUSERS",
            "DISC VALVES",
            "LOUVERS",
            "JET DIFFUSERS  DRUM JET DIFFUSER",
            "SWIRL DIFFUSERS",
            "FLOW BAR DIFFUSERS",
            "LAMINAR FLOW DIFFUSER",
            "VOLUME CONTROL DAMPERS",
            "PRESSURE RELIEF DAMPERS",
            "NON-RETURN DAMPERS",
            "ACCESS DOORS",
            "SOUND ATTENUATORS",
            "ACOUSTIC LOUVERS",
            "VARIABLE AIR VOLUME/CONST ANT AIR VOLUME",
            "PRESSURE INDEPENDENT TERMINAL UNIT",
            "BYPASS TERMINAL UNIT",
            "ALPHA DUCTS FIRE DAMPERS",
            "SECURITY GRILLES",
            "FLOOR GRILLES",
            "STEP SWIRL DIFFUSER",
          ],
        },
      ],

      products: [],
    },
    {
      id: 10,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: DCServelogo,
      text: [
        {
          title: "",
          text: "In the interest of district cooling providers and designers, DCServe a member of the FJ Group of companies is born out of integration of district cooling products and services under one umbrella.",
          points: [],
        },
        {
          title: "",
          text: "DCServe offers system solutions in key areas: Valves, Heat Exchangers, Cooling Towers, Filtration Systems, Pressurization Systems, Air and Dirt separators and Balancing  Control Solutions.",
          points: [],
        },
        {
          title: "",
          text: "Armed with expertise in design, installation and maintenance and backed up by complete range of products, DCServe is the ultimate partner.",
          points: [],
        },
      ],

      products: [DCServeProduct1, DCServeProduct2, DCServeProduct3],
    },
    {
      id: 11,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: SPXCoolingTechnologieslogo,
      text: [
        {
          title: "",
          text: "SPX Cooling Technologies, Inc. is a leading global manufacturer of evaporative fluid coolers, evaporative condensers cooling towers and air-cooled heat exchangers.",
          points: [],
        },
        {
          title: "",
          text: "For a century, SPX Marley have provided exceptional quality equipment and service to the HVAC, process cooling, industrial, and refrigeration markets.",
          points: [],
        },
        {
          title: "SPX Product Range Comprises of:",
          text: "",
          points: [
            "Factory assembled cooling towers",
            "FM approved cooling towers",
            "Closed type cooling towers with a ‘copper’ arrangement",
          ],
          link: "https://www.spxcooling.com/",
        },
      ],

      products: [],
    },
    {
      id: 12,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: SONDEXlogo,
      text: [
        {
          title: "",
          text: "It is with pride that we have been partners with SONDEX since 2004. SONDEX was established in 1984, and has sustained its position among the major players globally case-specific to heat exchangers, and in July 2016, Danfoss acquired full ownership of the Company. SONDEX is a Danish company specialized in the development, production, and global marketing of plate heat exchangers.  SONDEX plate heat exchangers designed for HVAC, marine, offshore, power  water and the other sanitary applications are certified with the highest quality and performance standards as per AHRI, ASME, PED and ISO 9001 certified.",
          points: [],
        },
        {
          title: "",
          text: "By means of technological innovation, SONDEX has developed and designed a new generation of plate heat exchangers, with the production taking place in the state-of-the-art factory with a specially developed hydraulic press ranging up to 14,000 tons that allows pressing plates of even very big plate heat exchangers. Vacuum furnaces have been installed for the production of brazed plate heat exchangers, laser welding and cutting machines. The SONDEX plate heat exchanger design is based on long-term experience, while the design secures high yield of the plate heat exchangers making them suitable for various working conditions. Even though it has a fully automatic plate production factory in Marsvej in Kolding, Denmark, SONDEX has subsidiary companies in the USA, Australia, Poland, The Netherlands, Italy, and Germany, while also establishing a strong network of agents and suppliers all over the world.",
          points: [],
        },
        {
          title: "COMPLETE IN-HOUSE PRODUCTION",
          text: "SONDEX carries out all its own tooling in-house and boasts its own hydraulic pressing of heat transfer plates and gasket production facilities. The benefit of this specialization is a closed loop production since it’s easier to control and monitor the quality without relying on sub-suppliers.  SONDEX can execute product development tasks faster than most, as the tooling and engineering know-how is placed internally in the Company.",
          points: [],
        },
        {
          title: "HEAT TRANSFER SPECIALISTS",
          text: "SONDEX designs its heat exchangers in close cooperation with customers to perfectly match the thermal requirements of any duty. Throughout the years it has developed what has become the largest plate portfolio in the world.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 13,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: STFlogo,
      text: [
        {
          title: "",
          text: "STF is one of the world’s leading manufacturers and developers of sustainable technologies and products for water filtration systems.",
          points: [],
        },
        {
          title: "",
          text: "With a background of 85-years of experience in the water infrastructure field, since 1991 STF has channeled its sources and expertise into becoming a worldwide pioneer in providing high quality solutions for different type filtration systems, from screen filters, disc filters and media filters, all ranging from automatic to manual filtration systems.",
          points: [],
        },
        {
          title: "STF Product Range Comprises of:",
          text: "",
          points: [
            "Self-cleaning screen filtration system",
            "Disc filtration system",
            "Sand media filters",
          ],
        },
      ],

      products: [],
    },
    {
      id: 14,
      factoryImage: AIRHANDLINGUNITSFANCOILUNITS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR HANDLING UNITS & FAN COIL UNITS",
        },
      ],
      mecanicalDivisionName: "AIRHANDLINGUNITSFANCOILUNITS",
      mecanicalDivisionImg: AIRHANDLINGUNITSFANCOILUNITS,
      logo: Euroclimalogo,
      text: [
        {
          title: "",
          text: "Euroclima is the world’s leading manufacturer of Air handling units / Fan Coil units, with top of the art production facilities in Silian, Austria and Brunico, Italy; Dubai, UAE.",
          points: [],
        },
        {
          title: "",
          text: "Euroclima is a market-oriented manufacturing company, providing top quality technology in the air-handling sector. Its products are Eurovent classified, placing the Company among the very few who can guarantee their rated performance and selections.",
          points: [],
        },
        {
          title: "",
          text: "Euroclima also produces a range of hygienic AHUs with HY hygienic certification suitable for hospitals, Different energy saving solutions for different applications.  Meanwhile, continuous product development and the spirit of innovation form an integral part of Euroclima’s policy. Special requests from customers featuring technical innovations are especially welcome.",
          points: [],
        },
        {
          title: "Products:",
          text: "",
          points: [
            "Customized Air Handling Units",
            "Compact Units",
            "Application Specific Units (food industry, health care sector)",
            "Fan Coil Units",
            "Fan Array units",
            "Units with controls solutions (selectable from our detailed software selection programmed)",
            "Accessories",
          ],
        },
      ],

      products: [],
    },
    {
      id: 15,
      factoryImage: AIRCONDITIONINGEquipment,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR CONDITIONING Equipment",
        },
      ],
      mecanicalDivisionName: "AIRCONDITIONINGEquipment",
      mecanicalDivisionImg: AIRCONDITIONINGEquipment,
      logo: Samsunglogo,
      text: [
        {
          title: "Air Cooled VRF condensing units-DVMS  inverted ducted split:",
          text: "",
          points: [],
        },
        {
          title: "",
          text: "The eco-friendly Samsung air conditioning system saves money and the environment, while providing a powerful performance, capable to work covering extreme ambient temperatures up to 54 deg C without tripping. Its innovative Dual Inverter Compressor with a high efficiency vapor injection system ensures powerful rapid cooling with minimum energy consumption. Samsung condensing units use R410A refrigerant.",
          points: [],
        },
        {
          title: "",
          text: "Manufacturer of world-class energy efficient variable refrigerant flow systems, inverter split systems, this is a perfectly optimized cooling and heating system for residential and large buildings requiring different air solutions.",
          points: [],
        },
        {
          title: "Outdoor Units:",
          text: "",
          points: [
            "Green Refrigerant R410A, high efficiency Ratio: High-energy Efficiency.",
            "Designed  tested for high ambient operation up to 54C. Refrigerant cooled inverter: Advanced Scroll Inverter Compressor.",
            "BLDC fan motor for variable speed, lower power consumption. High PF value: Precise Temperature Control.",
            "Double layer anti-corrosion treated condenser fins and body: Active AI Control.",
            "Lead-free indoor and outdoor PCBs. Adaptive sign wave low THD: Dual Cooling Heat Sink.",
            "Asymmetric compressor design, 4th generation Vapor Injection Technology: High Reliability  durability.",
            "Dual Smart Inverter alternating compressor operation: Installation Flexibility.",
            "Resonance-avoiding technology: Wide range of indoor units.",
            "Night Silent Control (automatic): State-of-the-art control solutions.",
          ],
        },
        {
          title: "Indoor Units:",
          text: "",
          points: [
            "Ducted type",
            "Wall mounted and decorative type",
            "Cassette type",
          ],
        },
      ],

      products: [SamsungProduct1, SamsungProduct2, SamsungProduct3],
    },
    {
      id: 16,
      factoryImage: AIRCONDITIONINGEquipment,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR CONDITIONING Equipment",
        },
      ],
      mecanicalDivisionName: "AIRCONDITIONINGEquipment",
      mecanicalDivisionImg: AIRCONDITIONINGEquipment,
      logo: JohnsonControlslogo,
      text: [
        {
          title: "",
          text: "YORK® VRF ducted  non-ducted Indoor units combined with modular outdoor units’ system deliver optimal comfort and are among the most efficient HVAC systems. York full line of VRF system technology offers design flexibility and optimal performance plus. Meanwhile, YORK® VRF system integration with building automation systems is best-in-class.",
          points: [],
        },
        {
          title: "",
          text: "YORK® Duct Split System is world top class EER 11.6, which will bring you greater cost saving over the product lifetime with GCC certification. Ideal for single zone rooms in villas  apartments, remote or separate offices, electrical and IT closets, or small, challenging spaces.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 17,
      factoryImage: DuctingInsulationProducts,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " Air distribution is a division of FJ Group, specializing in the manufacturing and trading of air distribution and control devices. In 2000, FJ Group launched Flowtech in association with a group of specialists for the manufacturing of air distribution products.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " Ducting & Insulation Products",
        },
      ],
      mecanicalDivisionName: "DuctingInsulationProducts",
      mecanicalDivisionImg: DuctingInsulationProducts,
      logo: ARMACELLlogo,
      text: [
        {
          title: "",
          text: "FJ GROUP is an exclusive agent for ARMACELL – a global leader in engineered foams, providing insulation, specialty foam and rubber solutions for a wide range of industries.",
          points: [],
        },
        {
          title: "",
          text: "ARAMACELL developed ARMAFLAX, the world’s foremost trademark in flexible foam insulation and have become a major supplier of value-added foams and expanded rubber products for automotive, industrial, sports, leisure, packaging and a wide range of custom applications.",
          points: [],
        },
        {
          title: "Armaflex AC Class 0",
          text: "Flexible Insulation to prevent condensation and energy losses.",
          points: [],
        },
        {
          title: "AP/Armaflex – Pipe and Duct Insulation",
          text: "",
          points: [],
        },
        {
          title: "Tubolit AR Fonoblok",
          text: "The noise reducing insulation for cast iron waste water pipes.",
          points: [],
        },
        {
          title: "Tubolit AR Fonowave",
          text: "The noise reducing insulation for plastic waste water pipes.",
          points: [],
        },
        {
          title: "Armacell Ductliner Armasound",
          text: "High performance acoustic insulation for a quieter environment.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 18,
      factoryImage: DuctingInsulationProducts,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " Air distribution is a division of FJ Group, specializing in the manufacturing and trading of air distribution and control devices. In 2000, FJ Group launched Flowtech in association with a group of specialists for the manufacturing of air distribution products.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " Ducting & Insulation Products",
        },
      ],
      mecanicalDivisionName: "DuctingInsulationProducts",
      mecanicalDivisionImg: DuctingInsulationProducts,
      logo: FlowtechAirDistributionlogo,
      text: [
        {
          title: "",
          text: "Flowtech production facility consists of nearly 6,000 square meter of dedicated manufacturing space and has more than 260 qualified employees, has been at the forefront of manufacturing air distribution specialties for over 17 years.",
          points: [],
        },
        {
          title: "",
          text: "Our layout of separate production lines for air terminal and air control devices equipped with state-of-the-art tools and machineries are based on creating an effective and efficient work flow and high standard production.",
          points: [],
        },
        {
          title: "",
          text: "Our in-house powder coating plant has the flexibility to offer our customers standard or special coating as per the project needs.  Control of Production and Service Provision We plan and carry out production activities under controlled conditions. These include the following:",
          points: [],
        },
        {
          title: "",
          text: "Suitable equipment, tools, machineries, hardware and software.",
          points: [],
        },
        {
          title: "",
          text: "Appropriate instruments and equipment for measuring and monitoring.",
          points: [],
        },
        {
          title: "Validation of Processes",
          text: "Validation of processes is based on all operations and activities relating to after sales service, warranty, commissioning, service reports and customer feedback.",
          points: [],
        },
        {
          title: "Identification  Traceability",
          text: "Product traceability is ensured through ERP coding systems, QMS alpha numeric codes, products / item codes, job cards, signboards, bin tags, stickers to name a few.",
          points: [],
        },
        {
          title: "Preservation of Product",
          text: "Each product is identified, handled, packed, stored and protected as per the customer requirements.",
          points: [],
        },
        {
          title: "Control of Monitoring  Measuring Devices",
          text: "Periodic inspection, calibration and maintenance of testing and measuring devices.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 19,
      factoryImage: PumpSSYSTEMS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: "PUMPS & SYSTEMS",
        },
      ],
      mecanicalDivisionName: "PumpSSYSTEMS",
      mecanicalDivisionImg: PumpSSYSTEMS,

      text: [
        {
          title: "AFTER SALES SERVICE AND MAINTENANCE",
          text: "",
          points: [],
        },
        {
          title: "",
          text: "FJ Group boasts more than 25 years of excellence in supply and maintenance of pumping solutions in the Middle East and that is how we possess ‘experts knowledge’ with a well-qualified team to take care of your pumps.",
          points: [],
        },
        {
          title: "",
          text: "Due to the industry focus shifting towards the sustainability, we are committed to work out and present tailor-made solutions for your pumping systems in order to upgrade and transform your buildings to be smarter, efficient and economical, regardless of the age. In fact, 65% of lifecycle cost is incurred on energy and maintenance, that’s where we focus.",
          points: [],
        },
        {
          title: "",
          text: "We give utmost attention to our timely after sales services and backup support. We prioritize our services requests through our toll-free fast track number 800PUMPS (reflects 80078677), with a response time of less than 48 hours.",
          points: [],
        },
        {
          title: "",
          text: "Our experienced and dedicated service team is capable of attending and troubleshooting any diverse scenarios efficiently. Annual maintenance contracts are an integral part of our services.",
          points: [],
        },
        {
          title: "Reliability Engineering Services",
          text: "",
          points: [
            "Failure Analysis",
            "Condition monitoring",
            "Solution Design and Retrofitting",
            "Technical Training and Education",
            "Energy Assessments ISO/ ASME14414",
            "Performance Testing ISO 9906",
          ],
        },
        {
          title: "Field Support Services",
          text: "",
          points: [
            "Annual Maintenance Contracts",
            "On call Inspection and Repair",
            "Warranty Assessments",
            "Pump Station Upgrades",
            "Start-up services",
            "Laser Alignment and Vibration analysis",
            "Pump removal and installation",
            "Electrical and mechanical system trouble-shooting",
          ],
        },
        {
          title: "Shop Repair  Fabrication",
          text: "",
          points: [
            "Inspection and repair",
            "Impeller trimming  alignment",
            "Motor rewinding",
            "Overhauling: end suction, split case, vertical turbines, submersibles  control panels",
            "Pump assemblies and ebuilds",
          ],
        },
        {
          title: "CONTACT US",
          text: "",
          points: ["T: 800Pumps (800 78677)", "M: +97155 565 4642"],
        },
      ],

      products: [],
    },
    {
      id: 20,
      factoryImage: PumpSSYSTEMS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: "PUMPS & SYSTEMS",
        },
      ],
      mecanicalDivisionName: "PumpSSYSTEMS",
      mecanicalDivisionImg: PumpSSYSTEMS,

      text: [
        {
          title: "QUALITY ASSURANCE  CONTROL",
          text: "",
          points: [],
        },
        {
          title: "",
          text: "Our operations and processes are synchronized with efficient production planning and control backed by stringent QA/QC procedures and well managed safety standards. The mission is to:",
          points: [
            "Continuously strive for processes and efficiency improvement.",
            "Continue to optimally utilize the array of resources.",
            "Continue to share knowledge and training.",
            "Ensure safety of employees, environment and assets.",
            "Comply with ISO 9000, ISO14001 and OHSAS 18000.",
          ],
        },
      ],

      products: [],
    },
    {
      id: 21,
      factoryImage: PumpSSYSTEMS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: "PUMPS & SYSTEMS",
        },
      ],
      mecanicalDivisionName: "PumpSSYSTEMS",
      mecanicalDivisionImg: PumpSSYSTEMS,
      logo: Wedecologo,
      text: [
        {
          title: "",
          text: "The Wedeco Spektron series is a proven, energy-efficient UV solution for the disinfection of drinking water, process water, and other high UV transmittance liquids, with more than 2,000 installed systems worldwide.",
          points: [],
        },
        {
          title: "",
          text: "Xylem's Wedeco Spektron UV systems have also been extensively tested to meet the U.S. Environmental Protection Agency’s UV Disinfection Guidance Manual (USEPA’s UVDGM, 2006) and certified to the German DVGW and Austrian ONORM standards.",
          points: [],
        },
        {
          title: "",
          text: "The extensive validation allows for proven disinfection performance for a wide variety of pathogens, including parasites (e.g. Cryptosporidium and Giardia), bacteria (e.g. E. coli, Salmonella typhii, Vibrio cholerae, Pseudomonas aeruginosa) and viruses (e.g. Poliovirus, Norovirus and Rotavirus). More than 99.99% of all pathogens can be rendered harmless in a fraction of a second without affecting the taste or odor of the water.",
          points: [],
        },
        {
          title: "",
          text: "As a purely physical disinfection solution and 100% chemical free, UV does not carry the risk of forming harmful by-products, such as trihalomethanes (THMs) and haloacetic acids (HAAs). In addition the Spektron automatic wiping system works without chemical cleaning additives.",
          points: [],
        },
        {
          title: "",
          text: "UV technology is safer for your employees, your community, and the environment. UV disinfection eliminates the risks associated with on-site storage and handling of hazardous chemicals, keeping your treatment plant and the surrounding community protected from accidental leaks.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 22,
      factoryImage: PumpSSYSTEMS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: "PUMPS & SYSTEMS",
        },
      ],
      mecanicalDivisionName: "PumpSSYSTEMS",
      mecanicalDivisionImg: PumpSSYSTEMS,
      logo: Flygtlogo,
      text: [
        {
          title: "",
          text: "Founded in Sweden in 1901, Flygt is the originator of the electrical submersible pump. Today Flygt customers have access to a complete range of products and solutions for moving water and waste-water, as well as advanced monitoring and control equipment to optimize performance and energy efficiency.",
          points: [],
        },
        {
          title: "",
          text: "Flygt pumps and mixers are ideal for everything from the toughest applications in waste-water, storm water, effluent, RAS and WAS to lightly contaminated water and clean water applications.  We are proud to offer customers both reliabilities, with our high-quality, clog-free pumps and mixers, and expertise in finding the right solution to meet a client’s specific needs.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 23,
      factoryImage: PumpSSYSTEMS,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ Group represents globally renowned brands from Xylem Inc, a world leader in providing innovative pumping solutions such as Bell & Gossett, Goulds water technology, Flygt, Steady, Texas Turbine and A-C Fire pump. Today we are the leading supplier of Xylem’s technically advanced total line of pumping equipment and solutions suitable for chilled water, domestic water, sewage water and firefighting applications. Our flexibility to offer specific engineered products from Xylem’s extensive portfolio and solutions, for the unique applications has allowed us to be at the forefront in the water pumping industry.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: "PUMPS & SYSTEMS",
        },
      ],
      mecanicalDivisionName: "PumpSSYSTEMS",
      mecanicalDivisionImg: PumpSSYSTEMS,
      logo: Xylemlogo,
      text: [
        {
          title: "",
          text: "Innovations in the 150-year history of Xylem’s brand include the first all-metal pump, primary-secondary pumping, and the first electronically commutated spherical motor pump.  We have been in the Middle East for 27 years, associated with renowned brands having global presence, serving the water market sector for many decades and with products sold in more than 150 countries.",
          points: [],
        },
        {
          title: "",
          text: "Partnered with Xylem, we solve the most critical water challenges head-on by engineering the broadest portfolio of applications and services to create efficient pumping systems and sustainable solutions.",
          points: [],
        },
        {
          title:
            "Xylem offers pumping equipment for the following applications:",
          text: "",
          points: [
            "Chilled Water System",
            "District Cooling Plants",
            "Domestic Water Systems",
            "Waste Water and Sewage Water Systems",
            "Desalination Plants",
            "Power Plants",
            "Industrial Plants",
            "Fire Fighting Applications",
          ],
        },
      ],

      products: [],
    },
    {
      id: 24,
      factoryImage: AIRDISTRIBUTION,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR DISTRIBUTION",
        },
      ],
      mecanicalDivisionName: "AIRDISTRIBUTION",
      mecanicalDivisionImg: AIRDISTRIBUTION,

      text: [
        {
          title: "CERTIFICATES",
          text: "",
          points: [],
        },
        {
          title:
            "Our range of products are tested in accordance with international codes and/or standards by ETL-SEMKO laboratories in the U.S.A:",
          text: "",
          points: [
            "ASHRAE 70 standards for “Method of Testing for Rating Performance of Air Outlets and Inlets” that incorporates ADC1062:GRD-84 “Test Code For Grilles,Registers And Diffusers.”",
            "ASTM Standard E477-06a entitled ‘Standard Method of Testing Duct Liner Materials and Prefabricated Silencers for Acoustical and Airflow Performance’ for Sound Attenuators.",
            "UL 555, and UL555S certified Fire Dampers and Motorized Fire and Smoke Dampers.",
            "Industry Standards AHRI 880, ‘Performance Rating of Air Terminals’ and ASHRAE Standard 130, “Methods of Testing Air Terminal Units” for VAVs.",
            "AMCA Standard 500-D, entitled, ‘Laboratory Methods for Testing Dampers for Rating’ for Volume Control Dampers.",
            "Sand Trap Louvers tested for entry loss coefficient and sand penetration to BSEN 13181.",
          ],
        },
      ],

      products: [],
    },
    {
      id: 25,
      factoryImage: AIRDISTRIBUTION,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR DISTRIBUTION",
        },
      ],
      mecanicalDivisionName: "AIRDISTRIBUTION",
      mecanicalDivisionImg: AIRDISTRIBUTION,

      text: [
        {
          title: "PRODUCTION, PLANNING  CONTROL",
          text: "",
          points: [],
        },
        {
          title: "",
          text: "Flowtech production facility consists of nearly 6,000 square meter of dedicated manufacturing space and has more than 260 qualified employees, has been at the forefront of manufacturing air distribution specialties for over 17 years.",
          points: [],
        },
        {
          title: "",
          text: "Our layout of separate production lines for air terminal and air control devices equipped with state-of-the-art tools and machineries are based on creating an effective and efficient work flow and high standard production.",
          points: [],
        },
        {
          title: "",
          text: "Our in-house powder coating plant has the flexibility to offer our customers standard or special coating as per the project needs.  Control of Production and Service Provision We plan and carry out production activities under controlled conditions.",
          points: [],
        },
        {
          title: "These include the following:",
          text: "",
          points: [
            "Suitable equipment, tools, machineries, hardware and software.",
            "Appropriate instruments and equipment for measuring and monitoring.",
          ],
        },
        {
          title: "Validation of Processes",
          text: "",
          points: [
            "Validation of processes is based on all operations and activities relating to after sales service, warranty, commissioning, service reports and customer feedback.",
          ],
        },
        {
          title: "Identification  Traceability",
          text: "",
          points: [
            "Product traceability is ensured through ERP coding systems, QMS alpha numeric codes, products / item codes, job cards, signboards, bin tags, stickers to name a few.",
          ],
        },
        {
          title: "Preservation of Product",
          text: "",
          points: [
            "Each product is identified, handled, packed, stored and protected as per the customer requirements.",
          ],
        },
        {
          title: "Control of Monitoring  Measuring Devices",
          text: "",
          points: [
            "Periodic inspection, calibration and maintenance of testing and measuring devices.",
          ],
        },
      ],

      products: [],
    },
    {
      id: 26,
      factoryImage: AIRDISTRIBUTION,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR DISTRIBUTION",
        },
      ],
      mecanicalDivisionName: "AIRDISTRIBUTION",
      mecanicalDivisionImg: AIRDISTRIBUTION,

      text: [
        {
          title: "OUR SERVICE TEAM",
          text: "",
          points: [],
        },
        {
          title: "",
          text: "Customer service excellence has always been and will always be one of the critical competitive advantages for our business.",
          points: [],
        },
        {
          title: "",
          text: "Our aim is to provide quality after-sales service to our customers through continuous pursuit of excellence in our people and processes.",
          points: [],
        },
        {
          title: "",
          text: "We are committed to professionalism and are determined to deliver quality service while maintaining high standards of integrity in our dealings with our customers.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 27,
      factoryImage: AIRDISTRIBUTION,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR DISTRIBUTION",
        },
      ],
      mecanicalDivisionName: "AIRDISTRIBUTION",
      mecanicalDivisionImg: AIRDISTRIBUTION,
      logo: FlowtechAirDistributionlogo,
      text: [
        {
          title: "",
          text: "Flowtech Division deals with air-distribution  terminal products.",
          points: [],
        },
        {
          title: "Insulation Products  Ducting Products:",
          text: "",
          points: [
            "Air Terminal Devises Grilles  Registers, Diffusers, Louvers  Disk Valves.",
            "Air Control Devises Dampers, VAV Boxes, Access Doors.",
            "Noise Control Devises Sound Attenuators, and Acoustic Louvers.",
            "Insulation Products Armacell Armaflex Pipe  Duct Insulation, and Afico Fiberglass Insulation.",
            "Alpha Ducts Alpha-PF-Plus Prefabricated  Pre-insulated Phenolic air duct system and accessories",
          ],
        },
        {
          title: "",
          text: "FJ Group has continued to strive in every aspect of the business to meet the changing needs of its customers. It invested in the best machineries available in the field to manufacture products of international standards.",
          points: [],
        },
        {
          title: "",
          text: "Likewise, experienced, and talented teams of experienced craftsmen have been taken on with proven experience, capable of offering standard and customized solutions to the project requirements.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 28,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: ABOvalvelogo,
      text: [
        {
          title: "",
          text: "ABO valve was founded in 1993 as a joint venture between Czech company Siwatec, A.S. and a French entity Buracco S.A. as Armatury Buracco Olomouc; i.e. ABO.",
          points: [],
        },
        {
          title: "",
          text: "With a history of almost 20-years, ABO is currently one of the largest European manufacturers of shut-off and control valves for industrial applications.",
          points: [],
        },
        {
          title: "",
          text: "ABO headquarters are located in the city of Olomouc, Czech Republic. It also has established sales and production branches in Banska Bystrica, Slovakia, Smolensk, Russian Federation and Singapore.",
          points: [],
        },
        {
          title: "",
          text: "ABO Valve is a specialized producer of concentric butterfly valves as well as high performance butterfly valves in double and triple offset design for the most demanding conditions in industrial processing, oil and gas, water and wastewater, irrigation systems, portable water, and so forth.",
          points: [],
        },
        {
          title: "",
          text: "ABO holds major European and international certificates like EN ISO 9001, TUV, GOST R, Roztechnadzor.",
          points: [],
        },
        {
          title: "ABO Products Range Comprises of:",
          text: "",
          points: [
            "Concentric Butterfly Valves",
            "High Performance Butterfly Valves",
            "PTFE Lined Butterfly Valves",
            "Knife Gate Valves",
            "Gate Valves",
            "Check Valves",
            "Ball Valves",
            "Ball Check Valves",
            "Diaphragm Valves",
            "Strainers",
          ],
        },
      ],

      products: [],
    },
    {
      id: 29,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],

      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: AYVAZlogo,
      text: [
        {
          title: "",
          text: "AYVAZ has produced the latest technology for the last 70 years, and today, our proud experience is portrayed in all our product-lines and special solutions for our esteemed clients.",
          points: [],
        },
        {
          title: "",
          text: "Established in 1948, AYVAZ started with brass valves case-specific for the maritime industry, and now it has developed into one of the market leaders in expansion joints and steam products.",
          points: [],
        },
        {
          title: "",
          text: "AYVAZ exports to more than 100 countries globally, employing over 800 trained staff under a 40,000m² production area, and no less than 100 employees that are dedicated engineers specializing in production, sales, RD, and in the quality department.",
          points: [],
        },
        {
          title: "AYVAZ Production Ranges:",
          text: "",
          points: [
            "Expansion joints",
            "Flexible metal hoses",
            "Level controllers",
            "Steam equipment",
            "Insulation jackets",
            "Fire fighting equipment",
          ],
        },
        {
          title: "AYVAZ Certifications Are:",
          text: "",
          points: [
            "CE Certificate",
            "BUREAU VERITAS Certificate",
            "VDS Certificate",
            "FM Certificate",
            "LLOYDS Certificate",
            "ISO 9001:2000, (from Germany)",
            "IMQ, (from Italy)",
            "DVGW, (from Germany)",
            "GOST, (from Russia)",
            "GOST, (from Ukraine)",
            "GL, (from U.K)",
            "Gastec, (from Holland)",
            "KVGW, (from Belgium)",
          ],
        },
      ],

      products: [],
    },
    {
      id: 30,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: BLÜCHERlogo,
      text: [
        {
          title: "",
          text: "Since 1965 BLÜCHER has grown into one of Europe’s leading stainless steel drainage product and system specialists and is represented across11 European countries.",
          points: [],
        },
        {
          title: "",
          text: "BLÜCHER manufacture and supply hygienic drains, pipes, channels, and accessories providing high-quality drainage solutions for customers within the housing, commercial, industrial and marine areas.",
          points: [],
        },
        {
          title: "",
          text: "BLÜCHER’s production, product development and central administration facilities are located in Vildbjerg near Herning in the western part of Denmark.",
          points: [],
        },
        {
          title: "BLÜCHER Products Range Comprises of:",
          text: "",
          points: [
            "SS Drainage Pipes",
            "SS Drainage Fittings",
            "SS Floor Drain  Channels",
            "SS Roof Drains",
          ],
        },
      ],

      products: [],
    },
    {
      id: 31,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: BRANNANlogo,
      text: [
        {
          title: "",
          text: "BRANNAN are a global manufacturer of thermometers, pressure gauges and are associated with instrumentation products.",
          points: [],
        },
        {
          title: "",
          text: "The dedicated manufacturing facility is in the United Kingdom, and is highly mechanised, offering high quality products at competitive prices.",
          points: [],
        },
        {
          title: "BRANNAN Product Range Comprises of:",
          text: "",
          points: [
            "Pressure Gauges (syphons, gauge cocks  other accessories)",
            "Dial Thermometers (Thermowells)",
            "V-Line  Hot Water Thermometers",
          ],
        },
      ],

      products: [],
    },
    {
      id: 32,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: CRANEFluidSystemslogo,
      text: [
        {
          title: "",
          text: "CRANE Fluid Systems is a leading brand of Crane Building Services; Utilities which forms part of the Fluid Handling Group, a division of the parent company Crane Co, a New York Stock Exchange quoted company with a market capitalization in excess of US$ 4.8 billion.",
          points: [],
        },
        {
          title: "",
          text: "CRANE Co. was founded on the July 5, 1855 by Richard Teller Crane who made the following resolution: “I am resolved to conduct my business in the strictest honesty and fairness; to avoid all deception and trickery; to deal fairly with both customers and competitors; to be liberal and just towards employees; and to put my whole mind upon the business.”",
          points: [],
        },
        {
          title: "",
          text: "The essence of this resolution is the business policy of CRANE Co. today.",
          points: [],
        },
        {
          title: "Quality Assurance",
          text: "",
          points: [],
        },
        {
          title: "",
          text: "Rigid quality control and inspection at all stages of manufacturing ensure that CRANE FS products are suitable for their intended application and will give reliable service. Every valve and pipe fitting are individually tested in accordance with the relevant product standard.",
          points: [],
        },
        {
          title: "",
          text: "CRANE Fluid Systems is an approved manufacturer under various quality schemes, including the British Standard Institution (BSI) Kitemark, Water Regulations Advisory Scheme (WRAS), and is ISO9001 accredited.",
          points: [],
        },
        {
          title: "",
          text: "In addition, the Company has been approved and listed by various user organizations including the United Kingdom Water Fittings by laws scheme and other third-party organizations.",
          points: [],
        },
        {
          title: "CRANE F.S. Product Range Comprises of:",
          text: "",
          points: [
            "Ball Valves",
            "Gate Valves",
            "Globe Valves",
            "Butterfly Valves",
            "Non-Return Valves/Check valves",
            "Strainers",
            "Drain Cocks",
            "Balancing  Commissioning Valves",
            "Pressure Reducing Valves",
            "Thermal Circulation Valves",
            "Thermostatic Mixing Valves",
            "FCU Link",
          ],
        },
      ],

      products: [],
    },
    {
      id: 33,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: CSAlogo,
      text: [
        {
          title: "",
          text: "CSA was founded in 1987 by transforming the former CSA, which was a trading company dealing with pipes and valves for water networks, into a manufacturing company, through the research and realization of pillar fire hydrants.",
          points: [],
        },
        {
          title: "",
          text: "CSA is characterized by years of technical and commercial research which have enabled us to offer a complete range of valves designed for controlling, regulating, and protecting the pipelines under pressure in both waterworks and sewage lines.",
          points: [],
        },
        {
          title: "",
          text: "CSA’s many industrial patents and innovative technical solutions, together with modern and attractive style of design, have made it possible to differentiate products from those offered by competitors and have allowed us to become a point of reference in our sector.",
          points: [],
        },
        {
          title: "CSA Wide Range of Valves Comprises of:",
          text: "",
          points: [
            "Automatic Control Valves: (Pressure Reducing, Pressure Relief/Sustaining, Level Control, Flow Control, Solenoid Control, Anti Surge, Pump Control)",
            "Direct Acting Valves: (Pressure Reducing, Pressure Relief/Sustaining/Fast Acting Surge Prevention)",
            "Ball Float Valves",
            "Water Air Valves: (Air Release, Anti-shock/Anti-Slam, Combination Air Release, Underground Air Valves)",
            "Industries/Seawater Valves",
            "Waste-Water Air Valves",
          ],
        },
      ],

      products: [],
    },
    {
      id: 34,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: FLAMCOlogo,
      text: [
        {
          title: "",
          text: "FLAMCO designs and manufactures expansion vessels, refill automats for heating and cooling, safety valves, pressure gauges, connection groups and other appendages, storage vessels, boilers, and expansion vessels for water systems.",
          points: [],
        },
        {
          title: "",
          text: "The Company also produces deareation and dirt separator equipment; fittings, mounting materials and valves for solar systems and hanging pipes.",
          points: [],
        },
        {
          title: "",
          text: "FLAMCO boasts production facilities in the Netherlands (head office), UK, Poland, Germany and Russia, and a sales network across the globe.",
          points: [],
        },
        {
          title: "FLAMCO Products Range Comprises of:",
          text: "",
          points: [
            "Expansion System (Vessels, Tanks  Accessories)",
            "Air  Dirt Separation  Dosing solution",
            "Buffering and Water heating",
            "Pressurization Unit",
            "Vacuum Degassing System",
            "Heating  Cooling interface Unit HIU/CIH",
            "Essential Valves (Back Flow Preventer, Mixing Valves, Air Vents, PRV, Safety Valves)",
          ],
        },
      ],

      products: [],
    },
    {
      id: 35,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: PUROFLUXlogo,
      text: [
        {
          title: "",
          text: "PUROFLUX offers a wide variety of filtration products to satisfy most applications such as Basin Cleaning Systems and Side Stream Filtration Systems for Cooling Tower / Condenser for chilled water circuit based on Centrifugal action (or separators).",
          points: [],
        },
        {
          title: "",
          text: "Standard units are designed to handle a multitude of pressures and flows, while systems can be engineered upon request to fit specific applications and configurations.",
          points: [],
        },
        {
          title: "PUROFLUX Product Range Comprises of:",
          text: "",
          points: ["Centrifugal Separators", "Permanent Media Filters"],
        },
      ],

      products: [],
    },
    {
      id: 36,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: SCHIEBELlogo,
      text: [
        {
          title: "",
          text: "SCHIEBEL Antriebstechnik has been a leader in the production and development of electric actuators in Austria for nearly 60 years. At present, 30-international sales partners and 6-branch offices represent SCHIEBEL worldwide. The products range from multi-turn, part-turn, linear and failsafe actuators.  The traditional AB Series characterized by its durability and reliability have been implemented with great success in water plants worldwide.",
          points: [],
        },
        {
          title: "",
          text: "SCHIEBEL’s CM multi-turn actuators with integrated controls are characterized as smart, compact, and have been employed in the water industry due to its size and weight.",
          points: [],
        },
        {
          title: "",
          text: "Meanwhile, SCHIEBEL spring return actuators (FS Series) are unique in the electric actuator market as they are equipped with a mechanical spring return and still offer upscale torque requirements and have already been implemented in several gas and oil plants worldwide.",
          points: [],
        },
        {
          title: "",
          text: "SCHIEBEL laces a high value on customer specific certifications such as ‘Nuclear Authority Hungary,’ GOST, RTN and specific vibration and shock tests for the maritime sector.",
          points: [],
        },
        {
          title: "SCHIEBEL Actuators Business Area Comprises of:",
          text: "",
          points: [
            "Water and Sewage",
            "Power Plant Engineering",
            "Oil  Gas",
            "District Cooling  Heating",
            "HVAC, Plumbing  Irrigation",
          ],
        },
      ],

      products: [],
    },
    {
      id: 37,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: GOETZElogo,
      text: [
        {
          title: "",
          text: "The competence of GOETZE KG Armaturen has been in demand for 70 years with products covering every industrial application: Liquids of all kinds, gases, technical vapours and steam.",
          points: [],
        },
        {
          title: "",
          text: "GOETZE valves are used with temperatures ranging from -200°C up to 400°C and the greatest possible safety is a priority.",
          points: [],
        },
        {
          title: "",
          text: 'Goetze have been designing and ¬manufacturing safety valves for a highly diversified range of applications, with over 300,000 valves per year, proudly stamped: "Made in Germany."',
          points: [],
        },
        {
          title: "",
          text: "GOETZE is your competent partner for all matters relating to the handling of pressure.",
          points: [],
        },
        {
          title: "GOETZE Product Range Comprises of:",
          text: "",
          points: [
            "Safety Valves",
            "Pressure Relief Valves",
            "Overflow  Pressure Control Valves",
            "Safety Fittings for Hygienic Applications",
          ],
        },
      ],

      products: [],
    },
    {
      id: 38,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: HAWLElogo,
      text: [
        {
          title: "",
          text: "HAWLE success story began in 1948 with an idea for a revolutionary pipe connection for drinking water pipelines.  Based in Vöcklabruck, the HAWLE Austria Group is now a manufacturer and distributor of top-quality heavy-duty valves.",
          points: [],
        },
        {
          title: "",
          text: "These products have been manufactured for generations and are used all over the world from the source right through to the connection in the house.",
          points: [],
        },
        {
          title: "HAWLE Product Range Comprises of:",
          text: "",
          points: [
            "Gate Valves",
            "Service Valves",
            "Tapping Saddles",
            "House Connection Fittings",
            "DI Pipe Fittings",
            "Fire Hydrants",
            "Pipe Repair Clamps",
          ],
        },
      ],

      products: [],
    },
    {
      id: 39,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: IMIHydronicEngineeringlogo,
      text: [
        {
          title: "",
          text: "IMI Hydronic Engineering is the leading brand and expert in hydronic distribution systems, i.e.: balancing valves and control valves with experience in more than 100,000 construction projects worldwide.",
          points: [],
        },
        {
          title: "",
          text: "IMI Hydronic Engineering helps clients optimize their HVAC systems by providing products and knowledge to deliver the right indoor comfort at the right energy cost.",
          points: [],
        },
        {
          title: "",
          text: "IMI Hydronic Engineering has the needs of a complete system in mind and this approach ensures you get the control and reliability needed to deliver an optimal indoor climate with increased efficiency.",
          points: [],
        },
        {
          title: "",
          text: "It has its own manufacturing units in Switzerland, Olkusz Poland, Lunj Sweden, Slovenia and in Erwittee Germany. The factories are ISO 9001, ISO 14001, OHSAS 18001  AD 2000 Certified.",
          points: [],
        },
        {
          title: "",
          text: "IMI Hydronic Engineering has also opened its latest Hydronic College Training Centre in Dubai. The Centre is exclusively developed for installers, consultants and contractors working in the sector and educates all on how hydronic systems can be successfully designed, installed, and balanced to ensure energy efficient and comfortable indoor climates.",
          points: [],
        },
        {
          title: "",
          text: "Customers are provided with an opportunity to have hands-on experience in the fields of balancing and control, pressurization, and water quality.",
          points: [],
        },
        {
          title: "",
          text: "Meanwhile, IMI Hydronic Engineering has an Engineering Service Centre that helps clients in providing mathematical modeling of hydronic balancing and control systems.",
          points: [],
        },
        {
          title: "IMI Hydronic Engineering Product Range Comprises of:",
          text: "",
          points: [
            "Balancing Valves",
            "Control Valves (2-way, 3-way, PIBCV)",
            "Differential Pressure Control Valves",
            "Smart Valves",
          ],
        },
      ],

      products: [],
    },
    {
      id: 40,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: ITAPlogo,
      text: [
        {
          title: "",
          text: "ITAP SpA, founded in Lumezzane (Brescia) in 1972 is currently one of the leading production companies in Italy for valves, fittings and distribution manifolds for plumbing and heating systems.",
          points: [],
        },
        {
          title: "",
          text: "Thanks to fully automated production processes, with 85 transfer machines and 55 assembly lines, ITAP are able to produce 400,000 pieces per day. The innate pursuit for innovation and observance of technical regulations is supported by the company certification ISO 9001.",
          points: [],
        },
        {
          title: "",
          text: "ITAP has always considered its focus on quality as the main tool to obtain significant business results. Today ITAP SpA is proud to offer products bearing the approval of numerous international certifying bodies.",
          points: [],
        },
        {
          title: "ITAP Product Range Comprises of:",
          text: "",
          points: [
            "Check  Foot Valves",
            "Ball  Gate Valves",
            "BIB Cocks",
            "Pressure Reducing Valves",
            "Thermostatic Mixing Valves",
            "Strainers",
            "Angle Valves",
          ],
        },
      ],

      products: [],
    },
    {
      id: 41,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: NOVASIRIAlogo,
      text: [
        {
          title: "",
          text: "NOVA SIRIA (member of Hawle Austria Group) is a leader in the production of tailor-made couplings.",
          points: [],
        },
        {
          title: "",
          text: "NOVA SIRIA production offers the most advanced technology and quality solutions currently available on the market: Reliability, versatility, and fast delivery in cases of emergencies have assured worldwide success of our products. The Company has over 90 years experience in manufacturing jointing, repairing and hot tapping systems for land and marine pipelines.",
          points: [],
        },
        {
          title: "",
          text: "NOVA SIRIA product range - from design to manufacture in accordance with the specifications of the Quality Management System ISO 9001 - follows a processing cycle supported by advanced technologies, which allow us to achieve our steadily high-quality level.",
          points: [],
        },
        {
          title: "",
          text: "NOVA SIRIA production is organized in different product types available in multiple versions, characterized by a wide tolerance range on the pipe diameters that allows connecting, repairing and hot tapping pipes with the same or different outside diameters and materials.",
          points: [],
        },
        {
          title: "NOVA SIRIA Product Range Comprises of:",
          text: "",
          points: [
            "Multi range pipe couplings  flange adapters",
            "End restrained couplings  flange adapters",
            "Multi range encapsulation collars (DUOFIT)",
            "Hot Tapping Collars",
          ],
        },
      ],

      products: [],
    },
    {
      id: 42,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: oZKANlogo,
      text: [
        {
          title: "",
          text: "In 2011, ÖZ-KAN Makina became a member of Hawle group. Hawle, a purely family- owned company was founded in 1948 and is an established innovation leader in the development of high-quality valve solutions.",
          points: [],
        },
        {
          title: "",
          text: "In compliance with European and additionally applicable standards, Hawle produces high-performance and durable quality fittings for the construction and the use of water pipelines, as well as the necessary accessories and related equipment.",
          points: [],
        },
        {
          title: "",
          text: "The unique 10-year quality guarantee for Hawle products in the drinking water area affirims our leading position for innovation and quality.",
          points: [],
        },
        {
          title: "ÖZ-KAN Products Range Comprises of:",
          text: "",
          points: [
            "Double Eccentric Butterfly Valves",
            "Non-Return Valves",
            "Needle Valves",
            "Air Release Valves",
            "Dismantling Joints",
          ],
        },
      ],

      products: [],
    },
    {
      id: 43,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: PAHARPURlogo,
      text: [
        {
          title: "",
          text: "PAHARPUR are specialized in large capacity FECT, (Field Erected Cooling Tower) for industrial and District Cooling applications. The Company offers cooling towers with 1˚C approach temperatures.",
          points: [],
        },
        {
          title: "",
          text: "PAHARPUR responds to this demand with a highly reliable and energy efficient range of cooling solutions by optimizing cooling tower performances, and in tandem, reduce energy consumption.",
          points: [],
        },
        {
          title: "PAHARPUR Product Range Comprises of:",
          text: "",
          points: [
            "Wooden/Timber Cooling Towers for Industrial applications",
            "FRP for District Cooling applications",
            "Cross/Counter Flow Cooling Tower for HVAC",
          ],
        },
      ],

      products: [],
    },
    {
      id: 44,
      factoryImage: DISTRICTCOOLINGEQUIPMENT,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: "FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " DISTRICT COOLING EQUIPMENT",
        },
      ],
      mecanicalDivisionName: "DISTRICTCOOLINGEQUIPMENT",
      mecanicalDivisionImg: DISTRICTCOOLINGEQUIPMENT,
      logo: VICANlogo,
      text: [
        {
          title: "",
          text: "VICAN develops and produces metallurgic components and equipment for water treatment and conduction.",
          points: [],
        },
        {
          title: "",
          text: "With a background of 85-years of experience in the water infrastructure field, VICAN has channeled its sources and expertise into becoming a worldwide pioneer in providing high quality solutions for different type of water infrastructure installations.",
          points: [],
        },
        {
          title: "",
          text: "That encompasses designing, manufacturing and installation of dismantling joints, penstocks, surge tanks and different metal works types.",
          points: [],
        },
        {
          title: "VICAN Product Range Comprises of:",
          text: "",
          points: [
            "Penstocks",
            "Standard wall mounted slider types",
            "Standard channel types",
            "Dismantling Joints",
          ],
        },
      ],

      products: [],
    },
    {
      id: 45,
      factoryImage: AIRCONDITIONINGEquipment,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR CONDITIONING Equipment",
        },
      ],
      mecanicalDivisionName: "AIRCONDITIONINGEquipment",
      mecanicalDivisionImg: AIRCONDITIONINGEquipment,

      text: [
        {
          title: "",
          text: "FJCare Technical Services LLC is a ‘Total Solution Provider’ launched by FJ GROUP in 2003, who are specialists in the HVAC field and well versed to oﬀer engineering services, including but not limited to Annual Maintenance Programs, compressor overhauling, replacements, HVAC Systems installation and supply of genuine HVAC and Refrigeration spare parts.",
          points: [],
        },
        {
          title: "",
          text: "Evolving to keep up with the changing demands of time is intrinsic to the company. A commitment to quality, process orientation, flexibility, proven methodology, ability to establish engineering teams and a good understanding of various industry standards has been the basis of our long-term relationship with our reputed clients.",
          points: [],
        },
        {
          title:
            "FJCare is proudly serving the clients through one of the following verticals:",
          text: "",
          points: [
            "Service Solutions",
            "HVAC Parts and Accessories",
            "HVAC Systems Design and Installation",
          ],
        },
      ],

      products: [],
    },
    {
      id: 46,
      factoryImage: AIRCONDITIONINGEquipment,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR CONDITIONING Equipment",
        },
      ],
      mecanicalDivisionName: "AIRCONDITIONINGEquipment",
      mecanicalDivisionImg: AIRCONDITIONINGEquipment,

      text: [
        {
          title: "SERVICE SOLUTIONS",
          text: "",
          points: [],
        },
        {
          title: "",
          text: "FJCare provides high-end engineering services through high standards for excellent maintenance and repair of the HVAC systems.",
          points: [],
        },
        {
          title: "",
          text: "Our vision is to be the most efficient and professional engineering service provider, exceeding our customers’ expectations with full satisfaction.",
          points: [],
        },
        {
          title: "Our range of service includes the following:",
          text: "",
          points: [
            "HVAC Operations and Maintenance Contracts through well-defined preventive, predictive and corrective service programs.",
            "24/7 Unlimited Emergency Call out System.",
            "FJCare Command Centre (FJCCC) for remote monitoring and control.",
            "Chillers and DX units’ replacement plans proposing optimal selections suiting in best interest of client benefits and site requirements.",
            "Compressor Overhauling / Replacement.",
            "HVAC Rectification, Retrofit and Upgrades.",
            "Special Engineering Services (Vibration Analysis, Thermography Test, Descaling and Eddy Current Test).",
            "Testing  Commissioning.",
          ],
        },
        {
          title: "",
          text: "All our services are designed to ensure that the HVAC system is periodically maintained to meet the facility operational requirements while achieving high energy eﬃciency and system reliability, which in turn:",
          points: [
            "Prevents frequent breakdown.",
            "Cuts down the maintenance cost.",
            "Cuts down utility bills.",
            "Extends equipment life.",
          ],
        },
      ],

      products: [],
    },
    {
      id: 47,
      factoryImage: AIRCONDITIONINGEquipment,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR CONDITIONING Equipment",
        },
      ],
      mecanicalDivisionName: "AIRCONDITIONINGEquipment",
      mecanicalDivisionImg: AIRCONDITIONINGEquipment,

      text: [
        {
          title: "",
          text: "To reach out to its customers as a Total Solution Provider, FJCare has established its own trading wing, which is specialized in supplying HVAC Products, accessories, air-conditioning  refrigeration equipment, controls and genuine Spare parts related to smaller to large capacity of Air conditioning equipment, reciprocating, Screw and Centrifugal Chillers.",
          points: [],
        },
        {
          title: "",
          text: "We have a strong business alliance and distributorship with various international manufactures Such as York by Johnson Controls, Carrier, Samsung, Crane, Errecom, Tazzetti etc.",
          points: [],
        },
        {
          title: "",
          text: "In order to meet the ever-growing demand, we keep huge inventory of HVAC products, spare parts and accessories, and to cater the day-to-day deliveries, we have a dedicated spacious retail outlet at Strategic location of Dubai. The stores and ware houses are at premium locations for easy access of valued customers.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 48,
      factoryImage: AIRCONDITIONINGEquipment,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " FJ GROUP is organized into multiple divisions according to the line of products and services we offer. Our experienced engineering and sales team, along with technicians and support staff, are well qualified in providing solutions that are customized to client needs. Through the years we have built strong relationships with our principals and partners, who have contributed to our team innovations and latest technology breakthroughs. We encourage a customer-focused culture and believe in going the extra mile to deliver against our promises and exceeding customer expectations.  Below is a rundown of our rich portfolio of brands in the mechanical field.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " AIR CONDITIONING Equipment",
        },
      ],
      mecanicalDivisionName: "AIRCONDITIONINGEquipment",
      mecanicalDivisionImg: AIRCONDITIONINGEquipment,

      text: [
        {
          title: "HVAC SYSTEM DESIGN AND INSTALLTION",
          text: "",
          points: [],
        },
        {
          title: "",
          text: "The FJCare HVAC project team handles system supply, installation and commissioning of the same.  The dedicated team is experienced and capable of undertaking all types of air conditioning designs  installations. FJCare is ready to deliver an optimum system to the highest industry standards.",
          points: [],
        },
        {
          title: "",
          text: "Our engineering team will provide alternative options and advice before a final proposal is made. Our Projects Division will manage the project right from design stage, installation and through final commissioning before handing over the project to the customer. The projects’ team will supervise the execution through all stages and at the time when commissioning takes place to ensure the system is set up correctly to the building requirements and design parameters.",
          points: [""],
        },
        {
          title:
            "Our Project Team has a vast experience in various types of installation and system applications which includes:",
          text: "",
          points: ["DX Systems", "VRF Systems", "Chilled Water Systems"],
        },
        {
          title: "",
          text: "FJ Group are the proud distributors of Samsung AC systems and JCI York Unitary Equipment. Samsung provide energy efficient cooling solutions in the building services industry.",
          points: [],
        },
        {
          title:
            "A contracting arm of FJ GROUP, engaged in providing quality turnkey solutions for all your air conditioning needs:",
          text: "",
          points: [
            "Design assistance",
            "Energy efficient and smart solutions",
            "Technical, product and field training",
            "Site installation and supervision",
            "Testing and commissioning services",
            "After sales support",
            "Annual maintenance contract",
            "Retrofitting",
          ],
        },
        {
          title: "",
          text: "FJ GROUP are also the distributors of Samsung AC systems and Climaveneta Chillers. We provide energy efficient cooling solutions in the building services industry.",
          points: [],
        },
      ],

      products: [],
    },
    {
      id: 49,
      factoryImage: DuctingInsulationProducts,
      factoryText: [
        {
          id: "",

          style: "paragraph3",
          text: " Air distribution is a division of FJ Group, specializing in the manufacturing and trading of air distribution and control devices. In 2000, FJ Group launched Flowtech in association with a group of specialists for the manufacturing of air distribution products.",
        },
      ],
      factoryTitle: [
        {
          style: "1",
          text: " Ducting & Insulation Products",
        },
      ],
      mecanicalDivisionName: "DuctingInsulationProducts",
      mecanicalDivisionImg: DuctingInsulationProducts,
      logo: AFICOlogo,
      text: [
        {
          title: "",
          text: "Arabian Fiberglass Insulation Co., Ltd. (AFICO) is a manufacturer of fiber glass insulation, also known as glass wool insulation for thermal and acoustical applications. Since its inception in 1981 with headquarters and manufacturing facilities located in Dammam First Industrial city in the Eastern Province of the Kingdom of Saudi Arabia. AFICO is the only manufacturer of glass wool Insulation products in Saudi Arabia with well-recognized reputation in different markets worldwide such as GCC, Middle East, Africa and Far East countries. AFICO is a joint venture between the Zamil Industrial Investment Company (ZI) along with Gulf Insulation Group (GIG) owns 51% of the company shares and Owens Corning Corporation, USA owns 49%. AFICO manufactures premium quality products comparable to those sold in the United States and Europe, under license in utilizing the know-how and technical specifications of Owens Corning. Over its 40 years of experience in the field, AFICO has developed its own expertise to lead the market in terms of its high-quality products and services to HVAC and Building Applications.",
          points: [],
        },
        {
          title: "",
          text: "To ensure its proximity to the active markets, AFICO has sales offices in Dammam, Riyadh, Jeddah, Dubai and Cairo. AFICO is certified for ISO 9001 (Quality), ISO 14,001 (Environment), OHSAS 18,001 (Safety), CE-EN Mark and Dubai Municipality Central Laboratory (DCL-Mark) Company. AFICO products meet all the requirements of the ASTM, BS, UL, DIN international standards and complies with the local Authority requirements such as SASO, DCL, DCD, ADCD etc..",
          points: [],
        },
        {
          title:
            "AFICO offers high quality insulation solutions for various applications:",
          text: "",
          points: [
            "Faced Duct Wrap – FRK / AWF/ ASJ faced",
            "Mechanical Board – FRK / AWF / ASJ faced",
            "High Density Pipe Insulation – FRK / AWF / ASJ faced",
            "AFICO Quiet Liner – WGF faced",
            "Blanket  Board Insulation – Unfaced / faced",
          ],
        },
      ],

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
        mecanicalDivisionImg,
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
                  <CustomHeader backgroundImage={Mechanical} headerTitle={"MECHANICAL" }  charHeader={"M"} />

            <CustomSubHeader2
              backgroundImage={mecanicalDivisionImg}
              headerTitle={"PLUMPING"}
              charHeader={"P"}
              text={factoryText}
              title={factoryTitle}
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

                  <Arrow link={"/MechanicalSubPages/" + previous} />
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
                  <Arrow directions={"."} link={"/MechanicalSubPages/" + next} />
                </Col>{" "}
              </Row>

              <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                  {text.map((text) => (
                    <TextTitleBox text={text.text} />
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
