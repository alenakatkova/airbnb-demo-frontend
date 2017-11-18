import React from "react";
import {
  Section,
  SectionTitle,
  CardsContainer,
  NextContainer,
  NextPage
} from "../../styled";
import SeeAll from "../../SeeAll";
import Card from "./Card";
import forestHigh from "./forest@2x.png";
import whaleHigh from "./whale@2x.png";
import mountainHigh from "./mountain@2x.png";
import salsaHigh from "./salsa@2x.png";

const Next = NextPage.extend`top: 155px;`;

export default () => {
  return (
    <Section>
      <div className="row between-xs middle-xs">
        <SectionTitle>Experiences</SectionTitle>
        <SeeAll to="/" />
      </div>
      <NextContainer>
        <CardsContainer>
          <div className="row negative-indent-xs nowrap-xs wrap-lg">
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                to="/"
                highRes={forestHigh}
                price="$29"
                text="Forest theraphy"
                alt="Forest theraphy"
                stats="44 reviews"
              />
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                to="/"
                highRes={whaleHigh}
                price="$69"
                text="Whale watching"
                alt="Whale watching"
                stats="46 reviews"
              />
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                to="/"
                highRes={mountainHigh}
                price="$69"
                text="Table Mountain Summi, Cable Car Down"
                alt="Table Mountain Summi, Cable Car Down"
                stats="44 reviews"
              />
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                to="/"
                highRes={salsaHigh}
                price="$50"
                text="Salsa Night"
                alt="Salsa Night"
                stats="44 reviews"
              />
            </div>
          </div>
        </CardsContainer>
        <Next />
      </NextContainer>
    </Section>
  );
};
