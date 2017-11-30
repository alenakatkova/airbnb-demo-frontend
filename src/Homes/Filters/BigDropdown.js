import React from "react";
import styled from "styled-components";
import { OnlyXs, Md } from "../../mediaQueries";
import {
  Button,
  TopContainer,
  Container,
  CancelButton as Cancel,
  Heading,
  ResetButton,
  Background
} from "./styled";

const Content = styled.div`
  position: fixed;
  top: 48px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  box-sizing: border-box;
  background: #ffffff;
  padding: 8px;

  @media screen and (min-width: 768px) {
    top: 138px;
  }

  @media screen and (min-width: 992px) {
    width: calc(50% + 992px * 0.17);
  }

  @media screen and (min-width: 1200px) {
    width: calc(50% + 1200px * 0.17);
  }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  z-index: 15;
  background: #ffffff;
  bottom: 48px;
  left: 0;
  width: 100%;
  padding: 8px;
  border-top: 1px solid #d5d5d5;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 40px;
    bottom: 138px;
  }

  @media screen and (min-width: 992px) {
    padding-left: calc(50% - 992px * 0.32);
    justify-content: flex-end;
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc(50% - 1200px * 0.32);
  }
`;

const ApplyButton = styled.button`
  border: none;
  margin: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  padding: 13px 0;
  width: 100%;
  text-align: center;
  background: #ff5a5f;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    position: static;
    background: #008489;
    padding: 0 12px;
    display: inline-flex;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    width: auto;
    padding: 12px 28px;
  }
`;

const CancelButton = Cancel.extend`
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export default class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  onFilterClick = isOpen => {
    if (this.state.isOpen !== isOpen) {
      this.setState(
        { isOpen: !this.state.isOpen },
        this.props.onToggle(this.props.id, !this.state.isOpen)
      );
    }
  };

  onOutsideClick = e => {
    if (this.element && !this.element.contains(e.target)) {
      this.onFilterClick(false);
    }
  };

  onEscPress = e => {
    if (e.keyCode === 27) {
      this.onFilterClick(false);
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.onOutsideClick, true);
    document.addEventListener("keydown", this.onEscPress, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onOutsideClick, true);
    document.removeEventListener("keydown", this.onEscPress, true);
  }

  closeFilter = () => {
    this.onFilterClick(false);
  };

  onApplyButtonClick = () => {
    this.props.apply(this.props.id, this.closeFilter);
    this.closeFilter();
  };

  onCancelButtonClick = () => {
    this.props.cancel(this.closeFilter);
  };

  onResetButtonClick = () => {
    this.props.reset(this.props.id);
  };

  render() {
    return (
      <Container>
        <div
          ref={element => {
            this.element = element;
          }}
        >
          <Button isOpen={this.state.isOpen} onClick={this.onFilterClick}>
            {this.props.label}
          </Button>

          {this.state.isOpen && (
            <Content>
              <OnlyXs>
                <TopContainer>
                  <CancelButton onClick={this.onFilterClick} />
                  <Heading>{this.props.xsHeading}</Heading>
                  <ResetButton onClick={this.onResetButtonClick}>
                    Clear all
                  </ResetButton>
                </TopContainer>
              </OnlyXs>

              {this.props.children}

              <ButtonsContainer>
                <Md>
                  <CancelButton onClick={this.onCancelButtonClick}>
                    Cancel
                  </CancelButton>
                </Md>
                <ApplyButton onClick={this.onApplyButtonClick}>
                  See homes
                </ApplyButton>
              </ButtonsContainer>
            </Content>
          )}
          {this.state.isOpen && <Background />}
        </div>
      </Container>
    );
  }
}
