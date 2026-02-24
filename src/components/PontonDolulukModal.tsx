import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PontonDolulukModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function formatReportDate(date: Date) {
  return date.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default function PontonDolulukModal({ isOpen, onClose }: PontonDolulukModalProps) {
  const reportDate = formatReportDate(new Date());

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
            className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-w-2xl w-full"
          >
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-white">Ponton Doluluk Raporu</h2>
                <p className="text-cyan-100 text-sm mt-0.5">{reportDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-green-500/30 text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-green-400/50">
                  Güncel
                </span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/20 text-white transition-colors"
                  aria-label="Kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <img
                src="/slot.png"
                alt="Ponton Doluluk"
                className="w-full h-auto rounded-lg border border-slate-700"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
