import React from "react";
import {
  OptionCell,
  OptionDescription,
  OptionName,
  OptionTable
} from "./styled";
import Counter from "./Counter";
import Dropdown from "./Dropdown";

export default class Guests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  onToggle = isSelected => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    return (
      <Dropdown label="Guests" onToggle={this.onToggle}>
        <OptionTable>
          <OptionCell>
            <OptionName>Adults</OptionName>
          </OptionCell>
          <OptionCell>
            <Counter />
          </OptionCell>
        </OptionTable>

        <OptionTable>
          <OptionCell>
            <OptionName>Children</OptionName>
            <br />
            <OptionDescription>Ages 2 — 12</OptionDescription>
          </OptionCell>
          <OptionCell>
            <Counter />
          </OptionCell>
        </OptionTable>

        <OptionTable>
          <OptionCell>
            <OptionName>Infants</OptionName>
            <br />
            <OptionDescription>Under 2</OptionDescription>
          </OptionCell>
          <OptionCell>
            <Counter />
          </OptionCell>
        </OptionTable>
      </Dropdown>
    );
  }
}
