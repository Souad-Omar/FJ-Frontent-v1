import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar';

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(  <BrowserRouter>
    <Navbar />
</BrowserRouter>
    );