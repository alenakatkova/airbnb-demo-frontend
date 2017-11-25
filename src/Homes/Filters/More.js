import React from "react";
import styled from "styled-components";
import Price from "./Price";
import InstantBook from "./InstantBook";
import RoomType from "./RoomType";

export const Container = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  overflow-y: scroll;
  box-sizing: border-box;
  padding-top: 40px;
`;

export default class More extends React.Component {
  state = {
    room: {
      entire: false,
      private: false,
      shared: false
    },
    price: {
      min: 10,
      max: 1000,
      values: [10, 1000]
    },
    instant: {
      checked: false
    }
  };

  handleData = (data, key) => {
    this.setState(
      {
        [key]: data
      },
      this.passDataToParent
    );
  };

  passDataToParent = () => {
    this.props.handlerFromParent(this.state);
  };

  render() {
    return (
      <Container>
        <Price
          min={this.state.price.min}
          max={this.state.price.max}
          values={this.state.price.values}
          handlerFromParent={this.handleData}
        />
        <InstantBook
          checked={this.state.instant.checked}
          handlerFromParent={this.handleData}
        />
        <RoomType
          entire={this.state.room.entire}
          private={this.state.room.private}
          shared={this.state.room.shared}
          handlerFromParent={this.handleData}
        />
      </Container>
    );
  }
}
