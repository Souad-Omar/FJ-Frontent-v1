import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "../index.css";

import Test from '../pages/test';
import Home from '../pages/home'

class Routess extends Component {
  state = {
  };


  render() {
    return (
      <React.Fragment>
        <Routes>

          <Route path="/test" element={<Test />} />
          
          <Route path="/" element={<Home />} />
          </Routes>

      </React.Fragment>
    );
  }
}

export default Routess;
