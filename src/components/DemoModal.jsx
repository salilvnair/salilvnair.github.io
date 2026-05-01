import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Loader2 } from 'lucide-react';

export default function DemoModal({ project, onClose }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex flex-col"
        style={{ background: 'var(--modal-bg)', backdropFilter: 'blur(12px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex flex-col w-full h-full max-w-7xl mx-auto px-4 py-4 md:py-6"
        >
          {/* Modal header */}
          <div className="flex items-center justify-between mb-3 flex-shrink-0">
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: project.color, boxShadow: `0 0 8px ${project.color}` }}
              />
              <div>
                <h2 className="font-bold text-th-hi text-base leading-tight">{project.title}</h2>
                <p className="text-xs text-th-faint font-mono mt-0.5 truncate max-w-[280px] md:max-w-none">
                  {project.demoUrl}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:bg-white/5 bg-slate-100 dark:hover:bg-white/10 hover:bg-slate-200 dark:border-white/10 border-slate-200 border transition-all"
              >
                <ExternalLink size={12} />
                Open in new tab
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-lg dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 dark:hover:bg-white/10 hover:bg-slate-100 transition-all"
                title="Close (Esc)"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* iframe container */}
          <div className="relative flex-1 rounded-xl overflow-hidden border border-th-border bg-th-surface shadow-[0_0_60px_rgba(0,0,0,0.3)]">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 bg-th-surface">
                <Loader2 size={24} className="text-indigo-400 animate-spin" />
                <p className="text-sm text-th-lo">Loading {project.title}...</p>
              </div>
            )}
            <iframe
              src={project.demoUrl}
              title={`${project.title} live demo`}
              className="w-full h-full border-0"
              onLoad={() => setLoading(false)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          </div>

          {/* Footer hint */}
          <p className="mt-2 text-center text-[11px] text-th-faint flex-shrink-0">
            Press <kbd className="px-1.5 py-0.5 rounded dark:bg-white/5 bg-slate-100 dark:border-white/10 border-slate-200 border font-mono text-[10px]">Esc</kbd> or click outside to close
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
