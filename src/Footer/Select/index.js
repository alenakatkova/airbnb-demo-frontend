import React from "react";
import Selection from "./Selection";

class Select extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-md-3 col-lg-3">
        <div className="row negative-indent-xs">
          <Selection name="language" option1="English" />
          <Selection name="currency" option1="United States dollar" />
        </div>
      </div>
    );
  }
}

export default Select;
