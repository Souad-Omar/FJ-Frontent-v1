import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';

import "../styles/style-component/navbar.css";
import Arrow from "./arrow";

const List = () => {



  const test1 = ["1","2","3","4","5","6","7","8","9","10"];
  const [state, setState] = useState(2);

  
   

  function burgerNavIcon() {
    var toggleBurgerIconButton = document.getElementById("burgerIconButton");
    toggleBurgerIconButton.classList.toggle("change");
    
    var headerNavbar = document.getElementById("nav");
    var headerInfo = document.getElementById("header");
    
    if (headerNavbar.style.display === "none" || headerNavbar.style.display === "") {
      headerNavbar.style.display = "block";
      headerInfo.style.display = "none";
    } else {
      headerNavbar.style.display = "none";
      headerInfo.style.display = "block";
    }
    
  }

  function fun(fu){
    setState((prevState)=>{
        console.log(prevState);
        return prevState=prevState >=test1.length ? test1[0]: test1[prevState];

    });
}
const ssss=6;
  return (
    <Fragment>
        
        <button onClick={() => fun()}>a</button> 
  <p>n{state >= test1.length ? test1[0]: test1[state]}</p>
  <p>c{test1[state-1]}</p>
  <p>p{state <= 1 ? test1[test1.length-1]: test1[state-2]}</p>
      </Fragment>
  );
};

export default List;
 