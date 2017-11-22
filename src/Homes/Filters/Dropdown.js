import React from "react";
import { OnlyXs, Md } from "../../mediaQueries";
import {
  Button,
  TopContainer,
  Content,
  Container,
  ApplyButton,
  CancelButton,
  ButtonsContainer,
  Heading,
  ResetButton,
  InnerContainer
} from "./styled";

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

              <InnerContainer>{this.props.children}</InnerContainer>

              <Md>
                <ButtonsContainer>
                  <CancelButton onClick={this.onFilterClick}>
                    Cancel
                  </CancelButton>
                  <ApplyButton>Apply</ApplyButton>
                </ButtonsContainer>
              </Md>
            </Content>
          )}
        </div>
      </Container>
    );
  }
}
