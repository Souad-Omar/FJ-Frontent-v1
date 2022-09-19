import React, { Fragment } from "react";
import BasicHeader2 from "../../components/basic-header2";
import AboutUsImg from "../../assets/AboutUsImg.jpg";
import Footer from "../../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import map from "../../assets/ContactUs/map.jpg";
import FlagOfIndia from "../../assets/ContactUs/FlagOfIndia.jpg";
import FlagOfIraq from "../../assets/ContactUs/FlagOfIraq.jpg";
import FlagOfOman from "../../assets/ContactUs/FlagOfOman.jpg";
import FlagOfQatar from "../../assets/ContactUs/FlagOfQatar.jpg";
import FlagOfSouthAfrica from "../../assets/ContactUs/FlagOfSouthAfrica.jpg";
import FlagOfSaudiArabia from "../../assets/ContactUs/FlagOfSaudiArabia.jpg";
import MutliplastDubaillcLogo from "../../assets/Logos/MutliplastDubaillcLogo.png";
import FJGroupMain from "../../assets/Logos/FJGroupMain.png";
import FJENGINEERINGTRADING from "../../assets/Logos/FJENGINEERINGTRADING.png";
import FJEnergy from "../../assets/Logos/FJEnergy.png";
import FJCareLogo from "../../assets/Logos/FJCareLogo.png";
import EuroclimaLogo from "../../assets/Logos/EuroclimaLogo.png";
import DCServe from "../../assets/Logos/DCServe.png";
import AlphaDuctsLogo from "../../assets/Logos/AlphaDuctsLogo.png";

import FlagOfUnitedArabEmirates from "../../assets/ContactUs/FlagOfUnitedArabEmirates.jpg";
import TextTitleBox from "../../components/text-title-box";
import ExploreMoreLink from "../../components/explore-more copy";
import { Link } from "react-router-dom";

const UnitedArabEmirates = () => {
  const contactUs = [
    {
      id: 1,
      logo: MutliplastDubaillcLogo,
      text: "Alpha Ducts LLC Jebel Ali Industrial Area",
      fax: "P.O. Box 336769  ",
      address: "Dubai, UAE  ",
      tel: "T: +9714 272 4715  ",
      email: "E: info@alphaducts.com  ",
      map,
    },
    {
      id: 2,
      logo: FJCareLogo,
      text: "FJCare Technical Services LLC Tecom, DAMAC Smart Heights",
      fax: "P.O. Box. 113824 Dubai, UAE      ",
      address: "Barsha Heights, 8th Floor      ",
      tel: "T: +9714 258 2640      ",
      email: "E: enquiries@fjcare.com      ",
      map,
    },
    {
      id: 3,
      logo: MutliplastDubaillcLogo,
      text: "MULTIPLAST DUBAI L.L.C.      ",
      fax: "P.O. Box: 128132, Dubai, UAE      ",
      address: "4c Sana’a Street, Al Aweer Industrial Area      ",
      tel: "Tel: +9714 333 8666      ",
      email: "Email: info@multiplastdubai.ae      ",
      map,
    },
    {
      id: 4,
      logo: FJEnergy,
      text: "Future Journey Energy Solutions LLC Faisal Jassim Trading, (Main Branch)",
      fax: "P.O. Box: 1871, Dubai, UAE      ",
      address: "Dubai Investment Park-1, Plot: 598-1152      ",
      tel: "T: +9714 810 5105      ",
      email: "E: info@fjenergysolutions.com      ",
      map,
    },
    {
      id: 5,
      logo: DCServe,
      text: "DCServe Equipment Trading LLC Faisal Jassim Trading, (Main Branch)",
      fax: "P.O. Box: 1871, Dubai, UAE      ",
      address: "Dubai Investment Park-1, Plot: 598-1152      ",
      tel: "T: +9714 810 5105      ",
      email: "E: dcserve@fjtco.com      ",
      map,
    },
    {
      id: 6,
      logo: EuroclimaLogo,
      text: "Euroclima Middle East Central Air Conditioning Equipment Manufacturing L.L.C",
      fax: "P.O. Box: 119870, Dubai Investment Park 1      ",
      address: "Dubai, UAE      ",
      tel: "T: +9714 802 4000      ",
      email: "E: eumeinfo@euroclima.com      ",
      map,
    },
    {
      id: 7,
      logo: FJENGINEERINGTRADING,
      text: "Faisal Jassim Trading Co. LLC      ",
      fax: "P.O. Box: 106368, Abu Dhabi, UAE      ",
      address: "Al Nasr Street, Al Hosn Tower, Office 202      ",
      tel: "T: +9712 6219 772      ",
      email: "E: fjtauh@emirates.net.ae      ",
      map,
    },
    {
      id: 8,
      logo: FJGroupMain,
      text: "Faisal Jassim Trading Co. LLC      ",
      fax: "P.O. Box: 1871, Dubai, UAE      ",
      address: "Dubai Investment Park-1, Plot: 598-1152      ",
      tel: "T: +9714 810 5105      ",
      email: "E: fjtrdg@emirates.net.ae      ",
      map,
    },
  ];
  const details = contactUs.map(
    ({ id, logo, text, fax, address, tel, email, map }, idx) => {
      const url = window.location.href.split("/");
      const urlPage = parseInt(url[5]);
      if (id === urlPage) {
        let index = contactUs.findIndex((x) => x.id === id);
        const contacts = [contactUs[index]];

        const next = index + 1 < contactUs.length ? index + 2 : 1;
        const previous = index + 1 > 1 ? index : 6;

        return (
          <>
            <Container style={{ maxWidth: "2540px" }}>
              <Row>
                <Col>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br /> <img style={{ marginLeft: "22%" }} src={logo} alt="" />
                  <br />
                  <br />
                  <TextTitleBox title={text} />
                  <TextTitleBox title={fax} />
                  <TextTitleBox title={address} />
                  <TextTitleBox title={tel} />
                  <TextTitleBox title={email} />
                  <div
                    style={{ marginLeft: "42%", width: "100%", height: "100%" }}
                  >
                    <ExploreMoreLink
                      style="1"
                      buutonText="Let's Talk"
                      link={"/ContactUsForm"}
                    />
                  </div>
                </Col>
                <Col></Col>
                <Col lg={7}><br />
                  
      <br />
      <br /><br />
      <br />
      <br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.381490058951!2d55.16617039999999!3d24.9871499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f7291468c6877%3A0xa2e8a061a45d9eb8!2sFaisal%20Jassim%20Trading%20Co.%20(L.L.C.)!5e0!3m2!1sen!2slb!4v1663600650074!5m2!1sen!2slb" width="90%" height="90%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </Col>
              </Row>
            </Container>
          </>
        );
      }
    }
  );

  return (
    <Fragment>
      <BasicHeader2 backgroundImage={AboutUsImg} headerTitle={"CONTACT US"} />

      <br />
      <br />
      <br />
      <Container style={{ maxWidth: "2540px" }}>
        <div style={{ marginLeft: "-120px", width: "100%" }}>
          <Row>
            <Col>
              {" "}
              <Link to="/ContactUsDetailsPage/UnitedArabEmirates/1">
                <img src={FlagOfUnitedArabEmirates} alt="" />
              </Link>
            </Col>
            <Col>
              <Link to="/ContactUsDetailsPage/SaudiArabia/1">
                <img
                  style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                  src={FlagOfSaudiArabia}
                  alt=""
                />
              </Link>
            </Col>
            <Col>
              {" "}
              <Link to="/ContactUsDetailsPage/Oman/1">
                <img
                  style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                  src={FlagOfOman}
                  alt=""
                />
              </Link>
            </Col>
            <Col>
              <Link to="/ContactUsDetailsPage/Iraq/1">
                <img
                  style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                  src={FlagOfIraq}
                  alt=""
                />
              </Link>
            </Col>
            <Col>
              {" "}
              <Link to="/ContactUsDetailsPage/Qatar/1">
                <img
                  style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                  src={FlagOfQatar}
                  alt=""
                />
              </Link>
            </Col>
            <Col>
              {" "}
              <Link to="/ContactUsDetailsPage/SouthAfrica/1">
                <img
                  style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                  src={FlagOfSouthAfrica}
                  alt=""
                />
              </Link>
            </Col>
            <Col>
              {" "}
              <Link to="/ContactUsDetailsPage/India/1">
                <img
                  style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                  src={FlagOfIndia}
                  alt=""
                />
              </Link>
            </Col>
          </Row>
        </div>
        
        
      </Container>
      <br />
      <br />
      <br />

      <Container style={{ maxWidth: "2540px" }}>
        <Row>
          <Col>
            <Link to="/ContactUsDetailsPage/UnitedArabEmirates/1">
              <img src={contactUs[0].logo} alt="" />
            </Link>
          </Col>
          <Col>
            <Link to="/ContactUsDetailsPage/UnitedArabEmirates/2">
              <img src={contactUs[1].logo} alt="" />
            </Link>
          </Col>
          <Col>
            <Link to="/ContactUsDetailsPage/UnitedArabEmirates/3">
              <img src={contactUs[2].logo} alt="" />
            </Link>
          </Col>
          <Col>
            <Link to="/ContactUsDetailsPage/UnitedArabEmirates/4">
              <img src={contactUs[3].logo} alt="" />
            </Link>
          </Col>
          <Col>
            <Link to="/ContactUsDetailsPage/UnitedArabEmirates/5">
              <img src={contactUs[4].logo} alt="" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/ContactUsDetailsPage/UnitedArabEmirates/6">
              <img src={contactUs[5].logo} alt="" />
            </Link>
          </Col>
          <Col>
            <Link to="/ContactUsDetailsPage/UnitedArabEmirates/7">
              <img src={contactUs[6].logo} alt="" />
            </Link>
          </Col>
          <Col>
            <Link to="/ContactUsDetailsPage/UnitedArabEmirates/8">
              <img src={contactUs[7].logo} alt="" />
            </Link>
          </Col><Col></Col><Col></Col>
        </Row>
      </Container>
        {details}
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Fragment>
  );
  
};
export default UnitedArabEmirates;
