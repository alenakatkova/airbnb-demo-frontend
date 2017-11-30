import React from "react";
import { FiltersContainer, Buttons } from "./styled";
import RoomType from "./RoomType";
import Price from "./Price";
import Guests from "./Guests";
import Dates from "./Dates";
import InstantBook from "./InstantBook";
import More from "./More";
import SmallDropdown from "./SmallDropdown";
import BigDropdown from "./BigDropdown";
import { Lg } from "../../mediaQueries";
import { getDatesLabel } from "./labels";

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
    this.setState({ [key]: data }, function() {
      console.log(this.state.guests);
    });
  };

  onResetClick = key => {
    this.setState({ [key]: this.initialState[key] }, function() {
      console.log(this.state.guests);
    });
  };

  render() {
    console.log(this.state.guests);
    return (
      <FiltersContainer>
        <div className="container">
          <Buttons>
            <Guests
              guests={this.state.guests}
              toggle={this.onFilterToggle}
              apply={this.onApplyClick}
              cancel={this.onCancelClick}
              reset={this.onResetClick}
            />
          </Buttons>
        </div>
      </FiltersContainer>
    );
  }
}

// state = {
//   selectedFilter: null,
//   selectedFilterData: {},
//   dates: {
//     startDate: null,
//     endDate: null
//   },
//   guests: {
//     adults: 1,
//     children: 0,
//     infants: 0
//   },
//   room: {
//     entire: false,
//     private: false,
//     shared: false
//   },
//   price: {
//     min: 10,
//     max: 1000,
//     values: [10, 1000]
//   },
//   instant: {
//     checked: false
//   },
//   superhost: {
//     checked: false
//   },
//   amenities: {
//     heating: false,
//     kitchen: false,
//     tv: false,
//     wireless: false
//   },
//   facilities: {
//     elevator: false,
//     parking: false,
//     pool: false,
//     wheelchair: false
//   },
//   roomsAndBeds: {
//     bedrooms: 0,
//     beds: 0,
//     bathrooms: 0
//   }
// };

// handleData = (data, key = "") => {
//   this.setState({
//     selectedFilterData: data
//   });
// };

// onFilterToggle = (key, isOpen) => {
//   this.setState({ selectedFilter: isOpen ? key : null });
// };

// onApplyClick = (key, closeFilter) => {
//   if (key === "more") {
//     this.setState(
//       {
//         price: this.state.selectedFilterData.price,
//         instant: this.state.selectedFilterData.instant,
//         superhost: this.state.selectedFilterData.superhost,
//         room: this.state.selectedFilterData.room,
//         amenities: this.state.selectedFilterData.amenities,
//         facilities: this.state.selectedFilterData.facilities,
//         roomsAndBeds: this.state.selectedFilterData.roomsAndBeds
//       },
//       closeFilter()
//     );
//   } else {
//     this.setState({ [key]: this.state.selectedFilterData }, closeFilter());
//   }
// };

// onCancelClick = closeFilter => {
//   closeFilter();
// };

{
  /* <SmallDropdown
              id="dates"
              label={getDatesLabel(this.state) || "Dates"}
              xsHeading="When"
              onToggle={this.onFilterToggle}
              apply={this.onApplyClick}
              cancel={this.onCancelClick}
            >
              <Dates
                dates={this.state.dates}
                handlerFromParent={this.handleData}
              />
            </SmallDropdown>

            <SmallDropdown
              id="guests"
              label="Guests"
              xsHeading="Guests"
              onToggle={this.onFilterToggle}
              apply={this.onApplyClick}
              cancel={this.onCancelClick}
              showApplyOnXs
            >
              <Guests
                guests={this.state.guests}
                handlerFromParent={this.handleData}
              />
            </SmallDropdown>

            <Lg>
              <SmallDropdown
                id="room"
                label="Room type"
                xsHeading="Room type"
                onToggle={this.onFilterToggle}
                apply={this.onApplyClick}
                cancel={this.onCancelClick}
              >
                <RoomType
                  room={this.state.room}
                  handlerFromParent={this.handleData}
                />
              </SmallDropdown>

              <SmallDropdown
                id="instant"
                label="Instant book"
                xsHeading="Instant book"
                onToggle={this.onFilterToggle}
                apply={this.onApplyClick}
                cancel={this.onCancelClick}
              >
                <InstantBook
                  instant={this.state.instant}
                  handlerFromParent={this.handleData}
                />
              </SmallDropdown>

              <SmallDropdown
                id="price"
                label="Price"
                xsHeading="Price"
                onToggle={this.onFilterToggle}
                apply={this.onApplyClick}
                cancel={this.onCancelClick}
              >
                <Price
                  price={this.state.price}
                  handlerFromParent={this.handleData}
                />
              </SmallDropdown>
            </Lg>

            <BigDropdown
              id="more"
              label="More filters"
              xsHeading="More filters"
              onToggle={this.onFilterToggle}
              apply={this.onApplyClick}
              cancel={this.onCancelClick}
            >
              <More
                handlerFromParent={this.handleData}
                instant={this.state.instant}
                superhost={this.state.superhost}
                room={this.state.room}
                price={this.state.price}
                amenities={this.state.amenities}
                facilities={this.state.facilities}
                roomsAndBeds={this.state.roomsAndBeds}
              />
            </BigDropdown> */
}
