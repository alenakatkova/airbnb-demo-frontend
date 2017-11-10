import React from "react";
import styled from "styled-components";
import searchIcon from "./searchIcon.svg";

const Container = styled.div`
  display: inline-block;
  min-width: 251px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    min-width: 432px;
  }

  @media (min-width: 986px) {
    min-width: 392px;
  }
`;

const Input = styled.input`
  background: #ffffff url(${searchIcon}) no-repeat;
  background-position: 11.15px 12.15px;
  box-sizing: border-box;
  width: 100%;
  line-height: 24px;

  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding-left: 35px;
  padding-top: 12px;
  padding-bottom: 12px;

  ::placeholder {
    font-family: "CircularAir-Book", "Arial", sans-serif;
    color: #383838;
    line-height: 24px;
    font-size: 16px;
    opacity: 0.64;
  }

  @media (min-width: 768px) {
    padding-left: 49px;
  }

  @media (min-width: 986px) {
    padding-left: 53px;
    background-position: 15.2px 12.2px;
  }
`;

const Search = props => (
  <Container>
    <Input placeholder="Try “Miami”" type="text" />
  </Container>
);

export default Search;
