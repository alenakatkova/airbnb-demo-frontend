import React from "react";
import styled from "styled-components";
import {
  FilterButton,
  PopUp,
  FilterContainer,
  ApplyButton,
  CancelButton,
  ButtonsContainer
} from "./styled";
import entireIcon from "./roomEntire.svg";
import privateIcon from "./roomPrivate.svg";
import sharedIcon from "./roomShared.svg";

const Container = FilterContainer.extend`
  display: none;

  @media screen and (min-width: 986px) {
    display: inline-block;
  }
`;

const FilterPopUp = PopUp.extend`width: auto;`;

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

const Checkbox = styled.input`display: none;`;

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
  background: #ffffff;
`;

const IconContainer = styled.div``;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export default () => {
  return (
    <Container>
      <FilterButton>Room type</FilterButton>
      <FilterPopUp>
        <Row>
          <Label>
            <Checkbox type="checkbox" name="room-type" value="f" />
            <FakeCheckbox />
            <MainText>Entire home</MainText>
            <br />
            <Description>Have a place to yourself</Description>
          </Label>
          <IconContainer>
            <Icon src={entireIcon} alt="Entire home" />
          </IconContainer>
        </Row>
        <Row>
          <Label>
            <Checkbox type="checkbox" name="room-type" value="f" />
            <FakeCheckbox />
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
        <Row>
          <Label>
            <Checkbox type="checkbox" name="room-type" value="f" />
            <FakeCheckbox />
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
        <ButtonsContainer>
          <CancelButton>Cancel</CancelButton>
          <ApplyButton>Apply</ApplyButton>
        </ButtonsContainer>
      </FilterPopUp>
    </Container>
  );
};
