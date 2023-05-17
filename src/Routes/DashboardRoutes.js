import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Temp from "../Components/Temp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Student from "../Pages/Student/Student";

export default function DashboardRoutes() {
  return (
    <Temp>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Temp>
  );
}
