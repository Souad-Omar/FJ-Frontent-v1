import React, { Fragment } from "react";
import "../styles/style-component/explore-more.css";

function toggleDiv(div1, div2, buutonText) {
  if (!div1) {
  } else if (buutonText === "SHOW LESS") {
    document.getElementById(`${div2}`).style.display = "none";
    document.getElementById(`${div1}`).style.display = "block";
  } else if (buutonText === "EXPLORE MORE") {
    document.getElementById(`${div2}`).style.display = "block";

    document.getElementById(`${div1}`).style.display = "none";
  }
}

const ExploreMore = (props) => {
  return (
    <Fragment>
      <button
        className="exploreMoreStyle"
        onClick={() => toggleDiv(props.div1, props.div2, props.buutonText)}
      >
        {props.buutonText}
      </button>
    </Fragment>
  );
};

export default ExploreMore;
