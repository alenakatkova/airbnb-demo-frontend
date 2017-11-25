import React from "react";
import styled from "styled-components";
import unchecked from "./unchecked.svg";
import checked from "./checked.svg";

const Container = styled.div`
  position: relative;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 7px;
  margin-bottom: 45px;
  font-family: "CircularAir-Light", "Arial Bold", sans-serif;
  line-height: 18px;
  font-size: 14px;
  color: #383838;
  max-width: 200px;
`;

const Button = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 15px;
  right: 0;
  padding: 0;
`;

export default class InstantBook extends React.Component {
  state = {
    checked: this.props.checked
  };

  passDataToParent = () => {
    this.props.handlerFromParent(this.state);
  };

  onButtonClick = sliderState => {
    this.setState(
      {
        checked: !this.state.checked
      },
      this.passDataToParent
    );
  };

  render() {
    return (
      <Container>
        <Title>Instant Book</Title>
        <Description>
          Listings you can book without waiting for host approval.
        </Description>
        <Button onClick={this.onButtonClick}>
          {this.state.checked ? (
            <img src={checked} alt="button" />
          ) : (
            <img src={unchecked} alt="button" />
          )}
        </Button>
      </Container>
    );
  }
}
