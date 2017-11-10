import styled from "styled-components";

const CardsContainer = styled.div`
  position: relative;
  overflow-x: scroll;
  margin: 0 -8px;
  padding: 0 8px;
  box-sizing: border-box;

  @media (min-width: 986px) {
    overflow: hidden;
  }
`;

export default CardsContainer;
