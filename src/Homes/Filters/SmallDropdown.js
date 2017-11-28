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
  InnerContainer,
  Background
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
                  <ResetButton onClick={this.onResetButtonClick}>
                    Reset
                  </ResetButton>
                </TopContainer>
              </OnlyXs>

              <InnerContainer>{this.props.children}</InnerContainer>

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

              {this.props.showApplyOnXs && (
                <OnlyXs>
                  <ButtonsContainer>
                    <ApplyButton onClick={this.onApplyButtonClick}>
                      Save
                    </ApplyButton>
                  </ButtonsContainer>
                </OnlyXs>
              )}
            </Content>
          )}
          {this.state.isOpen && <Background />}
        </div>
      </Container>
    );
  }
}
