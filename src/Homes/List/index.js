import React from "react";
import styled from "styled-components";
import CardTemplate from "../Card";
import testPhoto from "../salentina@2x.png";
import Paginator from "./Paginator";
import InteractiveMap from "./InteractiveMap";
import {
  FiltersContainer,
  Filter,
  Disclaimer,
  Main,
  MainBottom,
  MapButton
} from "./styled";
import RoomType from "../Filters/RoomType";
import Price from "../Filters/Price";
import Guests from "../Filters/Guests";
import Dates from "../Filters/Dates";
import MediaQuery from "react-responsive";
import Header from "../Header";

const Card = styled(CardTemplate)`margin-bottom: 26px;`;

export default () => {
  return (
    <div>
      <Header />
      <Main>
        <FiltersContainer>
          <div className="container">
            <div className="row negative-indent-xs">
              <Dates />
              <Guests />
              <MediaQuery query="(min-width: 986px)">
                <RoomType />
                <Price />
                <Filter>Instant Book</Filter>
              </MediaQuery>
              <Filter>More filters</Filter>
            </div>
          </div>
        </FiltersContainer>
        <div className="container">
          <div className="row negative-indent-xs">
            <div className="col-xs-12 col-lg-8">
              <div className="row negative-indent-xs">
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <Card
                    to="/"
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
                    to="/"
                    highRes={testPhoto}
                    price="$82"
                    name="Your private 3 bedr. riad and exclusive"
                    description="Entire house · 5 beds"
                    alt="3 bedr."
                    stats="161 · Superhost"
                  />
                </div>

                <div className="col-xs-12 col-md-6 col-lg-6">
                  <Card
                    to="/"
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
                    to="/"
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
                    to="/"
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
                    to="/"
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
                    Enter dates to see full pricing. Additional fees apply.
                    Taxes may be added.
                  </Disclaimer>
                </MainBottom>
              </div>
            </div>
          </div>
        </div>
        <MapButton />
        <InteractiveMap center={{ lat: -34.397, lng: 150.644 }} zoom={8} />
      </Main>
    </div>
  );
};
