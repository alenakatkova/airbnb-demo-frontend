import React from "react";
import styled from "styled-components";

const Text = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: normal;
  font-size: 15px;
  color: #636363;
  display: block;
  margin-left: 12.51px;
`;

class Copyright extends React.Component {
  render() {
    return <Text>© Airbnb Inc.</Text>;
  }
}

export default Copyright;
