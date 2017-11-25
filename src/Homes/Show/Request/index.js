import React from "react";
import styled from "styled-components";
import Rating from "../../../Rating";
import lamp from "../lamp.png";
import arrow from "./arrow.svg";

const Container = styled.div`
  @media screen and (min-width: 992px) {
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(118, 118, 118, 0.2);
    padding-top: 16px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 24px;
  }
`;

const Header = styled.header`
  @media screen and (min-width: 992px) {
    padding-bottom: 24px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  }
`;

const Footer = styled.footer`
  @media screen and (min-width: 992px) {
    padding-top: 24px;
    margin-top: 16px;
    border-top: 1px solid rgba(118, 118, 118, 0.2);
    background: url(${lamp}) no-repeat;
    background-position: right 0 top 24px;
  }
`;

const Price = styled.span`
  @media screen and (min-width: 992px) {
    font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
    line-height: 28px;
    font-size: 24px;
    color: #383838;
    margin-bottom: 8px;
    display: inline-block;
  }
`;

const Details = styled.span`
  @media screen and (min-width: 992px) {
    font-family: "CircularAir-Book", "Arial", sans-serif;
    line-height: 14px;
    font-size: 12px;
    color: #636363;
    margin-left: 4px;
    display: inline-block;
  }
`;

const Label = styled.label`
  @media screen and (min-width: 992px) {
    font-family: "CircularAir-Book", "Arial", sans-serif;
    line-height: 14px;
    font-size: 12px;
    color: #383838;
    margin-bottom: 8px;
    display: block;
  }
`;

const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 16px;
`;

const DateInput = styled.input`
  @media screen and (min-width: 992px) {
    background: #ffffff;
    border-top: 1px solid rgba(118, 118, 118, 0.2);
    border-bottom: 1px solid rgba(118, 118, 118, 0.2);
    border-left: 1px solid rgba(118, 118, 118, 0.2);
    border-right: ${props =>
      props.rightBorder ? "1px solid rgba(118, 118, 118, 0.2)" : "none"};
    width: 100%;
    padding: 11px;
  }

  ::placeholder {
    font-family: "CircularAir-Book", "Arial", sans-serif;
    line-height: 16px;
    font-size: 14px;
    color: #636363;
  }
`;

const Select = styled.select`
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
`;

const Fake = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  padding: 12px;
  width: 100%;

  border: 1px solid rgba(118, 118, 118, 0.2);
  box-sizing: border-box;

  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #636363;

  background: url(${arrow}) no-repeat;
  background-size: 15.16px 8.42px;
  background-position: 96% 18px;
`;

const SelectContainer = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const RequestButton = styled.button`
  background: #ff5a5f;
  border-radius: 4px;
  border: none;
  font-family: Circular Air;
  line-height: 19px;
  font-size: 16px;
  padding: 9px 0;
  text-align: center;
  color: #ffffff;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  display: block;
  width: 100%;
`;

const DisclaimerContainer = styled.div`
  text-align: center;
  margin-top: 11px;
`;

const Disclaimer = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
`;

const ViewsStats = styled.p`
  max-width: 80%;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #383838;
  margin: 0;
  margin-bottom: 4px;
`;

const ViewsStatsLighter = ViewsStats.extend`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
`;

export default () => {
  return (
    <Container>
      <Header>
        <Price>$41</Price>
        <Details>per night</Details>
        <br />
        <Rating />
        <Details>111</Details>
      </Header>
      <form>
        <DatesContainer>
          <div>
            <Label for="check-in">Check In</Label>

            <DateInput
              id="check-in"
              type="text"
              placeholder="mm/dd/yyyy"
              name="check-in"
            />
          </div>
          <div>
            <Label for="check-out">Check Out</Label>

            <DateInput
              id="check-out"
              type="text"
              placeholder="mm/dd/yyyy"
              name="check-out"
              rightBorder
            />
          </div>
        </DatesContainer>

        <Label for="guests">Guests</Label>
        <SelectContainer>
          <Fake>1 guest</Fake>
          <Select id="guests" name="guests">
            <option>1 guest</option>
            <option>2 guest</option>
          </Select>
        </SelectContainer>
        <RequestButton type="submit">Request to book</RequestButton>

        <DisclaimerContainer>
          <Disclaimer>You won’t be charged yet</Disclaimer>
        </DisclaimerContainer>
      </form>

      <Footer>
        <ViewsStats>This home is on people’s minds.</ViewsStats>
        <ViewsStatsLighter>
          It’s been viewed 500+ times in the past week.
        </ViewsStatsLighter>
      </Footer>
    </Container>
  );
};
