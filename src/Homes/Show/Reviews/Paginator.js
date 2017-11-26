import React from "react";
import styled from "styled-components";
import next from "./next.svg";

const Container = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 48px;
`;

const Page = styled.a`
  display: block;
  width: 32px;
  height: 32px;
  margin: 0;
  margin-right: 16px;
  border-radius: 16px;

  font-family: "CircularAir-Book", "Arial", sans-serif;
  color: #0f7276;
  font-size: 16px;
  line-height: 32px;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
`;

const CurrentPage = Page.extend`
  background: #008489;
  color: #ffffff;
`;

const NextButton = styled.img`
  width: 32px;
  height: 32px;
`;

export default () => {
  return (
    <Container>
      <div className="row middle-xs center-xs">
        <CurrentPage href="#">1</CurrentPage>
        <Page href="#">2</Page>
        <Page href="#">3</Page>
        <Page href="#">...</Page>
        <Page href="#">17</Page>
        <Page href="#">
          <NextButton src={next} alt="Next page" />
        </Page>
      </div>
    </Container>
  );
};
