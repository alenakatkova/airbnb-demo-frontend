import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import chumleyHigh from "./chumley@2x.png";
import hanjanHigh from "./hanjan@2x.png";
import seapriceHigh from "./seaprice@2x.png";
import meatsHigh from "./meats@2x.png";
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

class Popular extends React.Component {
  render() {
    return (
      <Section>
        <div class="row-space vertically-centered">
          <Heading2>Popular reservations around the world</Heading2>
          <SeeAll link="#" />
        </div>
        <Cards>
          <div class="row-for-cols">
            <Card
              highRes={chumleyHigh}
              alt="Chumley's"
              subheading="Speakeasy"
              name="Chumley's"
              price="About $60 per person"
            />
            <Card
              highRes={hanjanHigh}
              alt="Hanjan"
              subheading="Korean gastropub"
              name="Hanjan"
              price="About $50 per person"
            />
            <Card
              highRes={meatsHigh}
              alt="Prime Meats"
              subheading="German American"
              name="Prime Meats"
              price="About $55 per person"
            />
            <Card
              highRes={seapriceHigh}
              alt="Seaprice"
              subheading="Fine Seafood"
              name="Seaprice"
              price="About $75 per person"
            />
          </div>
          <NextPage top="70px" />
        </Cards>
      </Section>
    );
  }
}

export default Popular;
