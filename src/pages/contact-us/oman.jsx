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
import FlagOfUnitedArabEmirates from "../../assets/ContactUs/FlagOfUnitedArabEmirates.jpg";
import TextTitleBox from "../../components/text-title-box";
import ExploreMoreLink from "../../components/explore-more copy";
import { Link } from "react-router-dom";
import a31 from "../../assets/ContactUs/31.png";

const Oman = () => {
  const contactUs = [
    {
      id: 1,
      logo: a31,
      text: "Oman United Insurance Co. Building      ",
      fax: "P.O. Box: 412, Muscat, Sultanate of Oman      ",
      address: "Oman United Insurance Co. Building Office 12, 1st Floor, Al Khuwair",
      tel: "T: +968 2448 6365      ",
      email: "E: fjoman@fjtco.com      ",
      map,
    },
  ];
  const url = window.location.href.split("/");
  const urlPage = parseInt(url[5]);
  const details = contactUs.map(
    ({ id, logo, text, fax, address, tel, email, map }, idx) => {
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
              {" "}            <Link to="/ContactUsDetailsPage/UnitedArabEmirates/1">

              <img
                style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                src={FlagOfUnitedArabEmirates}
                alt=""
              /></Link>
            </Col>
            <Col>
            <Link to="/ContactUsDetailsPage/SaudiArabia/1">
              <img
                style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                src={FlagOfSaudiArabia}
                alt=""
              /></Link>
            </Col>
            <Col>            <Link to="/ContactUsDetailsPage/Oman/1">

              <img
                src={FlagOfOman}
                alt=""
                /></Link>
            </Col>
            <Col>
            <Link to="/ContactUsDetailsPage/Iraq/1">

              <img
                style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                src={FlagOfIraq}
                alt=""
                /></Link>
            </Col>
            <Col>
              {" "}            <Link to="/ContactUsDetailsPage/Qatar/1">

              <img
                style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                src={FlagOfQatar}
                alt=""
                /></Link>
            </Col>
            <Col>
              {" "}            <Link to="/ContactUsDetailsPage/SouthAfrica/1">

              <img
                style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                src={FlagOfSouthAfrica}
                alt=""
              /></Link>
            </Col>
            <Col>            <Link to="/ContactUsDetailsPage/India/1">

              <img
                style={{ padding: '20px 20px 20px 20px', filter: "grayscale(100%)", opacity: "0.5" }}
                src={FlagOfIndia}
                alt=""
              /></Link>
            </Col>
          </Row>
        </div>
        {details}
      </Container>
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
export default Oman;
