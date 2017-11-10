import React from "react";
import Item from "./Item";

class Select extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-md-3 col-lg-3">
        <div className="row negative-indent">
          <Item name="language" option1="English" option2="Russian" />
          <Item
            name="currency"
            option1="United States dollar"
            option2="Russian ruble"
          />
        </div>
      </div>
    );
  }
}

export default Select;
