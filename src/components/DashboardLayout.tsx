import { Outlet, NavLink } from 'react-router-dom';
import { Layout, Anchor, ShieldCheck, Users, Settings, BarChart3, FolderLock, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
  { path: '/dashboard', icon: Layout, label: 'Genel Bakış' },
  { path: '/vessels', icon: Anchor, label: 'Tekne & Ponton Yönetimi' },
  { path: '/security', icon: ShieldCheck, label: 'Güvenlik & Yüz Tanıma' },
  { path: '/rules-alarms', icon: ShieldAlert, label: 'Kurallar & Alarmlar' },
  { path: '/personnel', icon: Users, label: 'İSG & Personel Takip' },
  { path: '/technical', icon: Settings, label: 'Teknik & Peyzaj Bakım' },
  { path: '/analytics', icon: BarChart3, label: 'Ticari Analitik & Raporlar' },
  { path: '/archive', icon: FolderLock, label: 'Dijital Olay Arşivi' },
];

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row">
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full md:w-64 lg:w-72 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col shrink-0"
      >
        <div className="p-4 md:p-6 border-b border-slate-800 flex justify-center">
          <img
            src="/logo.png"
            alt="Kıyı Marina"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        <nav className="flex-1 p-3 md:p-4 space-y-1 md:space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-lg transition-all text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : ''}`} />
                  <span className="font-medium truncate">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 md:p-4 border-t border-slate-800 shrink-0">
          <div className="bg-slate-800/50 rounded-lg p-2.5 md:p-3">
            <p className="text-xs text-slate-400">Sistem Durumu</p>
            <div className="flex items-center mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2 shrink-0"></div>
              <p className="text-sm text-green-400 font-semibold">Çevrimiçi</p>
            </div>
          </div>
        </div>
      </motion.aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <main className="flex-1 min-w-0 overflow-auto">
          <Outlet />
        </main>
        <footer className="shrink-0 border-t border-slate-800 bg-slate-900/50 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-sm">
          <span>Orbisoft – Kıyı Marina Yapay Zekâ Yönetim Sistemi</span>
          <span className="text-slate-600 font-medium">Demo Sürüm 1.0</span>
        </footer>
      </div>
    </div>
  );
}
