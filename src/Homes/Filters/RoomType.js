import React from "react";
import styled from "styled-components";
import entireIcon from "./roomEntire.svg";
import privateIcon from "./roomPrivate.svg";
import sharedIcon from "./roomShared.svg";
import checkedCheckbox from "./checkedCheckbox.svg";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  margin-bottom: 15px;
`;

const Label = styled.label`
  position: relative;
  box-sizing: border-box;
  width: 272px;
  padding-right: 30px;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  color: #383838;
  padding-left: 36px;
`;

const MainText = styled.span`
  font-size: 16px;
  line-height: 19px;
`;
const Description = styled.span`
  font-size: 12px;
  line-height: 14px;
`;

const Checkbox = styled.input`
  display: none;
`;

const FakeCheckbox = styled.span`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  box-sizing: border-box;
  border-radius: 4px;
  background: ${props =>
    props.checked
      ? `#008489 url(${checkedCheckbox}) no-repeat center`
      : `#ffffff`};
`;

const IconContainer = styled.div``;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export default class RoomType extends React.Component {
  state = {
    entire: this.props.entire,
    private: this.props.private,
    shared: this.props.shared
  };

  onCheckboxClick = (key, e) => {
    if (e.target.tagName === "INPUT") {
      this.setState({ [key]: !this.state[key] }, this.passDataToParent);
    }
  };

  passDataToParent = () => {
    this.props.handlerFromParent(this.state);
  };

  render() {
    return (
      <div>
        <Row onClick={e => this.onCheckboxClick("entire", e)}>
          <Label>
            <Checkbox type="checkbox" name="room-type" value="Entire home" />
            <FakeCheckbox checked={this.state.entire} />
            <MainText>Entire home</MainText>
            <br />
            <Description>Have a place to yourself</Description>
          </Label>
          <IconContainer>
            <Icon src={entireIcon} alt="Entire home" />
          </IconContainer>
        </Row>

        <Row onClick={e => this.onCheckboxClick("private", e)}>
          <Label>
            <Checkbox type="checkbox" name="room-type" value="Private room" />
            <FakeCheckbox checked={this.state.private} />
            <MainText>Private room</MainText>
            <br />
            <Description>
              Have your own room and share some common spaces
            </Description>
          </Label>
          <IconContainer>
            <Icon src={privateIcon} alt="Entire home" />
          </IconContainer>
        </Row>

        <Row onClick={e => this.onCheckboxClick("shared", e)}>
          <Label>
            <Checkbox type="checkbox" name="room-type" value="Shared room" />
            <FakeCheckbox checked={this.state.shared} />
            <MainText>Shared room</MainText>
            <br />
            <Description>
              Stay in a shared space, like a<br />common room
            </Description>
          </Label>
          <IconContainer>
            <Icon src={sharedIcon} alt="Entire home" />
          </IconContainer>
        </Row>
      </div>
    );
  }
}
