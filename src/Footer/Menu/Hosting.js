import React from "react";
import Heading from "./Heading";
import Link from "./Link";
import Container from "./Container";

export default () => {
  return (
    <Container>
      <Heading>Hosting</Heading>
      <nav>
        <Link href="#">Why Host</Link>
        <Link href="#">Hospitality</Link>
        <Link href="#">Responsible Hosting</Link>
        <Link href="#">Community Center</Link>
      </nav>
    </Container>
  );
};
