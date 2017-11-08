import React from "react";
import styled from "styled-components";

const Link = styled.a`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: normal;
  font-size: 15px;
  color: #636363;
  text-decoration: none;
`;

const Li = styled.li`margin-bottom: 8px;`;

const Item = props => (
  <Li>
    <Link href={props.link}>{props.text}</Link>
  </Li>
);

export default Item;
