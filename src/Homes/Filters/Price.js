import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import "./slider.css";

const Range = styled.p`
  margin: 0;
  font-family: "CircularAir-Light", "Arial Bold", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #383838;
`;

const Average = styled.p`
  margin: 0;
  margin-top: 7px;
  font-family: "CircularAir-Light", "Arial Bold", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
`;

export default () => (
  <div>
    <Range>$10 — $1000+</Range>
    <Rheostat min={1} max={100} values={[1, 100]} />
    <Average>The average nightly price is !!!$75.</Average>
  </div>
);
