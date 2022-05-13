import React from "react";
import { useActiveUser } from "../../api-hooks/authorization";
import { Navigate, useLocation } from "react-router-dom";

export const NoMatch = () => {
  const { user } = useActiveUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Navigate to="/auth/ration" state={{ from: location }} replace />;
};
