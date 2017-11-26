import styled from "styled-components";
import mapButton from "./mapButton.svg";

export const Main = styled.main`
  padding-top: 164px;
  padding-bottom: 88px;

  @media screen and (min-width: 768px) {
    padding-bottom: 24px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 1 auto;
  margin: 0 -8px;

  @media screen and (min-width: 768px) {
    margin: 0 -16px;
  }

  @media screen and (min-width: 992px) {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }
`;

export const Disclaimer = styled.p`
  display: block;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #636363;
`;

export const Current = styled.p`
  display: block;
  text-align: center;
  width: 100%;
  margin: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #383838;
`;

export const MapButton = styled.button`
  width: 40px;
  height: 40px;
  background: #ffffff url(${mapButton}) no-repeat center;
  background-size: 15.31px 19.06px;
  border-radius: 50%;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: fixed;
  right: 8px;
  bottom: 24px;
  z-index: 9;

  @media screen and (min-width: 986px) {
    display: none;
  }
`;

export const MainBottom = styled.div`
  padding: 0 8px;
  width: 100%;
  margin-top: 22px;

  @media screen and (min-width: 768px) {
    margin-top: 6px;
  }

  @media screen and (min-width: 986px) {
    margin-top: 8px;
  }
`;
