import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import salentinaHigh from "./salentina@2x.png";
import seeHigh from "./see@2x.png";
import tropicalHigh from "./tropical@2x.png";
import SeeAll from "../../common/SeeAll";
import NextPage from "../../common/NextPage";
import styled from "styled-components";
import CardsContainer from "../../common/CardsContainer";

const Section = styled.section`margin-top: 25px;`;

// const Cards = styled.div`
//   position: relative;

//   overflow-x: scroll;
//   margin: 0 -8px;
//   padding: 0 8px;

//   box-sizing: border-box;

//   @media (min-width: 986px) {
//     overflow: hidden;
//   }
// `;

class Homes extends React.Component {
  render() {
    return (
      <Section>
        <div className="row between-xs middle-xs">
          <Heading2>Homes</Heading2>
          <SeeAll link="#" />
        </div>
        <CardsContainer>
          <div className="row negative-indent-xs nowrap-xs wrap-lg">
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
              name="Your private 3 bedr. riad and exclusive sth"
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
        </CardsContainer>
      </Section>
    );
  }
}

export default Homes;
