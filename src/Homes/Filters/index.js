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
    selectedFilter: null
  };

  onFilterToggle = (key, isOpen) => {
    this.setState({ selectedFilter: isOpen ? key : null });
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
              >
                <RoomType />
              </Dropdown>
              <Dropdown
                id="price"
                label="Price"
                xsHeading="Price"
                onToggle={this.onFilterToggle}
              >
                <Price />
              </Dropdown>
            </Lg>

            <Dropdown
              id="dates"
              label={getLabel(this.state.selectedFilter) || "Dates"}
              xsHeading="When"
              onToggle={this.onFilterToggle}
            >
              <Dates />
            </Dropdown>

            <Dropdown
              id="guests"
              label="Guests"
              xsHeading="Guests"
              onToggle={this.onFilterToggle}
            >
              <Guests />
            </Dropdown>
          </Buttons>
        </div>
      </FiltersContainer>
    );
  }
}
