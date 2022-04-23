import React, { ComponentProps } from "react";
import { Redirect, Route } from "react-router-dom";
import { useActiveUser } from "../api-hooks/authorization";

export function PrivateRoute({
  children,
  ...rest
}: ComponentProps<typeof Route>) {
  const { user } = useActiveUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
