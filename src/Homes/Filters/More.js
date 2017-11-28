import React from "react";
import styled from "styled-components";
import Price from "./Price";
import InstantBook from "./InstantBook";
import RoomType from "./RoomType";
import Amenities from "./Amenities";
import Facilities from "./Facilities";
import RoomsAndBeds from "./RoomsAndBeds";
import Superhost from "./Superhost";
import { OnlyXsAndMd, OnlyXs, Md } from "../../mediaQueries";
import SeeAll from "./SeeAll";

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
  @media screen and (min-width: 768px) {
    max-width: 60%;
  }
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
      entire: this.props.room.entire,
      private: this.props.room.private,
      shared: this.props.room.shared
    },
    price: {
      min: this.props.price.min,
      max: this.props.price.max,
      values: this.props.price.values
    },
    instant: {
      checked: this.props.instant.checked
    },
    superhost: {
      checked: this.props.superhost.checked
    },
    amenities: {
      heating: this.props.amenities.heating,
      kitchen: this.props.amenities.kitchen,
      tv: this.props.amenities.tv,
      wireless: this.props.amenities.wireless
    },
    facilities: {
      elevator: this.props.facilities.elevator,
      parking: this.props.facilities.parking,
      pool: this.props.facilities.pool,
      wheelchair: this.props.facilities.wheelchair
    },
    roomsAndBeds: {
      bedrooms: this.props.roomsAndBeds.bedrooms,
      beds: this.props.roomsAndBeds.beds,
      bathrooms: this.props.roomsAndBeds.bathrooms
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
              room={this.state.room}
              handlerFromParent={this.handleData}
            />
          </Section>

          <Section>
            <Title>Price range</Title>
            <Price
              handlerFromParent={this.handleData}
              price={this.state.price}
            />
          </Section>
        </OnlyXsAndMd>
        <Section>
          <InnerContainer>
            <Title>Rooms and beds</Title>
            <RoomsAndBeds
              handlerFromParent={this.handleData}
              roomsAndBeds={this.state.roomsAndBeds}
            />
          </InnerContainer>
        </Section>

        <Section>
          <InnerContainer>
            <Title>More options</Title>
            <OnlyXsAndMd>
              <InstantBook
                instant={this.state.instant}
                handlerFromParent={this.handleData}
                inMoreFilters
              />
            </OnlyXsAndMd>
            <Superhost
              superhost={this.state.superhost}
              handlerFromParent={this.handleData}
            />
          </InnerContainer>
        </Section>

        <Section>
          <OnlyXs>
            <SeeAll title="Amenities" label="See all">
              <Amenities
                handlerFromParent={this.handleData}
                amenities={this.state.amenities}
              />
            </SeeAll>
          </OnlyXs>

          <Md>
            <Title>Amenities</Title>
            <Amenities
              handlerFromParent={this.handleData}
              amenities={this.state.amenities}
            />
            <SeeAll label="See all amenities" />
          </Md>
        </Section>

        <Section>
          <OnlyXs>
            <SeeAll title="Facilities" label="See all">
              <Facilities
                handlerFromParent={this.handleData}
                facilities={this.state.facilities}
              />
            </SeeAll>
          </OnlyXs>

          <Md>
            <Title>Facilities</Title>
            <Facilities
              handlerFromParent={this.handleData}
              facilities={this.state.facilities}
            />
            <SeeAll label="See all facilities" />
          </Md>
        </Section>
      </Container>
    );
  }
}
