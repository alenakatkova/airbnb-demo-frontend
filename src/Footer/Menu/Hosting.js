import React from "react";
import List from "./List";
import Heading from "./Heading";
import Item from "./Item";
import Container from "./Container";

class Hosting extends React.Component {
  render() {
    return (
      <div className="col-md-2 col-lg-2">
        <Container>
          <Heading title="Hosting" />
          <List>
            <Item link="#" text="Why Host" />
            <Item link="#" text="Hospitality" />
            <Item link="#" text="Responsible Hosting" />
            <Item link="#" text="Community Center" />
          </List>
        </Container>
      </div>
    );
  }
}

export default Hosting;
