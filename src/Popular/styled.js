import styled from "styled-components";

export const Subheading = styled.p`
  margin-top: 6px;
  margin-bottom: 2px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 9px;
  font-size: 8px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
    line-height: 12px;
    font-size: 10px;
  }
`;

export const Name = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 16px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

export const Price = styled.p`
  margin: 0;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 14px;
  font-size: 12px;
  opacity: 0.9;

  @media screen and (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;
