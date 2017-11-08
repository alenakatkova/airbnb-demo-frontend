import React from "react";
import styled from "styled-components";
import fbIcon from "./fbIcon.svg";
import igIcon from "./igIcon.svg";
import twIcon from "./twIcon.svg";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: right;
`;

const Item = styled.li`
  display: inline-block;
  margin-left: 16px;
`;

const Link = styled.a`text-decoration: none;`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Social = props => (
  <nav>
    <List>
      <Item>
        <Link href="#">
          <Icon src={fbIcon} />
        </Link>
      </Item>
      <Item>
        <Link href="#">
          <Icon src={twIcon} />
        </Link>
      </Item>
      <Item>
        <Link href="#">
          <Icon src={igIcon} />
        </Link>
      </Item>
    </List>
  </nav>
);

export default Social;
