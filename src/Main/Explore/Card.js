import React from "react";
import styled from "styled-components";

const Content = styled.div`
  position: relative;
  padding-left: 12px;
  padding-top: 90px;
  padding-bottom: 14px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  width: 144px;

  @media (min-width: 768px) {
    padding-left: 120px;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
  }
`;

const Text = styled.a`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 12px;
  font-size: 14px;
  color: #383838;
  text-decoration: none;

  @media (min-width: 768px) {
    line-height: 20px;
    font-size: 17px;
  }
`;

const Picture = styled.img`
  width: 144px;
  height: 78px;
  position: absolute;
  top: -1px;
  left: -1px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  @media (min-width: 768px) {
    width: 96px;
    height: 72px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

const Card = props => (
  <div className="col-xs-6 col-s-5 col-sm-4 col-md-5 col-lg-4">
    <Content>
      <Picture src={props.highRes} alt={props.alt} />
      <Text href={props.link}>{props.text}</Text>
    </Content>
  </div>
);

export default Card;
