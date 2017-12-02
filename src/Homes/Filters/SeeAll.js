import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";
import { Md } from "../../mediaQueries";

const Button = styled.button`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #0f7276;
  padding: 0;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 13px;
  background: none;
  position: relative;
  border: none;
  cursor: pointer;

  :after {
    content: "";
    position: absolute;
    top: 45%;
    right: 0;
    width: 11.37px;
    height: 6.31px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: right center;
  }

  @media screen and (min-width: 768px) {
    line-height: 19px;
    font-size: 16px;
    display: ${props => (props.isOpen ? "none" : "static")};
  }
`;

const Title = styled.h2`
  margin: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  margin-bottom: 23px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: centre;
`;

export default class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  onSeAllClick = isOpen => {
    if (this.state.isOpen !== isOpen) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  render() {
    return (
      <div>
        <FlexContainer>
          <Title>{this.props.title}</Title>
          <Button isOpen={this.state.isOpen} onClick={this.onSeAllClick}>
            {this.props.label}
          </Button>
        </FlexContainer>

        {this.state.isOpen && (
          <div>
            {this.props.children}
            <Md>
              <Button isOpen={!this.state.isOpen} onClick={this.onSeAllClick}>
                Hide
              </Button>
            </Md>
          </div>
        )}
      </div>
    );
  }
}
