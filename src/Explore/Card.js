import React from "react";
import { FlexContainer, TextContainer, Text } from "./styled";
import { Card, Image } from "../styled";

const Picture = Image.extend`
  height: 78px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  @media screen and (min-width: 768px) {
    height: 72px;
    width: 96px;
    border-top-right-radius: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export default props => (
  <Card href={props.link}>
    <FlexContainer>
      <Picture src={props.highRes} alt={props.alt} />
      <TextContainer>
        <Text>{props.text}</Text>
      </TextContainer>
    </FlexContainer>
  </Card>
);
