import React from "react";
import Heading2 from "../../common/Heading2";
import Card from "./Card";
import homesLow from "./homes.png";
import homesHigh from "./homes@2x.png";
import experiencesLow from "./experiences.png";
import experiencesHigh from "./experiences@2x.png";
import restaurantsLow from "./restaurants.png";
import restaurantsHigh from "./restaurants@2x.png";
import styled from "styled-components";

const Section = styled.section`margin-top: 50px;`;

class Explore extends React.Component {
  render() {
    return (
      <Section>
        <Heading2>Explore Airbnb</Heading2>
        <div class="row-for-cols">
          <Card
            alt="Airbnb Homes"
            lowRes={homesLow}
            highRes={homesHigh}
            link="#"
            text="Homes"
          />
          <Card
            link="#"
            text="Experiences"
            alt="Airbnb Experiences"
            lowRes={experiencesLow}
            highRes={experiencesHigh}
          />
          <Card
            link="#"
            text="Restaurants"
            alt="Airbnb Restaurants"
            lowRes={restaurantsLow}
            highRes={restaurantsHigh}
          />
        </div>
      </Section>
    );
  }
}

export default Explore;
