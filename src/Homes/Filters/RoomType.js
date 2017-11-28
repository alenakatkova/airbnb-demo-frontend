import React from "react";
import styled from "styled-components";
import entireIcon from "./roomEntire.svg";
import privateIcon from "./roomPrivate.svg";
import sharedIcon from "./roomShared.svg";
import Checkbox from "./Checkbox";

const MainText = styled.span`
  font-size: 16px;
  line-height: 19px;
`;
const Description = styled.span`
  font-size: 12px;
  line-height: 14px;
`;

export default class RoomType extends React.Component {
  state = {
    entire: this.props.room.entire,
    private: this.props.room.private,
    shared: this.props.room.shared
  };

  checkCheckbox = key => {
    this.setState({ [key]: !this.state[key] }, this.passDataToParent);
  };

  passDataToParent = () => {
    this.props.handlerFromParent(this.state, "room");
  };

  render() {
    return (
      <div>
        <Checkbox
          id="entire"
          checkboxName="room-type"
          value="Entire home"
          checked={this.state.entire}
          src={entireIcon}
          alt="Entire home"
          check={this.checkCheckbox}
          showIcon
        >
          <MainText>Entire home</MainText>
          <br />
          <Description>Have a place to yourself</Description>
        </Checkbox>

        <Checkbox
          id="private"
          checkboxName="room-type"
          value="Private home"
          checked={this.state.private}
          src={privateIcon}
          alt="Private home"
          check={this.checkCheckbox}
          showIcon
        >
          <MainText>Private room</MainText>
          <br />
          <Description>
            Have your own room and share some common spaces
          </Description>
        </Checkbox>

        <Checkbox
          id="shared"
          checkboxName="room-type"
          value="Shared home"
          checked={this.state.shared}
          src={sharedIcon}
          alt="Shared home"
          check={this.checkCheckbox}
          showIcon
        >
          <MainText>Shared room</MainText>
          <br />
          <Description>Stay in a shared space, like a common room</Description>
        </Checkbox>
      </div>
    );
  }
}
