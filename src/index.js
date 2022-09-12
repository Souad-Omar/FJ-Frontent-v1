import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import Arrow from './components/arrow';

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(  <BrowserRouter>
    <Arrow />
</BrowserRouter>
    );