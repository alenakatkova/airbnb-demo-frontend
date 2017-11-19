import React from "react";
import styled from "styled-components";
import Rating from "../Rating";
import { Card, Image } from "../styled";

const Heading = styled.p`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: "18px";
  font-size: "14px";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-top: 8px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
    margin-bottom: 3px;
  }
`;

const Description = styled.p`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 14px;
  font-size: 12px;
  margin: 0;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    margin-bottom: 2px;
    line-height: 18px;
    font-size: 15px;
  }
`;

const Stats = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  margin-left: 4px;
`;

export default props => (
  <Card className={props.className} to={props.to}>
    <Image src={props.highRes} alt={props.alt} />
    <Heading>
      {props.price} {props.name}
    </Heading>
    <Description>{props.description}</Description>
    <div>
      <Rating />
      <Stats>{props.stats}</Stats>
    </div>
  </Card>
);
