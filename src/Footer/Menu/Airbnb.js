import React from "react";
import Heading from "./Heading";
import Link from "./Link";
import Container from "./Container";

class Airbnb extends React.Component {
  render() {
    return (
      <Container>
        <Heading title="Airbnb" />
        <nav>
          <Link link="#" text="About us" />
          <Link link="#" text="Careers" />
          <Link link="#" text="Press" />
          <Link link="#" text="Policies" />
          <Link link="#" text="Help" />
          <Link link="#" text="Diversity & Belogning" />
        </nav>
      </Container>
    );
  }
}

export default Airbnb;
