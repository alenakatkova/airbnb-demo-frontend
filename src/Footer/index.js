import React from "react";
import styled from "styled-components";
import PageWrapper from "../common/PageWrapper";
import SelectForm from "./Select";
import Airbnb from "./Menu/Airbnb";
import Discover from "./Menu/Discover";
import Hosting from "./Menu/Hosting";

const PageFooter = styled.header`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 48px 0;
`;

class Footer extends React.Component {
  render() {
    return (
      <PageFooter>
        <PageWrapper>
          <div className="row-for-cols">
            <SelectForm />
            <Airbnb />
            <Discover />
            <Hosting />
          </div>
        </PageWrapper>
      </PageFooter>
    );
  }
}

export default Footer;
