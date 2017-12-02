import React from "react";
import styled from "styled-components";
import entireIcon from "./roomEntire.svg";
import privateIcon from "./roomPrivate.svg";
import sharedIcon from "./roomShared.svg";
import Checkbox from "../Checkbox";
import Dropdown from "../SmallDropdown";

const MainText = styled.span`
  font-size: 16px;
  line-height: 19px;
`;
const Description = styled.span`
  font-size: 12px;
  line-height: 14px;
`;

const getLabel = state => {
  if (state.entire || state.private || state.shared) {
    return `Room type · ${state.entire + state.private + state.shared}`;
  }
};

export default class RoomType extends React.Component {
  state = {
    entire: this.props.room.entire,
    private: this.props.room.private,
    shared: this.props.room.shared
  };

  checkCheckbox = key => {
    this.setState({ [key]: !this.state[key] });
  };

  onApplyClick = () => {
    this.props.apply("room", this.state);
  };

  onCancelClick = closeFilter => {
    this.setState(
      {
        entire: this.props.room.entire,
        private: this.props.room.private,
        shared: this.props.room.shared
      },
      closeFilter
    );
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      entire: nextProps.room.entire,
      private: nextProps.room.private,
      shared: nextProps.room.shared
    });
  };

  render() {
    return (
      <Dropdown
        apply={this.onApplyClick}
        cancel={this.onCancelClick}
        onToggle={this.props.toggle}
        reset={this.props.reset}
        id="room"
        label={getLabel(this.state) || "Room type"}
      >
        <Checkbox
          id="entire"
          checkboxName="room-type"
          value="Entire home"
          checked={this.state.entire}
          src={entireIcon}
          alt="Entire home"
          check={this.checkCheckbox}
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
        >
          <MainText>Shared room</MainText>
          <br />
          <Description>Stay in a shared space, like a common room</Description>
        </Checkbox>
      </Dropdown>
    );
  }
}
