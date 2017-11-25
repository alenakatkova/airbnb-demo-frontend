import React from "react";
import { OptionCell, OptionName, OptionTable } from "./styled";
import Counter from "./Counter";

export default class Guests extends React.Component {
  state = {
    bedrooms: this.props.bedrooms,
    beds: this.props.beds,
    bathrooms: this.props.bathrooms
  };

  onCounterClick = (key, value) => {
    this.setState({ [key]: value }, this.passDataToParent);
  };

  passDataToParent = () => {
    this.props.handlerFromParent(this.state, "roomsAndBeds");
  };

  render() {
    return (
      <div>
        <OptionTable>
          <OptionCell>
            <OptionName>Bedrooms</OptionName>
          </OptionCell>
          <OptionCell>
            <Counter
              id="bedrooms"
              value={this.state.bedrooms}
              count={this.onCounterClick}
              minimum={0}
              plus="+"
            />
          </OptionCell>
        </OptionTable>

        <OptionTable>
          <OptionCell>
            <OptionName>Beds</OptionName>
          </OptionCell>
          <OptionCell>
            <Counter
              id="beds"
              value={this.state.beds}
              count={this.onCounterClick}
              minimum={0}
              plus="+"
            />
          </OptionCell>
        </OptionTable>

        <OptionTable>
          <OptionCell>
            <OptionName>Bathrooms</OptionName>
          </OptionCell>
          <OptionCell>
            <Counter
              id="bathrooms"
              value={this.state.bathrooms}
              count={this.onCounterClick}
              minimum={0}
              plus="+"
            />
          </OptionCell>
        </OptionTable>
      </div>
    );
  }
}
