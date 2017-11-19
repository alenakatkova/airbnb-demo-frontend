import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Homes from "./Homes/List";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/homes" component={Homes} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
