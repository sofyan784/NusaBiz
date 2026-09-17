import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastItem {
  id: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  title?: string;
  message: string;
}

export interface ToastNotificationProps {
  // Single toast mode
  isOpen?: boolean;
  title?: string;
  message?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  onClose?: () => void;

  // Multi toast mode (optional backward-compatibility)
  toasts?: ToastItem[];
  onDismiss?: (id: string) => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  isOpen = false,
  title,
  message,
  type = 'success',
  onClose,
  toasts,
  onDismiss
}) => {
  // Auto-dismiss single toast after 4.5 seconds
  useEffect(() => {
    if (isOpen && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  // If multi-toast array is provided and not empty, render multi-toast list
  if (toasts && Array.isArray(toasts) && toasts.length > 0) {
    return (
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-md w-full px-4 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto bg-white border border-slate-200 shadow-xl rounded-2xl p-4 flex items-start gap-3 relative overflow-hidden"
            >
              <div
                className={`mt-0.5 shrink-0 ${
                  t.type === 'warning'
                    ? 'text-amber-500'
                    : t.type === 'info'
                    ? 'text-blue-600'
                    : t.type === 'error'
                    ? 'text-rose-600'
                    : 'text-emerald-500'
                }`}
              >
                {t.type === 'warning' || t.type === 'error' ? (
                  <AlertCircle className="w-5 h-5" />
                ) : t.type === 'info' ? (
                  <Info className="w-5 h-5" />
                ) : (
                  <CheckCircle2 className="w-5 h-5" />
                )}
              </div>

              <div className="flex-1 pr-6">
                {t.title && (
                  <h4 className="text-sm font-bold text-slate-800 leading-snug">{t.title}</h4>
                )}
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{t.message}</p>
              </div>

              {onDismiss && (
                <button
                  onClick={() => onDismiss(t.id)}
                  className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
                  aria-label="Tutup notifikasi"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${
                  t.type === 'warning'
                    ? 'bg-amber-500'
                    : t.type === 'info'
                    ? 'bg-blue-600'
                    : t.type === 'error'
                    ? 'bg-rose-500'
                    : 'bg-emerald-500'
                }`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  // Single toast mode
  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-md w-full px-4 pointer-events-none">
      <AnimatePresence>
        {isOpen && message && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto bg-white border border-slate-200 shadow-xl rounded-2xl p-4 flex items-start gap-3 relative overflow-hidden"
          >
            <div
              className={`mt-0.5 shrink-0 ${
                type === 'warning'
                  ? 'text-amber-500'
                  : type === 'info'
                  ? 'text-blue-600'
                  : type === 'error'
                  ? 'text-rose-600'
                  : 'text-emerald-500'
              }`}
            >
              {type === 'warning' || type === 'error' ? (
                <AlertCircle className="w-5 h-5" />
              ) : type === 'info' ? (
                <Info className="w-5 h-5" />
              ) : (
                <CheckCircle2 className="w-5 h-5" />
              )}
            </div>

            <div className="flex-1 pr-6">
              {title ? (
                <h4 className="text-sm font-bold text-slate-800 leading-snug">{title}</h4>
              ) : (
                <h4 className="text-sm font-bold text-slate-800 leading-snug">
                  {type === 'info' ? 'Informasi' : type === 'warning' ? 'Perhatian' : 'Berhasil'}
                </h4>
              )}
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{message}</p>
            </div>

            {onClose && (
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors"
                aria-label="Tutup notifikasi"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 ${
                type === 'warning'
                  ? 'bg-amber-500'
                  : type === 'info'
                  ? 'bg-blue-600'
                  : type === 'error'
                  ? 'bg-rose-500'
                  : 'bg-emerald-500'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
