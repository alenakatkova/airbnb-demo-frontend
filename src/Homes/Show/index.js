import React from "react";
import Header from "../../Header";
import Footer from "../../Landing/Footer";
import { Main } from "./styled";
import Photos from "./Photos";
import Nav from "./Nav";
import Overview from "./Overview";
import Reviews from "./Review";

export default () => {
  return (
    <div>
      <Header placeholder="Search" />
      <Main>
        <Photos />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <Nav />
              <Overview />
              <Reviews />
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </div>
  );
};
