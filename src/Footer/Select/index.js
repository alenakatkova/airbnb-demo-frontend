import React from "react";
import Selection from "./Selection";

export default () => {
  return (
    <div className="row negative-indent-xs">
      <div className="col-xs-6 col-md-12 col-lg-12">
        <Selection name="language" option1="English" />
      </div>
      <div className="col-xs-6 col-md-12 col-lg-12">
        <Selection name="currency" option1="United States dollar" />
      </div>
    </div>
  );
};
