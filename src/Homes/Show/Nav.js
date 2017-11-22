import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  padding: 11px 0;
`;

const Link = styled.button`
  display: inline-block;
  border: none;
  background: none;
  padding: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #0f7276;

  &:active {
    font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
    color: #383838;
  }

  @media screen and (min-width: 768px) {
    line-height: 16px;
    font-size: 14px;
  }
`;

const Decor = styled.span`
  display: inline-block;
  margin: 0 8px;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #0f7276;

  @media screen and (min-width: 768px) {
    line-height: 16px;
    font-size: 14px;
  }
`;

export default () => {
  return (
    <Nav>
      <Link href="#overview">Overview</Link>
      <Decor>·</Decor>
      <Link href="#reviews">Reviews</Link>
      <Decor>·</Decor>
      <Link href="#host">The Host</Link>
      <Decor>·</Decor>
      <Link href="#location">Location</Link>
    </Nav>
  );
};
