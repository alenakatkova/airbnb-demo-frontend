import React from "react";
import styled from "styled-components";
import Heading2 from "../common/Heading2";
import Card from "./Card";
import forestHigh from "./forest@2x.png";
import whaleHigh from "./whale@2x.png";
import mountainHigh from "./mountain@2x.png";
import salsaHigh from "./salsa@2x.png";
import SeeAll from "../common/SeeAll";
import NextPage from "../common/NextPage";
import CardsContainer from "../common/CardsContainer";

const Section = styled.section`margin-top: 35px;`;

const Next = NextPage.extend`top: 155px;`;

const CardsOuterContainer = styled.div`position: relative;`;

class Experiences extends React.Component {
  render() {
    return (
      <Section>
        <div className="row between-xs middle-xs">
          <Heading2>Experiences</Heading2>
          <SeeAll link="#" />
        </div>
        <CardsOuterContainer>
          <CardsContainer>
            <div className="row negative-indent-xs nowrap-xs wrap-lg">
              <div className="col-xs-6 col-md-4 col-lg-3">
                <Card
                  highRes={forestHigh}
                  price="$29"
                  text="Forest theraphy"
                  alt="Forest theraphy"
                  stats="44 reviews"
                />
              </div>
              <div className="col-xs-6 col-md-4 col-lg-3">
                <Card
                  highRes={whaleHigh}
                  price="$69"
                  text="Whale watching"
                  alt="Whale watching"
                  stats="46 reviews"
                />
              </div>
              <div className="col-xs-6 col-md-4 col-lg-3">
                <Card
                  highRes={mountainHigh}
                  price="$69"
                  text="Table Mountain Summi, Cable Car Down"
                  alt="Table Mountain Summi, Cable Car Down"
                  stats="44 reviews"
                />
              </div>
              <div className="col-xs-6 col-md-4 col-lg-3">
                <Card
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
        </CardsOuterContainer>
      </Section>
    );
  }
}

export default Experiences;
