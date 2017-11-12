import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Menu from "./Menu";
import logo from "./logo.svg";
import arrow from "./arrow.svg";

const PageHeader = styled.header`
  width: 100%;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 16px 0;
`;

const Logo = styled.img`
  height: 31.98px;
  width: 29.77px;
`;

const Link = styled.a`
  display: inline-block;
  margin: 0;
  margin-right: 4.98px;
  padding: 0;

  @media screen and (max-width: 768px) {
  }

  @media screen and (min-width: 768px) {
    margin-right: 6.98px;
  }

  @media screen and (min-width: 986px) {
    margin-right: 51.2px;
  }
`;

const MenuBtn = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  width: 11px;
  height: 6px;
  background: url(${arrow}) no-repeat 0 0;
  background-size: cover;
  margin-right: 7.22px;

  @media screen and (min-width: 768px) {
    display: block;
    margin-right: 17.22px;
  }

  @media screen and (min-width: 986px) {
    display: none;
  }
`;

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
