import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AISimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AISimulatorModal({ isOpen, onClose }: AISimulatorModalProps) {
  const aiDetections = [
    {
      id: 1,
      label: 'FALL DETECTED',
      confidence: 98,
      color: 'border-red-500',
      bgColor: 'bg-red-500/20',
      textColor: 'text-red-400',
      boxes: [{ x: 30, y: 40, w: 25, h: 35 }]
    },
    {
      id: 2,
      label: 'VIP DETECTED: AHMET Y.',
      confidence: 99,
      color: 'border-amber-500',
      bgColor: 'bg-amber-500/20',
      textColor: 'text-amber-400',
      boxes: [{ x: 45, y: 30, w: 20, h: 40 }]
    },
    {
      id: 3,
      label: 'VESSEL DETECTED: YACHT-X',
      confidence: 96,
      color: 'border-blue-500',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-400',
      boxes: [{ x: 20, y: 35, w: 60, h: 40 }]
    },
    {
      id: 4,
      label: 'SAFETY VEST: OK',
      confidence: 94,
      color: 'border-green-500',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-400',
      boxes: [{ x: 40, y: 35, w: 20, h: 30 }]
    },
    {
      id: 5,
      label: 'UNAUTHORIZED ACCESS',
      confidence: 92,
      color: 'border-red-500',
      bgColor: 'bg-red-500/20',
      textColor: 'text-red-400',
      boxes: [{ x: 35, y: 25, w: 30, h: 50 }]
    },
    {
      id: 6,
      label: 'BLACKLIST PERSON',
      confidence: 97,
      color: 'border-red-500',
      bgColor: 'bg-red-500/20',
      textColor: 'text-red-400',
      boxes: [{ x: 42, y: 28, w: 18, h: 45 }]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 rounded-2xl border border-slate-700 w-full max-w-6xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center z-10">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
                  CANLI YAPAY ZEKÂ ANALİZ SİMÜLATÖRÜ
                </h2>
                <p className="text-slate-400 mt-1">Gerçek zamanlı yapay zekâ görüntü analizi ve algılama sistemi</p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiDetections.map((detection, index) => (
                  <motion.div
                    key={detection.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all"
                  >
                    <div className="relative aspect-video bg-slate-900">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                        <div className="absolute inset-0 opacity-20">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <rect x="10" y="10" width="80" height="80" fill="#1e293b" />
                          </svg>
                        </div>
                      </div>

                      {detection.boxes.map((box, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + idx * 0.1, repeat: Infinity, repeatDelay: 2 }}
                          className={`absolute border-2 ${detection.color} ${detection.bgColor}`}
                          style={{
                            left: `${box.x}%`,
                            top: `${box.y}%`,
                            width: `${box.w}%`,
                            height: `${box.h}%`,
                          }}
                        >
                          <div className={`absolute -top-6 left-0 ${detection.bgColor} ${detection.textColor} px-2 py-1 rounded text-xs font-bold whitespace-nowrap border ${detection.color}`}>
                            {detection.confidence}%
                          </div>
                        </motion.div>
                      ))}

                      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse mr-1"></div>
                        CANLI
                      </div>
                    </div>

                    <div className="p-4">
                      <p className={`font-bold text-sm ${detection.textColor} mb-2`}>
                        {detection.label}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Güven: {detection.confidence}%</span>
                        <span>Kamera {detection.id}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <p className="text-sm text-slate-300">
                  <span className="font-bold text-cyan-400">Not:</span> Bu simülatör, sistemin gerçek zamanlı AI algılama yeteneklerini göstermektedir.
                  Tüm algılamalar anlık olarak kaydedilir ve ilgili departmanlara otomatik bildirim gönderilir.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
