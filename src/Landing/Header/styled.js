import styled from "styled-components";
import arrow from "./arrow.svg";
import searchIcon from "./searchIcon.svg";
import { Link as RLink } from "react-router-dom";

export const PageHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  padding: 16px 0;
  position: static;
  z-index: 11;
  background: #ffffff;
  top: 0;
  left: 0;
`;

export const Logo = styled.img`
  height: 31.98px;
  width: 29.77px;
`;

export const Link = styled(RLink)`
  display: inline-block;
  margin: 0;
  margin-right: 4.98px;
  padding: 0;

  @media screen and (min-width: 768px) {
    margin-right: 6.98px;
  }

  @media screen and (min-width: 986px) {
    margin-right: 51.2px;
  }
`;

export const MenuBtn = styled.button`
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

export const SearchContainer = styled.div`
  display: inline-block;
  min-width: 251px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    min-width: 432px;
  }

  @media screen and (min-width: 986px) {
    min-width: 392px;
  }
`;

export const Input = styled.input`
  background: #ffffff url(${searchIcon}) no-repeat;
  background-size: 14.56px 15.38px;
  background-position: 11.15px 16.15px;
  box-sizing: border-box;
  width: 100%;
  line-height: 24px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding-left: 35px;
  padding-top: 12px;
  padding-bottom: 12px;

  @media screen and (min-width: 768px) {
    background-size: 20.02px 21.15px;
    padding-left: 49px;
    background-position: 15.2px 12.2px;
  }

  @media screen and (min-width: 986px) {
    padding-left: 53px;
    background-position: 15.2px 12.2px;
  }

  ::placeholder {
    font-family: "CircularAir-Book", "Arial", sans-serif;
    color: #383838;
    line-height: 24px;
    font-size: 14px;
    opacity: 0.64;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
`;
