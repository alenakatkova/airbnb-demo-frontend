import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Link from "./Link";
import Container from "./Container";

const Break = styled.br`
  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 986px) {
    display: none;
  }
`;

class Airbnb extends React.Component {
  render() {
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
  }
}

export default Airbnb;
