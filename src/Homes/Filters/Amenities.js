import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const MainText = styled.span`
  font-size: 16px;
  line-height: 19px;
`;

export default class RoomType extends React.Component {
  state = {
    heating: this.props.heating,
    kitchen: this.props.kitchen,
    tv: this.props.tv,
    wireless: this.props.wireless
  };

  checkCheckbox = key => {
    this.setState({ [key]: !this.state[key] }, this.passDataToParent);
  };

  passDataToParent = () => {
    this.props.handlerFromParent(this.state, "amenities");
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Checkbox
            id="heating"
            checkboxName="amenities"
            value="heating"
            checked={this.state.heating}
            check={this.checkCheckbox}
          >
            <MainText>Heating</MainText>
          </Checkbox>
        </div>
        <div className="col-xs-12 col-md-6">
          <Checkbox
            id="kitchen"
            checkboxName="amenities"
            value="kitchen"
            checked={this.state.kitchen}
            check={this.checkCheckbox}
          >
            <MainText>Kitchen</MainText>
          </Checkbox>
        </div>
        <div className="col-xs-12 col-md-6">
          <Checkbox
            id="tv"
            checkboxName="amenities"
            value="tv"
            checked={this.state.tv}
            check={this.checkCheckbox}
          >
            <MainText>TV</MainText>
          </Checkbox>
        </div>
        <div className="col-xs-12 col-md-6">
          <Checkbox
            id="wireless"
            checkboxName="amenities"
            value="wireless"
            checked={this.state.wireless}
            check={this.checkCheckbox}
          >
            <MainText>Wireless Internet</MainText>
          </Checkbox>
        </div>
      </div>
    );
  }
}
