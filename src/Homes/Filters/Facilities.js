import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const MainText = styled.span`
  font-size: 16px;
  line-height: 19px;
`;

export default class RoomType extends React.Component {
  state = {
    elevator: this.props.facilities.elevator,
    parking: this.props.facilities.parking,
    pool: this.props.facilities.pool,
    wheelchair: this.props.facilities.wheelchair
  };

  checkCheckbox = key => {
    this.setState({ [key]: !this.state[key] }, this.passDataToParent);
  };

  passDataToParent = () => {
    this.props.handlerFromParent(this.state, "facilities");
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Checkbox
            id="elevator"
            checkboxName="facilities"
            value="elevator"
            checked={this.state.elevator}
            check={this.checkCheckbox}
          >
            <MainText>Elevator</MainText>
          </Checkbox>
        </div>
        <div className="col-xs-12 col-md-6">
          <Checkbox
            id="parking"
            checkboxName="facilities"
            value="parking"
            checked={this.state.parking}
            check={this.checkCheckbox}
          >
            <MainText>Free parking on premises</MainText>
          </Checkbox>
        </div>
        <div className="col-xs-12 col-md-6">
          <Checkbox
            id="pool"
            checkboxName="facilities"
            value="pool"
            checked={this.state.pool}
            check={this.checkCheckbox}
          >
            <MainText>Pool</MainText>
          </Checkbox>
        </div>
        <div className="col-xs-12 col-md-6">
          <Checkbox
            id="wheelchair"
            checkboxName="facilities"
            value="wheelchair"
            checked={this.state.wheelchair}
            check={this.checkCheckbox}
          >
            <MainText>Wheelchair accessible</MainText>
          </Checkbox>
        </div>
      </div>
    );
  }
}
