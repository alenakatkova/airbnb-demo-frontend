import React from "react";
import Heading from "./Heading";
import Link from "./Link";
import Container from "./Container";

class Hosting extends React.Component {
  render() {
    return (
      <Container>
        <Heading title="Hosting" />
        <nav>
          <Link link="#" text="Why Host" />
          <Link link="#" text="Hospitality" />
          <Link link="#" text="Responsible Hosting" />
          <Link link="#" text="Community Center" />
        </nav>
      </Container>
    );
  }
}

export default Hosting;
