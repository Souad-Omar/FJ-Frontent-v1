import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "../styles/style-component/navbar.css";

const Navbar = () => {
    function myFunction() {
        var x = document.getElementById("nav");
        
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }}
  return (
    <Fragment>
        <button className="navButton" onClick={myFunction} >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" fill="#fff" width="25px" height="25px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg></button>
<br />
      <nav className="navbar , justify-content-center">
      <ul id="nav">
        <li>
        <Link to="/" className={"navbarHeader"}>Home</Link>
            </li>
            <li>
        <Link to="/AboutUs" className={"navbarHeader"}>About us</Link>
            </li>
            <li>
        <Link to="/OurProudDivisions" className={"navbarHeader"}>Divisions</Link>
            </li>
            <li>
        <Link to="/OurProducts" className={"navbarHeader"}>Products</Link>
            </li>
            <li>
        <Link to="/OurFactoriesMain" className={"navbarHeader"}>Factories</Link>
            </li>
            <li>
        <Link to="/News" className={"navbarHeader"}>News</Link>
            </li>
            <li>
        <Link to="/Accreditations" className={"navbarHeader"}>Accreditations</Link>
            </li>
            <li>
        <Link to="/ContactUsDetailsPage" className={"navbarHeader"}>Contact us</Link>
            </li>
            
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
