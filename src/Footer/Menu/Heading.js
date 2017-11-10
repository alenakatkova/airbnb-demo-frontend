import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  @media (min-width: 768px) {
    margin: 0;
    margin-bottom: 16px;
    font-family: "CircularAir-Bold", "Bold", sans-serif;
    line-height: 14px;
    font-size: 12px;
    color: #383838;
  }

  @media (min-width: 986px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

const Heading = props => <Title>{props.title}</Title>;

export default Heading;
