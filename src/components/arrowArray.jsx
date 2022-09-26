import React, { Fragment } from "react";
import "../styles/style-component/arrow.css";


const ArrowArray = (props) => {
 
    return (
        <Fragment>
        <button onClick={props.directions ? props.arrowArrayLeft:props.arrowArrayRight}  className={`arrow ${props.directions ? "arrowStyleRight":"arrowStyleLeft"}`} > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.761 8.304">
          <path id="Vector" d="M0,5.22H3.322V20.761H4.983V5.22H8.3L5.926,2.23,4.152,0Z" transform="translate(20.761) rotate(90)" fill="#032A5E"/>
        </svg>
        </button>
        
        </Fragment>
    ); 
  }

export default ArrowArray;
