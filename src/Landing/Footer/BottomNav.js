import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0 8px;
  text-align: left;

  @media screen and (min-width: 768px) {
    text-align: right;
    padding: 0;
  }
`;

const Link = styled.a`
  display: inline-block;
  color: #636363;
  line-height: 14px;
  font-size: 12px;
  text-decoration: none;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0 8px;
  }

  @media screen and (min-width: 986px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

export default () => {
  return (
    <nav>
      <Container>
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Site map</Link>
      </Container>
    </nav>
  );
};
