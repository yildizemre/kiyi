import { motion } from 'framer-motion';
import { Car, UserX, Flame, ShieldCheck } from 'lucide-react';

export default function RulesAlarms() {
  const vehicleEntries = [
    { time: '08:15', plate: '34 ABC 123', gate: 'Ana Giriş', type: 'Araç', status: 'İzinli', statusColor: 'text-green-400' },
    { time: '09:42', plate: '06 XYZ 789', gate: 'Servis Kapısı', type: 'Ticari', status: 'İzinli', statusColor: 'text-green-400' },
    { time: '10:30', plate: '35 DEF 456', gate: 'Ana Giriş', type: 'Araç', status: 'İzinli', statusColor: 'text-green-400' },
    { time: '12:05', plate: '41 GHI 012', gate: 'Ana Giriş', type: 'Araç', status: 'Kayıtlı değil', statusColor: 'text-amber-400' },
    { time: '14:20', plate: '34 JKL 345', gate: 'Servis Kapısı', type: 'Ticari', status: 'İzinli', statusColor: 'text-green-400' },
  ];

  const unauthorizedDetections = [
    { time: '23:45', zone: 'Ponton B', detail: 'İnsan algılandı – yetkisiz saat', severity: 'Yüksek', severityColor: 'bg-red-500/20 text-red-400 border-red-500/40' },
    { time: '00:12', zone: 'Teknik Bölge', detail: 'Hareket algılandı', severity: 'Orta', severityColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40' },
    { time: '01:30', zone: 'İskele A', detail: 'İnsan algılandı – yetkisiz saat', severity: 'Yüksek', severityColor: 'bg-red-500/20 text-red-400 border-red-500/40' },
    { time: '05:15', zone: 'Otopark', detail: 'Araç girişi – kapalı saat', severity: 'Orta', severityColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40' },
  ];

  const fireAlarms = [
    { time: '11:22', zone: 'Restaurant Mutfak', type: 'Duman algılama', level: 'Düşük', status: 'İnceleme tamamlandı – buhar', statusColor: 'text-green-400' },
    { time: '09:10', zone: 'Teknik Merkez', type: 'Alev sensörü', level: 'Normal', status: 'Test tetiklemesi', statusColor: 'text-slate-400' },
    { time: '2024-02-18 15:45', zone: 'Ponton C', type: 'Duman', level: 'Yüksek', status: 'Söndürüldü – yangın söndürücü', statusColor: 'text-amber-400' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-cyan-400" />
          Kurallar & Alarmlar
        </h1>
        <p className="text-slate-400">Araç giriş kuralları, yetkisiz erişim ve duman/alev alarm yönetimi</p>
      </div>

      <div className="space-y-6">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden"
        >
          <div className="px-4 sm:px-6 py-4 border-b border-slate-800 flex items-center gap-3 bg-slate-800/30">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Car className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Belli Saatlerde Araç Giriş Bilgisi</h2>
              <p className="text-slate-400 text-sm">İzinli saatler: 07:00 – 22:00. Dışında giriş alarm üretir.</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead className="bg-slate-800/50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase">Saat</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase">Plaka</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase">Kapı</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase">Tip</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase">Durum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {vehicleEntries.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/30">
                    <td className="px-4 sm:px-6 py-3 text-slate-300 font-mono text-sm">{row.time}</td>
                    <td className="px-4 sm:px-6 py-3 text-white font-medium">{row.plate}</td>
                    <td className="px-4 sm:px-6 py-3 text-cyan-400 text-sm">{row.gate}</td>
                    <td className="px-4 sm:px-6 py-3 text-slate-300 text-sm">{row.type}</td>
                    <td className="px-4 sm:px-6 py-3"><span className={row.statusColor}>{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden"
        >
          <div className="px-4 sm:px-6 py-4 border-b border-slate-800 flex items-center gap-3 bg-slate-800/30">
            <div className="p-2 rounded-lg bg-amber-500/20">
              <UserX className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Belirli Saat Sonrası İnsan Algılama – Yetkisiz Giriş</h2>
              <p className="text-slate-400 text-sm">23:00 – 06:00 arası insan hareketi yetkisiz kabul edilir, alarm üretilir.</p>
            </div>
          </div>
          <div className="p-4 sm:p-6 space-y-3">
            {unauthorizedDetections.map((event, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700/50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 font-mono text-sm">{event.time}</span>
                  <span className="text-white font-medium">{event.zone}</span>
                  <span className="text-slate-400 text-sm">{event.detail}</span>
                </div>
                <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${event.severityColor}`}>
                  {event.severity}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden"
        >
          <div className="px-4 sm:px-6 py-4 border-b border-slate-800 flex items-center gap-3 bg-slate-800/30">
            <div className="p-2 rounded-lg bg-red-500/20">
              <Flame className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Duman ve Alev Algılama Alarm</h2>
              <p className="text-slate-400 text-sm">Tüm bölgelerde duman/alev sensörleri; alarm anında bildirim.</p>
            </div>
          </div>
          <div className="p-4 sm:p-6 space-y-3">
            {fireAlarms.map((event, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700/50"
              >
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-slate-400 font-mono text-xs">{event.time}</span>
                    <span className="text-white font-medium">{event.zone}</span>
                    <span className="text-cyan-400 text-sm">{event.type}</span>
                    <span className="text-slate-500 text-sm">({event.level})</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">{event.status}</p>
                </div>
                <span className={event.statusColor}>{event.status.includes('tamamlandı') || event.status.includes('Test') ? 'Kapalı' : 'Açık'}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

