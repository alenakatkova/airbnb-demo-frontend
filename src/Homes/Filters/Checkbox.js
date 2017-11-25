import React from "react";
import styled from "styled-components";
import checkedCheckbox from "./checkedCheckbox.svg";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  margin-bottom: 15px;
  justify-content: space-between;
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

export default class ArrowCheckbox extends React.Component {
  onCheckboxClick = e => {
    if (e.target.tagName === "INPUT") {
      this.props.check(this.props.id);
    }
  };

  render() {
    return (
      <Row onClick={this.onCheckboxClick}>
        <Label>
          <Checkbox
            type="checkbox"
            name={this.props.checkboxName}
            value={this.props.value}
          />
          <FakeCheckbox checked={this.props.checked} />
          {this.props.children}
        </Label>
        {this.props.showIcon && (
          <IconContainer>
            <Icon src={this.props.src} alt={this.props.alt} />
          </IconContainer>
        )}
      </Row>
    );
  }
}
