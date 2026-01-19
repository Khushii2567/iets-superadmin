import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";
import ServiceAgents from "./pages/ServiceAgents";
import OnboardCompany from "./pages/OnboardCompany";
import ServiceManagers from "./pages/ServiceManagers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/agents" element={<ServiceAgents />} />
        <Route path="/tenants/onboard" element={<OnboardCompany />} />
        <Route path="/managers" element={<ServiceManagers />} />
      </Routes>
    </BrowserRouter>
  );
}
