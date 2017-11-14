import React from "react";
import styled from "styled-components";
import { FlexContainer, TextContainer, Text } from "./styled";
import { Image } from "../styled";

const Picture = Image.extend`
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

const Card = styled.div`
  display: block;
  color: #383838;
`;

export default props => (
  <Card href={props.href}>
    <FlexContainer>
      <Picture src={props.highRes} alt={props.alt} />
      <TextContainer>
        <Text>{props.text}</Text>
      </TextContainer>
    </FlexContainer>
  </Card>
);
