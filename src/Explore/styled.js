import styled from "styled-components";

export const Text = styled.p`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 12px;
  font-size: 14px;
  margin: 0;

  @media screen and (min-width: 768px) {
    line-height: 20px;
    font-size: 17px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const TextContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 12px;
  padding-top: 15px;
  padding-bottom: 14px;

  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-top: none;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  @media screen and (min-width: 768px) {
    padding-top: 25px;
    padding-bottom: 25px;

    border: 1px solid rgba(72, 72, 72, 0.2);
    border-left: none;
    border-bottom-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
