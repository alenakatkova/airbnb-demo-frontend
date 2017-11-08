import React from "react";
import Item from "./Item";

class Select extends React.Component {
  render() {
    return (
      <div className="col-lg-4">
        <Item name="language" option1="English" option2="Russian" />
        <Item
          name="currency"
          option1="United States dollar"
          option2="Russian ruble"
        />
      </div>
    );
  }
}

export default Select;
