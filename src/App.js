import React from "react";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardRoutes from "./Routes/DashboardRoutes";
import { AuthContext } from "./Utils/Context/AuthContext";
import AuthRoute from "./Routes/AuthRoute";
import Enroll from "./Pages/Form/Enroll";
// import PrivateRoute from "./Routes/PrivateRoute";

export default function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute user={user} />} />
      <Route path="/dashboard/*" element={<DashboardRoutes user={user} />} />
      <Route path="/form" element={<Enroll user={user} />} />
      {user ? (
        <Route path="*" element={<Navigate to="/dashboard" />} />
      ) : (
        <Route path="*" element={<Navigate to="/auth/login" />} />
      )}
    </Routes>

    // <Routes>
    //   {user?.length !== 0 ? (
    //     <Route path="/auth/*" element={<Navigate to="/dashboard" />} />
    //   ) : (
    //     <Route path="/auth/*" element={<AuthRoute user={user} />} />
    //   )}
    //   <Route path="/dashboard/*" element={<DashboardRoutes user={user} />} />
    //   <Route path="*" element={<Navigate to="/auth/login" />} />
    // </Routes>
  );
}
