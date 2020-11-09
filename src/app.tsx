import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IndexPage } from "./pages/index";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexPage} />
    </Switch>
  </BrowserRouter>
);
