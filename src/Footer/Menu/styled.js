import styled from "styled-components";

export const Link = styled.a`
  @media screen and (min-width: 768px) {
    display: block;
    font-family: "CircularAir-Book", "Arial", sans-serif;
    line-height: 14px;
    font-size: 12px;
    color: #636363;
    text-decoration: none;
    margin-bottom: 11px;
  }

  @media screen and (min-width: 986px) {
    line-height: 18px;
    font-size: 15px;
    margin-bottom: 8px;
  }
`;

export const Heading = styled.h3`
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-bottom: 16px;
    font-family: "CircularAir-Bold", "Bold", sans-serif;
    line-height: 14px;
    font-size: 12px;
    color: #383838;
  }

  @media screen and (min-width: 986px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Break = styled.br`
  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 986px) {
    display: none;
  }
`;
