import React from "react";
import mainPhoto from "./cabana.png";
import xsShare from "./xsShare.svg";
import xsLike from "./xsLike.svg";
import mdShare from "./mdShare.svg";
import mdLike from "./mdLike.svg";
import styled from "styled-components";
import { Md } from "../../mediaQueries";

const PhotoContainer = styled.div`
  background: url(${mainPhoto}) no-repeat;
  min-height: 290px;
  background-size: cover;

  @media screen and (min-width: 768px) {
    min-height: 360px;
  }

  @media screen and (min-width: 992px) {
    min-height: 440px;
  }
`;

const ButtonsContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 290px;

  @media screen and (min-width: 768px) {
    min-height: 360px;
  }

  @media screen and (min-width: 992px) {
    min-height: 440px;
  }
`;

const SocialButton = styled.button`
  border: none;
  background-size: contain;
  border-radius: 0;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    background-position: 16px 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 44px;
    padding-right: 16px;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
    font-family: "CircularAir-Book", "Arial", sans-serif;
    line-height: 24px;
    font-size: 14px;
    color: #383838;
  }
`;

const Share = SocialButton.extend`
  background: url(${xsShare}) no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    background-image: url(${mdShare});
  }
`;

const Like = SocialButton.extend`
  width: 26px;
  height: 23px;
  background: url(${xsLike}) no-repeat;
  margin-left: 16px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    background-image: url(${mdLike});
  }
`;

const SocialButtons = styled.div`
  position: absolute;
  top: 14.58px;
  right: 5.56px;
  z-index: 10;

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 8px;
  }
`;

const ViewPhotos = styled.button`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding: 8px 16px;
  position: absolute;
  bottom: 16px;
  right: 4px;
  z-index: 10;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;

  @media screen and (min-width: 768px) {
    bottom: 24px;
    left: 8px;
    font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
    line-height: 24px;
    font-size: 14px;
  }
`;

export default () => {
  return (
    <PhotoContainer>
      <div className="container">
        <ButtonsContainer>
          <SocialButtons>
            <Share>
              <Md>Share</Md>
            </Share>
            <Like>
              <Md>Like</Md>
            </Like>
          </SocialButtons>

          <ViewPhotos>View Photos</ViewPhotos>
        </ButtonsContainer>
      </div>
    </PhotoContainer>
  );
};
