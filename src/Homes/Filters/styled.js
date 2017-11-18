import styled from "styled-components";
import closeIcon from "./closeIcon.svg";

export const Background = styled.div`
  position: fixed;
  z-index: 0;
  background-color: #ffffff;
  opacity: 0.8;
  width: 100%;
  height: 100vh;
`;

export const Button = styled.button`
  padding: 7px 16px;
  border-style: solid;
  background: ${props => (props.isOpen ? "#008489" : "#ffffff")};
  border-width: 1px;
  border-color: ${props =>
    props.isOpen ? "#008489" : "rgba(72, 72, 72, 0.2)"};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 16px;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  color: ${props => (props.isOpen ? "#ffffff" : "#383838")};
`;

export const ApplyButton = styled.button`
  border: none;
  margin: 0;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  padding: 13px 0;
  width: 100%;
  text-align: center;
  background: #ff5a5f;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    font-family: "CircularAir-Book", "Arial", sans-serif;
    background: none;
    padding: 0 12px;
    display: inline-flex;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #008489;
    width: auto;
  }
`;

export const CancelButton = styled.button`
  border: none;
  background: url(${closeIcon}) no-repeat;
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 0 12px;
    display: inline-block;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    font-family: "CircularAir-Book", "Arial", sans-serif;
    color: #636363;
    background: none;
    width: auto;
    height: auto;
  }
`;

export const Header = styled.div`
  padding: 16px 8px;
  position: fixed;
  z-index: 15;
  display: flex;
  top: 0;
  left: 0;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  z-index: 15;
  background: #ffffff;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  box-shadow: 0px -1px 0px #d5d5d5;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: none;
    padding: 0;
    position: static;
  }
`;

export const Heading = styled.span`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #383838;
  display: inline-flex;
`;

export const ResetButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  display: inline-flex;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #0f7276;
`;

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  box-sizing: border-box;
  background: #ffffff;
  padding: 8px;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    padding: 24px 16px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
    width: auto;
    height: auto;
  }
`;

export const Container = styled.div`
  position: relative;
  margin-right: 16px;
  display: inline-flex;
`;

export const InnerContainer = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  overflow-y: scroll;
  box-sizing: border-box;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    position: static;
    bottom: 0;
    padding: 5px;
    min-width: 292px;
  }
`;

export const OptionTable = styled.div`
  display: table;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 36px;
`;

export const OptionCell = styled.div`
  display: table-cell;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
`;

export const OptionName = styled.span`
  display: inline-block;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;

  @media screen and (min-width: 768px) {
    line-height: 23px;
    font-size: 20px;
  }
`;

export const OptionDescription = styled.span`
  display: inline-block;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #383838;
  margin-top: 6px;

  @media screen and (min-width: 768px) {
    line-height: 19px;
    font-size: 16px;
  }
`;
