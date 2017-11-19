import React from "react";
import MediaQuery from "react-responsive";
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

  toggleOpen = e => {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.onToggle(this.state.isOpen);
  };

  render() {
    return (
      <Container>
        <Button onClick={this.toggleOpen} isOpen={this.state.isOpen}>
          {this.props.label}
        </Button>

        {this.state.isOpen && (
          <Content>
            <MediaQuery query="(max-width: 767px)">
              <TopContainer>
                <CancelButton onClick={this.toggleOpen} />
                <Heading>{this.props.xsHeading}</Heading>
                <ResetButton>Reset</ResetButton>
              </TopContainer>
            </MediaQuery>

            <InnerContainer>{this.props.children}</InnerContainer>

            <MediaQuery query="(min-width: 768px)">
              <ButtonsContainer>
                <CancelButton onClick={this.toggleOpen}>Cancel</CancelButton>
                <ApplyButton>Apply</ApplyButton>
              </ButtonsContainer>
            </MediaQuery>
          </Content>
        )}
      </Container>
    );
  }
}
