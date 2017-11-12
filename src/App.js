import React from "react";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";

import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <Explore />
            <Experiences />
            <Homes />
            <Popular />
            <Featured />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
