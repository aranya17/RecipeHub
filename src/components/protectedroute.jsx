import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = false; // Replace with real auth logic

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
