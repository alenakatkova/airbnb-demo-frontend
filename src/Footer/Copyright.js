import React from "react";
import styled from "styled-components";

const Text = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #636363;
  display: block;
  margin-left: 12.51px;

  @media (min-width: 986px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

export default () => {
  return <Text>© Airbnb Inc.</Text>;
};
