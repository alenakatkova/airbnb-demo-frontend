import React from "react";
import {
  CardsContainer,
  SectionTitle,
  TitleContainer,
  Section
} from "../../styled";
import Card from "./Card";
import homesHigh from "./homes@2x.png";
import experiencesHigh from "./experiences@2x.png";
import restaurantsHigh from "./restaurants@2x.png";

export default () => {
  return (
    <Section>
      <TitleContainer>
        <SectionTitle>Explore Airbnb</SectionTitle>
      </TitleContainer>
      <CardsContainer>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card
            to="homes"
            alt="Airbnb Homes"
            highRes={homesHigh}
            text="Homes"
          />
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card
            to="/"
            text="Experiences"
            alt="Airbnb Experiences"
            highRes={experiencesHigh}
          />
        </div>
        <div className="col-xs-6 col-md-5 col-lg-4">
          <Card
            to="/"
            text="Restaurants"
            alt="Airbnb Restaurants"
            highRes={restaurantsHigh}
          />
        </div>
      </CardsContainer>
    </Section>
  );
};
