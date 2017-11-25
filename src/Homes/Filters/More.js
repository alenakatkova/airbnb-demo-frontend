import React from "react";
import styled from "styled-components";
import Price from "./Price";
import InstantBook from "./InstantBook";
import RoomType from "./RoomType";
import Amenities from "./Amenities";
import Facilities from "./Facilities";
import RoomsAndBeds from "./RoomsAndBeds";
import Superhost from "./Superhost";
import { OnlyXsAndMd } from "../../mediaQueries";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 96px;
  width: 100%;
  height: auto;
  overflow-y: scroll;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    bottom: 200px;
  }

  @media screen and (min-width: 992px) {
    padding-left: calc(50% - 992px * 0.32);
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc(50% - 1200px * 0.32);
  }
`;

const Section = styled.section`
  padding: 32px 0;
  background: #ffffff;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  bottom: 202px;
`;

const InnerContainer = styled.div`
  max-width: 60%;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  margin-bottom: 23px;
`;

export default class More extends React.Component {
  state = {
    room: {
      entire: this.props.entire,
      private: this.props.private,
      shared: this.props.shared
    },
    price: {
      min: this.props.min,
      max: this.props.max,
      values: this.props.values
    },
    instant: {
      checked: this.props.instant
    },
    superhost: {
      checked: this.props.superhost
    },
    amenities: {
      heating: this.props.heating,
      kitchen: this.props.kitchen,
      tv: this.props.tv,
      wireless: this.props.wireless
    },
    facilities: {
      elevator: this.props.elevator,
      parking: this.props.parking,
      pool: this.props.pool,
      wheelchair: this.props.wheelchair
    },
    roomsAndBeds: {
      bedrooms: this.props.bedrooms,
      beds: this.props.beds,
      bathrooms: this.props.bathrooms
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
        <OnlyXsAndMd>
          <Section>
            <Title>Room type</Title>
            <RoomType
              entire={this.state.room.entire}
              private={this.state.room.private}
              shared={this.state.room.shared}
              handlerFromParent={this.handleData}
            />
          </Section>

          <Section>
            <Title>Price range</Title>
            <Price
              min={this.state.price.min}
              max={this.state.price.max}
              values={this.state.price.values}
              handlerFromParent={this.handleData}
            />
          </Section>
        </OnlyXsAndMd>
        <Section>
          <InnerContainer>
            <Title>Rooms and beds</Title>
            <RoomsAndBeds
              handlerFromParent={this.handleData}
              bedrooms={this.state.roomsAndBeds.bedrooms}
              bathrooms={this.state.roomsAndBeds.bathrooms}
              beds={this.state.roomsAndBeds.beds}
            />
          </InnerContainer>
        </Section>

        <Section>
          <InnerContainer>
            <Title>More options</Title>
            <OnlyXsAndMd>
              <InstantBook
                checked={this.state.instant.checked}
                handlerFromParent={this.handleData}
                inMoreFilters
              />
            </OnlyXsAndMd>
            <Superhost
              checked={this.state.superhost.checked}
              handlerFromParent={this.handleData}
            />
          </InnerContainer>
        </Section>

        <Section>
          <Title>Amenities</Title>
          <Amenities
            handlerFromParent={this.handleData}
            heating={this.state.amenities.heating}
            kitchen={this.state.amenities.kitchen}
            tv={this.state.amenities.tv}
            wireless={this.state.amenities.wireless}
          />
        </Section>

        <Section>
          <Title>Facilities</Title>
          <Facilities
            handlerFromParent={this.handleData}
            parking={this.state.facilities.parking}
            wheelchair={this.state.facilities.wheelchair}
            pool={this.state.facilities.pool}
            elevator={this.state.facilities.elevator}
          />
        </Section>
      </Container>
    );
  }
}
