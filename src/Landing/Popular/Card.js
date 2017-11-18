import React from "react";
import { Card, Image } from "../../styled";
import { Subheading, Name, Price } from "./styled";

const Picture = Image.extend`
  @media screen and (min-width: 768px) {
    height: 164px;
  }
`;

export default props => (
  <Card to={props.to}>
    <Picture src={props.highRes} alt={props.alt} />
    <Subheading>{props.subheading}</Subheading>
    <Name>{props.name}</Name>
    <Price>{props.price}</Price>
  </Card>
);
