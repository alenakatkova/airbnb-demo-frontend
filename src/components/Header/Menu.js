import React from "react";
import styled from "styled-components";

const Nav = styled.nav`margin-left: auto;`;

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
  <Nav className="col-4">
    <List>
      <Item>
        <Link href="{props.link1}">Become a host</Link>
      </Item>
      <Item>
        <Link href="{props.link2}">Help</Link>
      </Item>
      <Item>
        <Link href="{props.link3}">Sign Up</Link>
      </Item>
      <Item>
        <Link href="{props.link4}">Log In</Link>
      </Item>
    </List>
  </Nav>
);

export default Menu;
