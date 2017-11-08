import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import chumleyLow from "./chumley.png";
import hanjanLow from "./hanjan.png";
import seapriceLow from "./seaprice.png";
import meatsLow from "./meats.png";
import SeeAll from "../../common/SeeAll";
import NextPage from "../../common/NextPage";
import styled from "styled-components";

const Section = styled.section`margin-top: 35px;`;

const Cards = styled.div`position: relative;`;

class Popular extends React.Component {
  render() {
    return (
      <Section>
        <div class="row vertically-centered">
          <Heading2>Popular reservations around the world</Heading2>
          <SeeAll link="#" />
        </div>
        <Cards>
          <div class="row-for-cols">
            <Card
              lowRes={chumleyLow}
              alt="Chumley's"
              subheading="Speakeasy"
              name="Chumley's"
              price="About $60 per person"
            />
            <Card
              lowRes={hanjanLow}
              alt="Hanjan"
              subheading="Korean gastropub"
              name="Hanjan"
              price="About $50 per person"
            />
            <Card
              lowRes={meatsLow}
              alt="Prime Meats"
              subheading="German American"
              name="Prime Meats"
              price="About $55 per person"
            />
            <Card
              lowRes={seapriceLow}
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
