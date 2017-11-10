import styled from "styled-components";
import nextIcon from "./nextIcon.svg";

const NextPage = styled.button`
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

  @media (min-width: 768px) {
    display: none;
  }
`;

export default NextPage;
