import React from "react";
import styled from "styled-components";

const Content = styled.div`
  position: relative;
  padding-left: 120px;
  padding-top: 24px;
  padding-bottom: 24px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  max-width: 310px;
`;

const Text = styled.a`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: normal;
  font-size: 17px;
  color: #383838;
  text-decoration: none;
`;

const Picture = styled.img`
  width: width: 96px;
  height: 72px;
  position: absolute;
  top: -1px;
  left: -1px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const Card = props => (
  <div className="col-4">
    <Content>
      <Picture src={props.lowRes} srcset={props.highRes} alt={props.alt} />
      <Text href={props.link}>{props.text}</Text>
    </Content>
  </div>
);

export default Card;
