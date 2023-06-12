import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Temp from "../Components/Temp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Student from "../Pages/Student/Student";
import Mail from "../Pages/Mail/Mail";
import Approval from "../Pages/Approval/Approval";

export default function DashboardRoutes({ user }) {
  return user ? (
    <Temp>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/approvals" element={<Approval />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Temp>
  ) : (
    <Navigate to="/auth/login" />
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
