import React from "react";
import ReactMap from "../InteractiveMap";
import styled from "styled-components";

const Section = styled.section`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const MapContainer = styled.div`
  display: block;
  width: 100%;
  height: 192px;

  @media screen and (min-width: 768px) {
    height: 474px;
  }

  @media screen and (min-width: 992px) {
    height: 612px;
  }
`;

const Marker = styled.div`
  position: relative;
  z-index: 500;
  width: 32px;
  height: 32px;
  background: rgba(3, 178, 185, 0.2);
  border: 0.8px solid #008489;
  border-radius: 50px;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 77px;
    height: 77px;
  }

  @media screen and (min-width: 992px) {
    width: 98px;
    height: 98px;
  }
`;

const Disclaimer = styled.p`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export default props => (
  <Section>
    <MapContainer>
      <ReactMap center={{ lat: 59.95, lng: 30.33 }} zoom={8}>
        <Marker lat={59.95} lng={30.33} />
      </ReactMap>
    </MapContainer>
    <Disclaimer>
      Exact location information is provided after a booking is confirmed.
    </Disclaimer>
  </Section>
);
