import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Section = styled.section`position: relative;`;

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

const Description = styled.p`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  margin: 16px 0;
`;

const Details = Description.extend`margin-bottom: 24px;`;

const GreenButton = styled.button`
  display: block;
  padding: 0;
  background: none;
  border: none;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #0f7276;
  margin-bottom: 16px;
`;

const Arrow = styled.img`
  width: 11px;
  height: 6px;
  display: inline-block;
  margin-left: 8px;
`;

export default () => {
  return (
    <Section id="host">
      <Title>The neighborhood</Title>
      <Details>
        Yudy & Victoria’s home is located in Armenia, Quindio, Colombia.
      </Details>
      <Description>
        We are situated in the heart of the coffee region in the Andean
        mountains in Colombia. We are in "Vereda La Pradera" neighborhood, near
        the small town of "El Caimo", 20 minutes from Armenia and 20 minutes
        from the airport, by car. Close enough for comfort and easy access, far
        enough from the hustle of traffic and city noise that you can commune
        with nature. Sleep to the sound of the crickets and awaken to the sound
        of birds.
      </Description>
      <GreenButton>
        Read more about neighborhood <Arrow src={arrow} alt="Arrow" />
      </GreenButton>
    </Section>
  );
};
