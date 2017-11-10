import React from "react";
import styled from "styled-components";

const Picture = styled.img`
  width: 91px;
  height: 138px;

  @media (min-width: 768px) {
    width: 176px;
    height: 264px;
  }

  @media (min-width: 986px) {
    width: 147px;
    height: 220px;
  }
`;

const Wrapper = styled.div`max-width: 147px;`;

const Subheading = styled.p`
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

const Card = props => (
  <div className="col-xs-4 col-md-3 col-lg-2">
    <Wrapper>
      <Picture src={props.highRes} alt={props.alt} />
      <Subheading>{props.subheading}</Subheading>
    </Wrapper>
  </div>
);

export default Card;
