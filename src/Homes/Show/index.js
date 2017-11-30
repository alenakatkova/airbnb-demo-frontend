import React from "react";
import Header from "../../Header";
import Footer from "../../Landing/Footer";
import { Main } from "./styled";
import Photos from "./Photos";
import StickyNavigation from "./Nav";
import Overview from "./Overview";
import Reviews from "./Reviews";
import Host from "./Host";
import Neighbourhood from "./Neighbourhood";
import HomeMap from "./HomeMap";
import Similar from "./Similar";
import Explore from "./Explore";
import StickyRequest from "./Request";
import MobileRequest from "./Request/Footer";
import { Lg } from "../../mediaQueries";
import { StickyContainer } from "react-sticky";

export default () => {
  return (
    <div>
      <Header placeholder="Search" />
      <Main>
        <Photos />
        <StickyContainer>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <StickyNavigation />
                <Overview />
                <Reviews />
                <Host />
                <Neighbourhood />
              </div>
              <Lg>
                <div className="col-lg-4">
                  <StickyRequest />
                </div>
              </Lg>
            </div>
            <HomeMap />
            <Similar />
            <Explore />
          </div>
        </StickyContainer>
      </Main>

      <Footer />
      <MobileRequest />
    </div>
  );
};
