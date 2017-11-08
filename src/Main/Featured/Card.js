import React from "react";
import styled from "styled-components";

const Picture = styled.img`
  width: 147px;
  height: 220px;
`;

const Wrapper = styled.div`max-width: 147px;`;

const Subheading = styled.p`
  margin-top: 8px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: normal;
  font-size: 15px;
  color: #383838;
`;

const Card = props => (
  <div className="col-2">
    <Wrapper>
      <Picture src={props.highRes} alt={props.alt} />
      <Subheading>{props.subheading}</Subheading>
    </Wrapper>
  </div>
);

export default Card;
