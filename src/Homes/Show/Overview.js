import React from "react";
import styled from "styled-components";
import mdMedal from "./mdMedal.svg";
import mdHostPhoto from "./mdHostPhoto.png";
import { Md, OnlyMd, OnlyXs } from "../../mediaQueries";
import bedIcon from "./bedIcon.svg";
import bathIcon from "./bathIcon.svg";
import guestIcon from "./guestIcon.svg";
import doorIcon from "./doorIcon.svg";
import lamp from "./lamp.png";
import arrow from "./arrow.svg";
import cancellation from "./cancellation.svg";

const Section = styled.section`
  position: relative;
  padding-top: 16px;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
  }
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

const ReadMore = styled.button`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #0f7276;
  border: none;
  background: none;
  padding: 0;
  display: inline-block;
`;

const ShortDescription = styled.span`
  display: inline-block;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #636363;

  @media screen and (min-width: 768px) {
    line-height: 19px;
    font-size: 16px;
  }
`;

const PhotoContainer = styled.div`
  position: absolute;
  top: 78px;
  right: 14px;
  padding: 2px;

  @media screen and (min-width: 768px) {
    top: 40px;
  }
`;

const Photo = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

const Medal = styled.img`
  width: 10px;
  height: 18.75px;
  position: absolute;
  right: 0;
  top: 28px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 30px;
    top: 40px;
  }
`;

const Name = styled.span`
  display: block;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 19px;
  font-size: 16px;
  text-align: center;
  color: #636363;
  margin-top: 10px;
`;

const Details = styled.div`
  width: 100%;
  margin-top: 33px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #383838;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    width: auto;
    margin-right: 30px;
  }
`;

const DetailIcon = styled.img`
  width: 20px;
  height: auto;
  display: inline-flex;
  margin-right: 8px;
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 23px;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #383838;

  @media screen and (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

const TextNormal = Text.extend`
  margin-bottom: 4px;
  font-family: "CircularAir-Book", "Arial", sans-serif;
`;

const ViewsStats = styled.div`
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  padding: 18px 24px;
  background-image: url(${lamp});
  background-position: 672px 13px;
  background-repeat: no-repeat;
  margin-bottom: 24px;
`;

const Views = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  color: #636363;
`;

const ViewsLight = Views.extend`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  margin-top: 4px;
`;

const GreenButton = styled.button`
  display: block;
  padding: 0;
  background: none;
  border: none;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #0f7276;
  margin-bottom: 23px;
`;

const Arrow = styled.img`
  width: 11px;
  height: 6px;
  display: inline-block;
  margin-left: 8px;
`;

const SubHeading = styled.h3`
  margin: 0;
  margin-top: 23px;
  margin-bottom: 16px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #383838;
`;

const SmallHeading = styled.h4`
  margin: 0;
  margin-bottom: 16px;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #383838;

  @media screen and (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

const Amenity = styled.li`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #383838;
  margin-bottom: 27px;
  min-height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 50%;
  max-width: 50%;

  @media screen and (min-width: 768px) {
    line-height: 19px;
    font-size: 16px;
  }
`;

const Amenities = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 16px;
`;

const AmenitiesArr = [
  { name: "Internet", icon: require("./xsInternet.svg") },
  { name: "Family/kid friendly", icon: require("./xsFamily.svg") },
  { name: "Wireless Internet", icon: require("./xsWiFi.svg") },
  { name: "Free parking on premises", icon: require("./xsParking.svg") }
];

const Hr = styled.hr`
  width: 65px;
  height: 1px;
  background: #767676;
  opacity: 0.2;
  margin: 20px 0;
`;

const CancelIcon = styled.img`
  width: 38px;
  height: 40px;
  position: absolute;
  top: 46px;
  right: 0;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 45px;
    top: 34px;
    right: 70px;
  }
`;

export default () => {
  return (
    <Section id="overview">
      <PhotoContainer>
        <Photo src={mdHostPhoto} alt="Host photo" />
        <Medal src={mdMedal} alt="Medal" />
        <Md>
          <Name>
            Yudi &<br />Victoria
          </Name>
        </Md>
      </PhotoContainer>
      <Title>Romantic Cabana with view</Title>
      <Part>
        <ShortDescription>Entire cabin · Armenia</ShortDescription>
        <Details>
          <Detail>
            <DetailIcon src={guestIcon} alt="Beds" />2 guests
          </Detail>
          <Detail>
            <DetailIcon src={bedIcon} alt="Beds" />2 beds
          </Detail>
          <Detail>
            <DetailIcon src={doorIcon} alt="Beds" />Studio
          </Detail>
          <Detail>
            <DetailIcon src={bathIcon} alt="Beds" />1 bath
          </Detail>
        </Details>

        <OnlyMd>
          <ViewsStats>
            <Views>This home is on people’s minds</Views>
            <ViewsLight>
              It’s been viewed 500+ times in the past week.
            </ViewsLight>
          </ViewsStats>
        </OnlyMd>

        <Text>
          Located in the coffee region, in the Andean mountains of Colombia,
          South America, a charming cabana made from bamboo, with a great view
          and a "sendero" or pathway through the bamboo forest which
          criss-crosses our 5 acre organic farm, leading down to a stream. A
          place to relax and commune with nature.
        </Text>

        <GreenButton>
          Read more about the space <Arrow src={arrow} alt="Arrow" />
        </GreenButton>
        <GreenButton>Contact host</GreenButton>
      </Part>

      <Part>
        <SubHeading>Amenities</SubHeading>

        <Amenities>
          {AmenitiesArr.map(amenity => (
            <Amenity key={amenity.name}>
              <Icon src={amenity.icon} />
              {amenity.name}
            </Amenity>
          ))}
        </Amenities>

        <GreenButton>
          Show all amenities <Arrow src={arrow} alt="Arrow" />
        </GreenButton>
      </Part>

      <Part>
        <SubHeading>Always communicate through Airbnb</SubHeading>
        <Text>
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </Text>
        <GreenButton>Learn more</GreenButton>
      </Part>

      <Part>
        <SubHeading>House Rules</SubHeading>
        <Text>
          Check-in is anytime after 1PM<br />Check out by 11AM
        </Text>
        <GreenButton>
          Read all rules <Arrow src={arrow} alt="Arrow" />
        </GreenButton>
      </Part>

      <Part>
        <CancelIcon src={cancellation} alt="Cancellation" />
        <SubHeading>Cancellations</SubHeading>
        <TextNormal>Free cancellation</TextNormal>
        <Text>
          Cancel within 48 hours of booking
          <OnlyXs>
            <br />
          </OnlyXs>to get a full refund.
        </Text>
        <Hr />
        <SmallHeading>Flexible</SmallHeading>
        <Text>
          Cancel up to 24 hours before check in and get a full refund (minus
          service fees). Cancel within 24 hours of your trip and the firs…
          <ReadMore>Read more</ReadMore>
        </Text>
      </Part>
    </Section>
  );
};
