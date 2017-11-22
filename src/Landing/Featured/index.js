import React from "react";
import {
  Section,
  SectionTitle,
  CardsContainer,
  TitleContainer
} from "../../styled";
import Card from "./Card";
import parisHigh from "./paris@2x.png";
import miamiHigh from "./miami@2x.png";
import tokyoHigh from "./tokyo@2x.png";
import capetownHigh from "./capetown@2x.png";
import seoulHigh from "./seoul@2x.png";
import losangelesHigh from "./losangeles@2x.png";

export default () => {
  return (
    <Section>
      <TitleContainer>
        <SectionTitle>Featured destinations</SectionTitle>
      </TitleContainer>

      <CardsContainer>
        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card to="/" highRes={parisHigh} alt="Paris" text="Paris" />
        </div>
        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card to="/" highRes={miamiHigh} alt="Miami" text="Miami" />
        </div>
        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card to="/" highRes={tokyoHigh} alt="Tokyo" text="Tokyo" />
        </div>
        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card
            to="/"
            highRes={capetownHigh}
            alt="Cape town"
            text="Cape town"
          />
        </div>
        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card to="/" highRes={seoulHigh} alt="Seoul" text="Seoul" />
        </div>
        <div className="col-xs-4 col-md-3 col-lg-2">
          <Card
            to="/"
            highRes={losangelesHigh}
            alt="Los Angeles"
            text="Los Angeles"
          />
        </div>
      </CardsContainer>
    </Section>
  );
};
