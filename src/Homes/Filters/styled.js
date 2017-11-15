import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  z-index: 0;
  background-color: #ffffff;
  opacity: 0.8;
  width: 100%;
  height: 100vh;
`;

export const PopUp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 12;
  box-sizing: border-box;
  background: #ffffff;

  @media screen and (min-width: 768px) {
    top: 40px;
    padding: 24px 16px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
  }
`;

export const FilterButton = styled.button`
  padding: 7px 16px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 16px;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  color: #383838;
`;

export const FilterContainer = styled.div`
  position: relative;
  margin-right: 16px;
  display: inline-block;
`;

export const ApplyButton = styled.button`
  border: none;
  background: none;
  padding: 0 12px;
  margin: 0;
  display: inline-block;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  color: #008489;
`;

export const CancelButton = styled.button`
  border: none;
  background: none;
  padding: 0 12px;
  margin: 0;
  display: inline-block;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  color: #636363;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;
