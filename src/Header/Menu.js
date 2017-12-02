import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
    text-align: center;
  }
`;

const Link = styled.a`
  display: inline-block;
  color: #383838;
  min-width: 56px;
  margin-right: 8px;
  line-height: 24px;
  font-size: 14px;
  text-decoration: none;
`;

export default () => {
  return (
    <Navigation>
      <Link href="#">Become a host</Link>
      <Link href="#">Help</Link>
      <Link href="#">Sign Up</Link>
      <Link href="#">Log In</Link>
    </Navigation>
  );
};
