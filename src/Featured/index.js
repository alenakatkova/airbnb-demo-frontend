import React from "react";
import { Section, SectionTitle, CardsContainer } from "../styled";
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
      <SectionTitle>Featured destinations</SectionTitle>
      <CardsContainer>
        <div className="row negative-indent-xs nowrap-xs wrap-lg">
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card href="#" highRes={parisHigh} alt="Paris" text="Paris" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card href="#" highRes={miamiHigh} alt="Miami" text="Miami" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card href="#" highRes={tokyoHigh} alt="Tokyo" text="Tokyo" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card
              href="#"
              highRes={capetownHigh}
              alt="Cape town"
              text="Cape town"
            />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card href="#" highRes={seoulHigh} alt="Seoul" text="Seoul" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card
              href="#"
              highRes={losangelesHigh}
              alt="Los Angeles"
              text="Los Angeles"
            />
          </div>
        </div>
      </CardsContainer>
    </Section>
  );
};
