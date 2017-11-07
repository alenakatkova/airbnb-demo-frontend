import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import forestLow from "./forest.png";
import forestHigh from "./forest@2x.png";
import whaleLow from "./whale.png";
import whaleHigh from "./whale@2x.png";
import mountainLow from "./mountain.png";
import mountainHigh from "./mountain@2x.png";
import salsaLow from "./salsa.png";
import salsaHigh from "./salsa@2x.png";

class Explore extends React.Component {
  render() {
    return (
      <section>
        <Heading2>Experiences</Heading2>
        <div class="row row-top">
          <Card
            lowRes={forestLow}
            highRes={forestHigh}
            price="$29"
            text="Forest theraphy"
            alt="Forest theraphy"
            stats="44 reviews"
          />
          <Card
            lowRes={whaleLow}
            highRes={whaleHigh}
            price="$69"
            text="Whale watching"
            alt="Whale watching"
            stats="46 reviews"
          />
          <Card
            lowRes={mountainLow}
            highRes={mountainHigh}
            price="$69"
            text="Table Mountain Summi, Cable Car Down"
            alt="Table Mountain Summi, Cable Car Down"
            stats="44 reviews"
          />
          <Card
            lowRes={salsaLow}
            highRes={salsaHigh}
            price="$50"
            text="Salsa Night"
            alt="Salsa Night"
            stats="44 reviews"
          />
        </div>
      </section>
    );
  }
}

export default Explore;
