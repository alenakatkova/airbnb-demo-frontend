import React from "react";
import MediaQuery from "react-responsive";

export const OnlyXs = props => <MediaQuery {...props} maxWidth={767} />;

export const OnlyMd = props => (
  <MediaQuery {...props} minWidth={768} maxWidth={991} />
);

export const Md = props => <MediaQuery {...props} minWidth={768} />;

export const Lg = props => <MediaQuery {...props} minWidth={992} />;
