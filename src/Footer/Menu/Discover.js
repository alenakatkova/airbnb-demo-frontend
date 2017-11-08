import React from "react";
import List from "./List";
import Heading from "./Heading";
import Item from "./Item";

class Discover extends React.Component {
  render() {
    return (
      <div className="col-2">
        <Heading title="Discover" />
        <List>
          <Item link="#" text="Trust & Safety" />
          <Item link="#" text="Travel Credit" />
          <Item link="#" text="Gift Cards" />
          <Item link="#" text="Airbnb Citizen" />
          <Item link="#" text="Business Travel" />
          <Item link="#" text="Guidebooks" />
          <Item link="#" text="Airbnbmag" />
        </List>
      </div>
    );
  }
}

export default Discover;
