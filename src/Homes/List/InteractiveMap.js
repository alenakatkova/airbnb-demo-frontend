import React from "react";
import ReactMap from "google-map-react";
import styled from "styled-components";

const MapContainer = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
    position: fixed;
    right: 0;
    top: 139px;
    bottom: 0;
    left: calc(50% + 992px * 0.17);
  }

  @media screen and (min-width: 1200px) {
    left: calc(50% + 1200px * 0.17);
  }
`;

export default props => (
  <MapContainer>
    <ReactMap
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
      center={props.center}
      zoom={props.zoom}
    />
  </MapContainer>
);
