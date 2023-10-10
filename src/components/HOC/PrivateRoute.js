import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
  const { userName } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
