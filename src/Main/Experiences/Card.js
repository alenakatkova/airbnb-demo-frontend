import React from "react";
import styled from "styled-components";
import Rating from "../../common/Rating";

const Picture = styled.img`
  width: 229px;
  height: 346px;
`;

const Text = styled.p`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: normal;
  font-size: 15px;
  color: #383838;
  margin-top: 8px;
  margin-bottom: 6px;
`;

const Price = styled.span`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
`;

const Stats = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: normal;
  font-size: 12px;
  color: #383838;
  margin-left: 4px;
`;

const Wrapper = styled.div`max-width: 229px;`;

const Card = props => (
  <Wrapper>
    <Picture src={props.lowRes} srcset={props.highRes} alt={props.alt} />
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
