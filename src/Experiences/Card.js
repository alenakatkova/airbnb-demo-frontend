import React from "react";
import Rating from "../Rating";
import { Card, Image } from "../styled";
import { Text, Price, Stats } from "./styled";

const Picture = Image.extend`
  height: 216px;

  @media screen and (min-width: 768px) {
    height: 346px;
  }
`;

export default props => (
  <Card href={props.link}>
    <Picture src={props.highRes} alt={props.alt} />
    <Text>
      <Price>{props.price}</Price> {props.text}
    </Text>
    <div>
      <Rating />
      <Stats>{props.stats}</Stats>
    </div>
  </Card>
);
