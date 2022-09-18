import React, { Fragment } from "react";
import "../styles/style-component/explore-more.css";

const ExploreMoreLink = (props) => {
  return (
    <Fragment>
      <button
        className={props.style =='1' ? "exploreMoreStyle" : "exploreMoreMEPSStyle"}
        onClick={props.link == undefined ? "" : event =>  window.location.href=`${props.link}`}
      >
        {props.buutonText}
      </button>
    </Fragment>
  );
};
export default ExploreMoreLink;
