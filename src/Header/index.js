import React from "react";
import { PageHeader, Logo, LinkContainer, MenuBtn } from "./styled";
import { Link } from "react-router-dom";
import Search from "./Search";
import Menu from "./Menu";
import logo from "./logo.svg";

export default () => {
  return (
    <PageHeader>
      <div className="container">
        <div className="row between-xs middle-xs">
          <div className="row between-xs middle-xs">
            <LinkContainer>
              <Link to="/">
                <Logo alt="Logo" src={logo} />
              </Link>
            </LinkContainer>
            <MenuBtn />
            <Search />
          </div>
          <Menu />
        </div>
      </div>
    </PageHeader>
  );
};
