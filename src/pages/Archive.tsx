import { motion } from 'framer-motion';
import { FolderLock, Search, Play } from 'lucide-react';
import AnimatedNumber from '../components/AnimatedNumber';

export default function Archive() {
  const incidents = [
    { id: 2, type: 'Düşme Riski', severity: 'Yüksek', date: '2024-02-19', time: '11:45', location: 'İskele A', status: 'Çözüldü', color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' },
    { id: 3, type: 'İSG İhlali', severity: 'Düşük', date: '2024-02-18', time: '09:20', location: 'Teknik Bölge', status: 'İzleniyor', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { id: 4, type: 'Yetkisiz Giriş', severity: 'Yüksek', date: '2024-02-18', time: '22:15', location: 'Otopark', status: 'Çözüldü', color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' },
    { id: 5, type: 'Elektrik Arızası', severity: 'Orta', date: '2024-02-17', time: '16:30', location: 'Ponton D', status: 'Çözüldü', color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30' },
    { id: 6, type: 'Kalabalık Algılandı', severity: 'Düşük', date: '2024-02-16', time: '13:00', location: 'Restaurant', status: 'Kapalı', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    { id: 7, type: 'Yangın Sensörü', severity: 'Yüksek', date: '2024-02-15', time: '03:45', location: 'Teknik Merkez', status: 'Çözüldü', color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' },
    { id: 8, type: 'Can Yeleği İhlali', severity: 'Orta', date: '2024-02-14', time: '10:20', location: 'İskele B', status: 'Çözüldü', color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30' },
  ];

  const stats = [
    { label: 'Toplam Olay', value: 847, color: 'text-blue-400' },
    { label: 'Bu Hafta', value: 24, color: 'text-cyan-400' },
    { label: 'Çözülen', value: 820, color: 'text-green-400' },
    { label: 'İzleniyor', value: 27, color: 'text-amber-400' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex flex-wrap items-center gap-2">
          <FolderLock className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-cyan-400 shrink-0" />
          Dijital Olay Arşivi
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">Kaydedilmiş güvenlik ve operasyonel olaylar</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4"
          >
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}><AnimatedNumber value={stat.value} formatThousands /></p>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-lg sm:text-xl font-bold text-white">Olay Kayıtları</h2>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <select className="px-3 sm:px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-auto min-w-0">
                <option>Tüm Olaylar</option>
                <option>Yüksek Şiddet</option>
                <option>Orta Şiddet</option>
                <option>Düşük Şiddet</option>
              </select>
              <div className="relative w-full sm:w-auto">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Ara..."
                  className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full min-w-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto -mx-px">
          <table className="w-full min-w-[640px] sm:min-w-0">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider whitespace-nowrap">
                  Olay ID
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider whitespace-nowrap">
                  Olay Tipi
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider whitespace-nowrap">
                  Şiddet
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider whitespace-nowrap">
                  Tarih & Saat
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider whitespace-nowrap">
                  Konum
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider whitespace-nowrap">
                  Video Kaydı
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider whitespace-nowrap">
                  Durum
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {incidents.map((incident, index) => (
                <motion.tr
                  key={incident.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <span className="text-cyan-400 font-mono text-xs sm:text-sm">#{incident.id.toString().padStart(4, '0')}</span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <span className="text-white font-medium text-sm sm:text-base">{incident.type}</span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${incident.bg} ${incident.color} border ${incident.border}`}
                    >
                      {incident.severity}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div className="text-slate-300 text-xs sm:text-sm">
                      <div className="font-mono">{incident.date}</div>
                      <div className="text-slate-400">{incident.time}</div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <span className="text-slate-300 text-sm">{incident.location}</span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      <Play className="w-4 h-4 shrink-0" />
                      <span>İzle</span>
                    </button>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <span className="text-slate-300 text-sm">{incident.status}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
