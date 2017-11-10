import React from "react";
import styled from "styled-components";
import Rating from "../common/Rating";

const Picture = styled.img`
  width: 197px;
  height: 156px;

  @media (min-width: 768px) {
    width: 304px;
    height: 204px;
  }

  @media (min-width: 986px) {
    width: 310px;
    height: 204px;
  }
`;

const Heading = styled.p`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 15px;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #383838;
  margin: 0;
  margin-top: 8px;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
    margin-bottom: 2px;
  }
`;

const Description = styled.p`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
  margin: 0;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

const Stats = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
  margin-left: 4px;
`;

const Wrapper = styled.div`max-width: 310px;`;

const Card = props => (
  <Wrapper>
    <Picture src={props.highRes} alt={props.alt} />
    <Heading>
      {props.price} {props.name}
    </Heading>
    <Description>{props.description}</Description>
    <div>
      <Rating />
      <Stats>{props.stats}</Stats>
    </div>
  </Wrapper>
);

export default Card;
