import { motion } from 'framer-motion';
import { Settings, Search } from 'lucide-react';
import AnimatedNumber from '../components/AnimatedNumber';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Technical() {
  const assets = [
    { name: 'Aydınlatma D4', location: 'Ponton B', status: 'Arıza', detail: 'Karanlık Bölge', time: '2dk önce', color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' },
    { name: 'Çöp Kutusu 3', location: 'Sosyal Tesis', status: 'Dolu', detail: '%95', time: '5dk önce', color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30' },
    { name: 'Aydınlatma A2', location: 'İskele A', status: 'Normal', detail: 'Aktif', time: '1dk önce', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Su Pompası 1', location: 'Teknik Merkez', status: 'Normal', detail: 'Çalışıyor', time: '3dk önce', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Çöp Kutusu 7', location: 'Ponton C', status: 'Dolu', detail: '%88', time: '4dk önce', color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30' },
    { name: 'Peyzaj Sulama', location: 'Yeşil Alan', status: 'Normal', detail: 'Zamanlı Aktif', time: '6dk önce', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Elektrik Panosu 2', location: 'Ponton D', status: 'Arıza', detail: 'Sigortası Atık', time: '8dk önce', color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' },
    { name: 'Kamera 12', location: 'Otopark', status: 'Normal', detail: 'Kayıt Aktif', time: '1dk önce', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Çöp Kutusu 5', location: 'Ana Giriş', status: 'Normal', detail: '%45', time: '7dk önce', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { name: 'Aydınlatma C8', location: 'Restaurant', status: 'Normal', detail: 'Aktif', time: '2dk önce', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
  ];

  const stats = [
    { label: 'Toplam Varlık', value: 156, color: 'text-blue-400' },
    { label: 'Normal Durum', value: 148, color: 'text-green-400' },
    { label: 'Arıza/Uyarı', value: 8, color: 'text-red-400' },
    { label: 'Bakım Planlı', value: 12, color: 'text-amber-400' },
  ];

  const assetCategoryData = [
    { name: 'Aydınlatmalar', total: 4, issues: 1 },
    { name: 'Çöp Kutuları', total: 3, issues: 2 },
    { name: 'Su Pompaları', total: 1, issues: 0 },
    { name: 'Peyzaj Sulama', total: 1, issues: 0 },
    { name: 'Elektrik Panoları', total: 1, issues: 1 },
    { name: 'Kameralar', total: 1, issues: 0 },
  ];

  const assetStatusDistribution = [
    { name: 'Normal', value: 148, color: '#22c55e' },
    { name: 'Arıza/Uyarı', value: 8, color: '#ef4444' },
    { name: 'Bakım Planlı', value: 12, color: '#f59e0b' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Settings className="w-8 h-8 mr-3 text-cyan-400" />
          Teknik & Peyzaj Bakım
        </h1>
        <p className="text-slate-400">Altyapı ve tesislerin AI destekli takip sistemi</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4"
          >
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}><AnimatedNumber value={stat.value} /></p>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Varlık Durum Tablosu</h2>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Ara..."
                className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Varlık Adı
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Konum
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Detay
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Son Analiz
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {assets.map((asset, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white font-medium">{asset.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-cyan-400">{asset.location}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${asset.bg} ${asset.color} border ${asset.border}`}
                    >
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-300">{asset.detail}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-400 font-mono text-sm">{asset.time}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Varlık Kategorileri</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={assetCategoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: '11px' }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="total" name="Toplam" fill="#22c55e" radius={[8, 8, 0, 0]} />
              <Bar dataKey="issues" name="Arıza/Uyarı" fill="#f97316" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Varlık Durum Dağılımı</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={assetStatusDistribution}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {assetStatusDistribution.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                formatter={(value: number, name: string) => [`${value} varlık`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
