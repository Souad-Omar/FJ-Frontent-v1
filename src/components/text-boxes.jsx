import React, { Fragment } from "react";
import "../styles/style-component/text-boxes.css";

const TextBoxes = ({ textParagraph }) => {
  const paragraph = textParagraph.map(({ style, text, address }, idx) => {
    if (style === "paragraphStyle1") {
      return (
        <p className="paragraph1" style={{ fontWeight: "bold" }}>
          {text}
        </p>
      );
    } else if (style === "ourFactories") {
      return <div>
        <p className="paragraph1" style={{ fontWeight: "bold" }} >{text}</p>
        <p className="paragraph1">{address}</p>
        </div>
        ;
    }
  });

  return <Fragment>{paragraph}</Fragment>;
};

export default TextBoxes;
