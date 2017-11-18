import React from "react";
import Map from "google-map-react";
import styled from "styled-components";

const MapContainer = styled.div`
  display: none;

  @media screen and (min-width: 986px) {
    display: block;
    position: fixed;
    right: 0;
    top: 139px;
    bottom: 0;
    left: calc(50% + 986px * 0.17);
  }
`;

export default props => (
  <MapContainer>
    <Map
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
      center={props.center}
      zoom={props.zoom}
    />
  </MapContainer>
);
