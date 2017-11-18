import styled from "styled-components";

export const PageFooter = styled.footer`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

export const Top = styled.div`
  padding-top: 16px;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding: 48px 0;
  }
`;

export const Bottom = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid rgba(72, 72, 72, 0.08);

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 34px;
  }
`;

export const Logo = styled.img`
  width: 20.46px;
  height: 21.99px;
`;

export const Container = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const Copyright = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #636363;
  display: block;
  margin-left: 12.51px;

  @media screen and (min-width: 986px) {
    line-height: 18px;
    font-size: 15px;
  }
`;
