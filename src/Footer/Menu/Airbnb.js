import React from "react";
import { Heading, Link, Container, Break } from "./styled";

export default () => {
  return (
    <Container>
      <Heading>Airbnb</Heading>
      <nav>
        <Link href="#">About us</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Press</Link>
        <Link href="#">Policies</Link>
        <Link href="#">Help</Link>
        <Link href="#">
          Diversity & <Break />Belogning
        </Link>
      </nav>
    </Container>
  );
};
