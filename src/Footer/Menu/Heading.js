import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  font-family: font-family: "CircularAir-Bold", "Bold", sans-serif;;
  line-height: normal;
  font-size: 15px;
  color: #383838;
`;

const Heading = props => <Title>{props.title}</Title>;

export default Heading;
