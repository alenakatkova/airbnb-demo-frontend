import React from "react";
import styled from "styled-components";
import Rating from "../common/Rating";

const Picture = styled.img`
  width: 144px;
  height: 216px;

  @media (min-width: 768px) {
    width: 240px;
    height: 346px;
  }

  @media (min-width: 986px) {
    width: 229px;
    height: 346px;
  }
`;

const Text = styled.p`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 15px;
  font-size: 13px;
  color: #383838;
  margin-top: 8px;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

const Price = styled.span`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
`;

const Stats = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
  margin-left: 4px;
`;

const Wrapper = styled.div`max-width: 229px;`;

const Card = props => (
  <Wrapper>
    <Picture src={props.highRes} alt={props.alt} />
    <Text>
      <Price>{props.price}</Price> {props.text}
    </Text>
    <div>
      <Rating />
      <Stats>{props.stats}</Stats>
    </div>
  </Wrapper>
);

export default Card;
