import React from "react";
import Rating from "../Rating";
import { Card, Image } from "../styled";
import { Heading, Description, Stats } from "./styled";

const Picture = Image.extend`
  @media screen and (min-width: 768px) {
    height: 204px;
  }
`;

export default props => (
  <Card>
    <Picture src={props.highRes} alt={props.alt} />
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
