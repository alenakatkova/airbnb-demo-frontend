import React from "react";
import Heading from "./Heading";
import Link from "./Link";
import Container from "./Container";

class Discover extends React.Component {
  render() {
    return (
      <Container>
        <Heading title="Discover" />
        <nav>
          <Link link="#" text="Trust & Safety" />
          <Link link="#" text="Travel Credit" />
          <Link link="#" text="Gift Cards" />
          <Link link="#" text="Airbnb Citizen" />
          <Link link="#" text="Business Travel" />
          <Link link="#" text="Guidebooks" />
          <Link link="#" text="Airbnbmag" />
        </nav>
      </Container>
    );
  }
}

export default Discover;
