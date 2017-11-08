import React from "react";
import styled from "styled-components";

const Picture = styled.img`
  width: 229px;
  height: 164px;
`;

const Wrapper = styled.div`max-width: 229px;`;

const Subheading = styled.p`
  margin-top: 12px;
  margin-bottom: 2px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: normal;
  font-size: 10px;
  text-transform: uppercase;
  color: #383838;
`;
const Name = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: normal;
  font-size: 18px;
  color: #383838;
`;
const Price = styled.p`
  margin: 0;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  opacity: 0.9;
`;

const Card = props => (
  <div className="col-3">
    <Wrapper>
      <Picture src={props.highRes} alt={props.alt} />
      <Subheading>{props.subheading}</Subheading>
      <Name>{props.name}</Name>
      <Price>{props.price}</Price>
    </Wrapper>
  </div>
);

export default Card;
