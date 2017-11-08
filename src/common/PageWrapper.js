import styled from "styled-components";

const PageWrapper = styled.div`
  max-width: 967px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0 8px;
  }
`;

export default PageWrapper;
