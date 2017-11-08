import React from "react";
import PageWrapper from "../common/PageWrapper";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";

class Main extends React.Component {
  render() {
    return (
      <main>
        <PageWrapper>
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
        </PageWrapper>
      </main>
    );
  }
}

export default Main;
