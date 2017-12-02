import React from "react";
import { Cell, Description, Option, Table } from "./styled";
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
      >
        <Table>
          <Cell>
            <Option>Adults</Option>
          </Cell>
          <Cell>
            <Counter
              id="adults"
              value={this.state.adults}
              count={this.onCounterClick}
              minimum={1}
            />
          </Cell>
        </Table>

        <Table>
          <Cell>
            <Option>Children</Option>
            <br />
            <Description>Ages 2 — 12</Description>
          </Cell>
          <Cell>
            <Counter
              id="children"
              value={this.state.children}
              count={this.onCounterClick}
              minimum={0}
            />
          </Cell>
        </Table>

        <Table>
          <Cell>
            <Option>Infants</Option>
            <br />
            <Description>Under 2</Description>
          </Cell>
          <Cell>
            <Counter
              id="infants"
              value={this.state.infants}
              count={this.onCounterClick}
              minimum={0}
            />
          </Cell>
        </Table>
      </Dropdown>
    );
  }
}
