import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  let isAuthenticated = localStorage.getItem("isLogin");
  console.log(isAuthenticated);
  return (
    <Route
      render={() =>
        isAuthenticated ? <Component /> : <Redirect to="/login" />
      }
    />
  );
};
export default PrivateRoute;
