import styled from "styled-components";
import React from "react";
import arrowIcon from "./arrowIcon.svg";

const Text = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 24px;
  font-size: 12px;
  color: #383838;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Arrow = styled.img`
  width: 5.55px;
  height: 10px;
  margin-left: 8px;
  margin-right: 6px;
`;

const Link = styled.a`text-decoration: none;`;

const SeeAll = props => (
  <Link href={props.link}>
    <Text>See all</Text>
    <Arrow src={arrowIcon} alt="Arrow" />
  </Link>
);

export default SeeAll;
