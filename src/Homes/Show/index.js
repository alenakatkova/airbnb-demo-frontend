import React from "react";
import Header from "../../Header";
import Footer from "../../Landing/Footer";
import { Main } from "./styled";
import Photos from "./Photos";

export default () => {
  return (
    <div>
      <Header placeholder="Search" />
      <Main>
        <Photos />
        <div className="container" />
      </Main>
      <Footer />
    </div>
  );
};
