import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      {(localStorage.getItem("user") === "vadik" && children) || <Redirect to="/login"/>}
    </Route>
  );
};

export default PrivateRoute;
