import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Pages/Auth/Login";

export default function AuthRoute({ user }) {
  // return user ?
  //   <Navigate to="/dashboard" /> :
  // (
  //   <Routes>
  //     <Route path="/login" element={<Login />} />
  //     <Route path="*" element={<Navigate to="/auth/login" />} />
  //   </Routes>
  // );

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
