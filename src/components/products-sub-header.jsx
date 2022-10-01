import React, { Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/style-component/products-sub-header.css";
import TextBoxes from "./text-boxes";
import TextTitle from "./title-type";
import "../styles/style-component/title-type.css";
import "../styles/style-component/text-boxes.css";

import ExploreMoreLink from "./explore-more copy";
import TextTitleBox from "./text-title-box";
import TextTitleBoxProducts from "./text-title-box-products";
const ProductsSubHeader = ({ productsProps }) => {
  const productsPropss = productsProps.map(
    (
      { style, text, url, title, factoryMainTytle, backgroundDivImage,char },
      idx
    ) => {
      if (style === "1") {
        return (
          <>
            <div className="productsTextDivSubHeader"                  style={{ backgroundImage: `url(${backgroundDivImage})` }}>
              <div className="productsHeader1Left">
              <p className="charHeaderProducts">{char}</p>

                <br />
                <TextTitleBoxProducts title={title} />
                <p className="paragraph4">{text}</p>
                <ExploreMoreLink
                  buutonText="EXPLORE MORE"
                  link={url}
                  style="2"
                />
                <br />
                <br />
              </div>
              <div className="productsHeader1Right">
                <div
                  className="productsSubDataHeader"
                ></div>
              </div>
            </div>
          </>
        );
      } else if (style === "2") {
        return (
          <>
            <div className="productsTextDivSubHeader"                   style={{ backgroundImage: `url(${backgroundDivImage})` }}
>
              <div className="productsHeader1Right"  id="d1">
                <div
                  className="productsSubDataHeader"
                ></div>
              </div>
              <div className="productsHeader1Left" id="d2">
              <p className="charHeaderProducts">{char}</p>

                                <br />
                <br />
                <TextTitleBoxProducts title={title} />
                <p className="paragraph4">{text}</p>
                <ExploreMoreLink
                  buutonText="EXPLORE MORE"
                  link={url}
                  style="2"
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

  return <Fragment>{productsPropss}</Fragment>;
};

export default ProductsSubHeader;
