import React from "react";
import styled from "styled-components";
import searchIcon from "./search-icon.svg";

const Div = styled.div`display: inline-block;`;

const Input = styled.input`
  background: #ffffff url(${searchIcon}) no-repeat 15.2px 12.2px;
  box-sizing: border-box;
  min-width: 392px;
  line-height: 24px;

  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  padding-left: 53px;
  padding-top: 12px;
  padding-bottom: 12px;

  ::placeholder {
    font-family: "CircularAir-Book", "Arial", sans-serif;
    color: #383838;
    line-height: 24px;
    font-size: 16px;
    opacity: 0.64;
  }
`;

const Search = props => (
  <Div>
    <Input placeholder={props.placeholder} type={props.type} />
  </Div>
);

export default Search;
