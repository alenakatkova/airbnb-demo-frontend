import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Select = styled.select`
  opacity: 0;
  cursor: pointer;
  width: 100%;
`;

const Div = styled.div`
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
  margin-bottom: 16px;

  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;

  background: url(${arrow}) no-repeat;
  background-size: 11.37px 6.31px;
  background-position: 124.63px 18px;

  @media (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
    background-size: 15.16px 8.42px;
  }

  @media (min-width: 986px) {
    padding-left: 16px;
    line-height: 21px;
    font-size: 18px;
  }
`;

const Item = props => (
  <div className="col-xs-6 col-md-12 col-lg-12">
    <Container>
      <Div>{props.option1}</Div>
      <Select name={props.name}>
        <option>{props.option1}</option>
      </Select>
    </Container>
  </div>
);

export default Item;
