import React from "react";
import List from "./List";
import Heading from "./Heading";
import Item from "./Item";
import Container from "./Container";

class Airbnb extends React.Component {
  render() {
    return (
      <div className="col-md-2 col-lg-2">
        <Container>
          <Heading title="Airbnb" />
          <List>
            <Item link="#" text="About us" />
            <Item link="#" text="Careers" />
            <Item link="#" text="Press" />
            <Item link="#" text="Policies" />
            <Item link="#" text="Help" />
            <Item link="#" text="Diversity & Belogning" />
          </List>
        </Container>
      </div>
    );
  }
}

export default Airbnb;
