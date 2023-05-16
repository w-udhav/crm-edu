import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import DashboardRoutes from "./Routes/DashboardRoutes";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="*" element={<Navigate to="/dashboard/*" />} />
    </Routes>
  );
}
