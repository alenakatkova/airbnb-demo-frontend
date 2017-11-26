import React from "react";
import Header from "../../Header";
import Footer from "../../Landing/Footer";
import { Main } from "./styled";
import Photos from "./Photos";
import Nav from "./Nav";
import Overview from "./Overview";
import Reviews from "./Reviews";
import Host from "./Host";
import Neighbourhood from "./Neighbourhood";
import HomeMap from "./HomeMap";
import Similar from "./Similar";
import Explore from "./Explore";
import LgRequest from "./Request";
import { Lg } from "../../mediaQueries";

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
              <Host />
              <Neighbourhood />
            </div>
            <Lg>
              <div className="col-lg-4">
                <LgRequest />
              </div>
            </Lg>
          </div>
          <HomeMap />
          <Similar />
          <Explore />
        </div>
      </Main>
      <Footer />
    </div>
  );
};
