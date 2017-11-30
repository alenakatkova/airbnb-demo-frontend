import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import "./slider.css";
import priceStats from "./price.svg";
import Dropdown from "../SmallDropdown";
import isEqual from "lodash.isequal";

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
  top: -73px;
  left: 37px;
`;

const RheostatContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: block;
  position: relative;
`;

const getLabel = (newState, initState) => {
  if (!isEqual(newState, initState)) {
    return `${newState.values[0]}$ — ${newState.values[1]}$`;
  }
};

export default class Price extends React.Component {
  state = {
    min: this.props.price.min,
    max: this.props.price.max,
    values: this.props.price.values
  };

  onApplyClick = () => {
    this.props.apply("price", this.state);
  };

  onCancelClick = closeFilter => {
    this.setState(
      {
        min: this.props.price.min,
        max: this.props.price.max,
        values: this.props.price.values
      },
      closeFilter
    );
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      min: nextProps.price.min,
      max: nextProps.price.max,
      values: nextProps.price.values
    });
  };

  onValuesChange = sliderState => {
    this.setState({
      values: sliderState.values
    });
  };

  render() {
    return (
      <Dropdown
        apply={this.onApplyClick}
        cancel={this.onCancelClick}
        onToggle={this.props.toggle}
        reset={this.props.reset}
        id="price"
        label={getLabel(this.state, this.props.initialState) || "Price"}
      >
        <Range>
          ${this.state.values[0]} — ${this.state.values[1]}+
        </Range>
        <Average>The average nightly price is $75.</Average>

        <RheostatContainer>
          <Stats src={priceStats} alt="Price stats" />
          <Rheostat
            min={this.state.min}
            max={this.state.max}
            onValuesUpdated={this.onValuesChange}
            values={this.state.values}
          />
        </RheostatContainer>
      </Dropdown>
    );
  }
}
