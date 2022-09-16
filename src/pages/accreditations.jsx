import React, { Fragment } from "react";
import BasicHeader2 from "../components/basic-header2";
import AboutUsImg from "../assets/AboutUsImg.jpg";
import Footer from "../components/footer";

function Accreditations() {
  return (<Fragment>
    <BasicHeader2 backgroundImage={AboutUsImg} headerTitle={"ABOUT US"}/>

    <Footer />
    </Fragment>
  );
}
export default Accreditations;
