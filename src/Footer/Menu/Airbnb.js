import React from "react";
import List from "./List";
import Heading from "./Heading";
import Item from "./Item";

class Airbnb extends React.Component {
  render() {
    return (
      <div className="col-lg-2">
        <Heading title="Airbnb" />
        <List>
          <Item link="#" text="About us" />
          <Item link="#" text="Careers" />
          <Item link="#" text="Press" />
          <Item link="#" text="Policies" />
          <Item link="#" text="Help" />
          <Item link="#" text="Diversity & Belogning" />
        </List>
      </div>
    );
  }
}

export default Airbnb;
