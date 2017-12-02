import React from "react";
import { FiltersContainer, Buttons } from "./styled";
import RoomType from "./RoomType";
import Price from "./Price";
import Guests from "./Guests";
import Dates from "./Dates";
import InstantBook from "./InstantBook";
import More from "./More";
import { Lg } from "../../mediaQueries";

export default class Filters extends React.Component {
  initialState = {
    selectedFilter: null,
    dates: {
      startDate: null,
      endDate: null
    },
    guests: {
      adults: 1,
      children: 0,
      infants: 0
    },
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
    },
    superhost: {
      checked: false
    },
    amenities: {
      heating: false,
      kitchen: false,
      tv: false,
      wireless: false
    },
    facilities: {
      elevator: false,
      parking: false,
      pool: false,
      wheelchair: false
    },
    roomsAndBeds: {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0
    }
  };

  state = this.initialState;

  onFilterToggle = (key, isOpen) => {
    this.setState({ selectedFilter: isOpen ? key : null });
  };

  onApplyClick = (key, data) => {
    this.setState({ [key]: data });
  };

  onMoreApplyClick = data => {
    this.setState({
      price: data.price,
      instant: data.instant,
      superhost: data.superhost,
      room: data.room,
      amenities: data.amenities,
      facilities: data.facilities,
      roomsAndBeds: data.roomsAndBeds
    });
  };

  onResetClick = key => {
    this.setState({ [key]: this.initialState[key] });
  };

  onMoreResetClick = () => {
    this.setState({
      price: this.initialState.price,
      instant: this.initialState.instant,
      superhost: this.initialState.superhost,
      room: this.initialState.room,
      amenities: this.initialState.amenities,
      facilities: this.initialState.facilities,
      roomsAndBeds: this.initialState.roomsAndBeds
    });
  };

  render() {
    return (
      <FiltersContainer>
        <div className="container">
          <Buttons>
            <Dates
              dates={this.state.dates}
              toggle={this.onFilterToggle}
              apply={this.onApplyClick}
              cancel={this.onCancelClick}
              reset={this.onResetClick}
              isSelected={this.state.selectedFilter === "dates"}
            />
            <Guests
              guests={this.state.guests}
              toggle={this.onFilterToggle}
              apply={this.onApplyClick}
              cancel={this.onCancelClick}
              reset={this.onResetClick}
            />
            <Lg>
              <RoomType
                room={this.state.room}
                toggle={this.onFilterToggle}
                apply={this.onApplyClick}
                cancel={this.onCancelClick}
                reset={this.onResetClick}
              />
              <InstantBook
                instant={this.state.instant}
                toggle={this.onFilterToggle}
                apply={this.onApplyClick}
                cancel={this.onCancelClick}
                reset={this.onResetClick}
              />
              <Price
                price={this.state.price}
                toggle={this.onFilterToggle}
                apply={this.onApplyClick}
                cancel={this.onCancelClick}
                reset={this.onResetClick}
                initialState={this.initialState.price}
              />
            </Lg>
            <More
              roomsAndBeds={this.state.roomsAndBeds}
              room={this.state.room}
              superhost={this.state.superhost}
              instant={this.state.instant}
              price={this.state.price}
              facilities={this.state.facilities}
              amenities={this.state.amenities}
              toggle={this.onFilterToggle}
              apply={this.onMoreApplyClick}
              cancel={this.onCancelClick}
              reset={this.onMoreResetClick}
            />
          </Buttons>
        </div>
      </FiltersContainer>
    );
  }
}
