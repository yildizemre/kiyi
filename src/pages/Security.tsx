import { motion } from 'framer-motion';
import { ShieldCheck, Search, UserCheck, UserX, AlertTriangle, Eye, Camera } from 'lucide-react';
import AnimatedNumber from '../components/AnimatedNumber';

export default function Security() {
  const detections = [
    { time: '14:30', name: 'Bekir Bey', category: 'VIP', zone: 'Batı Giriş', confidence: 99, color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30', camera: 'Kamera 1' },
    { time: '14:28', name: 'Ayşe Hanım', category: 'VIP', zone: 'Marina Lounge', confidence: 98, color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30', camera: 'Kamera 5' },
    { time: '14:25', name: 'Mehmet K.', category: 'Personel', zone: 'Ponton A', confidence: 97, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30', camera: 'Kamera 8' },
    { time: '14:22', name: 'Bilinmeyen #547', category: 'Şüpheli', zone: 'Otopark', confidence: 85, color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30', camera: 'Kamera 12' },
    { time: '14:20', name: 'Can Y.', category: 'Personel', zone: 'Teknik Bölge', confidence: 96, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30', camera: 'Kamera 15' },
    { time: '14:18', name: 'Ali Bey', category: 'VIP', zone: 'Doğu Giriş', confidence: 99, color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30', camera: 'Kamera 2' },
    { time: '14:15', name: 'Zeynep A.', category: 'Personel', zone: 'Resepsiyon', confidence: 98, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30', camera: 'Kamera 3' },
    { time: '14:12', name: 'İsmail K.', category: 'Kara Liste', zone: 'Giriş Bölgesi', confidence: 94, color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30', camera: 'Kamera 1' },
    { time: '14:10', name: 'Fatma Hanım', category: 'VIP', zone: 'Restaurant', confidence: 97, color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30', camera: 'Kamera 6' },
    { time: '14:08', name: 'Ahmet D.', category: 'Personel', zone: 'Ponton C', confidence: 95, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30', camera: 'Kamera 10' },
    { time: '14:05', name: 'Deniz T.', category: 'VIP', zone: 'VIP Lounge', confidence: 99, color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30', camera: 'Kamera 4' },
    { time: '14:03', name: 'Bilinmeyen #548', category: 'Şüpheli', zone: 'Sosyal Tesis', confidence: 82, color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30', camera: 'Kamera 7' },
    { time: '14:00', name: 'Burak M.', category: 'Personel', zone: 'Güvenlik', confidence: 98, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30', camera: 'Kamera 3' },
    { time: '13:58', name: 'Elif S.', category: 'VIP', zone: 'Batı Giriş', confidence: 98, color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30', camera: 'Kamera 1' },
    { time: '13:55', name: 'Cem D.', category: 'Personel', zone: 'Ponton B', confidence: 96, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30', camera: 'Kamera 9' },
  ];

  const stats = [
    { label: 'Toplam Tanıma', value: 2847, suffix: '', icon: Eye, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { label: 'VIP Algılama', value: 24, suffix: '', icon: UserCheck, color: 'text-amber-400', bg: 'bg-amber-500/20' },
    { label: 'Güvenlik Uyarısı', value: 3, suffix: '', icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-500/20' },
    { label: 'Kara Liste', value: 1, suffix: '', icon: UserX, color: 'text-red-400', bg: 'bg-red-500/20' },
    { label: 'Aktif Kamera', value: 24, suffix: '/24', icon: Camera, color: 'text-green-400', bg: 'bg-green-500/20' },
    { label: 'Ortalama Güven', value: 96.2, suffix: '%', decimals: 1, icon: ShieldCheck, color: 'text-green-400', bg: 'bg-green-500/20' },
  ];

  const recentAlerts = [
    { type: 'Kara Liste Algılandı', person: 'İsmail K.', zone: 'Giriş Bölgesi', time: '14:12', severity: 'high' },
    { type: 'Şüpheli Kişi', person: 'Bilinmeyen #547', zone: 'Otopark', time: '14:22', severity: 'medium' },
    { type: 'Yetkisiz Bölge Girişi', person: 'Bilinmeyen #548', zone: 'Teknik Alan', time: '13:45', severity: 'high' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <ShieldCheck className="w-8 h-8 mr-3 text-cyan-400" />
          Güvenlik & Yüz Tanıma
        </h1>
        <p className="text-slate-400">AI destekli yüz tanıma sistemi - VIP/Kara Liste/Personel algılama</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4"
          >
            <div className={`${stat.bg} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-slate-400 text-xs mb-1">{stat.label}</p>
            <p className={`text-xl font-bold ${stat.color}`}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} decimals={'decimals' in stat ? stat.decimals : 0} formatThousands={stat.value > 1000} />
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
            Aktif Güvenlik Uyarıları
          </h2>
          <div className="space-y-3">
            {recentAlerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border-l-4 ${
                  alert.severity === 'high'
                    ? 'bg-red-500/10 border-red-500'
                    : 'bg-amber-500/10 border-amber-500'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className={`font-bold text-sm mb-1 ${
                      alert.severity === 'high' ? 'text-red-400' : 'text-amber-400'
                    }`}>
                      {alert.type}
                    </p>
                    <p className="text-white text-sm">{alert.person}</p>
                    <p className="text-slate-400 text-xs mt-1">{alert.zone} • {alert.time}</p>
                  </div>
                  <button className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded-lg transition-colors">
                    Detay
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Kamera Durumu</h2>
          <div className="space-y-3">
            {[
              { zone: 'Giriş Bölgesi', cameras: 4, status: 'active' },
              { zone: 'Ponton Alanları', cameras: 12, status: 'active' },
              { zone: 'Sosyal Tesisler', cameras: 6, status: 'active' },
              { zone: 'Otopark', cameras: 2, status: 'active' },
            ].map((zone, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-medium text-sm">{zone.zone}</p>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-slate-400 text-xs">{zone.cameras} Kamera Aktif</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Yüz Tanıma Kayıtları</h2>
            <div className="flex items-center space-x-3">
              <select className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Tüm Kategoriler</option>
                <option>VIP</option>
                <option>Personel</option>
                <option>Kara Liste</option>
                <option>Şüpheli</option>
              </select>
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
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Zaman
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Kimlik
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Kategori
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Bölge
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Kamera
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Güven Skoru
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {detections.map((detection, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-300 font-mono text-sm">{detection.time}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white font-medium">{detection.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${detection.bg} ${detection.color} border ${detection.border}`}
                    >
                      {detection.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-300 text-sm">{detection.zone}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-cyan-400 text-sm">{detection.camera}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-24 bg-slate-700 rounded-full h-2 mr-3">
                        <div
                          className={`h-2 rounded-full ${
                            detection.confidence >= 95
                              ? 'bg-green-500'
                              : detection.confidence >= 85
                              ? 'bg-amber-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${detection.confidence}%` }}
                        ></div>
                      </div>
                      <span className={`${detection.color} font-mono text-sm`}>%{detection.confidence}</span>
                    </div>
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
