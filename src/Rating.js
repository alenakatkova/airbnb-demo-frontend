import styled from "styled-components";
import React from "react";
import starIcon from "./starIcon.svg";

const Container = styled.div`display: inline-block;`;

const Star = styled.img`
  windth: 12px;
  height: 12.03px;
  margin-right: 4px;
`;

export default () => {
  return (
    <Container>
      <Star src={starIcon} alt="Rating Star" />
      <Star src={starIcon} alt="Rating Star" />
      <Star src={starIcon} alt="Rating Star" />
      <Star src={starIcon} alt="Rating Star" />
      <Star src={starIcon} alt="Rating Star" />
    </Container>
  );
};
