import React from "react";
import {
  OptionCell,
  OptionDescription,
  OptionName,
  OptionTable
} from "./styled";
import Counter from "./Counter";
import Dropdown from "./SmallDropdown";

const getLabel = state => {
  if (state.adults + state.children + state.infants > 1) {
    return `Guests · ${state.adults + state.children + state.infants}`;
  }
};

export default class Guests extends React.Component {
  state = {
    adults: this.props.guests.adults,
    children: this.props.guests.children,
    infants: this.props.guests.infants
  };

  onCounterClick = (key, value) => {
    this.setState({ [key]: value });
  };

  onApplyClick = () => {
    this.props.apply("guests", this.state);
  };

  onCancelClick = closeFilter => {
    this.setState(
      {
        adults: this.props.guests.adults,
        children: this.props.guests.children,
        infants: this.props.guests.infants
      },
      closeFilter
    );
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      adults: nextProps.guests.adults,
      children: nextProps.guests.children,
      infants: nextProps.guests.infants
    });
  };

  render() {
    return (
      <Dropdown
        apply={this.onApplyClick}
        cancel={this.onCancelClick}
        onToggle={this.props.toggle}
        reset={this.props.reset}
        id="guests"
        label={getLabel(this.state) || "Guests"}
        xsHeading="Guests"
        showApplyOnXs
      >
        <OptionTable>
          <OptionCell>
            <OptionName>Adults</OptionName>
          </OptionCell>
          <OptionCell>
            <Counter
              id="adults"
              value={this.state.adults}
              count={this.onCounterClick}
              minimum={1}
            />
          </OptionCell>
        </OptionTable>

        <OptionTable>
          <OptionCell>
            <OptionName>Children</OptionName>
            <br />
            <OptionDescription>Ages 2 — 12</OptionDescription>
          </OptionCell>
          <OptionCell>
            <Counter
              id="children"
              value={this.state.children}
              count={this.onCounterClick}
              minimum={0}
            />
          </OptionCell>
        </OptionTable>

        <OptionTable>
          <OptionCell>
            <OptionName>Infants</OptionName>
            <br />
            <OptionDescription>Under 2</OptionDescription>
          </OptionCell>
          <OptionCell>
            <Counter
              id="infants"
              value={this.state.infants}
              count={this.onCounterClick}
              minimum={0}
            />
          </OptionCell>
        </OptionTable>
      </Dropdown>
    );
  }
}
