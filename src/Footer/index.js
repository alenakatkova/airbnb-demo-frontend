import React from "react";
import SelectForm from "./Select";
import Airbnb from "./Menu/Airbnb";
import Discover from "./Menu/Discover";
import Hosting from "./Menu/Hosting";
import logo from "./logo.svg";
import Social from "./Social";
import { PageFooter, Top, Bottom, Logo, Container, Copyright } from "./styled";
import BottomNav from "./BottomNav";

export default () => {
  return (
    <PageFooter>
      <div className="container">
        <Top>
          <div className="row between-md negative-indent-xs">
            <div className="col-xs-12 col-md-3 col-lg-3">
              <SelectForm />
            </div>
            <div className="col-md-2 col-lg-2">
              <Airbnb />
            </div>
            <div className="col-md-2 col-lg-2">
              <Discover />
            </div>
            <div className="col-md-2 col-lg-2">
              <Hosting />
            </div>
          </div>
        </Top>
        <Bottom>
          <div className="row start-xs between-md middle-xs">
            <div className="row start-xs middle-xs">
              <Logo src={logo} />
              <Copyright>© Airbnb Inc.</Copyright>
            </div>
            <Container>
              <div className="row start-xs end-md middle-xs">
                <BottomNav />
                <Social />
              </div>
            </Container>
          </div>
        </Bottom>
      </div>
    </PageFooter>
  );
};
