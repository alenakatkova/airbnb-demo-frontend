import styled from "styled-components";

const Heading2 = styled.h2`
  max-width: 246px;
  font-family: "CircularAir-Bold", "Arial-Bold", sans-serif;
  line-height: 28px;
  font-size: 24px;
  color: #383838;
  margin: 0;
  padding: 0;
  margin-bottom: 16px;
  margin-top: 15px;

  @media (min-width: 768px) {
    line-height: 34px;
    font-size: 32px;
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

export default Heading2;
