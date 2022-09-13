import React, { Fragment } from "react";
import "../styles/style-component/basic-header.css";
import Navbar from "./navbar";
import QuickSearsh from "./quick-search";
import SocialIcons from "./social-icons";
import FJWhiteLogo from"../assets/FJWhiteLogo.png";

const BasicHeader = () => {
  return (
    <Fragment>
      <div>
        <br />
        <div className="row">
        <div className="col-lg-1">
          </div>
          <div className="col-1">
            <QuickSearsh />
            <SocialIcons />
          </div>
          <div className="col-11 col-lg-10">
            <Navbar />
            <br />
            <img src={FJWhiteLogo} alt="this is car image" />
            <br />
            <br />
            <br />
            <p className="p0">STRONG <span style={{fontWeight: 'bold'}}>FOUNDATIONS</span></p>
            <p className="p0"><span style={{color:'#ffffff00'}}>........</span> HIGH <span style={{fontWeight: 'bold'}}>AMBITIONS</span></p>
            <br />
            <p className="p2" ><span style={{color:'#ffffff00'}}>.....</span> THE REFERENCE POINT IN <span style={{fontWeight: 'bold'}}>MEP</span></p>

          </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default BasicHeader;
