import React, { Fragment } from "react";
import "../styles/style-component/footer.css";
import { Col, Row, Container } from "react-bootstrap";
import MEPS from "./MEPS";
import FJLogo from "../assets/FJLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
        



      <div className="footer" >
        <MEPS />
        <br /><br />
            <div className="footerLogo">

              <img style={{width:"130px", height:"auto"}} src={FJLogo} alt="this is car image" />
          </div>
             
             <div className="fotterNav">

            <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/" className={"navbarFooter"}>Home</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/AboutUs" className={"navbarFooter"}>About us</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/OurProudDivisions" className={"navbarFooter"}>Divisions</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/OurProducts" className={"navbarFooter"}>Products</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/OurFactoriesMain" className={"navbarFooter"}>Factories</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/News" className={"navbarFooter"}>News</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/Accreditations" className={"navbarFooter"}>Accreditations</Link>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/ContactUsDetailsPage" className={"navbarFooter"}>Contact us</Link>
            </div>
             <div className="footerTitle">

 <p className="footerText">Strong Foundations - High Ambitions </p>
</div>
<div className="cc">

 <p style={{textAlign:'right'}} className="footerText">Copyright©Papillon Communications, 2022. All rights reserved</p>
</div>
             </div>
 
     </Fragment>
  );
};

export default Footer;
