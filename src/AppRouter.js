import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchParams from "./component/SearchParams";
import Details from "./component/Details";
import NavBar from "./component/NavBar";
const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/" component={SearchParams} exact={true} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default AppRouter;
