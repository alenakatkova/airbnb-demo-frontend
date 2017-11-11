import React from "react";
import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";
import Card from "./Card";
import parisHigh from "./paris@2x.png";
import miamiHigh from "./miami@2x.png";
import tokyoHigh from "./tokyo@2x.png";
import capetownHigh from "./capetown@2x.png";
import seoulHigh from "./seoul@2x.png";
import losangelesHigh from "./losangeles@2x.png";
import CardsContainer from "../common/CardsContainer";

const Section = styled.section`
  margin-top: 45px;
  margin-bottom: 50px;
`;

export default () => {
  return (
    <Section>
      <SectionTitle>Featured destinations</SectionTitle>
      <CardsContainer>
        <div className="row negative-indent-xs nowrap-xs wrap-lg">
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card highRes={parisHigh} alt="Paris" subheading="Paris" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card highRes={miamiHigh} alt="Miami" subheading="Miami" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card highRes={tokyoHigh} alt="Tokyo" subheading="Tokyo" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card
              highRes={capetownHigh}
              alt="Cape town"
              subheading="Cape town"
            />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card highRes={seoulHigh} alt="Seoul" subheading="Seoul" />
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card
              highRes={losangelesHigh}
              alt="Los Angeles"
              subheading="Los Angeles"
            />
          </div>
        </div>
      </CardsContainer>
    </Section>
  );
};
