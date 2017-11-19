import React from "react";
import { Heading, Link, Container } from "./styled";

export default () => {
  return (
    <Container>
      <Heading>Discover</Heading>
      <nav>
        <Link href="#">Trust & Safety</Link>
        <Link href="#">Travel Credit</Link>
        <Link href="#">Gift Cards</Link>
        <Link href="#">Airbnb Citizen</Link>
        <Link href="#">Business Travel</Link>
        <Link href="#">Guidebooks</Link>
        <Link href="#">Airbnbmag</Link>
      </nav>
    </Container>
  );
};
