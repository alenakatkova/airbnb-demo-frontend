import React from "react";
import styled from "styled-components";
import { OnlyXs, Md } from "../../mediaQueries";
import {
  Button,
  TopContainer,
  Container,
  ApplyButton,
  CancelButton,
  Heading,
  ResetButton
} from "./styled";

const Content = styled.div`
  position: fixed;
  top: 138px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  box-sizing: border-box;
  background: #ffffff;
  padding: 8px;

  @media screen and (min-width: 992px) {
    width: calc(50% + 992px * 0.17);
  }

  @media screen and (min-width: 1200px) {
    width: calc(50% + 1200px * 0.17);
  }
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  z-index: 15;
  background: #ffffff;
  bottom: 138px;
  left: 0;
  width: 100%;
  padding: 8px;
  border-top: 1px solid #d5d5d5;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 50px;
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
  };

  onCancelButtonClick = () => {
    this.props.cancel(this.closeFilter);
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
                  <ResetButton>Reset</ResetButton>
                </TopContainer>
              </OnlyXs>

              {this.props.children}
              <OnlyXs>
                <ButtonsContainer>
                  <ApplyButton onClick={this.onApplyButtonClick}>
                    See homes
                  </ApplyButton>
                </ButtonsContainer>
              </OnlyXs>
              <Md>
                <ButtonsContainer>
                  <CancelButton onClick={this.onCancelButtonClick}>
                    Cancel
                  </CancelButton>
                  <ApplyButton onClick={this.onApplyButtonClick}>
                    Apply
                  </ApplyButton>
                </ButtonsContainer>
              </Md>
            </Content>
          )}
        </div>
      </Container>
    );
  }
}
