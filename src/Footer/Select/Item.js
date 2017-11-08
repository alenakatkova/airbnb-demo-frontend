import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Div = styled.div`position: relative;`;

const Select = styled.select`
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 13px;
  width: 100%;
  -webkit-appearance: none;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const Arrow = styled.span`
  position: absolute;
  line-height: 0;
  display: block;
  width: 15.16px;
  height: 8.42px;
  background: url(${arrow}) no-repeat;
  background-size: contain;
  pointer-events: none;
  top: 20px;
  right: 16px;
  z-index: 10;
`;

const Option = styled.option`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: normal;
  font-size: 18px;
  color: #383838;
`;

const Item = props => (
  <Div>
    <Arrow />
    <Select name={props.name}>
      <Option>{props.option1}</Option>
      <Option>{props.option2}</Option>
    </Select>
  </Div>
);

export default Item;
