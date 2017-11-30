import styled from "styled-components";

export const Range = styled.p`
  margin: 0;
  font-family: "CircularAir-Light", "Arial Bold", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #383838;
`;

export const Average = styled.p`
  margin: 0;
  margin-top: 7px;
  font-family: "CircularAir-Light", "Arial Bold", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
`;

export const Stats = styled.img`
  position: absolute;
  z-index: 0;
  top: -73px;
  left: 37px;
`;

export const RheostatContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: block;
  position: relative;
`;

export const Description = styled.span`
  font-size: 12px;
  line-height: 14px;
`;

export const MainText = styled.span`
  font-size: 16px;
  line-height: 19px;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 96px;
  width: 100%;
  height: auto;
  overflow-y: scroll;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    bottom: 200px;
  }

  @media screen and (min-width: 992px) {
    padding-left: calc(50% - 992px * 0.32);
  }

  @media screen and (min-width: 1200px) {
    padding-left: calc(50% - 1200px * 0.32);
  }
`;

export const Section = styled.section`
  padding: 32px 0;
  background: #ffffff;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  bottom: 202px;
`;

export const InnerContainer = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 60%;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  margin-bottom: 23px;
`;

export const Div = styled.div`
  position: relative;
`;

export const Heading = styled.h2`
  margin: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
`;

export const Text = styled.p`
  margin: 0;
  margin-top: 7px;
  margin-bottom: 45px;
  font-family: "CircularAir-Light", "Arial Bold", sans-serif;
  line-height: 18px;
  font-size: 14px;
  color: #383838;
  max-width: 200px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 0;
  padding: 0;
`;

export const LearnMore = styled.button`
  border: none;
  background: none;
  padding: 0;
  font-family: "CircularAir-Light", "Arial Bold", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #0f7276;
`;
