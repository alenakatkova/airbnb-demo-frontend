import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import salentinaLow from "./salentina.png";
import salentinaHigh from "./salentina@2x.png";
import seeLow from "./see.png";
import seeHigh from "./see@2x.png";
import tropicalLow from "./tropical.png";
import tropicalHigh from "./tropical@2x.png";
import SeeAll from "../../common/SeeAll";
import NextPage from "../../common/NextPage";
import styled from "styled-components";

const Section = styled.section`margin-top: 25px;`;

const Cards = styled.div`position: relative;`;

class Homes extends React.Component {
  render() {
    return (
      <Section>
        <div class="row vertically-centered">
          <Heading2>Homes</Heading2>
          <SeeAll link="#" />
        </div>
        <Cards>
          <div class="row-for-cols">
            <Card
              lowRes={salentinaLow}
              highRes={salentinaHigh}
              price="$82"
              name="La Salentina, see, nature & relax"
              description="Entire house · 9 beds"
              alt="La Salentina"
              stats="97 · Superhost"
            />
            <Card
              lowRes={seeLow}
              highRes={seeHigh}
              price="$82"
              name="Your private 3 bedr. and exclusi..."
              description="Entire house · 5 beds"
              alt="3 bedr."
              stats="161 · Superhost"
            />
            <Card
              lowRes={tropicalLow}
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
