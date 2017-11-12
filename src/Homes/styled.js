import styled from "styled-components";

export const Heading = styled.p`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 15px;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-top: 8px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
    margin-bottom: 2px;
  }
`;

export const Description = styled.p`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 14px;
  font-size: 12px;
  margin: 0;
  margin-bottom: 6px;

  @media screen and (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

export const Stats = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  margin-left: 4px;
`;
