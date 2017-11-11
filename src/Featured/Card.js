import React from "react";
import styled from "styled-components";
import { Card, Image } from "../styled";

export const Text = styled.p`
  margin-top: 8px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;

  @media (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

export default props => (
  <Card>
    <Image src={props.highRes} alt={props.alt} />
    <Text>{props.subheading}</Text>
  </Card>
);
