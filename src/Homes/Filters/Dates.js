import React from "react";
import styled from "styled-components";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";
import MediaQuery from "react-responsive";
import arrowRight from "./arrowRight.svg";
import moment from "moment";
import Dropdown from "./SmallDropdown";

const DateRange = styled.div`
  padding-left: 8px;
  padding-left: 8px;
  padding-top: 30px;
  padding-bottom: 40px;
  position: fixed;
  z-index: 17;
  left: 0;
  width: 100%;
  top: 47px;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const DateInRange = styled.span`
  dispaly: inline-block;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: ${props => (props.isActive ? "#0f7276" : "#636363")};
  border-bottom: ${props => (props.isActive ? "1px solid #008489" : "none")};
  padding-bottom: 4px;
`;

const Arrow = styled.img`
  width: 18px;
  height: 11px;
  display: inline-block;
  margin: 0 16px;
`;

export function getLabel(state, isSelected) {
  if (isSelected || state.startDate !== null || state.endDate !== null) {
    return `${
      state.startDate ? state.startDate.format("MMM Do") : `Check In`
    } — ${state.endDate ? state.endDate.format("MMM Do") : `Check out`}`;
  }
}

export default class Dates extends React.Component {
  state = {
    focusedInput: this.props.autoFocusEndDate ? "endDate" : "startDate",
    startDate: this.props.dates.startDate,
    endDate: this.props.dates.endDate
  };

  onDateChange = ({ startDate, endDate }) => {
    this.setState(
      { startDate: startDate, endDate: endDate },
      this.passDatesToParent
    );
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  onApplyClick = () => {
    this.props.apply("dates", this.state);
  };

  onCancelClick = closeFilter => {
    this.setState(
      {
        startDate: this.props.dates.startDate,
        endDate: this.props.dates.endDate
      },
      closeFilter
    );
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      startDate: nextProps.dates.startDate,
      endDate: nextProps.dates.endDate
    });
  };

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    return (
      <Dropdown
        apply={this.onApplyClick}
        cancel={this.onCancelClick}
        onToggle={this.props.toggle}
        reset={this.props.reset}
        id="dates"
        label={getLabel(this.state, this.props.isSelected) || "Dates"}
      >
        <MediaQuery query="(max-width: 767px)">
          <DateRange>
            <DateInRange isActive={focusedInput === "startDate"}>
              {startDate ? startDate.format("MMM Do") : "Check-in"}
            </DateInRange>
            <Arrow src={arrowRight} alt="Arrow" />
            <DateInRange isActive={focusedInput === "endDate"}>
              {endDate ? endDate.format("MMM Do") : "Check-out"}
            </DateInRange>
          </DateRange>
          <DayPickerRangeController
            onDatesChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            orientation="vertical"
            numberOfMonths={1}
            minimumNights={1}
            isDayBlocked={day => day.isBefore(moment(), "day")}
            hideKeyboardShortcutsPanel
          />
        </MediaQuery>

        <MediaQuery minWidth={768} maxWidth={985}>
          <DayPickerRangeController
            onDatesChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            orientation="horizontal"
            numberOfMonths={1}
            minimumNights={1}
            isDayBlocked={day => day.isBefore(moment(), "day")}
            hideKeyboardShortcutsPanel
          />
        </MediaQuery>

        <MediaQuery query="(min-width: 992px)">
          <DayPickerRangeController
            onDatesChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            orientation="horizontal"
            numberOfMonths={2}
            minimumNights={1}
            isDayBlocked={day => day.isBefore(moment(), "day")}
            hideKeyboardShortcutsPanel
          />
        </MediaQuery>
      </Dropdown>
    );
  }
}
