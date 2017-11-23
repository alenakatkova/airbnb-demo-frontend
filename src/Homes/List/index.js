import React from "react";
import styled from "styled-components";
import CardTemplate from "../Card";
import testPhoto from "../testPicture.png";
import Paginator from "./Paginator";
import InteractiveMap from "../InteractiveMap";
import {
  Disclaimer,
  Main,
  MainBottom,
  MapButton,
  CardsContainer
} from "./styled";
import Header from "../../Header";
import Filters from "../Filters";

const Card = styled(CardTemplate)`
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    margin-bottom: 42px;
  }

  @media screen and (min-width: 986px) {
    margin-bottom: 40px;
  }
`;

const MapContainer = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
    position: fixed;
    right: 0;
    top: 139px;
    bottom: 0;
    left: calc(50% + 992px * 0.17);
  }

  @media screen and (min-width: 1200px) {
    left: calc(50% + 1200px * 0.17);
  }
`;

export default () => {
  return (
    <div>
      <Header placeholder="Anywhere · Homes" />
      <Main>
        <Filters />
        <div className="container">
          <CardsContainer>
            <div className="col-xs-12 col-md-6 col-lg-6">
              <Card
                to="homes/cabana"
                highRes={testPhoto}
                price="$82"
                name="La Salentina, see, nature & relax"
                description="Entire house · 9 beds"
                alt="La Salentina"
                stats="97 · Superhost"
              />
            </div>

            <div className="col-xs-12 col-md-6 col-lg-6">
              <Card
                to="homes/cabana"
                highRes={testPhoto}
                price="$82"
                name="Your private 3 bedr. riad and exclusive bathroom"
                description="Entire house · 5 beds"
                alt="3 bedr."
                stats="161 · Superhost"
              />
            </div>

            <div className="col-xs-12 col-md-6 col-lg-6">
              <Card
                to="homes/cabana"
                highRes={testPhoto}
                price="$200"
                name="Dreamy Tropical Tree House"
                description="Entire treehouse · 1 beds"
                alt="Tropical Tree House"
                stats="364 · Superhost"
              />
            </div>

            <div className="col-xs-12 col-md-6 col-lg-6">
              <Card
                to="homes/cabana"
                highRes={testPhoto}
                price="$110"
                name="Best location old town luxury loft"
                description="Entire appartment · 1 bed"
                alt="Old town loft"
                stats="369 · Superhost"
              />
            </div>

            <div className="col-xs-12 col-md-6 col-lg-6">
              <Card
                to="homes/cabana"
                highRes={testPhoto}
                price="$83"
                name="Lussuoso. Vista incantevole."
                description="Entire appartment · 6 bed"
                alt="Lussuoso"
                stats="105 · Superhost"
              />
            </div>

            <div className="col-xs-12 col-md-6 col-lg-6">
              <Card
                to="homes/cabana"
                highRes={testPhoto}
                price="$72"
                name="In the historical center of Lecce"
                description="Entire house · 3 bed"
                alt="In the historical center of Lecce"
                stats="221 · Superhost"
              />
            </div>
            <MainBottom>
              <Paginator />

              <Disclaimer>
                Enter dates to see full pricing. Additional fees apply. Taxes
                may be added.
              </Disclaimer>
            </MainBottom>
          </CardsContainer>
        </div>
        <MapButton />
        <MapContainer>
          <InteractiveMap center={{ lat: -34.397, lng: 150.644 }} zoom={8} />
        </MapContainer>
      </Main>
    </div>
  );
};
