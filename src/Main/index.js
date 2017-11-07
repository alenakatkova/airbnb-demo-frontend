import React from "react";
// import styled from "styled-components";
import PageWrapper from "../common/PageWrapper";
import Explore from "./Explore";

class Main extends React.Component {
  render() {
    return (
      <main>
        <PageWrapper>
          <Explore />
        </PageWrapper>
      </main>
    );
  }
}

export default Main;
