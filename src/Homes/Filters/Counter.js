import React from "react";
import styled from "styled-components";
import minusIcon from "./minusIcon.svg";
import plusIcon from "./plusIcon.svg";

const Value = styled.span`
  display: inline-block;
  margin: 0 18px;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  font-size: 18px;
  color: #383838;
`;

const Button = styled.button`
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 22px;
  width: 32px;
  height: 32px;
  background: #ffffff;
  text-align: center;
  line-height: 32px;
  position: relative;
  cursor: pointer;
  opacity: ${props => (props.disabled ? "0.5" : "1.0")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  row-wrap: nowrap;
  justyfy-content: space-between;
  align-items: center;
`;

const ButtonIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export default class Counter extends React.Component {
  onPlusClick = () => {
    const currentValue = this.props.value + 1;
    this.props.count(this.props.id, currentValue);
  };

  onMinusClick = () => {
    const currentValue =
      this.props.value > this.props.minimum
        ? this.props.value - 1
        : this.props.minimum;
    this.props.count(this.props.id, currentValue);
  };

  render() {
    return (
      <Container>
        <Button
          onClick={this.onMinusClick}
          disabled={this.props.value === this.props.minimum}
        >
          <ButtonIcon src={minusIcon} alt="Minus" />
        </Button>
        <Value>
          {this.props.value}
          {this.props.plus}
        </Value>
        <Button onClick={this.onPlusClick}>
          <ButtonIcon src={plusIcon} alt="Plus" />
        </Button>
      </Container>
    );
  }
}
