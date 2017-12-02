import React from "react";
import styled from "styled-components";
import { Md } from "../../mediaQueries";
import {
  Button,
  TopContainer,
  CancelButton as Cancel,
  Heading,
  Container,
  ResetButton
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
  display: flex;
  flex-flow: column nowrap;

  @media screen and (min-width: 768px) {
    top: 138px;
  }

  @media screen and (min-width: 992px) {
    background: rgba(255, 255, 255, 0.8);
    padding: 0;
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
    justify-content: flex-end;
    right: 0;
    bottom: -82px;
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

const Filters = styled.div`
  flex-basis: 100%;
  max-width: 100%;

  @media screen and (min-width: 992px) {
    flex-basis: 66.6667%;
    max-width: 66.6667%;
    position: relative;
    padding: 0 8px;
  }
`;

const InnerContainer = styled.div`
  overflow-y: auto;
  padding-bottom: 74px;

  @media screen and (min-width: 768px) {
    padding: 0 8px;
    padding-bottom: 194px;
  }

  @media screen and (min-width: 992px) {
    padding: 0 16px;
    padding-bottom: 224px;
  }
`;

const Background = styled.div`
  @media screen and (min-width: 992px) {
    width: calc(50% + 992px * 0.17);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -10;
    background: #ffffff;
  }

  @media screen and (min-width: 1200px) {
    width: calc(50% + 1200px * 0.17);
  }
`;

export default class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  onToggle = () => {
    this.props.onToggle(this.props.id, !this.state.isOpen);
  };

  onFilterClick = isOpen => {
    if (this.state.isOpen !== isOpen) {
      this.setState({ isOpen: !this.state.isOpen }, this.onToggle);
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
    this.props.apply(this.props.id);
    this.closeFilter();
  };

  onCancelButtonClick = () => {
    this.props.cancel(this.closeFilter);
  };

  onResetButtonClick = () => {
    this.props.reset();
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
              <Background />

              <TopContainer>
                <CancelButton onClick={this.onFilterClick} />
                <Heading>{this.props.label}</Heading>
                <ResetButton onClick={this.onResetButtonClick}>
                  Clear all
                </ResetButton>
              </TopContainer>

              <InnerContainer>
                <div className="container">
                  <div className="row">
                    <Filters>
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
                    </Filters>
                  </div>
                </div>
              </InnerContainer>
            </Content>
          )}
        </div>
      </Container>
    );
  }
}
