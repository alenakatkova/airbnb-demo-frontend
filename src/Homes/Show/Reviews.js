import React from "react";
import styled from "styled-components";
import { Md, OnlyMd, OnlyXs } from "../../mediaQueries";
import Rating from "./Rating";
import searchIcon from "./searchIcon.svg";

const Section = styled.section`
  position: relative;
  padding-top: 47px;
`;

const Part = styled.div`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  position: relative;
`;

const Title = styled.h2`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 28px;
  font-size: 24px;
  color: #383838;
  margin: 0;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    line-height: 42px;
    font-size: 36px;
    margin-bottom: 4px;
  }
`;

export const SearchContainer = styled.div`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
`;

export const Input = styled.input`
  background: #ffffff url(${searchIcon}) no-repeat;
  background-size: 14.56px 15.38px;
  background-position: 12.15px 12.15px;
  width: 100%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  line-height: 16px;
  font-size: 14px;
  color: #383838;

  @media screen and (min-width: 768px) {
    background-size: 15.25px 15.38px;
    padding-left: 34px;
    background-position: 9.15px 7.15px;
    padding-top: 7px;
    padding-bottom: 7px;
  }
  ::placeholder {
    font-family: "CircularAir-Book", "Arial", sans-serif;
    color: #383838;
    line-height: 16px;
    font-size: 14px;
  }
`;

export default () => {
  return (
    <Section id="reviews">
      <div className="row between-md middle-md">
        <div className="col-xs-12 col-md-6">
          <Title>
            113 Reviews <Rating />
          </Title>
        </div>
        <div className="col-xs-12 col-md-4">
          <SearchContainer>
            <Input placeholder="Search reviews" type="text" />
          </SearchContainer>
        </div>
      </div>
    </Section>
  );
};
