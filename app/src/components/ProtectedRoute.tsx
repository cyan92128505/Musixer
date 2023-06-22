import React from "react";
import {  Navigate } from "react-router-dom";
import { isAuth } from "./Auth";

export type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ outlet }) => {
  if (!isAuth()) {
    return <Navigate to="/login"></Navigate>;
  }

  return outlet;
};

/**
 * ref: https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4
 * use: <Route path='dashboard' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Dashboard />} />} />
 */
export default ProtectedRoute;
