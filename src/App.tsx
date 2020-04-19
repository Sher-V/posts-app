import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PrivateRoute from "./hoc/PrivateRoute";
import WithLogout from "./hoc/WithLogout";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Switch>
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
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
