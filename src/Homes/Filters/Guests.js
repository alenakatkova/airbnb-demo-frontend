import React from "react";
import styled from "styled-components";
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
  InnerContainer,
  OptionCell,
  OptionDescription,
  OptionName,
  OptionTable
} from "./styled";
import minusIcon from "./minusIcon.svg";
import plusIcon from "./plusIcon.svg";
import Counter from "./Counter";

export default class Guests extends React.Component {
  state = {
    isOpen: false,
    isChecked: false
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Container>
        <FilterButton onClick={this.toggleOpen}>Guests</FilterButton>
        {this.state.isOpen && (
          <Content>
            <MediaQuery query="(max-width: 767px)">
              <Header>
                <CancelButton onClick={this.toggleOpen} />
                <Heading>Guests</Heading>
                <ResetButton>Reset</ResetButton>
              </Header>
            </MediaQuery>
            <InnerContainer>
              <OptionTable>
                <OptionCell>
                  <OptionName>Adults</OptionName>
                </OptionCell>
                <OptionCell>
                  <Counter />
                </OptionCell>
              </OptionTable>
              <OptionTable>
                <OptionCell>
                  <OptionName>Children</OptionName>
                  <br />
                  <OptionDescription>Ages 2 — 12</OptionDescription>
                </OptionCell>
                <OptionCell>
                  <Counter />
                </OptionCell>
              </OptionTable>
              <OptionTable>
                <OptionCell>
                  <OptionName>Infants</OptionName>
                  <br />
                  <OptionDescription>Under 2</OptionDescription>
                </OptionCell>
                <OptionCell>
                  <Counter />
                </OptionCell>
              </OptionTable>
            </InnerContainer>
            <ButtonsContainer>
              <MediaQuery query="(min-width: 768px)">
                <CancelButton onClick={this.toggleOpen}>Cancel</CancelButton>
              </MediaQuery>
              <ApplyButton>
                <MediaQuery query="(max-width: 767px)">Save</MediaQuery>
                <MediaQuery query="(min-width: 768px)">Apply</MediaQuery>
              </ApplyButton>
            </ButtonsContainer>
          </Content>
        )}
      </Container>
    );
  }
}
