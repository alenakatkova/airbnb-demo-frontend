import React from "react";
import styled from "styled-components";
import { OptionCell, OptionTable } from "../styled";
import Counter from "../Counter";

const OptionName = styled.span`
  display: inline-block;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #383838;

  @media screen and (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

export default class RoomsAndBeds extends React.Component {
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
              value={this.props.roomsAndBeds.bedrooms}
              count={this.props.count}
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
              value={this.props.roomsAndBeds.beds}
              count={this.props.count}
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
              value={this.props.roomsAndBeds.bathrooms}
              count={this.props.count}
              minimum={0}
              plus="+"
            />
          </OptionCell>
        </OptionTable>
      </div>
    );
  }
}
