import React from "react";
import styled from "styled-components";

const Picture = styled.img`
  width: 144px;
  height: 108px;
  @media (min-width: 768px) {
    width: 240px;
    height: 164px;
  }

  @media (min-width: 986px) {
    width: 229px;
    height: 164px;
  }
`;

const Wrapper = styled.div`max-width: 229px;`;

const Subheading = styled.p`
  margin-top: 6px;
  margin-bottom: 2px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 9px;
  font-size: 8px;
  text-transform: uppercase;
  color: #383838;

  @media (min-width: 768px) {
    margin-top: 12px;
    line-height: 12px;
    font-size: 10px;
  }
`;
const Name = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #383838;

  @media (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

const Price = styled.p`
  margin: 0;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
  opacity: 0.9;

  @media (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

const Card = props => (
  <Wrapper>
    <Picture src={props.highRes} alt={props.alt} />
    <Subheading>{props.subheading}</Subheading>
    <Name>{props.name}</Name>
    <Price>{props.price}</Price>
  </Wrapper>
);

export default Card;
