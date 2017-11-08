import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
`;

const Item = styled.li`
  display: inline-block;
  min-width: 56px;
  margin-right: 8px;

  :first-of-type {
    min-width: 108px;
  }
`;

const Link = styled.a`
  color: #383838;
  line-height: 24px;
  font-size: 14px;
  text-decoration: none;
`;

const Menu = props => (
  <nav>
    <List>
      <Item>
        <Link href="#">Become a host</Link>
      </Item>
      <Item>
        <Link href="#">Help</Link>
      </Item>
      <Item>
        <Link href="#">Sign Up</Link>
      </Item>
      <Item>
        <Link href="#">Log In</Link>
      </Item>
    </List>
  </nav>
);

export default Menu;
