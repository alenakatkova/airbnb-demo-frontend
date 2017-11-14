import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Homes from "./Homes/List";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/homes" component={Homes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
