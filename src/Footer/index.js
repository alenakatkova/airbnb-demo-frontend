import React from "react";
import styled from "styled-components";
import SelectForm from "./Select";
import Airbnb from "./Menu/Airbnb";
import Discover from "./Menu/Discover";
import Hosting from "./Menu/Hosting";
import logo from "./logo.svg";
import Copyright from "./Copyright";
import BottomNav from "./BottomNav";
import Social from "./Social";

const PageFooter = styled.footer`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Top = styled.div`
  padding-top: 16px;
  padding-bottom: 44px;
  @media (min-width: 768px) {
    padding: 48px 0;
  }
`;

const Bottom = styled.div`
  padding-top: 32px;
  padding-bottom: 34px;
  border-top: 1px solid rgba(72, 72, 72, 0.08);
`;

const Logo = styled.img`
  width: 20.46px;
  height: 21.99px;
`;

class Footer extends React.Component {
  render() {
    return (
      <PageFooter>
        <div className="container">
          <Top>
            <div className="row negative-indent">
              <SelectForm />
              <Airbnb />
              <Discover />
              <Hosting />
            </div>
          </Top>
          <Bottom>
            <div className="row start-xs between-md middle">
              <div className="row start middle">
                <Logo src={logo} />
                <Copyright />
              </div>
              <div className="row start-xs end-md">
                <BottomNav />
                <Social />
              </div>
            </div>
          </Bottom>
        </div>
      </PageFooter>
    );
  }
}

export default Footer;
