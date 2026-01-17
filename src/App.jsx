import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";
import ServiceAgents from "./pages/ServiceAgents";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/agents" element={<ServiceAgents />} />
      </Routes>
    </BrowserRouter>
  );
}
