import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

function Stack() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default Stack;
