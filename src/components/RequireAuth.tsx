import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useActiveUser } from "../api-hooks/authorization";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useActiveUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
