import React from "react";
import styled from "styled-components";
import { Card, Image } from "../styled";

const Text = styled.p`
  margin-top: 8px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 14px;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

const Picture = Image.extend`
  @media screen and (min-width: 768px) {
    height: 264px;
  }

  @media screen and (min-width: 986px) {
    height: 220px;
  }
`;

export default props => (
  <Card>
    <Picture src={props.highRes} alt={props.alt} />
    <Text>{props.subheading}</Text>
  </Card>
);
