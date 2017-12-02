import React from "react";
import {
  Section,
  SectionTitle,
  NextPage,
  CardsContainer,
  NextContainer,
  TitleContainer
} from "../../../styled";
import Card from "./Card";
import photo1 from "./photo1.png";
import photo2 from "./photo2.png";
import photo3 from "./photo3.png";

const Next = NextPage.extend`
  top: 80px;
`;

export default () => {
  return (
    <Section>
      <TitleContainer>
        <SectionTitle>Similar listings</SectionTitle>
      </TitleContainer>
      <NextContainer>
        <CardsContainer>
          <div className="col-xs-8 col-md-5 col-lg-4">
            <Card
              to="/"
              highRes={photo1}
              price="$50 per night"
              title="Apartamento, piscina y parqueadero para 8 personas"
              label="Entire house · 3 beds"
              alt="Apartamento, piscina y parqueadero para 8 personas"
              stats="4"
            />
          </div>
          <div className="col-xs-8 col-md-5 col-lg-4">
            <Card
              to="/"
              highRes={photo2}
              price="$51 per night"
              title="Full apartment in the best area of the city"
              label="Entire house · 4 beds"
              alt="Full apartment in the best area of the city"
              isNew
              redLabel
            />
          </div>
          <div className="col-xs-8 col-md-5 col-lg-4">
            <Card
              to="/"
              highRes={photo3}
              price="$45 per night"
              title="Beautiful Apartament North Armenia Quindio"
              label="Entire house · 4 beds"
              alt="Beautiful Apartament North Armenia Quindio"
              stats="3"
              redLabel
            />
          </div>
        </CardsContainer>
        <Next />
      </NextContainer>
    </Section>
  );
};
