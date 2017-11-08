import React from "react";
// import styled from "styled-components";
import PageWrapper from "../common/PageWrapper";
import Explore from "./Explore";
import Experiences from "./Experiences";

class Main extends React.Component {
  render() {
    return (
      <main>
        <PageWrapper>
          <Explore />
          <Experiences />
        </PageWrapper>
      </main>
    );
  }
}

export default Main;
