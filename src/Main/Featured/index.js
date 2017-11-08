import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import parisLow from "./paris.png";
import miamiLow from "./miami.png";
import tokyoLow from "./tokyo.png";
import capetownLow from "./capetown.png";
import seoulLow from "./seoul.png";
import losangelesLow from "./losangeles.png";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 45px;
  margin-bottom: 50px;
`;

const Cards = styled.div`position: relative;`;

class Featured extends React.Component {
  render() {
    return (
      <Section>
        <Heading2>Featured destinations</Heading2>

        <Cards>
          <div class="row-for-cols">
            <Card lowRes={parisLow} alt="Paris" subheading="Paris" />
            <Card lowRes={miamiLow} alt="Miami" subheading="Miami" />
            <Card lowRes={tokyoLow} alt="Tokyo" subheading="Tokyo" />
            <Card lowRes={capetownLow} alt="Cape town" subheading="Cape town" />
            <Card lowRes={seoulLow} alt="Seoul" subheading="Seoul" />
            <Card
              lowRes={losangelesLow}
              alt="Los Angeles"
              subheading="Los Angeles"
            />
          </div>
        </Cards>
      </Section>
    );
  }
}

export default Featured;
