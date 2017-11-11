import React from "react";
import styled from "styled-components";
import fbIcon from "./fbIcon.svg";
import igIcon from "./igIcon.svg";
import twIcon from "./twIcon.svg";

const Container = styled.div`
  margin: 0;
  padding: 0;
  text-align: left;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

const Link = styled.a`
  display: inline-block;
  margin-right: 8px;
  text-decoration: none;

  @media (min-width: 768px) {
    margin: 0;
    margin-left: 16px;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export default () => {
  return (
    <nav>
      <Container>
        <Link href="#">
          <Icon src={fbIcon} />
        </Link>
        <Link href="#">
          <Icon src={twIcon} />
        </Link>
        <Link href="#">
          <Icon src={igIcon} />
        </Link>
      </Container>
    </nav>
  );
};
