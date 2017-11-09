import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import parisHigh from "./paris@2x.png";
import miamiHigh from "./miami@2x.png";
import tokyoHigh from "./tokyo@2x.png";
import capetownHigh from "./capetown@2x.png";
import seoulHigh from "./seoul@2x.png";
import losangelesHigh from "./losangeles@2x.png";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 45px;
  margin-bottom: 50px;
`;

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

class Featured extends React.Component {
  render() {
    return (
      <Section>
        <Heading2>Featured destinations</Heading2>

        <Cards>
          <div className="row-for-cols">
            <Card highRes={parisHigh} alt="Paris" subheading="Paris" />
            <Card highRes={miamiHigh} alt="Miami" subheading="Miami" />
            <Card highRes={tokyoHigh} alt="Tokyo" subheading="Tokyo" />
            <Card
              highRes={capetownHigh}
              alt="Cape town"
              subheading="Cape town"
            />
            <Card highRes={seoulHigh} alt="Seoul" subheading="Seoul" />
            <Card
              highRes={losangelesHigh}
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
