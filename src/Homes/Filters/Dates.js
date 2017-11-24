import React from "react";
import styled from "styled-components";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";
import MediaQuery from "react-responsive";
import arrowRight from "./arrowRight.svg";
import moment from "moment";

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

export default class Dates extends React.Component {
  state = {
    focusedInput: this.props.autoFocusEndDate ? "endDate" : "startDate",
    startDate: this.props.startDate,
    endDate: this.props.endDate
  };

  onDateChange = ({ startDate, endDate }) => {
    this.setState(
      { startDate: startDate, endDate: endDate },
      this.passDatesToParent
    );
  };

  passDatesToParent = () => {
    this.props.handlerFromParent(this.state);
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  render() {
    const { focusedInput } = this.state;
    return (
      <div>
        <MediaQuery query="(max-width: 767px)">
          <DateRange>
            <DateInRange isActive>Check-in</DateInRange>
            <Arrow src={arrowRight} alt="Arrow" />
            <DateInRange>Check-out</DateInRange>
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
      </div>
    );
  }
}
