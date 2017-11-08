import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import forestHigh from "./forest@2x.png";
import whaleHigh from "./whale@2x.png";
import mountainHigh from "./mountain@2x.png";
import salsaHigh from "./salsa@2x.png";
import SeeAll from "../../common/SeeAll";
import NextPage from "../../common/NextPage";
import styled from "styled-components";

const Section = styled.section`margin-top: 35px;`;

const Cards = styled.div`
  position: relative;

  @media (max-width: 768px) {
    overflow-x: scroll;
    margin: 0 -8px;
    padding: 0 8px;
    width: 100%;
    box-sizing: border-box;
  }
`;

class Experiences extends React.Component {
  render() {
    return (
      <Section>
        <div class="row-space vertically-centered">
          <Heading2>Experiences</Heading2>
          <SeeAll link="#" />
        </div>
        <Cards>
          <div class="row-for-cols">
            <Card
              highRes={forestHigh}
              price="$29"
              text="Forest theraphy"
              alt="Forest theraphy"
              stats="44 reviews"
            />
            <Card
              highRes={whaleHigh}
              price="$69"
              text="Whale watching"
              alt="Whale watching"
              stats="46 reviews"
            />
            <Card
              highRes={mountainHigh}
              price="$69"
              text="Table Mountain Summi, Cable Car Down"
              alt="Table Mountain Summi, Cable Car Down"
              stats="44 reviews"
            />
            <Card
              highRes={salsaHigh}
              price="$50"
              text="Salsa Night"
              alt="Salsa Night"
              stats="44 reviews"
            />
          </div>
          <NextPage top="155px" />
        </Cards>
      </Section>
    );
  }
}

export default Experiences;
