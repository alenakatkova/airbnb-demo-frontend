import React from "react";
import {
  OptionCell,
  OptionDescription,
  OptionName,
  OptionTable
} from "./styled";
import Counter from "./Counter";

export default class Guests extends React.Component {
  state = {
    adults: this.props.guests.adults,
    children: this.props.guests.children,
    infants: this.props.guests.infants
  };

  onCounterClick = (key, value) => {
    this.setState({ [key]: value }, this.passDataToParent);
  };

  passDataToParent = () => {
    this.props.handlerFromParent(this.state, this.props.id);
  };

  render() {
    console.log(this.props);
    return (
      <div>
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
      </div>
    );
  }
}
