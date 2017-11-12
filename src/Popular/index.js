import React from "react";
import {
  Section,
  SectionTitle,
  NextPage,
  CardsContainer,
  NextContainer
} from "../styled";
import Card from "./Card";
import chumleyHigh from "./chumley@2x.png";
import hanjanHigh from "./hanjan@2x.png";
import seapriceHigh from "./seaprice@2x.png";
import meatsHigh from "./meats@2x.png";
import SeeAll from "../SeeAll";

const Next = NextPage.extend`top: 70px;`;

export default () => {
  return (
    <Section>
      <div className="row between-xs middle-xs nowrap-xs">
        <SectionTitle>Popular reservations around the world</SectionTitle>
        <SeeAll link="#" />
      </div>
      <NextContainer>
        <CardsContainer>
          <div className="row negative-indent-xs nowrap-xs wrap-lg">
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                link="#"
                highRes={chumleyHigh}
                alt="Chumley's"
                subheading="Speakeasy"
                name="Chumley's"
                price="About $60 per person"
              />
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                link="#"
                highRes={hanjanHigh}
                alt="Hanjan"
                subheading="Korean gastropub"
                name="Hanjan"
                price="About $50 per person"
              />
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                link="#"
                highRes={meatsHigh}
                alt="Prime Meats"
                subheading="German American"
                name="Prime Meats"
                price="About $55 per person"
              />
            </div>
            <div className="col-xs-6 col-md-4 col-lg-3">
              <Card
                link="#"
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
      </NextContainer>
    </Section>
  );
};
