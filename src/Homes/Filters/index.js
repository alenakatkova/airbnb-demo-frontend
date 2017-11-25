import React from "react";
import { FiltersContainer, Buttons } from "./styled";
import RoomType from "./RoomType";
import Price from "./Price";
import Guests from "./Guests";
import Dates from "./Dates";
import InstantBook from "./InstantBook";
import More from "./More";
import Dropdown from "./Dropdown";
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
          room: this.state.selectedFilterData.room
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
            >
              <Guests
                adults={this.state.guests.adults}
                children={this.state.guests.children}
                infants={this.state.guests.infants}
                handlerFromParent={this.handleData}
              />
            </Dropdown>

            <Dropdown
              id="more"
              label="More filters"
              xsHeading="More filters"
              onToggle={this.onFilterToggle}
              apply={this.onApplyClick}
              cancel={this.onCancelClick}
            >
              <More handlerFromParent={this.handleData} />
            </Dropdown>
          </Buttons>
        </div>
      </FiltersContainer>
    );
  }
}
