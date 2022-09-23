import React, { Fragment } from "react";
import BasicHeader from "../components/basic-header";
import AboutUsImg from "../assets/AboutUsImg.jpg";
import Footer from "../components/footer";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-pages/form.css";


const ContactUsForm = () => {
  return (
    <Fragment>
      <BasicHeader backgroundImage={AboutUsImg} headerTitle={["ABOUT US"]} />
      <br />
      <br />
      <br />

          <form>
      <Container>
      <Row><Col lg={5}>
            <label>
              Name:
            </label>
        </Col>
        <Col>
              <input type="text" name="name" />
        </Col><Col></Col>
        </Row><br /><Row><Col lg={5}>
            <label>
            Contact number:
            </label>
        </Col>
        <Col>
              <input type="text" name="name" />
        </Col><Col></Col>
        </Row><br /><Row><Col lg={5}>
            <label>
            Email:
            </label>
        </Col>
        <Col>
              <input type="text" name="name" />
        </Col><Col></Col>
        </Row><br /><Row><Col lg={5}>
            <label>
            Company: 
            </label>
        </Col>
        <Col>
              <input type="text" name="name" />
        </Col><Col></Col>
        </Row><br />

        <Row><Col lg={5}>
            <label>
            Company landline: 
            </label>
        </Col>
        <Col>
              <input type="text" name="name" />
        </Col><Col></Col>
        </Row><br /><Row><Col lg={5}>
            <label>
            Company website: 
            </label>
        </Col>
        <Col>
              <input type="text" name="name" />
        </Col><Col></Col>
        </Row><br /><Row><Col lg={5}>
            <label>
            City / Region:
            </label>
        </Col>
        <Col>
              <input type="text" name="name" />
        </Col><Col></Col>
        </Row><br /><Row><Col lg={5}>
            <label>
            Subject: 
            </label>
        </Col>
        <Col>
              <input type="text" name="name" />
        </Col><Col></Col>
        </Row><br /><Row><Col lg={5}>
            <label>
            Message:
            </label>
        </Col>
        <Col>
              <textarea type="text" name="name" rows="4" />
        </Col><Col></Col>
        </Row><br /><Row><Col lg={5}>
            <label>
            Our network:
            </label>
        </Col>
        <Col>
              <input type="text" name="name" />
        </Col><Col></Col>
        </Row><br /><Row><Col lg={5}>
            <label>
            Careers:
            </label>
        </Col>
        <Col>
              <input type="text" name="name" />
        </Col><Col></Col>
        </Row><br /><Row><Col lg={5}>
            <label>
            Feedback:
            </label>
        </Col>
        <Col>
              <textarea type="text" name="name" rows="4" />
        </Col><Col></Col>
        </Row><br />
        
      </Container>
          </form>
          <Container><Row>
        <Col lg={5}></Col><Col>
        <button className="submitButton"  onClick={event =>  window.location.href=`/ContactUsThankYou`} >SUBMIT</button>
        </Col><Col></Col>
            </Row></Container>
      <br />
      <br />
      <br />
      <Footer />
    </Fragment>
  );
};
export default ContactUsForm;
