import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: right;
`;

const Item = styled.li`
  display: inline-block;

  padding: 0 8px;
`;

const Link = styled.a`
  color: #636363;
  line-height: normal;
  font-size: 15px;
  text-decoration: none;
`;

const BottomNav = props => (
  <nav>
    <List>
      <Item>
        <Link href="#">Terms</Link>
      </Item>
      <Item>
        <Link href="#">Privacy</Link>
      </Item>
      <Item>
        <Link href="#">Site map</Link>
      </Item>
    </List>
  </nav>
);

export default BottomNav;
