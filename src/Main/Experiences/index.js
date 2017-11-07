import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import forestLow from "./forest.png";
import forestHigh from "./forest@2x.png";
import whaleLow from "./whale.png";
import whaleHigh from "./whale@2x.png";
import mountainLow from "./mountain.png";
import mountainHigh from "./mountain@2x.png";
import salsaLow from "./salsa.png";
import salsaHigh from "./salsa@2x.png";
import SeeAll from "../../common/SeeAll";
import NextPage from "../../common/NextPage";

import styled from "styled-components";

const Section = styled.section`margin-top: 35px;`;

const Cards = styled.div`position: relative;`;

class Explore extends React.Component {
  render() {
    return (
      <Section>
        <div class="row">
          <Heading2>Experiences</Heading2>
          <SeeAll link="#" />
        </div>
        <Cards>
          <div class="row row-top">
            <Card
              lowRes={forestLow}
              highRes={forestHigh}
              price="$29"
              text="Forest theraphy"
              alt="Forest theraphy"
              stats="44 reviews"
            />
            <Card
              lowRes={whaleLow}
              highRes={whaleHigh}
              price="$69"
              text="Whale watching"
              alt="Whale watching"
              stats="46 reviews"
            />
            <Card
              lowRes={mountainLow}
              highRes={mountainHigh}
              price="$69"
              text="Table Mountain Summi, Cable Car Down"
              alt="Table Mountain Summi, Cable Car Down"
              stats="44 reviews"
            />
            <Card
              lowRes={salsaLow}
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

export default Explore;
