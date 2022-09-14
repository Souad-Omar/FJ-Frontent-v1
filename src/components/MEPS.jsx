import React, { Fragment } from "react";
import "../styles/style-component/MEPS.css";
const MEPS = () => {
  return (
    <Fragment>
        <div className="row">
        <div className=" col-1 col-xl-4"></div>
        <div className="col-11 col-xl-4">

        <div className="MEPSDiv">
        <div className="MEPSStyle">
            <p  className="MPESChar">M</p>
            <p className="titleLink"> MECHANICAL</p>
        </div> 
        <div className="MEPSStyle">
            <p  className="MPESChar">E</p>
            <p className="titleLink"> ELECTRICAL</p>
        </div><div className="MEPSStyle">
            <p  className="MPESChar">P</p>
            <p className="titleLink"> PLUMPING</p>
        </div> 
        <div className="MEPSStyle">
            <p  className="MPESChar">S</p>
            <p className="titleLink">SERVICES</p>
        </div>
        </div>
        </div>
        <div className="col-xl-4"></div>

        </div>
    </Fragment>
  );
};

export default MEPS;
