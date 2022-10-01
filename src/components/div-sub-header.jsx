import React, { Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/div-sub-header.css";
import TextBoxes from "./text-boxes";
import TextTitle from "./title-type";
import "../styles/style-component/title-type.css";
import "../styles/style-component/text-boxes.css";

import ExploreMoreLink from "./explore-more copy";
import TextTitleBox from "./text-title-box";
const DivSubHeader = ({ divProps }) => {
  const divPropss = divProps.map(
    (
      { style, text, url, title, factoryMainTytle, logo, backgroundDivImage },
      idx
    ) => {
      if (style === "1") {
        return (
          <>
            <div className="divTextDivSubHeader">
              <div className="divHeader1Left">
                <img className="divLogo" src={logo} alt={factoryMainTytle} />{" "}
                <br />
                <TextTitleBox title={title} />{" "}
                <p className="paragraph3">{text}</p>
                <ExploreMoreLink
                  buutonText="EXPLORE MORE"
                  link={url}
                  style="1"
                />
                <br />
                <br />
              </div>
              <div className="divHeader1Right">
                <div
                  className="divSubDataHeader"
                  style={{ backgroundImage: `url(${backgroundDivImage})` }}
                ></div>
              </div>
            </div>
          </>
        );
      } else if (style === "2") {
        return (
          <>
            <div className="divTextDivSubHeader">
              <div className="divHeader1Right" id="d1">
                <div
                  className="divSubDataHeader"
                  style={{ backgroundImage: `url(${backgroundDivImage})` }}
                ></div>
              </div>
              <div className="divHeader1Left" id="d2">
                <img className="divLogo" src={logo} alt={factoryMainTytle} />{" "}
                <br />
                <br />
                <TextTitleBox title={title} />
                <p className="paragraph3">{text}</p>
                <ExploreMoreLink
                  buutonText="EXPLORE MORE"
                  link={url}
                  style="1"
                />
                <br />
                <br />
              </div>
            </div>
          </>
        );
      }
    }
  );

  return <Fragment>{divPropss}</Fragment>;
};

export default DivSubHeader;
