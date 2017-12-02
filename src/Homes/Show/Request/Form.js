import React from "react";
import styled from "styled-components";
import Rating from "../../../Rating";
import lamp from "../lamp.png";
import arrow from "./arrow.svg";
import closeIcon from "./closeIcon.svg";

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background: #ffffff;
  z-index: 12;
  padding: 16px 8px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(118, 118, 118, 0.2);
    padding: 24px;
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    padding-top: 16px;
    margin-top: 24px;
    position: static;
    height: auto;
    transform: none;
  }
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  overflow-y: scroll;
  z-index: 30;
  padding: 16px 8px;

  @media screen and (min-width: 768px) {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
  }
`;

const Header = styled.header`
  padding-bottom: 24px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Footer = styled.footer`
  padding-top: 24px;
  margin-top: 16px;
  border-top: 1px solid rgba(118, 118, 118, 0.2);
  background: url(${lamp}) no-repeat;
  background-position: right 0 top 24px;
`;

const Price = styled.span`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 28px;
  font-size: 24px;
  color: #383838;
  margin-bottom: 8px;
  display: inline-block;
`;

const Details = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #636363;
  margin-left: 4px;
  display: inline-block;
`;

const Label = styled.label`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
  margin-bottom: 8px;
  display: block;
`;

const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 16px;
`;

const DateInputWrapper = styled.div`
  max-width: 50%;
  flex-basis: 50%;
`;

const DateInput = styled.input`
  background: #ffffff;
  border-top: 1px solid rgba(118, 118, 118, 0.2);
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  border-left: 1px solid rgba(118, 118, 118, 0.2);
  border-right: ${props =>
    props.rightBorder ? "1px solid rgba(118, 118, 118, 0.2)" : "none"};
  width: 100%;
  padding: 11px;
  padding-right: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #636363;
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
  margin-bottom: 16px;
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

const CloseButtonContainer = styled.div`
  display: block;
  margin-bottom: 24px;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  width: 15.53px;
  height: 15.53px;
  border: none;
  padding: 0;
  background: none;
`;

export default props => {
  return (
    <Container>
      <InnerContainer>
        <CloseButtonContainer>
          <CloseButton onClick={props.onCloseClick}>
            <img src={closeIcon} alt="Close button" />
          </CloseButton>
        </CloseButtonContainer>
        <Header>
          <Price>$41</Price>
          <Details>per night</Details>
          <br />
          <Rating />
          <Details>111</Details>
        </Header>
        <form>
          <DatesContainer>
            <DateInputWrapper>
              <Label for="check-in">Check In</Label>

              <DateInput id="check-in" type="date" name="check-in" />
            </DateInputWrapper>
            <DateInputWrapper>
              <Label for="check-out">Check Out</Label>

              <DateInput
                id="check-out"
                type="date"
                name="check-out"
                rightBorder
              />
            </DateInputWrapper>
          </DatesContainer>

          <Label for="guests">Guests</Label>
          <SelectContainer>
            <Fake>1 guest</Fake>
            <Select id="guests" name="guests">
              <option value="1">1 guest</option>
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
      </InnerContainer>
    </Container>
  );
};
