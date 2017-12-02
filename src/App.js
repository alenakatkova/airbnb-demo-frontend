import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Homes from "./Homes/List";
import Room from "./Homes/Show";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/homes" component={Homes} />
          <Route exact path="/homes/:id" component={Room} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
