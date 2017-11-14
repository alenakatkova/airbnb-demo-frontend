import React from "react";
import { CardsContainer, SectionTitle, Section } from "../styled";
import { Link } from "react-router-dom";
import Card from "./Card";
import homesHigh from "./homes@2x.png";
import experiencesHigh from "./experiences@2x.png";
import restaurantsHigh from "./restaurants@2x.png";

export default () => {
  return (
    <Section>
      <SectionTitle>Explore Airbnb</SectionTitle>
      <CardsContainer>
        <div className="row negative-indent-xs nowrap-xs wrap-lg">
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Link to="homes" style={{ textDecoration: "none" }}>
              <Card alt="Airbnb Homes" highRes={homesHigh} text="Homes" />
            </Link>
          </div>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card
              text="Experiences"
              alt="Airbnb Experiences"
              highRes={experiencesHigh}
            />
          </div>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card
              text="Restaurants"
              alt="Airbnb Restaurants"
              highRes={restaurantsHigh}
            />
          </div>
        </div>
      </CardsContainer>
    </Section>
  );
};
