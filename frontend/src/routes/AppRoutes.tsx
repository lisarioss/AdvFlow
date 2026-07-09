import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "../features/auth/pages/LoginPage";
import { DashboardPage } from "../features/dashboard/pages/DashboardPage";
import { ClientsPage } from "../features/clients/pages/ClientsPage";
import { ProcessesPage } from "../features/processes/pages/ProcessesPage";
import { FinancePage } from "../features/finance/pages/FinancePage";

import { MainLayout } from "../layouts/MainLayout";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/clientes" element={<ClientsPage />} />
          <Route path="/processos" element={<ProcessesPage />} />
          <Route path="/financeiro" element={<FinancePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}