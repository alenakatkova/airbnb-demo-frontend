import React from "react";
import Rating from "../Rating";
import { Card, Image } from "../styled";
import { Heading, Description, Stats } from "./styled";

export default props => (
  <Card>
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
