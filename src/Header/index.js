import React from "react";
import { PageHeader, Link, Logo, MenuBtn } from "./styled";
import Search from "./Search";
import Menu from "./Menu";
import logo from "./logo.svg";

export default () => {
  return (
    <PageHeader>
      <div className="container">
        <div className="row between-xs middle-xs">
          <div className="row between-xs middle-xs">
            <Link href="#">
              <Logo alt="Logo" src={logo} />
            </Link>
            <MenuBtn />
            <Search />
          </div>
          <Menu />
        </div>
      </div>
    </PageHeader>
  );
};
