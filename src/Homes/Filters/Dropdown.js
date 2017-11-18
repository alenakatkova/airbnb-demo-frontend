import React from "react";
import MediaQuery from "react-responsive";
import {
  FilterButton,
  Header,
  Content,
  Container,
  ApplyButton,
  CancelButton,
  ButtonsContainer,
  Heading,
  ResetButton,
  InnerContainer
} from "./styled";

export default class Guests extends React.Component {
  state = {
    isOpen: false,
    isChecked: false
  };

  toggleOpen = e => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Container>
        {this.state.isOpen ? (
          <FilterButton onClick={this.toggleOpen} isOpen>
            {this.state.isOpen
              ? this.props.dynamicButtonName
              : this.props.filterName}
          </FilterButton>
        ) : (
          <FilterButton onClick={this.toggleOpen}>
            {this.props.filterName}
          </FilterButton>
        )}

        {this.state.isOpen && (
          <Content>
            <MediaQuery query="(max-width: 767px)">
              <Header>
                <CancelButton onClick={this.toggleOpen} />
                <Heading>{this.props.filterName}</Heading>
                <ResetButton>Reset</ResetButton>
              </Header>
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
