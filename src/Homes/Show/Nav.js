import React from "react";
import styled from "styled-components";
import { Sticky } from "react-sticky";

const NavContainer = styled.nav`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  padding: 11px 0;
  background: #ffffff;

  @media screen and (min-width: 768px) {
    padding: 16px 0;
  }
`;

const Link = styled.a`
  display: inline-block;
  margin: 0;
  text-decoration: none;
  padding: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: ${props => (props.isChosen ? "#383838" : "#0f7276")};
  font-weight: ${props => (props.isChosen ? "bolder" : "normal")};

  @media screen and (min-width: 768px) {
    line-height: 16px;
    font-size: 14px;
  }
`;

const Decor = styled.span`
  display: inline-block;
  margin: 0 8px;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #0f7276;

  @media screen and (min-width: 768px) {
    line-height: 16px;
    font-size: 14px;
  }
`;

class Nav extends React.Component {
  state = {
    linkChosen: null
  };

  onLinkClick = key => {
    this.setState({ linkChosen: key });
  };

  render() {
    return (
      <NavContainer>
        <Link
          href="#overview"
          onClick={() => this.onLinkClick("overview")}
          isChosen={this.state.linkChosen === "overview"}
        >
          Overview
        </Link>
        <Decor>·</Decor>
        <Link
          href="#reviews"
          onClick={() => this.onLinkClick("reviews")}
          isChosen={this.state.linkChosen === "reviews"}
        >
          Reviews
        </Link>
        <Decor>·</Decor>
        <Link
          href="#host"
          onClick={() => this.onLinkClick("host")}
          isChosen={this.state.linkChosen === "host"}
        >
          The Host
        </Link>
        <Decor>·</Decor>
        <Link
          href="#location"
          onClick={() => this.onLinkClick("location")}
          isChosen={this.state.linkChosen === "location"}
        >
          Location
        </Link>
      </NavContainer>
    );
  }
}

export default () => {
  return (
    <Sticky topOffset={-82.5}>
      {({ style, isSticky }) => {
        return (
          <div
            style={{
              ...style,
              background: "#ffffff",
              left: 0,
              zIndex: 11,
              top: isSticky ? 82.5 : 0,
              width: "100%"
            }}
          >
            {isSticky ? (
              <div className="container">
                <Nav />
              </div>
            ) : (
              <Nav />
            )}
          </div>
        );
      }}
    </Sticky>
  );
};
