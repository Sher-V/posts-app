import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../hoc/PrivateRoute";
import routes from "../config/routes";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Switch>
          {routes.public.map((route) => (
            <Route {...route} />
          ))}
          {routes.private.map((route) => (
            <PrivateRoute {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};
/*
<Route exact path="/">
  <Login />
</Route>
<Route exact path="/login">
  <Login />
</Route>
<PrivateRoute exact path="/posts">
  <WithLogout>
    <Posts />
  </WithLogout>
</PrivateRoute>
<PrivateRoute path={"/posts/:id"}>
  <WithLogout>
    <Post />
  </WithLogout>
</PrivateRoute>*/

export default App;
