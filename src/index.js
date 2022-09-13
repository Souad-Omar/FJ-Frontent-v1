import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Home from './pages/home';
import MEPS from './components/MEPS';
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(  <BrowserRouter>
    <Home />
    <MEPS />
</BrowserRouter>
    );