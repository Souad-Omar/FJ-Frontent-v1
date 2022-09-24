import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';

import "../styles/style-component/navbar.css";

const Navbar = () => {


  const [windowSize, setWindowSize] = useState(getWindowSize());

 
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  
  var headerNavbar = document.getElementById("nav");
  var headerInfo = document.getElementById("header");
  if(windowSize.innerWidth >= 1005){
    headerNavbar.style.display = "none";
    headerInfo.style.display = "block";
  }


  function burgerNavIcon() {
    
  var headerNavbar = document.getElementById("nav");
  var headerInfo = document.getElementById("header");
    if (headerNavbar.style.display === "none") {
      headerNavbar.style.display = "block";
      headerInfo.style.display = "none";
    } else {
      headerNavbar.style.display = "none";
      headerInfo.style.display = "block";
    }
    
  }
  return (
    <Fragment>
        <button className="navButton" onClick={burgerNavIcon} >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" fill="#fff" width="25px" height="25px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg></button>
<br />
      <nav className="navbar , justify-content-center">
      <ul className="mobileNavUl">
        <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/" className={"navbarHeader"}>Home</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/AboutUs" className={"navbarHeader"}>About us</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/OurProudDivisions" className={"navbarHeader"}>Divisions</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/OurProducts" className={"navbarHeader"}>Products</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/OurFactoriesMain" className={"navbarHeader"}>Factories</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/News" className={"navbarHeader"}>News</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/Accreditations" className={"navbarHeader"}>Accreditations</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/ContactUsDetailsPage/1" className={"navbarHeader"}>Contact us</Link>
            </li>
            
        </ul>
      </nav>


      <nav className="navbar , justify-content-center">
      <ul className="navUl" id="nav">
        <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/" className={"navbarHeader"}>Home</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/AboutUs" className={"navbarHeader"}>About us</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/OurProudDivisions" className={"navbarHeader"}>Divisions</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/OurProducts" className={"navbarHeader"}>Products</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/OurFactoriesMain" className={"navbarHeader"}>Factories</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/News" className={"navbarHeader"}>News</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/Accreditations" className={"navbarHeader"}>Accreditations</Link>
            </li>
            <li>
        <Link onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} to="/ContactUsDetailsPage/1" className={"navbarHeader"}>Contact us</Link>
            </li>
            
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
