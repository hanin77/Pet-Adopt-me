import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./component/SearchParams";
import Details from "./component/Details";
const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <header>
        <Link to="/">
          <h1 id="something-imortant">Adopt me</h1>
        </Link>
      </header>

      <Switch>
        <Route path="/" component={SearchParams} exact={true} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default AppRouter;
