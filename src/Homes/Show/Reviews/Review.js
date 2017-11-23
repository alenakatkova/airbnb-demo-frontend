import React from "react";
import styled from "styled-components";
import flagIcon from "./flagIcon.svg";

const Container = styled.div`
  padding-top: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);

  @media screen and (min-width: 992px) {
    padding-top: 24px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 16px;

  background: url(${flagIcon}) no-repeat;
  background-position: right 0 top 0;
`;

const Details = styled.div`
  display: inline-block;
  width: 100%;
  margin-left: 16px;
`;

const Name = styled.p`
  margin: 0;
  margin-bottom: 1px;
  font-size: 20px;
  line-height: 23px;
  color: #383838;
  font-family: "CircularAir-Book", "Arial", sans-serif;
`;

const Period = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 19px;
  color: #383838;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
`;

const Photo = styled.img`
  display: inline-flex;
  width: 48px;
  height: 48px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 21px;
  color: #383838;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
`;

export default props => (
  <Container>
    <Header>
      <Photo src={props.src} alt="Guest photo" />
      <Details>
        <Name>{props.name}</Name>
        <Period>{props.period}</Period>
      </Details>
    </Header>
    <Text>{props.children}</Text>
  </Container>
);
