import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MiniDrobdownList = ({miniList}) => {
    const MiniDrobdown = miniList.map(({ list, url }, idx) => {
        return <Link to={url} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className={"dropdown"}>{list}</Link>;

    });
  return (
    <Fragment>
      {MiniDrobdown}
    </Fragment>
  );
};
  
export default MiniDrobdownList;
