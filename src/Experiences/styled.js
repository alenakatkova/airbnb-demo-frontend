import styled from "styled-components";

export const Text = styled.p`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 15px;
  font-size: 13px;
  margin-top: 8px;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

export const Price = styled.span`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
`;

export const Stats = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  margin-left: 4px;
`;
