import React from "react";
import Heading from "./Heading";
import Link from "./Link";
import Container from "./Container";

class Hosting extends React.Component {
  render() {
    return (
      <div className="col-md-2 col-lg-2">
        <Container>
          <Heading title="Hosting" />
          <nav>
            <Link link="#" text="Why Host" />
            <Link link="#" text="Hospitality" />
            <Link link="#" text="Responsible Hosting" />
            <Link link="#" text="Community Center" />
          </nav>
        </Container>
      </div>
    );
  }
}

export default Hosting;
