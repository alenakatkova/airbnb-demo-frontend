import React from "react";
import styled from "styled-components";

const MenuLink = styled.a`
  @media (min-width: 768px) {
    display: block;
    font-family: "CircularAir-Book", "Arial", sans-serif;
    line-height: 14px;
    font-size: 12px;
    color: #636363;
    text-decoration: none;
    margin-bottom: 11px;
  }

  @media (min-width: 986px) {
    line-height: 18px;
    font-size: 15px;
    margin-bottom: 8px;
  }
`;

const Item = props => <MenuLink href={props.link}>{props.text}</MenuLink>;

export default Item;
