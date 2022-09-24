import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';

import "../styles/style-component/navbar.css";

const Navbar = () => {


  const [windowSize, setWindowSize] = useState(getWindowSize());

 
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      LiveNav(windowSize);

    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  
   

  function burgerNavIcon() {
    var toggleBurgerIconButton = document.getElementById("burgerIconButton");
    toggleBurgerIconButton.classList.toggle("change");
    
    var headerNavbar = document.getElementById("nav");
    var headerInfo = document.getElementById("header");
    
    if (headerNavbar.style.display === "none" || headerNavbar.style.display === "") {
      headerNavbar.style.display = "block";
      headerInfo.style.display = "none";
    } else {
      headerNavbar.style.display = "none";
      headerInfo.style.display = "block";
    }
    
  }

  return (
    <Fragment>
        <button id="burgerIconButton" className="navButton" onClick={burgerNavIcon} >
        <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>            </button>
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

function LiveNav(windowSize){
  var headerNavbar2 = document.getElementById("nav");
  var headerInfo2 = document.getElementById("header");
    headerNavbar2.style.display = "none";
    headerInfo2.style.display = "block"; 
    
 }
