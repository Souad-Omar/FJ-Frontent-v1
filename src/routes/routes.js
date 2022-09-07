import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "../index.css";


import Home from '../pages/home';
import Accreditations from '../pages/accreditations';
import ContactUsDetailsPage from '../pages/contact-us-details-page';
import ContactUsForm from '../pages/contact-us-form';
import ContactUsThankYou from '../pages/contact-us-thank-you';
import ElectricalMain from '../pages/electrical-main';
import ElectricalSubPages from '../pages/electrical-sub-pages';
import MechanicalMain from '../pages/mechanical-main';
import MechanicalSubPages from '../pages/mechanical-sub-pages';
import News from '../pages/news';
import OurFactoriesMain from '../pages/our-factories-main';
import OurFactoriesSupPages from '../pages/our-factories-sub-pages';
import OurProducts from '../pages/our-products';
import OurProudDivisions from '../pages/our-proud-divisions';
import PageNotFound from '../pages/page-not-found';
import PlumbingMain from '../pages/plumbing-main';
import PlumbingSubPages from '../pages/plumbing-sub-pages';
import ServicesMain from '../pages/services-main';
import ServicesSubPages from '../pages/services-sub-pages';
import AboutUs from "../pages/about-us";
class Routess extends Component {
  state = {
  };


  render() {
    return (
      <React.Fragment>
        <Routes>

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Accreditations" element={<Accreditations />} />
          <Route path="/ContactUsDetailsPage/:id" element={<ContactUsDetailsPage />} />
          <Route path="/ContactUsForm" element={<ContactUsForm />} />
          <Route path="/ContactUsThankYou" element={<ContactUsThankYou />} />
          <Route path="/ElectricalMain" element={<ElectricalMain />} />
          <Route path="/ElectricalSubPages/:id" element={<ElectricalSubPages />} />
          <Route path="/MechanicalMain" element={<MechanicalMain />} />
          <Route path="/MechanicalSubPages/:id" element={<MechanicalSubPages />} />
          <Route path="/OurFactoriesMain" element={<OurFactoriesMain />} />
          <Route path="/OurFactoriesSupPages/:id" element={<OurFactoriesSupPages />} />
          <Route path="/OurProducts" element={<OurProducts />} />
          <Route path="/OurProudDivisions" element={<OurProudDivisions />} />
          <Route path="/PlumbingMain" element={<PlumbingMain />} />
          <Route path="/PlumbingSubPages/:id" element={<PlumbingSubPages />} />
          <Route path="/ServicesMain" element={<ServicesMain />} />
          <Route path="/ServicesSubPages/:id" element={<ServicesSubPages />} />

          <Route path="" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="*" element={<PageNotFound />} />




          </Routes>

      </React.Fragment>
    );
  }
}

export default Routess;
