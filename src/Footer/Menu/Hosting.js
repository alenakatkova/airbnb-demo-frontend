import React from "react";
import List from "./List";
import Heading from "./Heading";
import Item from "./Item";

class Hosting extends React.Component {
  render() {
    return (
      <div className="col-2">
        <Heading title="Hosting" />
        <List>
          <Item link="#" text="Why Host" />
          <Item link="#" text="Hospitality" />
          <Item link="#" text="Responsible Hosting" />
          <Item link="#" text="Community Center" />
        </List>
      </div>
    );
  }
}

export default Hosting;
