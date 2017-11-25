import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding-bottom: 32px;
`;

const Title = styled.h2`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  line-height: 28px;
  font-size: 24px;
  color: #383838;
  margin: 0;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    line-height: 33px;
    font-size: 28px;
    margin-bottom: 8px;
  }
`;

const Text = styled.p`
  display: inline-block;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  margin: 0;
  margin-bottom: 4px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }
`;

const MoreLinks = styled.div`
  display: inline-block;
  white-space: wrap;
  margin-bottom: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #636363;
`;

const Option = styled.a`
  text-decoration: none;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 16px;
  font-size: 14px;
  color: #636363;
  display: block;
  margin-bottom: 2px;

  @media screen and (min-width: 768px) {
    line-height: 14px;
    font-size: 12px;
  }

  @media screen and (min-width: 992px) {
    line-height: 16px;
    font-size: 14px;
  }
`;

const OptionWithMargin = Option.extend`
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const OptionsBlock = styled.div`
  display: inline-block;
  margin-bottom: 16px;
  max-width: 85%;
`;

export default () => {
  return (
    <Section>
      <Title>Explore other options in and around Armenia</Title>
      <Text>More places to stay in Armenia:</Text>
      <MoreLinks>
        <Link href="#">Apartments</Link> · <Link href="#">Houses</Link> ·{" "}
        <Link href="#">Bed & Breakfasts</Link> · <Link href="#">Lofts</Link> ·{" "}
        <Link href="#">Villas</Link>
      </MoreLinks>
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <OptionsBlock>
            <Option href="#">Cartagena Vacation Rentals</Option>
            <Option href="#">Bucaramanga</Option>
            <Option href="#">Manuel Antonio</Option>
            <Option href="#">
              Cartagena De Indias (Distrito Turistico Y Cultural)
            </Option>
            <Option href="#">Quito</Option>
            <Option href="#">Santander de Quilichao</Option>
          </OptionsBlock>
        </div>
        <div className="col-xs-12 col-md-4">
          <OptionsBlock>
            <Option href="#">San Andrés Vacation Rentals</Option>
            <Option href="#">Bogota</Option>
            <Option href="#">
              Santa Marta (Distrito Turistico Cultural E Historico)
            </Option>
            <Option href="#">Rionegro</Option>
            <Option href="#">Anapoima</Option>
            <Option href="#">PuertoRico</Option>
          </OptionsBlock>
        </div>
        <div className="col-xs-12 col-md-4">
          <OptionsBlock>
            <Option href="#">Willemstad Vacation Rentals</Option>
            <OptionWithMargin href="#">Cali</OptionWithMargin>
            <Option href="#">Chia</Option>
            <Option href="#">Ibague</Option>
            <Option href="#">Medellin</Option>
            <Option href="#">Tabio</Option>
          </OptionsBlock>
        </div>
      </div>
    </Section>
  );
};
