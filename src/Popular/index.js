import React from "react";
import SectionTitle from "../common/SectionTitle";
import Card from "./Card";
import chumleyHigh from "./chumley@2x.png";
import hanjanHigh from "./hanjan@2x.png";
import seapriceHigh from "./seaprice@2x.png";
import meatsHigh from "./meats@2x.png";
import SeeAll from "../common/SeeAll";
import NextPage from "../common/NextPage";
import styled from "styled-components";
import CardsContainer from "../common/CardsContainer";

const Section = styled.section`margin-top: 35px;`;

const Next = NextPage.extend`top: 70px;`;

const CardsOuterContainer = styled.div`position: relative;`;

export default () => {
  return (
    <Section>
      <div className="row between-xs middle-xs">
        <SectionTitle>Popular reservations around the world</SectionTitle>
        <SeeAll link="#" />
      </div>
      <CardsOuterContainer>
        <CardsContainer>
          <div className="row negative-indent-xs nowrap-xs wrap-lg">
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                highRes={chumleyHigh}
                alt="Chumley's"
                subheading="Speakeasy"
                name="Chumley's"
                price="About $60 per person"
              />
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                highRes={hanjanHigh}
                alt="Hanjan"
                subheading="Korean gastropub"
                name="Hanjan"
                price="About $50 per person"
              />
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                highRes={meatsHigh}
                alt="Prime Meats"
                subheading="German American"
                name="Prime Meats"
                price="About $55 per person"
              />
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                highRes={seapriceHigh}
                alt="Seaprice"
                subheading="Fine Seafood"
                name="Seaprice"
                price="About $75 per person"
              />
            </div>
          </div>
        </CardsContainer>
        <Next />
      </CardsOuterContainer>
    </Section>
  );
};
