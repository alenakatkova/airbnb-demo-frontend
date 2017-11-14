import React from "react";
import styled from "styled-components";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes/LandingSection";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";

const Main = styled.main`padding-top: 82px;`;

export default () => {
  return (
    <div>
      <Main>
        <div className="container">
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
        </div>
      </Main>
      <Footer />
    </div>
  );
};
