import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import "./slider.css";
import priceStats from "./price.svg";

const Container = styled.div`
  position: relative;
`;
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

const Stats = styled.img`
  position: absolute;
  z-index: 0;
  top: 73px;
  left: 37px;
`;

export default class Price extends React.Component {
  state = {
    min: this.props.min,
    max: this.props.max,
    values: this.props.values
  };

  passDataToParent = () => {
    this.props.handlerFromParent(this.state, "price");
  };

  onValuesChange = sliderState => {
    this.setState(
      {
        values: sliderState.values
      },
      this.passDataToParent
    );
  };

  render() {
    return (
      <Container>
        <Range>
          ${this.state.values[0]} — ${this.state.values[1]}+
        </Range>
        <Average>The average nightly price is $75.</Average>
        <Stats src={priceStats} alt="Price stats" />
        <Rheostat
          min={this.props.min}
          max={this.props.max}
          onValuesUpdated={this.onValuesChange}
          values={this.props.values}
        />
      </Container>
    );
  }
}
