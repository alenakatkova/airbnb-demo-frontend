import React from "react";
import { Card, Image } from "../styled";
import { Subheading, Name, Price } from "./styled";

export default props => (
  <Card>
    <Image src={props.highRes} alt={props.alt} />
    <Subheading>{props.subheading}</Subheading>
    <Name>{props.name}</Name>
    <Price>{props.price}</Price>
  </Card>
);
