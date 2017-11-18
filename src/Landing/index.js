import React from "react";
import Explore from "../Explore";
import Experiences from "../Experiences";
import Homes from "../Homes/LandingSection";
import Popular from "../Popular";
import Featured from "../Featured";
import Header from "./Header";
import Footer from "./Footer";

export default () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
        </div>
      </main>
      <Footer />
    </div>
  );
};
