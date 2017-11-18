import React from "react";
import {
  PageHeader,
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
          <div className="row between-xs middle-xs">
            <Link to="/">
              <Logo alt="Logo" src={logo} />
            </Link>
            <MenuBtn />
            <SearchContainer>
              <Input placeholder="Anywhere · Homes" type="text" />
            </SearchContainer>
          </div>
          <Menu />
        </div>
      </div>
    </PageHeader>
  );
};
