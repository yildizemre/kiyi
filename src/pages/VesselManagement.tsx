import { useState } from 'react';
import { motion } from 'framer-motion';
import { Anchor, Search, Ship, MapPin, Clock, AlertCircle, User, Calendar, Info } from 'lucide-react';
import AnimatedNumber from '../components/AnimatedNumber';

export default function VesselManagement() {
  const [selectedPonton, setSelectedPonton] = useState<string | null>(null);

  const vessels = [
    { id: 'A1', name: 'Azure Dream', type: 'Motoryat', status: 'Dolu', owner: 'Ahmet Y.', entry: '10:45', duration: '3 gün', vip: true },
    { id: 'A2', name: 'Sea Breeze', type: 'Yelkenli', status: 'Dolu', owner: 'Mehmet K.', entry: '08:20', duration: '1 gün', vip: false },
    { id: 'A3', name: '-', type: '-', status: 'Boş', owner: '-', entry: '-', duration: '-', vip: false },
    { id: 'B1', name: 'Ocean Pearl', type: 'Yat', status: 'Dolu', owner: 'Zeynep A.', entry: '14:30', duration: '5 gün', vip: true },
    { id: 'B2', name: 'Wave Runner', type: 'Motoryat', status: 'Dolu', owner: 'Can B.', entry: '12:15', duration: '2 gün', vip: false },
    { id: 'B3', name: '-', type: '-', status: 'Boş', owner: '-', entry: '-', duration: '-', vip: false },
    { id: 'B4', name: '-', type: '-', status: 'Boş', owner: '-', entry: '-', duration: '-', vip: false },
    { id: 'C1', name: 'Marina Star', type: 'Yelkenli', status: 'Dolu', owner: 'Cem D.', entry: '09:00', duration: '4 gün', vip: false },
    { id: 'C2', name: '-', type: '-', status: 'Boş', owner: '-', entry: '-', duration: '-', vip: false },
    { id: 'C3', name: 'Blue Horizon', type: 'Yat', status: 'Dolu', owner: 'Elif S.', entry: '11:20', duration: '7 gün', vip: true },
    { id: 'C4', name: 'Sea Spirit', type: 'Motoryat', status: 'Dolu', owner: 'Burak M.', entry: '13:45', duration: '1 gün', vip: false },
    { id: 'C5', name: '-', type: '-', status: 'Boş', owner: '-', entry: '-', duration: '-', vip: false },
    { id: 'D1', name: 'Golden Wave', type: 'Yat', status: 'Dolu', owner: 'Deniz T.', entry: '07:30', duration: '10 gün', vip: true },
    { id: 'D2', name: '-', type: '-', status: 'Boş', owner: '-', entry: '-', duration: '-', vip: false },
    { id: 'D3', name: 'Wind Dancer', type: 'Yelkenli', status: 'Dolu', owner: 'Ayşe P.', entry: '15:10', duration: '2 gün', vip: false },
    { id: 'D4', name: '-', type: '-', status: 'Boş', owner: '-', entry: '-', duration: '-', vip: false },
  ];

  const stats = [
    { label: 'Toplam Kapasite', value: 200, icon: Anchor, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { label: 'Dolu Ponton', value: 142, icon: Ship, color: 'text-green-400', bg: 'bg-green-500/20' },
    { label: 'Boş Ponton', value: 58, icon: MapPin, color: 'text-slate-400', bg: 'bg-slate-500/20' },
    { label: 'VIP Tekneler', value: 24, icon: AlertCircle, color: 'text-amber-400', bg: 'bg-amber-500/20' },
  ];

  const pontonSections = ['A', 'B', 'C', 'D'];

  const sectionSummary = pontonSections.map((section) => {
    const sectionVessels = vessels.filter((v) => v.id.startsWith(section));
    const dolu = sectionVessels.filter((v) => v.status === 'Dolu').length;
    const bos = sectionVessels.filter((v) => v.status === 'Boş').length;
    const vip = sectionVessels.filter((v) => v.vip).length;
    return { section, toplam: sectionVessels.length, dolu, bos, vip };
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Anchor className="w-8 h-8 mr-3 text-cyan-400" />
          Tekne & Ponton Yönetimi
        </h1>
        <p className="text-slate-400">Gerçek zamanlı bağlama yeri takip ve tekne sınıflandırma sistemi</p>
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
            <div className="flex items-center justify-between mb-2">
              <div className={`${stat.bg} p-2 rounded-lg`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className={`text-2xl font-bold ${stat.color}`}><AnimatedNumber value={stat.value} /></p>
            </div>
            <p className="text-slate-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
            Ponton Haritası
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {pontonSections.map((section) => (
              <div key={section} className="space-y-2">
                <div className="text-center text-slate-400 font-bold text-sm mb-2 bg-slate-800/50 py-1 rounded">
                  Bölge {section}
                </div>
                {vessels
                  .filter((v) => v.id.startsWith(section))
                  .map((vessel) => (
                    <motion.div
                      key={vessel.id}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedPonton(vessel.id)}
                      className={`cursor-pointer p-3 rounded-lg border-2 transition-all ${
                        vessel.status === 'Dolu'
                          ? vessel.vip
                            ? 'bg-amber-500/20 border-amber-500/50 hover:border-amber-400'
                            : 'bg-green-500/20 border-green-500/50 hover:border-green-400'
                          : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600'
                      } ${selectedPonton === vessel.id ? 'ring-2 ring-cyan-500' : ''}`}
                    >
                      <div className="text-center">
                        <p className="text-white font-bold text-sm">{vessel.id}</p>
                        {vessel.status === 'Dolu' && vessel.vip && (
                          <div className="mt-1 bg-amber-500 text-white text-xs px-1 py-0.5 rounded">VIP</div>
                        )}
                        {vessel.status === 'Dolu' && !vessel.vip && (
                          <div className="mt-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">DOLU</div>
                        )}
                        {vessel.status === 'Boş' && (
                          <div className="mt-1 bg-slate-600 text-slate-300 text-xs px-1 py-0.5 rounded">BOŞ</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            Ponton Detayı
          </h2>
          {selectedPonton ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {(() => {
                const vessel = vessels.find((v) => v.id === selectedPonton);
                return vessel ? (
                  <>
                    <div className="flex items-center justify-between gap-2 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                      <div>
                        <p className="text-slate-400 text-xs mb-0.5">Ponton</p>
                        <p className="text-white font-bold text-lg">{vessel.id}</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                        vessel.status === 'Dolu'
                          ? vessel.vip
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            : 'bg-green-500/20 text-green-400 border border-green-500/40'
                          : 'bg-slate-600/30 text-slate-400 border border-slate-600'
                      }`}>
                        {vessel.status === 'Dolu' ? (vessel.vip ? 'VIP' : 'Dolu') : 'Boş'}
                      </span>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs mb-1 flex items-center gap-1"><Ship className="w-3.5 h-3.5" /> Tekne Adı</p>
                      <p className="text-white font-semibold">{vessel.name}</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs mb-1">Tekne Tipi</p>
                      <p className="text-cyan-400">{vessel.type}</p>
                    </div>
                    {vessel.status === 'Dolu' && (
                      <>
                        <div className="bg-slate-800/50 rounded-lg p-3">
                          <p className="text-slate-400 text-xs mb-1 flex items-center gap-1"><User className="w-3.5 h-3.5" /> Tekne Sahibi</p>
                          <p className="text-white">{vessel.owner}</p>
                          {vessel.vip && (
                            <span className="inline-block mt-1.5 bg-amber-500 text-white text-xs px-2 py-0.5 rounded">VIP Müşteri</span>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-800/50 rounded-lg p-3">
                            <p className="text-slate-400 text-xs mb-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Giriş</p>
                            <p className="text-white font-mono text-sm">{vessel.entry}</p>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-3">
                            <p className="text-slate-400 text-xs mb-1 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Süre</p>
                            <p className="text-cyan-400 text-sm">{vessel.duration}</p>
                          </div>
                        </div>
                      </>
                    )}
                    {vessel.status === 'Boş' && (
                      <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/50">
                        <p className="text-slate-400 text-xs flex items-center gap-1"><Info className="w-3.5 h-3.5" /> Bu ponton şu an müsait. Yeni tekne ataması yapılabilir.</p>
                      </div>
                    )}
                  </>
                ) : null;
              })()}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <p className="text-slate-400 text-sm">Haritadan bir ponton seçerek tekne ve sahip bilgilerini görüntüleyin.</p>
              <div className="space-y-2">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Bölge Özeti</p>
                {sectionSummary.map((s) => (
                  <div
                    key={s.section}
                    className="flex items-center justify-between bg-slate-800/50 rounded-lg px-3 py-2.5 border border-slate-700/50"
                  >
                    <span className="text-white font-medium">Bölge {s.section}</span>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-green-400">{s.dolu} dolu</span>
                      <span className="text-slate-500">{s.bos} boş</span>
                      {s.vip > 0 && <span className="text-amber-400">{s.vip} VIP</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-800">
                <p className="text-slate-500 text-xs">Sol haritada renkler: <span className="text-amber-400">VIP</span> · <span className="text-green-400">Dolu</span> · <span className="text-slate-500">Boş</span></p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Tüm Tekneler</h2>
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Tekne ara..."
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
                  Ponton ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Tekne Adı
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Tip
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Sahip
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Giriş Saati
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Süre
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {vessels.map((vessel, index) => (
                <motion.tr
                  key={vessel.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.01 }}
                  className="hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-cyan-400 font-bold">{vessel.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white font-medium">{vessel.name}</span>
                    {vessel.vip && (
                      <span className="ml-2 bg-amber-500 text-white text-xs px-2 py-0.5 rounded">VIP</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-300">{vessel.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        vessel.status === 'Dolu'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                      }`}
                    >
                      {vessel.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-300">{vessel.owner}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-400 font-mono text-sm">{vessel.entry}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-slate-400">{vessel.duration}</span>
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
