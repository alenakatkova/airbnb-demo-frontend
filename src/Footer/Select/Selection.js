import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Container = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Select = styled.select`
  opacity: 0;
  cursor: pointer;
  width: 100%;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
`;

const Fake = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  padding-left: 8px;
  padding-top: 13px;
  padding-bottom: 12px;
  width: 100%;

  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;

  background: url(${arrow}) no-repeat;
  background-size: 11.37px 6.31px;
  background-position: 96% 18px;

  @media screen and (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
    background-size: 15.16px 8.42px;
  }

  @media screen and (min-width: 986px) {
    padding-left: 16px;
    line-height: 21px;
    font-size: 18px;
  }
`;

export default props => (
  <Container>
    <Fake>{props.option1}</Fake>
    <Select name={props.name}>
      <option>{props.option1}</option>
    </Select>
  </Container>
);
