import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import salentinaHigh from "./salentina@2x.png";
import seeHigh from "./see@2x.png";
import tropicalHigh from "./tropical@2x.png";
import SeeAll from "../../common/SeeAll";
import NextPage from "../../common/NextPage";
import styled from "styled-components";

const Section = styled.section`margin-top: 25px;`;

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

class Homes extends React.Component {
  render() {
    return (
      <Section>
        <div class="row-space vertically-centered">
          <Heading2>Homes</Heading2>
          <SeeAll link="#" />
        </div>
        <Cards>
          <div class="row-for-cols">
            <Card
              highRes={salentinaHigh}
              price="$82"
              name="La Salentina, see, nature & relax"
              description="Entire house · 9 beds"
              alt="La Salentina"
              stats="97 · Superhost"
            />
            <Card
              highRes={seeHigh}
              price="$82"
              name="Your private 3 bedr. and exclusi..."
              description="Entire house · 5 beds"
              alt="3 bedr."
              stats="161 · Superhost"
            />
            <Card
              highRes={tropicalHigh}
              price="$200"
              name="Dreamy Tropical Tree House"
              description="Entire treehouse · 1 beds"
              alt="Tropical Tree House"
              stats="364 · Superhost"
            />
          </div>
          <NextPage top="80px" />
        </Cards>
      </Section>
    );
  }
}

export default Homes;
