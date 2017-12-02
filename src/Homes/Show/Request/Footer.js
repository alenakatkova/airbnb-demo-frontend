import React from "react";
import styled from "styled-components";
import Rating from "../../../Rating";
import Form from "./Form";

const Footer = styled.footer`
  padding: 16px 0;
  border-top: 0.5px solid rgba(72, 72, 72, 0.3);
  position: relative;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const RequestButton = styled.button`
  cursor: pointer;
  background: #ff5a5f;
  border-radius: 4px;
  padding: 10px 16px;
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #ffffff;
  width: auto;
  margin: 0 8px;
`;

const PriceContainer = styled.div`
  font-family: Circular Air;
  line-height: 14px;
  font-size: 12px;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  color: #636363;
  margin-bottom: 10px;
`;

const Price = styled.span`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 28px;
  font-size: 24px;
  color: #383838;
`;

const RatingContainer = styled.div`
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
`;

const InfoContainer = styled.div`
  margin: 0 8px;
`;

const Background = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  background-color: #ffffff;
  opacity: 0.8;
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export default class Request extends React.Component {
  state = {
    isOpen: false
  };

  onRequestButtonClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Footer>
        {this.state.isOpen && <Background />}
        <div className="container">
          <div className="row between-xs middle-xs">
            <InfoContainer>
              <PriceContainer>
                <Price>${this.props.price}</Price> per night
              </PriceContainer>
              <RatingContainer>
                <Rating /> 111
              </RatingContainer>
            </InfoContainer>

            <RequestButton onClick={this.onRequestButtonClick}>
              Request to book
            </RequestButton>

            {this.state.isOpen && (
              <Form onCloseClick={this.onRequestButtonClick} />
            )}
          </div>
        </div>
      </Footer>
    );
  }
}
