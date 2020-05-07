import React from "react";
import { Redirect, Route } from "react-router-dom";

interface PrivateRouteProps {
  component: React.ComponentType,
}

const PrivateRoute:React.FC<PrivateRouteProps> = ({ component, ...rest }) => {
  return (
    <Route {...rest}>
      {(localStorage.getItem("user") === "vadik" && component) || <Redirect to="/login"/>}
    </Route>
  );
};

export default PrivateRoute;
