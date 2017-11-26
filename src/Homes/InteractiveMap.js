import React from "react";
import ReactMap from "google-map-react";

export default props => (
  <ReactMap
    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
    center={props.center}
    zoom={props.zoom}
  >
    {props.children}
  </ReactMap>
);
