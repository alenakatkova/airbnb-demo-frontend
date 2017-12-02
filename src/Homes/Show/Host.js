import React from "react";
import styled from "styled-components";
import mdMedal from "./mdMedal.svg";
import hostPhoto from "./hostSectionPhoto.png";
import verifiedIcon from "./verifiedIcon.svg";

const Section = styled.section`
  position: relative;
  padding-bottom: 48px;
`;

const Title = styled.h2`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 28px;
  font-size: 24px;
  color: #383838;
  margin: 0;
  margin-bottom: 16px;
  max-width: 75%;

  @media screen and (min-width: 768px) {
    line-height: 32px;
    font-size: 28px;
    margin-bottom: 8px;
    max-width: 80%;
  }
`;

const AdditionalInfo = styled.p`
  margin: 0;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #636363;
  margin-bottom: 12px;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 163px;
  }
`;

const StatusText = styled.span`
  display: inline-block;
  margin-left: 16px;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #636363;
`;

const ReviewsCounter = styled.button`
  background: linear-gradient(
    137.16deg,
    rgba(255, 195, 51, 0.8) 5.46%,
    #ffc333 38.68%,
    #ffb400 38.76%,
    #ffb400 85.47%
  );
  border-radius: 6px;
  border: none;
  margin: none;
  padding: 6px 10px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #ffffff;
`;

const VerifiedIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const PhotoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px;

  @media screen and (min-width: 768px) {
    top: -10px;
    right: 10px;
  }
`;

const Photo = styled.img`
  width: 60px;
  height: 60px;

  @media screen and (min-width: 768px) {
    width: 88px;
    height: 88px;
  }
`;

const Medal = styled.img`
  width: 16px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 36px;

  @media screen and (min-width: 768px) {
    top: 60px;
  }
`;

const Description = styled.p`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  margin-top: 12px;
  margin-bottom: 16px;
`;

const ReadMore = styled.button`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #0f7276;
  border: none;
  background: none;
  padding: 0;
  display: inline-block;
`;

const ContactButton = styled.button`
  background: #ffffff;
  border: 1px solid #008489;
  background: none;
  border-radius: 2px;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #0f7276;
  padding: 7px 12px;
`;

const Details = styled.div`margin-top: 24px;`;

const Detail = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 18px;
  font-size: 18px;
`;

const Bolder = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
`;

export default () => {
  return (
    <Section id="host">
      <PhotoContainer>
        <Photo src={hostPhoto} alt="Host photo" />
        <Medal src={mdMedal} alt="Medal icons" />
      </PhotoContainer>
      <Title>Hosted by Yudy & Victoria</Title>
      <AdditionalInfo>
        Santa Ana, California, United States · Joined in August 2014
      </AdditionalInfo>

      <StatusContainer>
        <Status>
          <ReviewsCounter>153</ReviewsCounter>
          <StatusText>Reviews</StatusText>
        </Status>

        <Status>
          <VerifiedIcon src={verifiedIcon} alt="Reviews" />
          <StatusText>Verified</StatusText>
        </Status>
      </StatusContainer>

      <Description>
        Yudy and I (Victoria) are sisters-in law. Yudy lives in Colombia and
        would be your hostess on the property. I live in California and am the
        owner of the property. It is my goal to create a "boutique eco-resort"
        on the approximately 5 acre farm we have in the coffee growing reg…{" "}
        <ReadMore>Read more</ReadMore>
      </Description>
      <ContactButton>Contact host</ContactButton>

      <Details>
        <Detail>
          Languages: <Bolder>English, Español</Bolder>
        </Detail>
        <Detail>
          Response rate: <Bolder>100%</Bolder>
        </Detail>
        <Detail>
          Response time: <Bolder>within a few hours</Bolder>
        </Detail>
      </Details>
    </Section>
  );
};
