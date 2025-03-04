import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import StrategicPlanning from './pages/StrategicPlanning';
import FinancialAdvisory from './pages/FinancialAdvisory';
import LeadershipDevelopment from './pages/LeadershipDevelopment';
import AgentDetails from './pages/AgentDetails';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="strategic-planning" element={<StrategicPlanning />} />
        <Route path="financial-advisory" element={<FinancialAdvisory />} />
        <Route path="leadership-development" element={<LeadershipDevelopment />} />
        <Route path="agent/:id" element={<AgentDetails />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
