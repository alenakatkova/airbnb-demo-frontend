import React from "react";
import {
  Counter,
  CounterValue,
  CounterButton,
  DisabledCounterButton,
  ButtonIcon
} from "./styled";
import minusIcon from "./minusIcon.svg";
import plusIcon from "./plusIcon.svg";

export default () => (
  <Counter>
    <DisabledCounterButton>
      <ButtonIcon src={minusIcon} alt="Minus" />
    </DisabledCounterButton>
    <CounterValue>1</CounterValue>
    <CounterButton>
      <ButtonIcon src={plusIcon} alt="Plus" />
    </CounterButton>
  </Counter>
);
