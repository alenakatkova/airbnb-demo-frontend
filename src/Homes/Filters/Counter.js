import React from "react";
import styled from "styled-components";
import minusIcon from "./minusIcon.svg";
import plusIcon from "./plusIcon.svg";

export const Value = styled.span`
  display: inline-block;
  margin: 0 18px;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  font-size: 18px;
  color: #383838;
`;

export const Button = styled.button`
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 22px;
  width: 32px;
  height: 32px;
  background: none;
  text-align: center;
  line-height: 32px;
  position: relative;
  opacity: ${props => (props.disabled ? "0.5" : "1.0")};
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  row-wrap: nowrap;
  justyfy-content: space-between;
  align-items: center;
`;

export const ButtonIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export default () => (
  <Counter>
    <Button disabled>
      <ButtonIcon src={minusIcon} alt="Minus" />
    </Button>
    <Value>1</Value>
    <Button>
      <ButtonIcon src={plusIcon} alt="Plus" />
    </Button>
  </Counter>
);
