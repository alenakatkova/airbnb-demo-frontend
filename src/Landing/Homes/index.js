import React from "react";
import {
  Section,
  SectionTitle,
  NextPage,
  CardsContainer,
  NextContainer
} from "../../styled";
import Card from "../../Homes/Card";
import salentinaHigh from "./salentina@2x.png";
import seeHigh from "./see@2x.png";
import tropicalHigh from "./tropical@2x.png";
import SeeAll from "../../SeeAll";

const Next = NextPage.extend`top: 80px;`;

export default () => {
  return (
    <Section>
      <div className="row between-xs middle-xs">
        <SectionTitle>Homes</SectionTitle>
        <SeeAll to="homes" />
      </div>
      <NextContainer>
        <CardsContainer>
          <div className="row negative-indent-xs nowrap-xs wrap-lg">
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                to="/"
                highRes={salentinaHigh}
                price="$82"
                name="La Salentina, see, nature & relax"
                description="Entire house · 9 beds"
                alt="La Salentina"
                stats="97 · Superhost"
                primary
              />
            </div>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                to="/"
                highRes={seeHigh}
                price="$82"
                name="Your private 3 bedr. riad and exclusive sth"
                description="Entire house · 5 beds"
                alt="3 bedr."
                stats="161 · Superhost"
                landing
              />
            </div>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                to="/"
                highRes={tropicalHigh}
                price="$200"
                name="Dreamy Tropical Tree House"
                description="Entire treehouse · 1 beds"
                alt="Tropical Tree House"
                stats="364 · Superhost"
                landing
              />
            </div>
          </div>
        </CardsContainer>
        <Next />
      </NextContainer>
    </Section>
  );
};
