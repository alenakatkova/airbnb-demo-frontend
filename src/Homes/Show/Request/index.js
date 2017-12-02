import React from "react";
import styled from "styled-components";
import { Sticky, StickyContainer } from "react-sticky";
import Form from "./Form";
import flag from "./flag.svg";

const Container = ({ className, children }) => (
  <StickyContainer className={className}>{children}</StickyContainer>
);

const StyledStickyContainer = styled(Container)`
  height: 100%;
`;

const ReportButton = styled.button`
  border: none;
  display: block;
  width: auto;
  margin: 0 auto;
  margin-top: 16px;
  padding: 0;
  padding-left: 24px;
  background: url(${flag}) no-repeat left;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #383838;
`;

export default () => {
  return (
    <StyledStickyContainer>
      <Sticky topOffset={-82.5}>
        {({ style, isSticky }) => {
          return (
            <div
              style={{
                ...style,
                paddingTop: isSticky ? 122.5 : 0,
                paddingBottom: 24
              }}
            >
              <Form />
              <ReportButton>Report this listing</ReportButton>
            </div>
          );
        }}
      </Sticky>
    </StyledStickyContainer>
  );
};
