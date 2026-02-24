import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Shield, AlertTriangle, Wrench, Activity, MapPin } from 'lucide-react';
import PontonDolulukModal from '../components/PontonDolulukModal';
import AnimatedNumber from '../components/AnimatedNumber';

interface LiveEvent {
  id: number;
  time: string;
  type: string;
  message: string;
  severity: 'success' | 'warning' | 'error';
}

export default function Dashboard() {
  const [showPontonModal, setShowPontonModal] = useState(false);
  const [liveEvents, setLiveEvents] = useState<LiveEvent[]>([
    { id: 1, time: '14:23', type: 'VIP', message: 'VIP Algılandı: Mehmet B. - Batı Giriş', severity: 'success' },
    { id: 2, time: '14:21', type: 'Tekne', message: 'Yeni Tekne Girişi: Ponton C-12', severity: 'success' },
    { id: 3, time: '14:19', type: 'İSG', message: 'Can Yeleği Kontrolü Başarılı - Personel: Ali K.', severity: 'success' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent: LiveEvent = {
        id: Date.now(),
        time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        type: ['VIP', 'Tekne', 'İSG', 'Güvenlik'][Math.floor(Math.random() * 4)],
        message: [
          'Düzenli Devriye Tamamlandı - Bölge A',
          'Tekne Hareketi Algılandı - Ponton B',
          'Çöp Kutusu Doluluk Kontrolü - %45',
          'Yüz Tanıma Başarılı - Personel Girişi'
        ][Math.floor(Math.random() * 4)],
        severity: 'success'
      };
      setLiveEvents(prev => [newEvent, ...prev].slice(0, 10));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: 'Toplam Tekne',
      value: 142,
      suffix: '/200',
      icon: Anchor,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400'
    },
    {
      label: 'Anlık VIP Sayısı',
      value: 4,
      suffix: '',
      icon: Shield,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-400'
    },
    {
      label: 'Aktif İSG İhlali',
      value: 0,
      suffix: '',
      icon: AlertTriangle,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-400'
    },
    {
      label: 'Teknik Arıza',
      value: 2,
      suffix: '',
      icon: Wrench,
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-500/10',
      textColor: 'text-red-400'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Genel Bakış</h1>
          <p className="text-slate-400">Anlık durum, trafik ve analiz kontrol paneli</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPontonModal(true)}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 text-sm sm:text-base shrink-0"
        >
          <MapPin className="w-5 h-5" />
          <span>Ponton Doluluk</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
            </div>
            <p className="text-slate-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-cyan-400" />
              Sistem Özeti
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Toplam Kamera</p>
                <p className="text-2xl font-bold text-white"><AnimatedNumber value={24} /></p>
                <p className="text-xs text-green-400 mt-1">24 Aktif</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Günlük Algılama</p>
                <p className="text-2xl font-bold text-white"><AnimatedNumber value={1847} formatThousands /></p>
                <p className="text-xs text-cyan-400 mt-1">+12% Önceki güne göre</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Aktif Personel</p>
                <p className="text-2xl font-bold text-white"><AnimatedNumber value={18} /></p>
                <p className="text-xs text-blue-400 mt-1">2 Vardiya</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-2">Sistem Uptime</p>
                <p className="text-2xl font-bold text-white"><AnimatedNumber value={99.8} suffix="%" decimals={1} /></p>
                <p className="text-xs text-green-400 mt-1">Son 30 gün</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
            LIVE STATUS
          </h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            <AnimatePresence>
              {liveEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-slate-800/50 rounded-lg p-3 border-l-4 border-cyan-500"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-xs text-slate-400 mb-1">{event.time} - {event.type}</p>
                      <p className="text-sm text-white">{event.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Günlük Trafik Özeti</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Kapı giriş/çıkış</span>
              <span className="text-white font-semibold"><AnimatedNumber value={2847} formatThousands /></span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Ortalama kalış süresi</span>
              <span className="text-cyan-400 font-semibold">2.4 sa</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">En yoğun saat</span>
              <span className="text-amber-400 font-semibold">13:00–15:00</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-400">VIP giriş (bugün)</span>
              <span className="text-amber-400 font-semibold"><AnimatedNumber value={24} /></span>
            </div>
          </div>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Güvenlik & İSG Özeti</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Yüz tanıma eşleşme</span>
              <span className="text-green-400 font-semibold"><AnimatedNumber value={96.2} suffix="%" decimals={1} /></span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Aktif uyarı</span>
              <span className="text-red-400 font-semibold"><AnimatedNumber value={3} /></span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Personel İSG uyumu</span>
              <span className="text-green-400 font-semibold"><AnimatedNumber value={94} suffix="%" /></span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-400">Bakım planlı varlık</span>
              <span className="text-amber-400 font-semibold"><AnimatedNumber value={12} /></span>
            </div>
          </div>
        </div>
      </div>

      <PontonDolulukModal isOpen={showPontonModal} onClose={() => setShowPontonModal(false)} />
    </div>
  );
}
