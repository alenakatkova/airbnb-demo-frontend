import React from "react";
import RoomsAndBeds from "./RoomsAndBeds";
import styled from "styled-components";
import Dropdown from "../BigDropdown";
import Checkbox from "../Checkbox";
import entireIcon from "../RoomType/roomEntire.svg";
import privateIcon from "../RoomType/roomPrivate.svg";
import sharedIcon from "../RoomType/roomShared.svg";
import Rheostat from "rheostat";
import "../Price/slider.css";
import priceStats from "../Price/price.svg";
import unchecked from "./unchecked.svg";
import checked from "./checked.svg";
import {
  Range,
  Average,
  Stats,
  Section,
  Title,
  MainText,
  Description,
  RheostatContainer,
  InnerContainer,
  Div,
  Text,
  Heading,
  Button,
  LearnMore
} from "./styled";

const FiltersContainer = styled.div`
  @media screen and (min-width: 992px) {
    display: none;
  }
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

  onApplyClick = () => {
    this.props.apply(this.state);
  };

  onCancelClick = closeFilter => {
    this.setState(
      {
        roomsAndBeds: this.props.roomsAndBeds,
        amenities: this.props.amenities,
        facilities: this.props.facilities,
        superhost: this.props.superhost,
        room: this.props.room,
        price: this.props.price,
        instant: this.props.instant
      },
      closeFilter
    );
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      roomsAndBeds: nextProps.roomsAndBeds,
      amenities: nextProps.amenities,
      facilities: nextProps.facilities,
      superhost: nextProps.superhost,
      room: nextProps.room,
      price: nextProps.price,
      instant: nextProps.instant
    });
  };

  onRoomsAndBedCount = (key, value) => {
    this.setState(prevState => ({
      roomsAndBeds: {
        ...prevState.roomsAndBeds,
        [key]: value
      }
    }));
  };

  checkFacility = key => {
    this.setState(prevState => ({
      facilities: {
        ...prevState.facilities,
        [key]: !this.state.facilities[key]
      }
    }));
  };

  checkAmenity = key => {
    this.setState(prevState => ({
      amenities: { ...prevState.amenities, [key]: !this.state.amenities[key] }
    }));
  };

  checkRoomType = key => {
    this.setState(prevState => ({
      room: { ...prevState.room, [key]: !this.state.room[key] }
    }));
  };

  onPriceValuesChange = (sliderState, key) => {
    this.setState(prevState => ({
      price: { ...prevState.price, [key]: sliderState.values }
    }));
  };

  onSuperhostClick = key => {
    this.setState(prevState => ({
      superhost: { ...prevState.superhost, [key]: !this.state.superhost[key] }
    }));
  };

  onInstantClick = key => {
    this.setState(prevState => ({
      instant: { ...prevState.instant, [key]: !this.state.instant[key] }
    }));
  };

  render() {
    return (
      <Dropdown
        apply={this.onApplyClick}
        cancel={this.onCancelClick}
        onToggle={this.props.toggle}
        reset={this.props.reset}
        id="more"
        label={"More filters"}
      >
        <div>
          <FiltersContainer>
            <Section>
              <Title>Room type</Title>
              <Checkbox
                id="entire"
                checkboxName="room-type"
                value="Entire home"
                checked={this.state.room.entire}
                src={entireIcon}
                alt="Entire home"
                check={this.checkRoomType}
              >
                <MainText>Entire home</MainText>
                <br />
                <Description>Have a place to yourself</Description>
              </Checkbox>

              <Checkbox
                id="private"
                checkboxName="room-type"
                value="Private home"
                checked={this.state.room.private}
                src={privateIcon}
                alt="Private home"
                check={this.checkRoomType}
              >
                <MainText>Private room</MainText>
                <br />
                <Description>
                  Have your own room and share some common spaces
                </Description>
              </Checkbox>

              <Checkbox
                id="shared"
                checkboxName="room-type"
                value="Shared home"
                checked={this.state.room.shared}
                src={sharedIcon}
                alt="Shared home"
                check={this.checkRoomType}
              >
                <MainText>Shared room</MainText>
                <br />
                <Description>
                  Stay in a shared space, like a common room
                </Description>
              </Checkbox>
            </Section>

            <Section>
              <Title>Price range</Title>
              <Range>
                ${this.state.price.values[0]} — ${this.state.price.values[1]}+
              </Range>
              <Average>The average nightly price is $75.</Average>

              <RheostatContainer>
                <Stats src={priceStats} alt="Price stats" />
                <Rheostat
                  min={this.state.price.min}
                  max={this.state.price.max}
                  onValuesUpdated={sliderState =>
                    this.onPriceValuesChange(sliderState, "values")
                  }
                  values={this.state.price.values}
                />
              </RheostatContainer>
            </Section>
          </FiltersContainer>

          <Section>
            <InnerContainer>
              <Title>Rooms and beds</Title>
              <RoomsAndBeds
                roomsAndBeds={this.state.roomsAndBeds}
                count={this.onRoomsAndBedCount}
              />
            </InnerContainer>
          </Section>

          <Section>
            <InnerContainer>
              <Title>More options</Title>
              <FiltersContainer>
                <Div>
                  <Heading>Instant Book</Heading>
                  <Text>
                    Secure a reservation instantly.
                    <LearnMore>Learn more</LearnMore>
                  </Text>

                  <Button onClick={() => this.onInstantClick("checked")}>
                    <img
                      src={this.state.instant.checked ? checked : unchecked}
                      alt="button"
                    />
                  </Button>
                </Div>
              </FiltersContainer>

              <Div>
                <Heading>SuperHost</Heading>
                <Text>
                  Stay with recognized hosts.
                  <LearnMore>Learn more</LearnMore>
                </Text>
                <Button onClick={() => this.onSuperhostClick("checked")}>
                  <img
                    src={this.state.superhost.checked ? checked : unchecked}
                    alt="button"
                  />
                </Button>
              </Div>
            </InnerContainer>
          </Section>

          <Section>
            <Title>Amenities</Title>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <Checkbox
                  id="heating"
                  checkboxName="amenities"
                  value="heating"
                  checked={this.state.amenities.heating}
                  check={this.checkAmenity}
                >
                  <MainText>Heating</MainText>
                </Checkbox>
              </div>
              <div className="col-xs-12 col-md-6">
                <Checkbox
                  id="kitchen"
                  checkboxName="amenities"
                  value="kitchen"
                  checked={this.state.amenities.kitchen}
                  check={this.checkAmenity}
                >
                  <MainText>Kitchen</MainText>
                </Checkbox>
              </div>
              <div className="col-xs-12 col-md-6">
                <Checkbox
                  id="tv"
                  checkboxName="amenities"
                  value="tv"
                  checked={this.state.amenities.tv}
                  check={this.checkAmenity}
                >
                  <MainText>TV</MainText>
                </Checkbox>
              </div>
              <div className="col-xs-12 col-md-6">
                <Checkbox
                  id="wireless"
                  checkboxName="amenities"
                  value="wireless"
                  checked={this.state.amenities.wireless}
                  check={this.checkAmenity}
                >
                  <MainText>Wireless Internet</MainText>
                </Checkbox>
              </div>
            </div>
          </Section>

          <Section>
            <Title>Facilities</Title>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <Checkbox
                  id="elevator"
                  checkboxName="facilities"
                  value="elevator"
                  checked={this.state.facilities.elevator}
                  check={this.checkFacility}
                >
                  <MainText>Elevator</MainText>
                </Checkbox>
              </div>
              <div className="col-xs-12 col-md-6">
                <Checkbox
                  id="parking"
                  checkboxName="facilities"
                  value="parking"
                  checked={this.state.facilities.parking}
                  check={this.checkFacility}
                >
                  <MainText>Free parking on premises</MainText>
                </Checkbox>
              </div>
              <div className="col-xs-12 col-md-6">
                <Checkbox
                  id="pool"
                  checkboxName="facilities"
                  value="pool"
                  checked={this.state.facilities.pool}
                  check={this.checkFacility}
                >
                  <MainText>Pool</MainText>
                </Checkbox>
              </div>
              <div className="col-xs-12 col-md-6">
                <Checkbox
                  id="wheelchair"
                  checkboxName="facilities"
                  value="wheelchair"
                  checked={this.state.facilities.wheelchair}
                  check={this.checkFacility}
                >
                  <MainText>Wheelchair accessible</MainText>
                </Checkbox>
              </div>
            </div>
          </Section>
        </div>
      </Dropdown>
    );
  }
}
