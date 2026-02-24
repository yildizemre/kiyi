import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import VesselManagement from './pages/VesselManagement';
import Security from './pages/Security';
import Personnel from './pages/Personnel';
import Technical from './pages/Technical';
import Analytics from './pages/Analytics';
import Archive from './pages/Archive';
import RulesAlarms from './pages/RulesAlarms';

function WelcomeToast({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-4 py-3 bg-cyan-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 border border-cyan-400/30 max-w-md text-center text-sm font-medium"
    >
      Hoş geldiniz – Kıyı Marina yönetim paneline giriş yaptınız.
    </motion.div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcomeToast, setShowWelcomeToast] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowWelcomeToast(true);
  };

  return (
    <Router>
      <AnimatePresence>
        {showWelcomeToast && isAuthenticated && (
          <WelcomeToast onClose={() => setShowWelcomeToast(false)} />
        )}
      </AnimatePresence>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ?
            <Navigate to="/dashboard" /> :
            <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ?
            <DashboardLayout /> :
            <Navigate to="/login" />
          }
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="vessels" element={<VesselManagement />} />
          <Route path="security" element={<Security />} />
          <Route path="rules-alarms" element={<RulesAlarms />} />
          <Route path="personnel" element={<Personnel />} />
          <Route path="technical" element={<Technical />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="archive" element={<Archive />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
