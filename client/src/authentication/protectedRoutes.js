import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  console.log("do we get into this function");

  if (!token) {
    console.log("is this being called?");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
