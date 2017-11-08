import React from "react";
import styled from "styled-components";
import PageWrapper from "../common/PageWrapper";
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
  margin-right: 51.2px;
  padding: 0;

  @media (max-width: 768px) {
    margin-right: 6.98px;
  }
`;

const MenuBtn = styled.button`
  display: none;
  padding: 0;
  margin: 0;
  border: none;
  width: 10px;
  height: 5.55px;
  background: url(${arrow}) no-repeat 0 0;
  background-size: cover;
  margin-right: 17.22px;

  @media (max-width: 768px) {
    display: block;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <PageHeader>
        <PageWrapper>
          <div className="row-space vertically-centered">
            <div className="row-space vertically-centered">
              <Link href="#">
                <Logo alt="Logo" src={logo} />
              </Link>
              <MenuBtn />
              <Search />
            </div>
            <Menu />
          </div>
        </PageWrapper>
      </PageHeader>
    );
  }
}

export default Header;
