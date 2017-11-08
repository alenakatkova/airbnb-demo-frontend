import React from "react";
import styled from "styled-components";
import PageWrapper from "../common/PageWrapper";
import Search from "./Search";
import Menu from "./Menu";
import logo from "./logo.svg";

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
