import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Routess from './routes/routes';
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(  <BrowserRouter>
    <Routess />
</BrowserRouter>
    );