import React from "react";
import styled from "styled-components";
import Rating from "./Rating";
import searchIcon from "./searchIcon.svg";
import Review from "./Review";
import marlee from "./marlee.png";
import michelle from "./michelle.png";
import Paginator from "./Paginator";

const Section = styled.section`
  position: relative;
  padding-top: 47px;
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

const SearchContainer = styled.div`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
`;

const Input = styled.input`
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

const CriteriaBlock = styled.div`
  margin-top: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Criteria = styled.span`
  display: inline-block;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
`;

const CriteriaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: flex-end;
`;

const ReadMore = styled.button`
  display: block;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #0f7276;
  border: none;
  background: none;
  padding: 0;

  @media screen and (min-width: 992px) {
    display: inline-block;
    margin-left: 5px;
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
      <CriteriaBlock>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <CriteriaContainer>
              <Criteria>Accuracy</Criteria>
              <Rating />
            </CriteriaContainer>
            <CriteriaContainer>
              <Criteria>Communication</Criteria>
              <Rating />
            </CriteriaContainer>
            <CriteriaContainer>
              <Criteria>Cleanliness</Criteria>
              <Rating />
            </CriteriaContainer>
          </div>
          <div className="col-xs-12 col-md-6">
            <CriteriaContainer>
              <Criteria>Location</Criteria>
              <Rating />
            </CriteriaContainer>
            <CriteriaContainer>
              <Criteria>Check In</Criteria>
              <Rating />
            </CriteriaContainer>
            <CriteriaContainer>
              <Criteria>Value</Criteria>
              <Rating />
            </CriteriaContainer>
          </div>
        </div>
      </CriteriaBlock>
      <Review src={marlee} name="Marlee" period="November 2017">
        This was one of my favourite places we stayed in all on Colombia. A very
        peaceful setting and a great spot to unwind.
      </Review>
      <Review src={michelle} name="Michelle" period="November 2017">
        What an absolutely wonderful place to stay! Yudy and Victoria were so
        kind and lovely, even after we arrived super late due to problems at the
        airport, and Hernando our driver was super friendly and really patient
        with our little Spanish. Victoria was a lovely host and gave us so…
        <ReadMore>Read more</ReadMore>
      </Review>
      <Paginator />
    </Section>
  );
};
