import React from "react";
import { FiltersContainer, Buttons } from "./styled";
import RoomType from "../Filters/RoomType";
import Price from "../Filters/Price";
import Guests from "../Filters/Guests";
import Dates from "../Filters/Dates";
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
    }
  };

  handleData = data => {
    this.setState({
      selectedFilterData: data
    });
  };

  onFilterToggle = (key, isOpen) => {
    this.setState({ selectedFilter: isOpen ? key : null });
  };

  onApplyClick = (key, closeFilter) => {
    this.setState({ [key]: this.state.selectedFilterData }, closeFilter());
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
                <RoomType />
              </Dropdown>
              <Dropdown
                id="price"
                label="Price"
                xsHeading="Price"
                onToggle={this.onFilterToggle}
                apply={this.onApplyClick}
                cancel={this.onCancelClick}
              >
                <Price />
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
          </Buttons>
        </div>
      </FiltersContainer>
    );
  }
}
