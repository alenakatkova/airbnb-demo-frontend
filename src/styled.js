import styled from "styled-components";
import nextIcon from "./nextIcon.svg";

export const Section = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const SectionTitle = styled.h2`
  font-family: "CircularAir-Bold", "Arial-Bold", sans-serif;
  line-height: 28px;
  font-size: 24px;
  color: #383838;
  margin: 0;
  margin-bottom: 16px;
  margin-top: 15px;

  @media (min-width: 768px) {
    line-height: 34px;
    font-size: 32px;
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

export const CardsContainer = styled.div`
  position: relative;
  overflow-x: scroll;
  margin: 0 -8px;
  padding: 2px 8px;
  box-sizing: border-box;
`;

export const Card = styled.a`
  display: block;
  text-decoration: none;
  color: #383838;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const NextPage = styled.button`
  display: none;

  @media (min-width: 986px) {
    display: block;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    border: none;
    position: absolute;
    right: -20px;
    z-index: 10;
    width: 40px;
    height: 40px;
    background: url(${nextIcon}) no-repeat 0 0;
    background-size: contain;
  }
`;

export const CardsOuterContainer = styled.div`position: relative;`;
