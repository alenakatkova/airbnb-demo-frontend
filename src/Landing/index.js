import React from "react";
import styled from "styled-components";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Header from "../Header";
import Footer from "./Footer";

const Main = styled.main`
  padding-top: 70px;

  @media screen and (min-width: 768px) {
    padding-top: 78px;
  }
`;

export default () => {
  return (
    <div>
      <Header placeholder="Try “Miami”" />
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
