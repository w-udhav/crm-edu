import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Temp from "../Components/Temp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Student from "../Pages/Student/Student";
import Mail from "../Pages/Mail/Mail";

export default function DashboardRoutes({ user }) {
  return (
    <Temp>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student/" element={<Student />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Temp>
  );
  // return user ? (
  //   <Temp>
  //     <Routes>
  //       <Route path="/" element={<Dashboard />} />
  //       <Route path="/student/" element={<Student />} />
  //       <Route path="/mail" element={<Mail />} />
  //       <Route path="*" element={<Navigate to="/dashboard" />} />
  //     </Routes>
  //   </Temp>
  // ) : (
  //   <Navigate to="/auth/login" />
  // );
}
