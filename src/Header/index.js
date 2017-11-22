import React from "react";
import {
  PageHeader,
  LeftSideContainer,
  Logo,
  MenuBtn,
  Link,
  SearchContainer,
  Input
} from "./styled";
import Menu from "./Menu";
import logo from "./logo.svg";

export default props => {
  return (
    <PageHeader>
      <div className="container">
        <div className="row between-xs middle-xs">
          <LeftSideContainer>
            <Link to="/">
              <Logo alt="Logo" src={logo} />
            </Link>
            <MenuBtn />
            <SearchContainer>
              <Input placeholder={props.placeholder} type="text" />
            </SearchContainer>
          </LeftSideContainer>
          <Menu />
        </div>
      </div>
    </PageHeader>
  );
};
