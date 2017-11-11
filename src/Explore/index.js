import React from "react";
import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";
import Card from "./Card";
import homesHigh from "./homes@2x.png";
import experiencesHigh from "./experiences@2x.png";
import restaurantsHigh from "./restaurants@2x.png";

const Section = styled.section`margin-top: 50px;`;

const Wrapper = styled.div`
  overflow-x: scroll;
  margin: 0 -8px;
  padding: 0 8px;
  box-sizing: border-box;

  @media (min-width: 986px) {
    overflow: hidden;
  }
`;

export default () => {
  return (
    <Section>
      <SectionTitle>Explore Airbnb</SectionTitle>
      <Wrapper>
        <div className="row negative-indent-xs nowrap-xs wrap-lg">
          <div className="col-xs-6 col-sm-4 col-md-5 col-lg-4">
            <Card
              alt="Airbnb Homes"
              highRes={homesHigh}
              link="#"
              text="Homes"
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-5 col-lg-4">
            <Card
              link="#"
              text="Experiences"
              alt="Airbnb Experiences"
              highRes={experiencesHigh}
            />
          </div>
          <div className="col-xs-6 col-sm-4 col-md-5 col-lg-4">
            <Card
              link="#"
              text="Restaurants"
              alt="Airbnb Restaurants"
              highRes={restaurantsHigh}
            />
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};
