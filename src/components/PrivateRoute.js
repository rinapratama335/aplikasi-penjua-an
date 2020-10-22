import React from "react";
import { Route, Redirect } from "react-router-dom";

//Import custom hooks
import { useFirebase } from "./FirebaseProvider";

function PrivateRoute({ component: Component, ...restProps }) {
  //   const user = null;
  //   const user = { user: "irwanto" };

  //   const { user } = useFirebase();
  const user = useFirebase();

  return (
    <Route
      {...restProps}
      render={(props) => {
        return user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
