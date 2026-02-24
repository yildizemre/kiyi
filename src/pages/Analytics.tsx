import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Clock, MapPin } from 'lucide-react';
import AnimatedNumber from '../components/AnimatedNumber';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Analytics() {
  const hourlyData = [
    { hour: '06:00', count: 12, vip: 2 },
    { hour: '07:00', count: 24, vip: 4 },
    { hour: '08:00', count: 45, vip: 8 },
    { hour: '09:00', count: 78, vip: 12 },
    { hour: '10:00', count: 92, vip: 15 },
    { hour: '11:00', count: 105, vip: 18 },
    { hour: '12:00', count: 118, vip: 22 },
    { hour: '13:00', count: 134, vip: 28 },
    { hour: '14:00', count: 142, vip: 24 },
    { hour: '15:00', count: 128, vip: 20 },
    { hour: '16:00', count: 98, vip: 16 },
    { hour: '17:00', count: 85, vip: 12 },
  ];

  const gateData = [
    {
      gate: 'A Kapısı',
      entry: 482,
      exit: 465,
      female: 210,
      male: 272,
    },
    {
      gate: 'B Kapısı',
      entry: 356,
      exit: 340,
      female: 160,
      male: 196,
    },
    {
      gate: 'C Kapısı',
      entry: 215,
      exit: 208,
      female: 98,
      male: 117,
    },
  ];

  const categoryData = [
    { name: 'VIP', value: 156, color: '#f59e0b' },
    { name: 'Tekne Sahipleri', value: 342, color: '#3b82f6' },
    { name: 'Günlük Ziyaretçi', value: 1234, color: '#10b981' },
    { name: 'Personel', value: 115, color: '#6366f1' },
  ];

  const heatmapZones = [
    { name: 'Ana Giriş', intensity: 95, visitors: 847, avgTime: '12dk' },
    { name: 'Restaurant', intensity: 88, visitors: 654, avgTime: '45dk' },
    { name: 'Marina Lounge', intensity: 72, visitors: 432, avgTime: '28dk' },
    { name: 'Ponton A-C', intensity: 65, visitors: 389, avgTime: '18dk' },
    { name: 'VIP Lounge', intensity: 58, visitors: 156, avgTime: '52dk' },
    { name: 'Sosyal Tesis', intensity: 52, visitors: 312, avgTime: '34dk' },
    { name: 'Teknik Bölge', intensity: 45, visitors: 87, avgTime: '15dk' },
    { name: 'Otopark', intensity: 38, visitors: 234, avgTime: '8dk' },
  ];

  const stats = [
    { label: 'Günlük Ziyaretçi', value: 1847, suffix: '', decimals: 0, animate: true, change: '+12.5%', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { label: 'Ortalama Kalış', value: 2.4, suffix: 'sa', decimals: 1, animate: true, change: '+0.3sa', icon: Clock, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
    { label: 'Yoğun Bölge', text: 'Ana Giriş', change: '847 kişi', icon: MapPin, color: 'text-red-400', bg: 'bg-red-500/20' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <BarChart3 className="w-8 h-8 mr-3 text-cyan-400" />
          Ticari Analitik & Raporlar
        </h1>
        <p className="text-slate-400">AI destekli insan sayımı, trafik analizi ve gelir raporlama sistemi</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`${stat.bg} p-2 rounded-lg`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-xs font-semibold">{stat.change}</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>
              {'text' in stat ? stat.text : (
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  formatThousands={stat.value > 1000}
                />
              )}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Saatlik Trafik Analizi</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={hourlyData}>
              <defs>
                <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorVip" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="hour" stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Area type="monotone" dataKey="count" stroke="#06b6d4" fillOpacity={1} fill="url(#colorCount)" name="Toplam Ziyaretçi" />
              <Area type="monotone" dataKey="vip" stroke="#f59e0b" fillOpacity={1} fill="url(#colorVip)" name="VIP" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Kapı Bazlı Kişi Sayımı</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={gateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="gate" stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#f1f5f9' }}
                formatter={(value: number, name) => {
                  if (name === 'entry') return [`${value} giriş`, 'Giriş'];
                  if (name === 'exit') return [`${value} çıkış`, 'Çıkış'];
                  return value;
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="entry" fill="#22c55e" radius={[8, 8, 0, 0]} name="Giriş" />
              <Bar dataKey="exit" fill="#06b6d4" radius={[8, 8, 0, 0]} name="Çıkış" />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            {gateData.map((gate) => (
              <div
                key={gate.gate}
                className="bg-slate-800/60 rounded-lg p-3 border border-slate-700"
              >
                <p className="text-white font-semibold text-sm mb-1">{gate.gate}</p>
                <p className="text-slate-300 text-xs mb-1">
                  Giriş: <span className="text-green-400 font-semibold">{gate.entry}</span> • Çıkış:{' '}
                  <span className="text-cyan-400 font-semibold">{gate.exit}</span>
                </p>
                <p className="text-slate-400 text-xs">
                  Kadın: <span className="text-pink-400 font-semibold">{gate.female}</span> • Erkek:{' '}
                  <span className="text-blue-400 font-semibold">{gate.male}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Ziyaretçi Kategorileri</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Yoğunluk Haritası (Heatmap)</h2>
          <div className="grid grid-cols-2 gap-3">
            {heatmapZones.map((zone, index) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="relative overflow-hidden rounded-lg border border-slate-700 p-4 hover:border-slate-600 transition-all cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${
                    zone.intensity > 80
                      ? 'rgba(239, 68, 68, 0.2)'
                      : zone.intensity > 60
                      ? 'rgba(251, 146, 60, 0.2)'
                      : zone.intensity > 40
                      ? 'rgba(250, 204, 21, 0.2)'
                      : 'rgba(34, 211, 238, 0.2)'
                  }, rgba(15, 23, 42, 0.8))`,
                }}
              >
                <div className="relative z-10">
                  <p className="text-white font-semibold text-sm mb-2">{zone.name}</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-white">{zone.intensity}</span>
                    <span className="text-xs text-slate-300 bg-slate-800/50 px-2 py-1 rounded">Yoğunluk</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>{zone.visitors} kişi</span>
                    <span>⌀ {zone.avgTime}</span>
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 transition-all ${
                    zone.intensity > 80
                      ? 'bg-red-500'
                      : zone.intensity > 60
                      ? 'bg-orange-500'
                      : zone.intensity > 40
                      ? 'bg-amber-500'
                      : 'bg-cyan-500'
                  } opacity-20`}
                  style={{ height: `${zone.intensity}%` }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Haftalık Performans Özeti</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800/70 transition-all">
            <p className="text-slate-400 text-sm mb-2">Toplam Ziyaretçi</p>
            <p className="text-2xl font-bold text-white">12,847</p>
            <p className="text-xs text-green-400 mt-1 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.2% önceki haftaya göre
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800/70 transition-all">
            <p className="text-slate-400 text-sm mb-2">Ortalama Yoğunluk</p>
            <p className="text-2xl font-bold text-white">1,835/gün</p>
            <p className="text-xs text-cyan-400 mt-1">Haftalık ortalama</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800/70 transition-all">
            <p className="text-slate-400 text-sm mb-2">En Yoğun Saat</p>
            <p className="text-2xl font-bold text-white">13:00-15:00</p>
            <p className="text-xs text-amber-400 mt-1">Öğle saatleri pik</p>
          </div>
          {/* Haftalık gelir kartı kaldırıldı; kapı bazlı kişi sayımı üst kısımda gösteriliyor */}
        </div>
      </div>
    </div>
  );
}
