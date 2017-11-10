import React from "react";
import styled from "styled-components";

const Link = styled.a`
  @media (min-width: 768px) {
    font-family: "CircularAir-Book", "Arial", sans-serif;
    line-height: 14px;
    font-size: 12px;
    color: #636363;
    text-decoration: none;
  }

  @media (min-width: 986px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

const Li = styled.li`
  @media (min-width: 768px) {
    margin-bottom: 11px;
  }

  @media (min-width: 986px) {
    margin-bottom: 8px;
  }
`;

const Item = props => (
  <Li>
    <Link href={props.link}>{props.text}</Link>
  </Li>
);

export default Item;
