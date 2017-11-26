import React from "react";
import { FiltersContainer, Buttons } from "./styled";
import RoomType from "./RoomType";
import Price from "./Price";
import Guests from "./Guests";
import Dates from "./Dates";
import InstantBook from "./InstantBook";
import More from "./More";
import Dropdown from "./Dropdown";
import MoreFiltersDropdown from "./MoreFiltersDropdow";
import { Lg } from "../../mediaQueries";

function getLabel(filterName) {
  if (filterName === "dates") {
    return "Check in — Check out";
  }
}

export default class Filters extends React.Component {
  state = {
    selectedFilter: null,
    selectedFilterData: {},
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

  handleData = (data, key = "") => {
    this.setState({
      selectedFilterData: data
    });
  };

  onFilterToggle = (key, isOpen) => {
    this.setState({ selectedFilter: isOpen ? key : null });
  };

  onApplyClick = (key, closeFilter) => {
    if (key === "more") {
      this.setState(
        {
          price: this.state.selectedFilterData.price,
          instant: this.state.selectedFilterData.instant,
          superhost: this.state.selectedFilterData.superhost,
          room: this.state.selectedFilterData.room,
          amenities: this.state.selectedFilterData.amenities,
          facilities: this.state.selectedFilterData.facilities,
          roomsAndBeds: this.state.selectedFilterData.roomsAndBeds
        },
        closeFilter()
      );
    } else {
      this.setState({ [key]: this.state.selectedFilterData }, closeFilter());
    }
  };

  onCancelClick = closeFilter => {
    closeFilter();
  };

  render() {
    return (
      <FiltersContainer>
        <div className="container">
          <Buttons>
            <Lg>
              <Dropdown
                id="room"
                label="Room type"
                xsHeading="Room type"
                onToggle={this.onFilterToggle}
                apply={this.onApplyClick}
                cancel={this.onCancelClick}
              >
                <RoomType
                  entire={this.state.room.entire}
                  private={this.state.room.private}
                  shared={this.state.room.shared}
                  handlerFromParent={this.handleData}
                />
              </Dropdown>

              <Dropdown
                id="instant"
                label="Instant book"
                xsHeading="Instant book"
                onToggle={this.onFilterToggle}
                apply={this.onApplyClick}
                cancel={this.onCancelClick}
              >
                <InstantBook
                  checked={this.state.instant.checked}
                  handlerFromParent={this.handleData}
                />
              </Dropdown>

              <Dropdown
                id="price"
                label="Price"
                xsHeading="Price"
                onToggle={this.onFilterToggle}
                apply={this.onApplyClick}
                cancel={this.onCancelClick}
              >
                <Price
                  min={this.state.price.min}
                  max={this.state.price.max}
                  values={this.state.price.values}
                  handlerFromParent={this.handleData}
                />
              </Dropdown>
            </Lg>

            <Dropdown
              id="dates"
              label={getLabel(this.state.selectedFilter) || "Dates"}
              xsHeading="When"
              onToggle={this.onFilterToggle}
              apply={this.onApplyClick}
              cancel={this.onCancelClick}
            >
              <Dates
                startDate={this.state.dates.startDate}
                endDate={this.state.dates.endDate}
                handlerFromParent={this.handleData}
              />
            </Dropdown>

            <Dropdown
              id="guests"
              label="Guests"
              xsHeading="Guests"
              onToggle={this.onFilterToggle}
              apply={this.onApplyClick}
              cancel={this.onCancelClick}
              showApplyOnXs
            >
              <Guests
                adults={this.state.guests.adults}
                children={this.state.guests.children}
                infants={this.state.guests.infants}
                handlerFromParent={this.handleData}
              />
            </Dropdown>

            <MoreFiltersDropdown
              id="more"
              label="More filters"
              xsHeading="More filters"
              onToggle={this.onFilterToggle}
              apply={this.onApplyClick}
              cancel={this.onCancelClick}
            >
              <More
                handlerFromParent={this.handleData}
                instant={this.state.instant.checked}
                superhost={this.state.superhost.checked}
                min={this.state.price.min}
                max={this.state.price.max}
                entire={this.state.room.entire}
                private={this.state.room.private}
                shared={this.state.room.shared}
                values={this.state.price.values}
                heating={this.state.amenities.heating}
                kitchen={this.state.amenities.kitchen}
                tv={this.state.amenities.tv}
                wireless={this.state.amenities.wireless}
                parking={this.state.facilities.parking}
                wheelchair={this.state.facilities.wheelchair}
                pool={this.state.facilities.pool}
                elevator={this.state.facilities.elevator}
                bedrooms={this.state.roomsAndBeds.bedrooms}
                bathrooms={this.state.roomsAndBeds.bathrooms}
                beds={this.state.roomsAndBeds.beds}
              />
            </MoreFiltersDropdown>
          </Buttons>
        </div>
      </FiltersContainer>
    );
  }
}
