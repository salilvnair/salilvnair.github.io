import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, Play } from 'lucide-react';
import DemoModal from './DemoModal';

export default function ProjectCard({ project, index }) {
  const { title, subtitle, description, github, tech, highlights, color, colorDim, badge, version, demoUrl } = project;
  const [showDemo, setShowDemo] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--spot-x', '50%');
    card.style.setProperty('--spot-y', '50%');
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col rounded-2xl bg-th-card border border-th-border overflow-hidden shadow-card transition-all duration-300 cursor-default"
        style={{
          '--spot-x': '50%',
          '--spot-y': '50%',
          '--accent': color,
          '--accent-dim': colorDim,
        }}
      >
        {/* Torch spotlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(320px circle at var(--spot-x) var(--spot-y), ${color}22 0%, ${color}10 30%, transparent 70%)`,
          }}
        />

        {/* Shimmering border glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(200px circle at var(--spot-x) var(--spot-y), ${color}40 0%, transparent 60%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1px',
            borderRadius: '1rem',
          }}
        />

        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{ background: `radial-gradient(60% 100% at var(--spot-x) 0%, ${color}cc, transparent)` }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1 p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="font-bold text-th-hi text-base leading-tight">{title}</h3>
                {badge && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                    style={{ color, borderColor: color, background: colorDim }}>
                    {badge}
                  </span>
                )}
                {version && (
                  <span className="text-[10px] font-mono text-th-faint">{version}</span>
                )}
              </div>
              <p className="text-xs text-th-lo font-medium">{subtitle}</p>
            </div>
            <a href={github} target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 p-2 rounded-xl text-th-lo dark:hover:text-white hover:text-slate-900 dark:hover:bg-white/5 hover:bg-slate-100 transition-all"
              title="View on GitHub">
              <Github size={16} />
            </a>
          </div>

          {/* Description */}
          <p className="text-sm dark:text-slate-400 text-slate-500 leading-relaxed mb-4 flex-1">{description}</p>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <ul className="space-y-1.5 mb-4">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color }} />
                  <span className="text-[12px] dark:text-slate-400 text-slate-500 leading-snug">{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Footer */}
          <div className="pt-3 border-t border-th-border mt-auto space-y-3">
            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {tech.slice(0, 4).map((t) => (
                <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-500 dark:border-white/5 border-slate-200 border">
                  {t}
                </span>
              ))}
              {tech.length > 4 && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md dark:bg-white/5 bg-slate-100 dark:text-slate-500 text-slate-400">
                  +{tech.length - 4}
                </span>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              {demoUrl && (
                <button onClick={() => setShowDemo(true)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-white transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${color}cc, ${color}88)`,
                    border: `1px solid ${color}50`,
                    boxShadow: `0 0 12px ${color}30`,
                  }}>
                  <Play size={11} />
                  Live Demo
                </button>
              )}
              <a href={github} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-1.5 py-2 text-xs font-medium transition-all group/link dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:bg-white/5 bg-slate-100 dark:hover:bg-white/10 hover:bg-slate-200/60 dark:border-white/10 border-slate-200 border rounded-xl ${demoUrl ? 'px-3' : 'flex-1 justify-center'}`}>
                <Github size={12} />
                GitHub
                <ExternalLink size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {showDemo && demoUrl && (
        <DemoModal project={project} onClose={() => setShowDemo(false)} />
      )}
    </>
  );
}
